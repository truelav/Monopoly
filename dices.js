// let die1;
// let die2;
// let sumDices;
// var turn = 0;
// var currentCell;
// var currentPlayer;
// var nextPlayer;
// var numberOfPlayers;
// var currentChanceCard;
// var currentCommunityChestCard;

// const players = {};
// const pieces = ['hat', 'show', 'iron'];

// const Player = function (piece, name, color, turn, piece) {
//   this.cell = 0;
//   this.name = name;
//   this.piece = piece;
//   this.color = color;
//   this.money = 1500;
//   this.inJail = false;
//   this.property = [];
//   this.getOutOfJail = false;
//   this.turn = turn;
//   this.position = 0;
// }


// $(document).ready(function() {

//   $('#player-number').change(function() {
//       var numberOfPlayers = $("#player-number").val();
//       if (numberOfPlayers === '2'){
//           $( `#player-${1}-input, #player-${2}-input`).css("display", "block");
//           $(`#player-${3}-input, #player-${4}-input`).css("display", "none");
//       } else if (numberOfPlayers === '3'){
//           $(`#player-${3}-input, #player-${1}-input, #player-${2}-input`).css("display", "block");
//           $(`#player-${4}-input`).css("display", "none");
//       } else if (numberOfPlayers === '4'){
//           $(`#player-${3}-input, #player-${1}-input, #player-${2}-input, #player-${4}-input`).css("display", "block");
//       }
//   })

//   $(".start-game").click(function(){
//     startGame()
//     console.log(players);
//   })

//   $( ".roll-dice" ).click(function() { 
//     rollDice();

//     //update dices
//     die1Val();
//     die2Val();

//     //check what player's turn is now
//     checkPlayerTurn();

//     //updating the player position
//     updatePlayerPosition(currentPlayer, sumDices);

//     //check if you made a whole trip
//     if ( currentPlayer.position > 39 ) {
//         currentPlayer.position = currentCell.position - 40;
//     }
//     currentCell = board[currentPlayer.position]

//     $(`.${currentPlayer.piece}`).detach().prependTo(`#cell-${currentPlayer.position}`);    
//     alert("" + die1 + " " + die2);

//     if(currentCell.type === "property"){
//       appendUpdatesProperty()

//       $(".buy-property").click(  function( ) {
//         buyProperty(currentPlayer, currentCell)
//         if (currentPlayer.position >= 11 && currentPlayer.position <= 19){
//           $(`#cell-${currentPlayer.position} > .cell-color-left`).css("background-color", `${currentPlayer.color}`)
//         } else if (currentPlayer.position >= 31 && currentPlayer.position <= 39){
//           $(`#cell-${currentPlayer.position} > .cell-color-right`).css("background-color", `${currentPlayer.color}`)
//         } else {
//           $(`#cell-${currentPlayer.position} > .cell-color`).css("background-color", `${currentPlayer.color}`)
//         }
//       })

//     } else if (currentCell.type === "chance"){
//       //invoke the chance function 
//       chanceCard(currentPlayer);
//       appendChance();
//       console.log(currentPlayer)
//     } else if (currentCell.type === 'tax'){
//       //invoke the tax function
//       appendUpdatesRest()
//     } else if (currentCell.type === "community"){
//       console.log(currentPlayer)
//       communityCard(currentPlayer);
//       appendCommunity();
//     } else {
//       appendUpdatesRest();
//     }

//     $(".end-turn").click( function() {
//       endTurn(currentPlayer, nextPlayer)
//       resetDices();
//     })

//   });
// });


// const resetDices = function(){
//   die1 = 0; 
//   die2 = 0;
//   $(".cell-information").hide();
//   die1Val();
//   die2Val();
// }

// const rollDice = function () {
//   die1 = Math.floor( Math.random() * 6 ) + 1;
//   die2 = Math.floor( Math.random() * 6 ) + 1;
//   sumDices = die1 + die2;
//   //sumDices = 7
// }

