const cells = [

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
        cost: 50,
        owned: false,
        desc: 'family restaurant',
        img: "https://preview.ibb.co/catK6x/go.jpg"
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
        cost: 50,
        owned: false,
        desc: 'another restaurant',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Income Tax',
        cost: null,
        owned: false,
        desc: 'pay 10% or $200',
        img: "https://preview.ibb.co/catK6x/go.jpg",
    },
    {
        name: 'Reading Railroad',
        cost: 200,
        owned: false,
        desc: 'rail company',
        img: "https://preview.ibb.co/catK6x/go.jpg",

    },
    {
        name: 'Oriental Avenue',
        cost: 100,
        owned: false,
        desc: 'grocery',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Chance',
        cost: null,
        owned: false,
        desc: 'chance',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Vermont Avenue',
        cost: 100,
        owned: false,
        desc: 'vermont',
        img: "https://preview.ibb.co/catK6x/go.jpg"
    },
    {
        name: 'Connecticut Avenue',
        cost: 120,
        owned: false,
        desc: 'connecticut',
        img: "https://preview.ibb.co/catK6x/go.jpg"
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



module.exports = { 
    cells
}