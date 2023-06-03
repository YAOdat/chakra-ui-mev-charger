import './App.css';
import { Helmet } from 'react-helmet';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultiStep from './components/Multistep';
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Products from './components/Products';
import About from './components/About';
import GBT from './components/GBT';
import Type1 from './components/Type1';
import Type2 from './components/Type2';
import Tesla from './components/Tesla';
import Adapters from './components/Adapters';
import ProductPage from './components/ProductPage';
import BlogPost from './components/BlogPost';
import Blog from './components/Blog';
import NotFound from './components/404';

function App() {
  
  return (
    <BrowserRouter>
      <Fragment>
        <Helmet>
          <title>MEV Charger - Electric Vehicle Chargers</title>
          <meta
            name="description"
            content="MEV Charger is a leading company specializing in the sale of electric vehicle (EV) chargers and EV products. We offer reliable and efficient charging infrastructure to support the global transition towards electric mobility."
          />
        </Helmet>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - Shop</title>
                  <meta
                    name="description"
                    content="Explore our wide range of electric vehicle chargers and accessories. Find the perfect charging solution for your electric vehicle at MEV Charger."
                  />
                </Helmet>
                <Products />
              </Fragment>
            }
          />
          <Route
            path="/products"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - All Products</title>
                  <meta
                    name="description"
                    content="Browse our selection of electric vehicle chargers and accessories. MEV Charger offers reliable and efficient charging solutions for all types of electric vehicles."
                  />
                </Helmet>
                <Products />
              </Fragment>
            }
          />
          <Route
            path="/products/chargers"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - Chargers</title>
                  <meta
                    name="description"
                    content="Discover our range of electric vehicle chargers. MEV Charger provides fast and safe charging solutions for various electric vehicle models."
                  />
                </Helmet>
                <Products />
              </Fragment>
            }
          />
          <Route path="/pick" element={<MultiStep />} />
          <Route
            path="/gbt-chargers"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - GBT Chargers</title>
                  <meta
                    name="description"
                    content="Explore our selection of GBT electric vehicle chargers. MEV Charger offers reliable and high-performance charging solutions for GBT compatible electric vehicles."
                  />
                </Helmet>
                <Products />
              </Fragment>
            }
          />
          <Route
            path="/products/GBT"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - GBT Chargers</title>
                  <meta
                    name="description"
                    content="Discover our range of GBT electric vehicle chargers. MEV Charger provides fast and safe charging solutions for GBT compatible electric vehicles."
                  />
                </Helmet>
                <GBT />
              </Fragment>
            }
          />
          <Route
            path="/products/type2"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - Type 2 Chargers</title>
                  <meta
                    name="description"
                    content="Explore our selection of Type 2 electric vehicle chargers. MEV Charger offers reliable and high-performance charging solutions for Type 2 compatible electric vehicles."
                  />
                </Helmet>
                <Type2 />
              </Fragment>
            }
          />
          <Route
            path="/products/type1"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - Type 1 Chargers</title>
                  <meta
                    name="description"
                    content="Discover our range of Type 1 electric vehicle chargers. MEV Charger provides fast and safe charging solutions for Type 1 compatible electric vehicles."
                  />
                </Helmet>
                <Type1 />
              </Fragment>
            }
          />
          <Route
            path="/products/tesla_charger"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - Tesla Chargers</title>
                  <meta
                    name="description"
                    content="Explore our selection of Tesla electric vehicle chargers. MEV Charger offers reliable and high-performance charging solutions for Tesla electric vehicles."
                  />
                </Helmet>
                <Tesla />
              </Fragment>
            }
          />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route
            path="/about"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - About Us</title>
                  <meta
                    name="description"
                    content="Learn about MEV Charger, a leading company specializing in the sale of electric vehicle (EV) chargers and EV products. We are dedicated to promoting sustainable transportation solutions and supporting the global transition towards electric mobility."
                  />
                </Helmet>
                <About />
              </Fragment>
            }
          />
          <Route
            path="/products/adapters"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - Adapters</title>
                  <meta
                    name="description"
                    content="Discover our range of electric vehicle adapters. MEV Charger provides high-quality adapters to ensure compatibility with different charging standards and connectors."
                  />
                </Helmet>
                <Adapters />
              </Fragment>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/the-best-places-to-buy-ev-chargers-in-dubai" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsApp
        phoneNumber="97150167410"
        accountName="MEV Charger"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;