// const buyProperty = function(player, cell){
//   if(cell.type === 'property' && !cell.owned && player.money > cell.price){
//     cell.owned = player.piece.slice(0,7);
//     player.money -= cell.price;
//     player.property.push( cell )
//     //appendFacilityProperty(player);
//   } else if (cell.type === 'property' && cell.owned){
//     console.log('property is owned by another player play rent')
//     player.money -= cell.rent[0]
//   }
//   console.log(cell, player)
// }

// const startGame = function(){
//   numberOfPlayers = $("#player-number").val();
//   var player11 = new Player ('hat', $(`#player-1-name`).val(), $(`#player-1-color`).val(), true, 'player1-piece')
//   var player22 = new Player ('car', $(`#player-2-name`).val(), $(`#player-3-color`).val(), false, 'player2-piece')
//   players.player1 = player11
//   players.player2 = player22
//   $("#setup").css("display", "none");
//   $(".page-view").css("display", "block");
// }

// const buyFacilityProperty = function(player, cell){

// }

// const die1Val = function () {
//   if( die1 === 1 ) {
//     $("#number-11").css("display", "block")
//   } else if ( die1 === 2 ) {
//     $("#number-21, #number-31").css("display", "block")
//   } else if ( die1 === 3) {
//     $("#number-11, #number-41, #number-51").css("display", "block")
//   }  else if ( die1 === 4) {
//     $("#number-41, #number-61, #number-51, #number-71").css("display", "block")
//   }   else if ( die1 === 5) {
//     $("#number-11, #number-41, #number-61, #number-51, #number-71").css("display", "block")
//   }  else if ( die1 === 6) {
//     $("#number-21, #number-31, #number-41, #number-61, #number-51, #number-71").css("display", "block")
//   } else if ( die1 === 0 ) {
//     $("#number-11, #number-21, #number-31, #number-41, #number-61, #number-51, #number-71").css("display", "none")
//   } 
// }

// const die2Val = function () {
//   if( die2 === 1 ) {
//     $("#number-12").css("display", "block")
//   } else if ( die2 === 2 ) {
//     $("#number-22, #number-32").css("display", "block")
//   } else if ( die2 === 3) {
//       $("#number-12, #number-42, #number-52").css("display", "block")
//   }  else if ( die2 === 4) {
//       $("#number-42, #number-62, #number-52, #number-72").css("display", "block")
//   }  else if ( die2 === 5) {
//       $("#number-12, #number-42, #number-62, #number-52, #number-72").css("display", "block")
//   }  else if ( die2 === 6) {
//       $("#number-22, #number-32, #number-42, #number-62, #number-52, #number-72").css("display", "block")
//   } else if ( die2 === 0 ) {
//     $("#number-12, #number-22, #number-32, #number-42, #number-62, #number-52, #number-72").css("display", "none")
//   } 
// }

// const appendUpdatesProperty = function() {
//   $(".game-updates")
//                     .append( 
//                       `
//                       <div class="cell-information">
//                         <p>${currentCell.name}</p>
//                         <p>Price: ${currentCell.price}</p>
//                         <p>Rent: ${currentCell.rental}</p>
//                         <div class="action-buttons">
//                           <button class="buy-property">Buy Property</button>
//                           <button class="bid-prperty">Bid Property</button>
//                         </div>
//                         <button class="end-turn">End Turn</button>
//                       </div> 
//                       `
//                     )
// }

// const appendGamesUpdates = function() {
//   //neet to create and append some game updates to the game 
//   //if money add or loose plus buy property or anything that has to be
//   //appended for the players to see , so basicaly everything that changes
//   //has to be appended so we can seee the changes
  
// }

// const appendUpdatesRest = function() {
//   $(".game-updates")
//                     .append( 
//                       `
//                       <div class="cell-information">
//                         <p>${currentCell.name}</p>
//                         <button class="end-turn">End Turn</button>
//                       </div> 
//                       `
//                     )
// }

