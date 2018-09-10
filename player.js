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
    if (player.position + position > 39){
        player.position += position - 40;
        updatePlayerMoney(player, 200)
    }  else {
        player.position += position;
    }
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


const endTurn = function(curPlayer, nexPlayer){
    curPlayer.turn = false;
    nexPlayer.turn = true;
}

const movePlayerToBegin = function(player){
    player.money += 200;
    player.position = 0;
    $(`.${player.piece}`).detach().prependTo(`#cell-${player.position}`);
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

// const updatePlayerPiece = function(player){
//     //console.log($`#cell-${player.position}`);
//     $(`.${player.piece}`).detach().prependTo(`#cell-${player.position}`);    
// }

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

const handlePay200Button = function(player){
    updatePlayerMoney(player, -200);
}

const handlePay10Button = function(player){
    let tenthOfYourMoney = Math.floor(player.money / 10);
    updatePlayerMoney(player, -tenthOfYourMoney);
}

const handlePayLuxuryTax = function(player){
    updatePlayerMoney(player, -75);
}

const updatePlayerInJail = function(player){
    if (player.inJail === false){
        player.inJail = true;
    } else if (player.inJail === true){
        player.inJail = false;
    }
}

const findPiecePosition = function(player, destination){
    let startPosition = player.position;
    let currentPosition = player.position;
    let moves = destination + currentPosition;

    for (var i = currentPosition; i < moves + 1; i++){
        let  x = $(`#cell-${i}`).position()
  
        $("."+ player.piece).animate({ 'top': x.top + 'px', 'left': x.left + 'px'}, 350, function(){

        });
    }
    //need to listen to resize window event and adjust pieces coordinates
    //also need to check when the player is making a full cycle;
    
}