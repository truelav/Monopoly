

const chanceCard = function(player){
    let indexCard = Math.floor(Math.random() * Math.floor(16));
    let currentCard = chanceCards[indexCard];
    if (currentCard.type === 'move'){
        updatePlayerPosition(player, currentCard.position)
    } else if (currentCard.type === 'bill'){
        updatePlayerMoney(player, currentCard.amount)
    }
};

const communityCard = function(player){
    let indexCard = Math.floor(Math.random() * Math.floor(16));
    let currentCard = chanceCards[indexCard];
    if (currentCard.type === 'move'){
        updatePlayerPosition(player, currentCard.positions)
    } else if (currentCard.type === 'bill'){
        updatePlayerMoney(player, currentCard.amount)
    } else if (currentCard.type === 'jail'){
        goToJail(player)
    } else if (currentCard.type ="outOfJail"){
        player.getOutOfJail = true;
    }
}


const communityChestCards = [
    {
      name: "Get out of the jail",
      type: 'outOfJail',
    },
    {
      name: "Go to Jail",
      type: 'jail',
    },
    {
      name: "you have won beauty contest collect $10",
      type: 'bill',
      amount: 10
    }, 
    {
      name: "from stock exchange you get $50, collect $50",
      type: 'bill',
      amount: 50
    }, 
    {
      name: "Life insurance matures, pay $75",
      type: 'bill',
      amount: -75
    }, 
    {
      name: "Income tax refund collect $20",
      type: 'bill',
      amount: 20
    }, 
    {
      name: "Holiday fund matures, collect $100",
      type: 'bill',
      amount: 100
    }, 
    {
      name: "Pay $25 consultancy fee",
      type: 'bill',
      amount: -50
    }, 
    {
      name: "Pay your due bills equal to $100",
      type: 'bill',
      amount: -100
    },  
    {
      name: "Bank error, you loose $50",
      type: 'bill',
      amount: -50
    },
    {
      name: "wind of change, move 11 squares",
      type: 'move',
      positions: 11
    },
    {
      name: "gotta go back 3 squares",
      type: 'move',
      positions: -3
    },
    {
      name: "move to square 0 and collect the money",
      type: 'moveToBegin',
    },
    {
      name: "move 9 squares back",
      type: 'move',
      positions: -9,
    },
    {
      name: "move 5 squres upfront",
      type: 'move',
      positions: 5
    }
  ];
  
  const chanceCards = [
    {
      name: 'You have won $100',
      action: function(player){
        player.money += 100
      }
    }, 
    {
      name: 'You have lost $100',
      action: function(player){
        player.money -= 100
      }
    },
    {
      name: 'You have won $100',
      action: function(player){
        player.money += 100
      }
    }, 
    {
      name: 'You have lost $100',
      action: function(player){
        player.money -= 100
      }
    }
  ];
  