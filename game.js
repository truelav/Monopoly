let die1;
let die2;
let sumDices;
var turn = 0;
var currentCell;
var currentPlayer;
var nextPlayer;
var numberOfPlayers;
var currentChanceCard;
var currentCommunityChestCard;

const players = {};
const pieces = ['hat', 'show', 'iron'];

$(document).ready(function() {

  $('#player-number').change(function() {
      var numberOfPlayers = $("#player-number").val();
      if (numberOfPlayers === '2'){
          $( `#player-${1}-input, #player-${2}-input`).css("display", "block");
          $(`#player-${3}-input, #player-${4}-input`).css("display", "none");
      } else if (numberOfPlayers === '3'){
          $(`#player-${3}-input, #player-${1}-input, #player-${2}-input`).css("display", "block");
          $(`#player-${4}-input`).css("display", "none");
      } else if (numberOfPlayers === '4'){
          $(`#player-${3}-input, #player-${1}-input, #player-${2}-input, #player-${4}-input`).css("display", "block");
      }
  })

  $(".start-game").click(function(){
    startGame()
  })

  $( ".roll-dice" ).click(function() { 
    // rolling the dice
    rollDice();
    hideRollDiceButton();

    //update dices graphically
    die1Val();
    die2Val();

    //check what player's turn is now
    checkPlayerTurn();

    //updating the player position
    updatePlayerPosition(currentPlayer, sumDices);
    
    //updating the current cell and all the properties
    currentCell = board[currentPlayer.position]
    //updateCurrentCell(currentCell, currentPlayer);

    //check if you made a whole trip
    checkPlayerFullCycle(currentPlayer);

    updatePlayerPiece(currentPlayer);
    alert("" + die1 + " " + die2);
    // $(`.${currentPlayer.piece}`).detach().prependTo(`#cell-${currentPlayer.position}`);    

    //check the type of property
    checkTypeOfProperty(currentCell, currentPlayer);

    $(".end-turn").click( function() {
      endTurn(currentPlayer, nextPlayer)
      resetDices();
      showRollDiceButton(); 
      showBuyPropertyButton();
      console.log(players);
    })

  });
});

//nedd to add when landing on jail or parking, tax and utility square~


const startGame = function(){
  numberOfPlayers = $("#player-number").val();
  var player11 = new Player ('hat', $(`#player-1-name`).val(), $(`#player-1-color`).val(), true, 'player1-piece')
  var player22 = new Player ('car', $(`#player-2-name`).val(), $(`#player-3-color`).val(), false, 'player2-piece')
  players.player1 = player11
  players.player2 = player22
  $("#setup").css("display", "none");
  $(".page-view").css("display", "block");
}

const buyFacilityProperty = function(player, cell){

}


const appendUpdatesProperty = function(cell) {
  
    if (cell.owned){
        $(".game-updates")
                    .append( 
                      `
                      <div class="cell-information">
                        <p>${currentCell.name}</p>
                        <p>You landed on square that is owned by: ${currentCell.owned}</p>
                        <p>Pay rent amounting: ${currentCell.rental[0]} </p>
                        <button class="end-turn">End Turn</button>
                      </div> 
                      `
                    )
        updatePlayerPayRent(currentPlayer, currentCell);
    } else {
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
    }
}

const appendGamesUpdates = function() {
  //neet to create and append some game updates to the game 
  //if money add or loose plus buy property or anything that has to be
  //appended for the players to see , so basicaly everything that changes
  //has to be appended so we can seee the changes
  
}


const appendFacilityProperty = function(player) {
  $(`#cell-${player.position}`).css("background-color", `${player.color}`)
}

const appendLandOnJail = function(){
  $(".game-updates")
                    .append( 
                      `
                        <div class="cell-information">
                            <p>${currentCell.name}</p>
                            <p>You have landed on Jail</p>
                            <p>Gonna have to skip next move</p>
                            <button class="end-turn">End Turn</button>
                        </div> 
                      `
                    )
}

const appendLandOnParking = function(){
    $(".game-updates")
                        .append(
                            `
                                <div class="cell-information">
                                    <p>${currentCell.name}</p>
                                    <p>You have landed on parking square</p>
                                    <p>Just Rest until next move</p>
                                    <button class="end-turn">End Turn</button>
                                </div>
                            `
                        )
}

const appendChance = function(cell) {
  $(".game-updates")
                    .append( 
                      `
                      <div class="cell-information">
                        <p>${currentCell.name}</p>
                        <p>${currentChanceCard.name}</p>
                        <button class="end-turn">End Turn</button>
                      </div> 
                      `
                    )
}

const appendCommunity = function(cell) {
  $(".game-updates")
                    .append( 
                      `
                      <div class="cell-information">
                        <p>${currentCell.name}</p>
                        <p>${currentCommunityChestCard.name}</p>
                        <button class="end-turn">End Turn</button>
                      </div> 
                      `
                    )
}

const hideRollDiceButton = function(){
    $(".roll-dice-button").hide();
}

const showRollDiceButton = function(){
    $(".roll-dice-button").show();
}

const hideBuyPropertyButton = function(){
    $(".buy-property").hide();
}

const showBuyPropertyButton = function(){
    $(".buy-property").show();
}

const updateCurrentRental = function(player, cell){
    //need somehow to check how many properties the player has and calculate the currentRental;
    board[player.position].currentRental = board[player.position].rental[0];
    console.log(board[player.position])
}

// const updateCurrentCell = function(cell, player){
//     cell = board[player.position]
//     async issue wont update currentCell before im using it
// }

