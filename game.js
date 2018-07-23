const player = function (piece, name, color) {
    this.cell = 0;
    this.name = name;
    this.piece = piece;
    this.color = color;
    this.money = 1500;
    this.inJail = false;
    this.property = [];
    this.getOutOfJail = 0;
    this.turn = 0;
    this.position = 0;
}


const game = () => {

  this.cells = [

    {
        name: 'Go',
        cost: null,
        owned: null,
        desc: 'collect $200',
        get: 200,
        img: 'https://preview.ibb.co/catK6x/go.jpg'
    },

    {
        name: 'Mediteranean Avenue',
        price: 60,
        rental: [2, 10, 30, 90, 160, 250],
        color: "brown",
        housePrice: 50,
        type: "property",
        owned: false
    },

    {
        name: 'Community Chest',
        cost: null,
        owned: false,
        desc: 'collect the card',
        img: "https://preview.ibb.co/catK6x/go.jpg"     
    },

    {
        name: 'Baltic Avenue',
        price: 60,
        rental: [4, 20, 60, 180, 360, 450],
        color: "brown",
        housePrice: 50,
        type: "property",
        owned: false
    },
    {
        name: 'Income Tax',
        type: "tax",
        amount: 200
    },
    {
        name: 'Reading Railroad',
        price: 200,
        rental: [25, 50, 100, 200],
        type: "station",
        owned: false

    },
    {
        name: 'Oriental Avenue',
        owned: false,
        price: 100,
        rental: [6, 30, 90, 270, 400, 550],
        color: "lightBlue",
        housePrice: 50,
        type: "property"
    },
    {
        name: 'Chance',
        cost: null,
        owned: false,
        desc: 'chance',
    },
    {
        name: 'Vermont Avenue',
        price: 100,
        rental: [6, 30, 90, 270, 400, 550],
        color: "lightBlue",
        housePrice: 50,
        type: "property",
        owned: false,
        desc: 'vermont',
    },
    {
        name: 'Connecticut Avenue',
        price: 120,
        rental: [8, 40, 100, 300, 450, 600],
        color: "lightBlue",
        housePrice: 50,
        type: "property",
        owned: false,
        desc: 'connecticut',
    },
    {
        name: 'Jail',
        cost: null,
        owned: false,
        desc: 'jail',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'St Charles Place',
        cost: 140,
        owned: false,
        desc: 'vermont',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Electric Company',
        cost: 150,
        owned: false,
        desc: 'vermont',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'States Avenue',
        cost: 140,
        owned: false,
        desc: 'states',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Virginia Avenue',
        cost: 160,
        owned: false,
        desc: 'vermont',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Pennsylvania Railroad',
        cost: 200,
        owned: false,
        desc: 'railroad',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'St James Avenue',
        cost: 180,
        owned: false,
        desc: 'st james',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Community Chest',
        cost: false,
        desc: 'community chest',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Tennessee Avenue',
        cost: 180,
        owned: false,
        desc: 'tennessee',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'New York Avenue',
        cost: 200,
        owned: false,
        desc: 'new york',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Free Parking',
        desc: 'parking',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Kentucky Avenue',
        cost: 220,
        owned: false,
        desc: 'kentucky',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Chance',
        desc: 'chance',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Indiana Avenue',
        cost: 220,
        owned: false,
        desc: 'indiana',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Ilinois Avenue',
        cost: 200,
        owned: false,
        desc: 'vermont',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'B & O Railroad',
        cost: 200,
        owned: false,
        desc: 'railroad',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Atlantic Avenue',
        cost: 260,
        owned: false,
        desc: 'atlantic',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Ventnor Avenue',
        cost: 260,
        owned: false,
        desc: 'ventnor',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Waterworks',
        cost: 120,
        owned: false,
        desc: 'waterworks',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Marvin Gardens',
        cost: 280,
        owned: false,
        desc: 'marvin gardens',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Jail',
        desc: 'jail',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Pacific Avenue',
        cost: 300,
        owned: false,
        desc: 'pacific',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'North Carolina Avenue',
        cost: 300,
        owned: false,
        desc: 'north carolina',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Community Chest',
        desc: 'community chest',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Penssylvania Avenue',
        cost: 320,
        owned: false,
        desc: 'pennsylvania',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Short Line',
        cost: 200,
        owned: false,
        desc: 'short line',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Chance',
        desc: 'chance',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Park Place',
        cost: 350,
        owned: false,
        desc: 'park place',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Luxury Tax',
        pay: 75,
        desc: 'pay the $70 tax',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'BoardWalk',
        cost: 400,
        owned: false,
        desc: 'boardwalk',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },

]


    let die1 = 0;
    let die2 = 0;
    let areDicesRolled = false;

    this.rollDice = () => {
        die1 = Math.floor( Math.random() * 6 ) + 1;
        die2 = Math.floor( Math.random() * 6 ) + 1;
    }

    this.buyProperty = (cell, player) => {
        if ( !cell.owned && player.money >= cell.cost ) {
            cell.owned = true;
            player.money - cell.cost;
            player.property.push( cell.name )
        }
    }

}
export { player }