const appendGamesUpdates = function() {
    //neet to create and append some game updates to the game 
    //if money add or loose plus buy property or anything that has to be
    //appended for the players to see , so basicaly everything that changes
    //has to be appended so we can seee the changes
    
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
                        <div class="top-bar"></div>
                        <p>${currentCell.name}</p>
                        <p>Price: ${currentCell.price}</p>
                        <p>Current Rent: ${currentCell.currentRental}</p>
                        <p>One House: ${currentCell.rental[1]}</p>
                        <p>Three Houses: ${currentCell.rental[2]}</p>
                        <p>One Hotel: ${currentCell.rental[3]}</p>
                        <p>Mortgage: 50</p>
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
  
  const appendFacilityProperty = function(player) {
    $(`#cell-${player.position}`).css("background-color", `${player.color}`)
  }
  
  const appendLandOnLuxuryTax = function(){
    $(".game-updates")
                      .append( 
                        `
                          <div class="cell-information">
                              <p>${currentCell.name}</p>
                              <p>You have landed on Luxury Tax</p>
                              <p>Gonna have to pay $75</p>
                              <button class="end-turn">End Turn</button>
                          </div> 
                        `
                      )
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
  
  const appendAlredyInJail = function(player){
    $(".game-updates")
                      .append( 
                        `
                          <div class="cell-information">
                              <p>Gonna have to skip this move</p>
                              <button class="end-turn">End Turn</button>
                          </div> 
                        `
                      )
    updatePlayerInJail(player);                  
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
  
  const appendUtility = function(){
    $(".game-updates")
                        .append( 
                        `
                        <div class="cell-information">
                            <p>${currentCell.name}</p>
                            <p>Current Rent: ${currentCell.currentRental}</p>
                            <p>Rent for 1 Utility: ${currentCell.rental[0]}</p>
                            <p>Rent for 2 Utilities: ${currentCell.rental[1]}</p>
                            <p>Mortage: 100</p>
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
  
  const appendTax = function(cell){
    $(".game-updates")
                      .append( 
                        `
                        <div class="cell-information">
                          <p>${currentCell.name}</p>
                          <p>You've got to choose pay $200 or 10% of your cash</p>
                          <div class="action-buttons">
                            <button class="pay-200">$200</button>
                            <button class="pay-10">10%</button>
                          </div>
                          <button class="end-turn">End Turn</button>
                        </div> 
                        `
                      )
  }

  const appendLandOnGo = function(cell){
    $(".game-updates")
                      .append( 
                        `
                        <div class="cell-information">
                          <p>${currentCell.name}</p>
                          <p>Collect your $200</p>
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
  
