export const images = [
    {
      id: '01',
      src: 'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '02',
      src: 'https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '03',
      src: 'https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '04',
      src: 'https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '05',
      src: 'https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '06',
      src: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
      alt: 'Awesome watch',
    },
  ]
  export const products = [
    {
      id: '1',
      name: 'Wallbox EV Charger',
      currency: 'AED',
      price: 1800,
      flag: 'new',
      imageUrl: 'https://iili.io/Hr78TZb.md.webp',
      rating: 4,
      ratingCount: 19,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
      portType: 'type2',
      function: 'charger',
      portType2: 'none',
    },
    {
      id: '2',
      name: 'Portable EV Charger',
      currency: 'USD',
      price: 1100,
      salePrice: 900,
      flag: 'on-sale',
      imageUrl: 'https://iili.io/Hr78acB.md.png',
      rating: 5,
      ratingCount: 13,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
      portType: 'gbt',
      function: 'charger',
      portType2: 'none',
    },
    {
      id: '3',
      name: 'Type 1 to Type 2 EV Charger Extension Cable',
      currency: 'USD',
      price: 550,
      imageUrl: 'https://iili.io/Hr7856Q.md.png',
      rating: 4,
      ratingCount: 20,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
      portType: 'type1',
      function: 'extensionCable',
      portType2: 'type2',
    },
    {
      id: '4',
      name: 'Type 2 to Type 1 EV Adapter',
      currency: 'GBP',
      price: 350,
      imageUrl: 'https://iili.io/Hr78091.md.jpg',
      rating: 5,
      ratingCount: 4,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
      portType: 'type2',
      function: 'adapter',
      portType2: 'type1',
    },
    {
      id: '5',
      name: 'Type 1 to Tesla EV Adapter',
      price: 400,
      currency: 'GBP',
      imageUrl: 'https://iili.io/HrEn199.md.jpg',
      rating: 5,
      ratingCount: 4,
      description:
        'With this Tesla adapter, you get the best of both worlds. You can charge your Tesla from a Type 1 charging station, and you can charge your Type 1 EV from a Tesla charging station. This adapter is compatible with all Tesla models.',
      images,
      portType: 'tesla',
      function: 'adapter',
      portType2: 'type1',
    },
  ];
  
  export const vehicles = [
     {
        id: '1',
        brand: 'Tesla',
        relatedProducts: ['5'],
      
     },

        {
        id: '2',
        brand: 'Volkswagen',
        relatedProducts: ['1', '2', '3', '4'],
        },

        {
        id: '3',
        brand: 'Mercedes',
        relatedProducts: ['1', '2', '3', '4'],
        },

    ]
    
