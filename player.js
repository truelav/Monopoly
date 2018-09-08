const Player = function (piece, name, color, turn, piece) {
    this.cell = 0;
    this.name = name;
    this.piece = piece;
    this.color = color;
    this.money = 1500;
    this.inJail = false;
    this.property = {
        property: {

        },
        railroad: {

        },
        utility: {

        }
    };
    this.getOutOfJail = false;
    this.turn = turn;
    this.position = 0;
  }

const updatePlayerPosition = function(player, position){
    let tempPosition = player.position;
    player.position = (position + tempPosition);
    $(`.${player.piece}`).detach().prependTo(`#cell-${player.position}`);
};

const updatePlayerMoney = function(player, amount){
    let tempCash = player.money;
    player.money = (amount + tempCash);
}

const goToJail = function(player){
    if (player.getOutOfJail){
        //get out of jail ticket is one time thing
        player.getOutOfJail = false;
        return
    } else if (player.position > 20 && !player.getOutOfJail){
        player.position = 30
        $(`.${player.piece}`).detach().prependTo(`#cell-${player.position}`);
    } else if (player.position < 20 && !player.getOutOfJail){
        //also checking if the player has the out of jail ticket
        player.position = 10;
        $(`.${player.piece}`).detach().prependTo(`#cell-${player.position}`);
    }
}

const checkPlayerTurn = function(){
    if (players.player1.turn){
        currentPlayer = players.player1;
        nextPlayer = players.player2;
        console.log('the current player is: ' + currentPlayer.name)
    } else if (players.player2.turn) {
        currentPlayer = players.player2;
        nextPlayer = players.player1;
        console.log('the current player is: ' + currentPlayer.name)
    }
}

const endTurn = function(curPlayer, nexPlayer){
    curPlayer.turn = false;
    nexPlayer.turn = true;
}

const movePlayerToBegin = function(player){
    player.money += 200;
    player.position = 0;
    $(`.${player.piece}`).detach().prependTo(`#cell-${player.position}`);
}

const payIncomeTax = function(player){
    var tenthOfYourMoney = Math.floor(player.money / 10);
    player.money -= tenthOfYourMoney;
  }
  
  const payLuxuryTax = function(player){
    player.money -= 75;
  }

  
const buyProperty = function(player, cell){
    if (cell.type === 'property' && !cell.owned && player.money > cell.price){
        console.log(player)
        board[player.position].owned = player.piece.slice(0, 7);
        cell.owned = player.piece.slice(0, 7)
        updatePlayerMoney(player, -cell.price);
        updaptePlayerProperty(player, cell);
        updateCurrentRental(player, cell);
        hideBuyPropertyButton();
    } 
    //     else if (cell.type === 'property' && cell.owned){
    //         console.log('property is owned by another player play rent')
        
    // }

    // need to create more logic on whether the player 
}

const updatePlayerPiece = function(player){
    $(`.${player.piece}`).detach().prependTo(`#cell-${player.position}`);    
}

const updaptePlayerProperty = function(player, cell){
    if (cell.type === "property"){
        player.property.property.name = cell.name;
    } else if (cell.type === "utility"){
        player.property.utility.name = cell.name;
    } else if (cell.type === "railroad"){
        player.property.railroad.name = cell.name;
    }
}

const updatePlayerPayRent = function(player, cell){
    //update the current player that has to pay the rent
    updatePlayerMoney(player, -cell.currentRental);

    //pay to the player that holds the property
    let payToThe = players[cell.owned]
    updatePlayerMoney(payToThe, cell.currentRental)
}