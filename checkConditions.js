const checkPlayerStatus = function(player){
    //need to check if player is in jail
    //need to check if player is free parking 
    //check player if has money to buy property or to pay rent
}

const checkPlayerFullCycle = function(player){
    if ( player.position > 39 ) {
        player.position = player.position - 40;
    }
}

const checkTypeOfProperty = function(cell, player){  
    if (cell.type === "property"){
        appendUpdatesProperty()
    
        $(".buy-property").click(  function(){
          buyProperty(player, cell)
          if (player.position >= 11 && player.position <= 19){
            $(`#cell-${player.position} > .cell-color-left`).css("background-color", `${player.color}`)
          } else if (player.position >= 31 && player.position <= 39){
            $(`#cell-${player.position} > .cell-color-right`).css("background-color", `${player.color}`)
          } else {
            $(`#cell-${player.position} > .cell-color`).css("background-color", `${player.color}`)
          }
          //also if player bought the property we need to hide the buy button or trade if the property dont belong to him yet

        })
      } else if (cell.type === "chance"){
        //invoke the chance function 
        chanceCard(player);
        appendChance();
      } else if (cell.type === 'tax'){
        //invoke the tax function
        appendUpdatesRest()
      } else if (cell.type === "community"){
        communityCard(player);
        appendCommunity();
      } else {
        appendUpdatesRest();
      }
}