//const game = require('./game.js');

let die1;
let die2;
let sumDices;

const Player = function (piece, name, color, turn) {
  this.cell = 0;
  this.name = name;
  this.piece = piece;
  this.color = color;
  this.money = 1500;
  this.inJail = false;
  this.property = [];
  this.getOutOfJail = false;
  this.turn = turn;
  this.position = 0;
}

const players = [];
const pieces = ['hat', 'show', 'iron'];

$(document).ready(function() {
  var player1 = new Player(pieces.pop(), 'truelav', 'blue', true);
  var player2 = new Player(pieces.pop(), 'vasilica', 'red', false);
  players.push(player1, player2);
  
 console.log(players)
  players.forEach( function(player){
    console.log(player.turn)
    if (player.turn){
      $(".game-updates").append(
        `<div class="player info">
          <p>Player ${player.name} roll the dice!!</p>
        </div>  
        `
      )
      $( ".roll-dice" ).click(function() {
          rollDice();
          sumDices = die1 + die2;
          //updating the player position
            console.log(player)
            let tempPosition = player.position;
            player.position = (sumDices + tempPosition);
            console.log(player.position);
          //check if you made a whole trip
          if ( player.position > 39 ) {
              player.position = player.position - 40;
          }

          if( die1 === 1 ) {
              $("#number-11").css("display", "block")
              } else if ( die1 === 2 ) {
              $("#number-21, #number-31").css("display", "block")
              } else if ( die1 === 3) {
                  $("#number-11, #number-41, #number-51").css("display", "block")
              }  else if ( die1 === 4) {
                  $("#number-41, #number-61, #number-51, #number-71").css("display", "block")
              }   else if ( die1 === 5) {
                  $("#number-11, #number-41, #number-61, #number-51, #number-71").css("display", "block")
              }   else if ( die1 === 6) {
                  $("#number-21, #number-31, #number-41, #number-61, #number-51, #number-71").css("display", "block")
              };
              
              if( die2 === 1 ) {
              $("#number-12").css("display", "block")
              } else if ( die2 === 2 ) {
              $("#number-22, #number-32").css("display", "block")
              } else if ( die2 === 3) {
                  $("#number-12, #number-42, #number-52").css("display", "block")
              }  else if ( die2 === 4) {
                  $("#number-42, #number-62, #number-52, #number-72").css("display", "block")
              }   else if ( die2 === 5) {
                  $("#number-12, #number-42, #number-62, #number-52, #number-72").css("display", "block")
              }   else if ( die2 === 6) {
                  $("#number-22, #number-32, #number-42, #number-62, #number-52, #number-72").css("display", "block")
              };
              


          $(".player1-piece").detach().appendTo(`#cell-${player.position}`);    
          alert("" + die1 + " " + die2);

          $(".game-updates")
            .append( 
              `
              <div class="cell-information">
                <p>${board[player.position].name}</p>
                <p>Price: ${board[player.position].price}</p>
                <p>Rent: ${board[player.position].rental}</p>
                <div class="action-buttons">
                  <button class="buy-property">Buy Property</button>
                  <button class="bid-prperty">Bid Property</button>
                </div>
                <button class="end-turn">End Turn</button>
              </div> 
              `
            )

          $(".end-turn").click( function() {
            $(".game-updates").detach();
            $(".numbers").css("display", "none");
          })
      });
    }
  })

});
    


const rollDice = function () {
    die1 = Math.floor( Math.random() * 6 ) + 1;
    die2 = Math.floor( Math.random() * 6 ) + 1;
}

const buyProperty = function(player, cell){
  if(cell.type === 'property' && !cell.owned && player.money > cell.price){
    cell.owned = player.name;
    player.property.push( cell )
  }
}



