const board  =  [
  {
    square: 0,
    name: "Go",
    type: "go"
  },{
    name: "MEDITERRANEAN AVENUE",
    square: 1,
    price: 60,
    rental: [2, 10, 30, 90, 160, 250],
    currentRental: 0,
    color: "brown",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "COMMUNITY CHEST",
    square: 2,
    type: "community"
  },{
    name: "BALTIC AVENUE",
    square: 3,
    price: 60,
    rental: [4, 20, 60, 180, 360, 450],
    currentRental: 0,
    color: "brown",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "INCOME TAX",
    square: 4,
    type: "tax",
    amount: 200
  },{
    name: "READING RAILROAD",
    square: 5,
    price: 200,
    rental: [25, 50, 100, 200],
    currentRental: 0,
    type: "property",
    owned: false
  },{
    name: "ORIENTAL AVENUE",
    square: 6,
    price: 100,
    rental: [6, 30, 90, 270, 400, 550],
    currentRental: 0,
    color: "lightBlue",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "Chance",
    square: 7,
    type: "chance"
  },{
    name: "VERMONT AVENUE",
    square: 8,
    price: 100,
    rental: [6, 30, 90, 270, 400, 550],
    currentRental: 0,
    color: "lightBlue",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "CONNECTICUT AVENUE",
    square: 9,
    price: 120,
    rental: [8, 40, 100, 300, 450, 600],
    currentRental: 0,
    color: "lightBlue",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "Jail",
    square: 10,
    type: "jail"
  },{
    name: "ST.CHARLES AVENUE",
    square: 11,
    price: 140,
    rental: [10, 50, 150, 450, 625, 750],
    currentRental: 0,
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "ELECTRIC COMPANY",
    square: 12,
    price: 150,
    rental: [100, 200],
    type: "utility",
    owned: false
  },{
    name: "STATES AVENUE",
    square: 13,
    price: 140,
    rental: [10, 50, 150, 450, 625, 750],
    currentRental: 0,
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "VIRGINIA AVENUE",
    square: 14,
    price: 160,
    rental: [12, 60, 180, 500, 700, 900],
    currentRental: 0,
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "PENNSYLVANIA RAILROAD",
    square: 15,
    price: 200,
    rental: [25, 50, 100, 200],
    currentRental: 0,
    type: "railroad",
    owned: false
  },{
    name: "ST.JAMES PLACE",
    square: 16,
    price: 180,
    rental: [14, 70, 200, 550, 750, 950],
    currentRental: 0,
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "COMMUNITY CHEST",
    square: 17,
    type: 'community'
  },{
    name: "TENESSEE AVENUE",
    square: 18,
    price: 180,
    rental: [14, 70, 200, 550, 750, 950],
    currentRental: 0,
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "NEW YORK AVENUE",
    square: 19,
    price: 200,
    rental: [16, 80, 220, 600, 800, 1000],
    currentRental: 0,
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "Free Parking",
    square: 20,
    type: 'parking',
  },{
    name: "KENTUCKY AVENUE",
    square: 21,
    price: 220,
    rental: [18, 90, 250, 700, 875, 1050],
    currentRental: 0,
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "Chance",
    type: 'chance'
  },{
    name: "INDIANA AVENUE",
    price: 220,
    rental: [18, 90, 250, 700, 875, 1050],
    currentRental: 0,
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "ILLINOIS AVENUE",
    price: 240,
    rental: [20, 100, 300, 750, 925, 1100],
    currentRental: 0,
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "B&O RAILROAD",
    price: 200,
    rental: [25, 50, 100, 200],
    currentRental: 0,
    type: "station",
    owned: false
  },{
    name: "ATLANTIC AVENUE",
    price: 260,
    rental: [22, 110, 330, 800, 975, 1150],
    currentRental: 0,
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "VENTNOR AVENUE",
    price: 260,
    rental: [22, 110, 330, 800, 975, 1150],
    currentRental: 0,
    color: "yellow",
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "WATER WORKS",
    price: 150,
    rental: [ 100, 200],
    currentRental: 0,
    type: "utility",
    owned: false
  },{
    name: "MARVIN GARDENS",
    price: 280,
    rental: [22, 120, 360, 850, 1025, 1200],
    currentRental: 0,
    color: "yellow",
    housePrice: 140,
    type: "property",
    owned: false
  },{
    name: "GO TO JAIL",
    type: 'jail',
  },{
    name: "PACIFIC AVENUE",
    price: 300,
    rental: [26, 130, 390, 900, 1100, 1275],
    currentRental: 0,
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "NORTH CAROLINA AVENUE",
    price: 300,
    rental: [26, 130, 390, 900, 1100, 1275],
    currentRental: 0,
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "Community Chest",
    type: 'chest',
  },{
    name: "PENNSYLVANIA AVENUE",
    price: 320,
    rental: [28, 150, 450, 1000, 1200, 1400],
    currentRental: 0,
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "SHORT LINE",
    price: 200,
    rental: [25, 50, 100, 200],
    currentRental: 0,
    type: "station",
    owned: false
  },{
    name: "Chance",
    type: 'chance',
  },{
    name: "PARK PLACE",
    price: 350,
    rental: [35, 175, 500, 1100, 1300, 1500],
    currentRental: 0,
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "Super Tax",
    type: "luxury-tax",
    amount: 100
  },{
    name: "BOARDWALK",
    price: 400,
    rental: [50, 200, 600, 1400, 1700, 2000],
    currentRental: 0,
    housePrice: 200,
    type: "property",
    owned: false
  }]