// const appendFacilityProperty = function(player) {
//   $(`#cell-${player.position}`).css("background-color", `${player.color}`)
// }

// const appendUpdateJail = function(){
//   $(".game-updates")
//                     .append( 
//                       `
//                       <div class="cell-information">
//                         <p>${currentCell.name}</p>
//                         <p>You have landed on Jail</p>
//                         <button class="end-turn">End Turn</button>
//                       </div> 
//                       `
//                     )
// }

// const appendChance = function(cell) {
//   $(".game-updates")
//                     .append( 
//                       `
//                       <div class="cell-information">
//                         <p>${currentCell.name}</p>
//                         <p>${currentChanceCard.name}</p>
//                         <button class="end-turn">End Turn</button>
//                       </div> 
//                       `
//                     )
// }

// const appendCommunity = function(cell) {
//   $(".game-updates")
//                     .append( 
//                       `
//                       <div class="cell-information">
//                         <p>${currentCell.name}</p>
//                         <p>${currentCommunityChestCard.name}</p>
//                         <button class="end-turn">End Turn</button>
//                       </div> 
//                       `
//                     )
// }

// const payIncomeTax = function(player){
//   var tenthOfYourMoney = Math.floor(player.money / 10);
//   player.money -= tenthOfYourMoney;
// }

// const payLuxuryTax = function(player){
//   player.money -= 75;
// }



// const checkCellForRent = function(player, cell){
//   if(cell.owned){
//     //need to check to which player does it belong to and give rent to him, probably owne property needs to 
//     //changed when property has been bought
//     player.money -= cell.rent[0]
//     players[cell.owned].money += cell.rent[0]
//     console.log('check if both players money have been updated')
//     //plus we need check for how many properties the player owes so we can get the correct rent;
//   } else {
//     //continue
//     //return false
//     return false
//   }
// }



// //players data structure look like this :

// // players = {
// //   player1: {
// //     name: 'vasilica',
// //     cell: 0,
// //     property: []
// //   },
// //   player2: {
// //     name: 'patlajica',
// //     cell: 0,
// //     property: []
// //   }
// // }

const die1Val = function () {
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
  }  else if ( die1 === 6) {
    $("#number-21, #number-31, #number-41, #number-61, #number-51, #number-71").css("display", "block")
  } else if ( die1 === 0 ) {
    $("#number-11, #number-21, #number-31, #number-41, #number-61, #number-51, #number-71").css("display", "none")
  } 
}

const die2Val = function () {
  if( die2 === 1 ) {
    $("#number-12").css("display", "block")
  } else if ( die2 === 2 ) {
    $("#number-22, #number-32").css("display", "block")
  } else if ( die2 === 3) {
      $("#number-12, #number-42, #number-52").css("display", "block")
  }  else if ( die2 === 4) {
      $("#number-42, #number-62, #number-52, #number-72").css("display", "block")
  }  else if ( die2 === 5) {
      $("#number-12, #number-42, #number-62, #number-52, #number-72").css("display", "block")
  }  else if ( die2 === 6) {
      $("#number-22, #number-32, #number-42, #number-62, #number-52, #number-72").css("display", "block")
  } else if ( die2 === 0 ) {
    $("#number-12, #number-22, #number-32, #number-42, #number-62, #number-52, #number-72").css("display", "none")
  } 
}

const resetDices = function(){
  die1 = 0; 
  die2 = 0;
  $(".cell-information").hide();
  die1Val();
  die2Val();
}

const rollDice = function (player) {
  if (player.inJail){
    //sumDices = 0;
    updatePlayerInJail(player);
  } else {
    die1 = Math.floor( Math.random() * 6 ) + 1;
    die2 = Math.floor( Math.random() * 6 ) + 1;
    // die1 = 5;
    // die2 = 5;
    sumDices = die1 + die2;
    //sumDices = 7;
  }
}