const updatePlayerPosition = function(player, position){
    let tempPosition = player.position;
    player.position = (position + tempPosition);
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
        player.position = 10
    } else if (player.position < 20 && !player.getOutOfJail){
        //also checking if the player has the out of jail ticket
        player.position = 30;
    }
}