const board  =  [{
    name: "Go"
  },{
    name: "Old Kent Road",
    price: 60,
    rental: [2, 10, 30, 90, 160, 250],
    color: "brown",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "Community Chest"
  },{
    name: "Whitechapel Road",
    price: 60,
    rental: [4, 20, 60, 180, 360, 450],
    color: "brown",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "Income Tax",
    type: "tax",
    amount: 200
  },{
    name: "Kings Cross Station",
    price: 200,
    rental: [25, 50, 100, 200],
    type: "station",
    owned: false
  },{
    name: "The Angel, Islington",
    price: 100,
    rental: [6, 30, 90, 270, 400, 550],
    color: "lightBlue",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "Chance"
  },{
    name: "Euston Road",
    price: 100,
    rental: [6, 30, 90, 270, 400, 550],
    color: "lightBlue",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "Pentonville Road",
    price: 120,
    rental: [8, 40, 100, 300, 450, 600],
    color: "lightBlue",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "Jail"
  },{
    name: "Pall Mall",
    price: 140,
    rental: [10, 50, 150, 450, 625, 750],
    color: "pink",
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "Electric Company",
    price: 150,
    type: "utility",
    owned: false
  },{
    name: "Whitehall",
    price: 140,
    rental: [10, 50, 150, 450, 625, 750],
    color: "pink",
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "Northumberland Avenue",
    price: 160,
    rental: [12, 60, 180, 500, 700, 900],
    color: "pink",
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "Marylebone Station",
    price: 200,
    rental: [25, 50, 100, 200],
    type: "station",
    owned: false
  },{
    name: "Bow Steet",
    price: 180,
    rental: [14, 70, 200, 550, 750, 950],
    color: "orange",
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "Community Chest"
  },{
    name: "Marlborough Steet",
    price: 180,
    rental: [14, 70, 200, 550, 750, 950],
    color: "orange",
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "Vine Steet",
    price: 200,
    rental: [16, 80, 220, 600, 800, 1000],
    color: "orange",
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "Free Parking"
  },{
    name: "The Strand",
    price: 220,
    rental: [18, 90, 250, 700, 875, 1050],
    color: "red",
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "Chance"
  },{
    name: "Fleet Street",
    price: 220,
    rental: [18, 90, 250, 700, 875, 1050],
    color: "red",
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "Trafalgar Square",
    price: 240,
    rental: [20, 100, 300, 750, 925, 1100],
    color: "red",
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "Fenchurch Street Station",
    price: 200,
    rental: [25, 50, 100, 200],
    type: "station",
    owned: false
  },{
    name: "Leicester Square",
    price: 260,
    rental: [22, 110, 330, 800, 975, 1150],
    color: "yellow",
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "Water Works",
    price: 150,
    type: "utility",
    owned: false
  },{
    name: "Coventry Street",
    price: 260,
    rental: [22, 110, 330, 800, 975, 1150],
    color: "yellow",
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "Piccadilly",
    price: 280,
    rental: [22, 120, 360, 850, 1025, 1200],
    color: "yellow",
    housePrice: 140,
    type: "property",
    owned: false
  },{
    name: "Go To Jail",
  },{
    name: "Regent Street",
    price: 300,
    rental: [26, 130, 390, 900, 1100, 1275],
    color: "green",
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "Oxford Street",
    price: 300,
    rental: [26, 130, 390, 900, 1100, 1275],
    color: "green",
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "Community Chest"
  },{
    name: "Bond Street",
    price: 320,
    rental: [28, 150, 450, 1000, 1200, 1400],
    color: "green",
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "Liverpool Street Station",
    price: 200,
    rental: [25, 50, 100, 200],
    type: "station",
    owned: false
  },{
    name: "Chance"
  },{
    name: "Park Lane",
    price: 350,
    rental: [35, 175, 500, 1100, 1300, 1500],
    color: "darkBlue",
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "Super Tax",
    type: "tax",
    amount: 100
  },{
    name: "Mayfair",
    price: 400,
    rental: [50, 200, 600, 1400, 1700, 2000],
    color: "darkBlue",
    housePrice: 200,
    type: "property",
    owned: false
  }]


