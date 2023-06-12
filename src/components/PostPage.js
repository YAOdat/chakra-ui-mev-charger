import React, { useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur';
import SimplexNoise from 'simplex-noise';
import hsl from 'hsl-to-hex';
import debounce from 'debounce';

function OrbCanvas() {
  const [app, setApp] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    // Create PixiJS app
    const pixiApp = new PIXI.Application({
      // render to <canvas class="orb-canvas"></canvas>
      view: document.querySelector('.orb-canvas'),
      // auto adjust size to fit the current window
      resizeTo: window,
      // transparent background, we will be creating a gradient background later using CSS
      transparent: true,
    });

    pixiApp.stage.filters = [new KawaseBlurFilter(30, 10, true)];

    // Create color palette
    const colorPaletteInstance = new ColorPalette();
    setColorPalette(colorPaletteInstance);

    // Create orbs
    const orbInstances = [];
    for (let i = 0; i < 10; i++) {
      const orb = new Orb(colorPaletteInstance.randomColor());
      pixiApp.stage.addChild(orb.graphics);
      orbInstances.push(orb);
    }
    setOrbs(orbInstances);

    // Animate!
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      pixiApp.ticker.add(() => {
        orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }

    // Clean up on unmount
    return () => {
      pixiApp.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const handleColorChange = () => {
    colorPalette.setColors();
    colorPalette.setCustomProperties();

    setOrbs((prevOrbs) => {
      const updatedOrbs = prevOrbs.map((orb) => {
        orb.fill = colorPalette.randomColor();
        return orb;
      });
      return updatedOrbs;
    });
  };

  return (
    <>
      <canvas className="orb-canvas"></canvas>
      <div className="overlay">
        <div className="overlay__inner">
          <h1 className="overlay__title">
            Hey, would you like to learn how to create a{' '}
            <span className="text-gradient">generative</span> UI just like this?
          </h1>
          <p className="overlay__description">
            In this tutorial we will be creating a generative “orb” animation
            using pixi.js, picking some lovely random colors and pulling it all
            together in a nice frosty UI.{' '}
            <strong>We're gonna talk accessibility, too.</strong>
          </p>
          <div className="overlay__btns">
            <button className="overlay__btn overlay__btn--transparent">
              <a
                href="https://georgefrancis.dev/writing/create-a-generative-landing-page-and-webgl-powered-background/"
                target="_blank"
              >
                View Tutorial
              </a>
            </button>
            <button
              className="overlay__btn overlay__btn--colors"
              onClick={handleColorChange}
            >
              <span>Randomise Colors</span>
              <span className="overlay__btn-emoji">🎨</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ColorPalette class
class ColorPalette {
  constructor() {
    this.setColors();
    this.setCustomProperties();
  }

  setColors() {
    // pick a random hue somewhere between 220 and 360
    this.hue = Math.floor(random(220, 360));
    this.complimentaryHue1 = this.hue + 30;
    this.complimentaryHue2 = this.hue + 60;
    // define a fixed saturation and lightness
    this.saturation = 95;
    this.lightness = 50;

    // define a base color
    this.baseColor = hsl(this.hue, this.saturation, this.lightness);
    // define a complimentary color, 30 degress away from the base
    this.complimentaryColor1 = hsl(
      this.complimentaryHue1,
      this.saturation,
      this.lightness
    );
    // define a second complimentary color, 60 degrees away from the base
    this.complimentaryColor2 = hsl(
      this.complimentaryHue2,
      this.saturation,
      this.lightness
    );

    // store the color choices in an array so that a random one can be picked later
    this.colorChoices = [
      this.baseColor,
      this.complimentaryColor1,
      this.complimentaryColor2,
    ];
  }

  randomColor() {
    // pick a random color
    return this.colorChoices[Math.floor(random(0, this.colorChoices.length))].replace('#', '0x');
  }

  setCustomProperties() {
    // set CSS custom properties so that the colors defined here can be used throughout the UI
    document.documentElement.style.setProperty('--hue', this.hue);
    document.documentElement.style.setProperty('--hue-complimentary1', this.complimentaryHue1);
    document.documentElement.style.setProperty('--hue-complimentary2', this.complimentaryHue2);
  }
}

// Orb class
class Orb {
  constructor(fill = 0x000000) {
    // bounds = the area an orb is "allowed" to move within
    this.bounds = this.setBounds();
    // initialise the orb's { x, y } values to a random point within it's bounds
    this.x = random(this.bounds.x.min, this.bounds.x.max);
    this.y = random(this.bounds.y.min, this.bounds.y.max);

    // how large the orb is vs it's original radius (this will modulate over time)
    this.scale = 1;

    // what color is the orb?
    this.fill = fill;

    // the original radius of the orb, set relative to window height
    this.radius = random(window.innerHeight / 6, window.innerHeight / 3);

    // starting points in "time" for the noise/self similar random values
    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    // how quickly the noise/self similar random values step through time
    this.inc = 0.002;

    // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
    this.graphics = new PIXI.Graphics();
    this.graphics.alpha = 0.825;

    // 250ms after the last window resize event, recalculate orb positions.
    window.addEventListener(
      'resize',
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  setBounds() {
    // how far from the { x, y } origin can each orb move
    const maxDist = window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
    // the { x, y } origin for each orb (the bottom right of the screen)
    const originX = window.innerWidth / 1.25;
    const originY = window.innerWidth < 1000 ? window.innerHeight : window.innerHeight / 1.375;

    // allow each orb to move x distance away from it's x / y origin
    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist,
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist,
      },
    };
  }

  update() {
    // self similar "psuedo-random" or noise values at a given point in "time"
    const xNoise = simplex.noise2D(this.xOff, this.xOff);
    const yNoise = simplex.noise2D(this.yOff, this.yOff);
    const scaleNoise = simplex.noise2D(this.xOff, this.yOff);

    // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds
    this.x = map(xNoise, -1, 1, this.bounds.x.min, this.bounds.x.max);
    this.y = map(yNoise, -1, 1, this.bounds.y.min, this.bounds.y.max);
    // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
    this.scale = map(scaleNoise, -1, 1, 0.5, 1);

    // step through "time"
    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  render() {
    // update the PIXI.Graphics position and scale values
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    // clear anything currently drawn to graphics
    this.graphics.clear();

    // tell graphics to fill any shapes drawn after this with the orb's fill color
    this.graphics.beginFill(this.fill);
    // draw a circle at { 0, 0 } with it's size set by this.radius
    this.graphics.drawCircle(0, 0, this.radius);
    // let graphics know we won't be filling in any more shapes
    this.graphics.endFill();
  }
}

// Main component
function BlogPost() {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    // Create PixiJS app
    const app = new PIXI.Application({
      // render to <canvas class="orb-canvas"></canvas>
      view: canvasRef.current,
      // auto adjust size to fit the current window
      resizeTo: window,
      // transparent background, we will be creating a gradient background later using CSS
      transparent: true,
    });

    app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

    // Create colour palette
    const colorPalette = new ColorPalette();

    // Create orbs
    const orbs = [];

    for (let i = 0; i < 10; i++) {
      const orb = new Orb(colorPalette.randomColor());

      app.stage.addChild(orb.graphics);

      orbs.push(orb);
    }

    // Animate!
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      app.ticker.add(() => {
        orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }

    // Clean up on unmount
    return () => {
      app.destroy();
    };
  }, []);

  const handleColorChange = () => {
    colorPalette.setColors();
    colorPalette.setCustomProperties();

    orbs.forEach((orb) => {
      orb.fill = colorPalette.randomColor();
    });
  };

  return (
    <>
      <canvas ref={canvasRef} className="orb-canvas"></canvas>
      <div className="overlay">
        <div className="overlay__inner">
          <h1 className="overlay__title">
            Hey, would you like to learn how to create a{' '}
            <span className="text-gradient">generative</span> UI just like this?
          </h1>
          <p className="overlay__description">
            In this tutorial we will be creating a generative “orb” animation
            using pixi.js, picking some lovely random colours and pulling it all
            together in a nice frosty UI.{' '}
            <strong>We're gonna talk accessibility, too.</strong>
          </p>
          <div className="overlay__btns">
            <button className="overlay__btn overlay__btn--transparent">
              <a
                href="https://georgefrancis.dev/writing/create-a-generative-landing-page-and-webgl-powered-background/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Tutorial
              </a>
            </button>
            <button className="overlay__btn overlay__btn--colors" onClick={handleColorChange}>
              <span>Randomise Colours</span>
              <span className="overlay__btn-emoji">🎨</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrbCanvas;
