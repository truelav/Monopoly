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
    startGame();
  })

  $( ".roll-dice" ).click(function() { 
    
    // //check what player's turn is now
    checkPlayerTurn();
    
    //if the player is in jail then skip the movement and roll the dice
    if (checkIfPlayerInJail(currentPlayer)){
      //update the player inJail property;
      appendAlredyInJail(currentPlayer);

    //if you are not in jail  just run the regular game  
    } else {
      // rolling the dice
      rollDice(currentPlayer);
      hideRollDiceButton();

      //update dices graphically
      die1Val();
      die2Val();

      //updating the player position
      updatePlayerPosition(currentPlayer, sumDices);
      console.log(currentPlayer.position);
      
      // //updating the current cell and all the properties
      currentCell = board[currentPlayer.position]

      //check if you made a whole trip
      // checkPlayerFullCycle(currentPlayer, currentCell);

      //updatePlayerPiece(currentPlayer);
      alert("" + die1 + " " + die2);
      // $(`.${currentPlayer.piece}`).detach().prependTo(`#cell-${currentPlayer.position}`);    
  
      //check the type of property
      checkTypeOfProperty(currentCell, currentPlayer);

      //those are functions that handles paying taxes
      $(".pay-10").click( function(){
        handlePay10Button(currentPlayer);
        $(".action-buttons").hide();
      }) 
      
      $(".pay-200").click( function(){
        handlePay200Button(currentPlayer);
        $(".action-buttons").hide();
      }) 

    }  

    //the end turn functionality will persist doesnt matter if player in jail or not
    $(".end-turn").click( function() {
      endTurn(currentPlayer, nextPlayer)
      resetDices();
      showRollDiceButton(); 
      showBuyPropertyButton();
      console.log(players);
    })

  });
});


const startGame = function(){
  numberOfPlayers = $("#player-number").val();
  var player11 = new Player ('hat', $(`#player-1-name`).val(), $(`#player-1-color`).val(), true, 'player1-piece')
  var player22 = new Player ('car', $(`#player-2-name`).val(), $(`#player-3-color`).val(), false, 'player2-piece')
  players.player1 = player11
  players.player2 = player22
  $("#setup").css("display", "none");
  $(".page-view").css("display", "block");
}

const updateCurrentRental = function(player, cell){
  //need somehow to check how many properties the player has and calculate the currentRental;
  board[player.position].currentRental = board[player.position].rental[0];
  console.log(board[player.position])
}
