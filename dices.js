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

          let currentCell = board[player.position]

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

          if(currentCell.type === "property"){
            console.log('propery cell')
            $(".game-updates")
              .append( 
                `
                <div class="cell-information">
                  <p>${currentCell.name}</p>
                  <p>Price: ${currentCell.price}</p>
                  <p>Rent: ${currentCell.rental}</p>
                  <div class="action-buttons">
                    <button class="buy-property">Buy Property</button>
                    <button class="bid-prperty">Bid Property</button>
                  </div>
                  <button class="end-turn">End Turn</button>
                </div> 
                `
              )
  
            $(".buy-property").click(  function( ) {
              buyProperty(player, currentCell)
              $(`#cell-${player.position} > .cell-color`).css("background-color", `${player.color}`)
            })
          } else if (currentCell.type === "chance"){
            //invoke the chance function 
            console.log('chance cell')
            $(".game-updates")
            .append(
              `
              <div class="chance">
                <p>You've got chance</p>
                <button class="end-turn">End Turn</button>
              </div>
              `
            )

          } else if (currentCell.type === 'tax'){
            //invoke the tax function
            console.log('tax cell')
          } else if (currentCell.type === "community"){
            //invoke community chest
          }

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
    player.money -= cell.price;
    player.property.push( cell )
  } else if (cell.type === 'property' && cell.owned){
    console.log('property is owned by another player play rent')
    player.money -= cell.rent[0]
  } 
  console.log(player)
}



const board  =  [{
    name: "Go",
    type: "go"
  },{
    name: "MEDITERRANEAN AVENUE",
    price: 60,
    rental: [2, 10, 30, 90, 160, 250],
    color: "brown",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "COMMUNITY CHEST",
    type: "community"
  },{
    name: "BALTIC AVENUE",
    price: 60,
    rental: [4, 20, 60, 180, 360, 450],
    color: "brown",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "INCOME TAX",
    type: "tax",
    amount: 200
  },{
    name: "READING RAILROAD",
    price: 200,
    rental: [25, 50, 100, 200],
    type: "property",
    owned: false
  },{
    name: "ORIENTAL AVENUE",
    price: 100,
    rental: [6, 30, 90, 270, 400, 550],
    color: "lightBlue",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "Chance",
    type: "chance"
  },{
    name: "VERMONT AVENUE",
    price: 100,
    rental: [6, 30, 90, 270, 400, 550],
    color: "lightBlue",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "CONNECTICUT AVENUE",
    price: 120,
    rental: [8, 40, 100, 300, 450, 600],
    color: "lightBlue",
    housePrice: 50,
    type: "property",
    owned: false
  },{
    name: "Jail",
    type: "jail"
  },{
    name: "ST.CHARLES AVENUE",
    price: 140,
    rental: [10, 50, 150, 450, 625, 750],
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "ELECTRIC COMPANY",
    price: 150,
    type: "utility",
    owned: false
  },{
    name: "STATES AVENUE",
    price: 140,
    rental: [10, 50, 150, 450, 625, 750],
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "VIRGINIA AVENUE",
    price: 160,
    rental: [12, 60, 180, 500, 700, 900],
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "PENNSYLVANIA RAILROAD",
    price: 200,
    rental: [25, 50, 100, 200],
    type: "railroad",
    owned: false
  },{
    name: "ST.JAMES PLACE",
    price: 180,
    rental: [14, 70, 200, 550, 750, 950],
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "COMMUNITY CHEST",
    type: 'community'
  },{
    name: "TENESSEE AVENUE",
    price: 180,
    rental: [14, 70, 200, 550, 750, 950],
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "NEW YORK AVENUE",
    price: 200,
    rental: [16, 80, 220, 600, 800, 1000],
    housePrice: 100,
    type: "property",
    owned: false
  },{
    name: "Free Parking",
    type: 'parking',
  },{
    name: "KENTUCKY AVENUE",
    price: 220,
    rental: [18, 90, 250, 700, 875, 1050],
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
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "ILLINOIS AVENUE",
    price: 240,
    rental: [20, 100, 300, 750, 925, 1100],
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "B&O RAILROAD",
    price: 200,
    rental: [25, 50, 100, 200],
    type: "station",
    owned: false
  },{
    name: "ATLANTIC AVENUE",
    price: 260,
    rental: [22, 110, 330, 800, 975, 1150],
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "VENTNOR AVENUE",
    price: 260,
    rental: [22, 110, 330, 800, 975, 1150],
    color: "yellow",
    housePrice: 150,
    type: "property",
    owned: false
  },{
    name: "WATER WORKS",
    price: 150,
    type: "utility",
    owned: false
  },{
    name: "MARVIN GARDENS",
    price: 280,
    rental: [22, 120, 360, 850, 1025, 1200],
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
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "NORTH CAROLINA AVENUE",
    price: 300,
    rental: [26, 130, 390, 900, 1100, 1275],
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
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "SHORT LINE",
    price: 200,
    rental: [25, 50, 100, 200],
    type: "station",
    owned: false
  },{
    name: "Chance",
    type: 'chance',
  },{
    name: "PARK PLACE",
    price: 350,
    rental: [35, 175, 500, 1100, 1300, 1500],
    housePrice: 200,
    type: "property",
    owned: false
  },{
    name: "Super Tax",
    type: "tax",
    amount: 100
  },{
    name: "BOARDWALK",
    price: 400,
    rental: [50, 200, 600, 1400, 1700, 2000],
    housePrice: 200,
    type: "property",
    owned: false
  }]


