function chanceCard() {
    var x = Math.floor(Math.random() * ((16 - 1) + 1) + 1);
    var title = chancecards['chance' + x].title;
    var type = chancecards['chance' + x].type;
    var bill = chancecards['chance' + x].bill;
    var bonus = chancecards['chance' + x].bonus;
    if (type == "bill") {
        updateBalance("-", bill);
    } else if (type == "bonus") {
        updateBalance("+", bonus);
    } else if (type == "move") {
        var newposition = chancecards['chance' + x].newposition;
        var currentposition = players[player].currentpos;
        if (newposition == 40) { //this if the player has to "advance to go"
            updateBalance("+", 200);
        } else if (newposition < currentposition) { //if the new position is less than the current one it means the player has to go past go
            updateBalance("+", 200);
        }
        players[player].prevpos = players[player].currentpos;
        players[player].currentpos = newposition;
        players[player].startpos = players[player].currentpos;

        movePiece();
        checkForSale();
    } else if (title == "Go back 3 spaces") {
        players[player].prevpos = players[player].currentpos;
        players[player].currentpos -= -3;
        players[player].startpos = players[player].currentpos;

        movePiece();
        checkForSale();

    }
    flipCard("Chance");

}


function chestCard() {
    var x = Math.floor(Math.random() * ((14 - 1) + 1) + 1);
    var title = chestcards['chest' + x].title;
    var chesttype = chestcards['chest' + x].type;
    var bill = chestcards['chest' + x].bill;
    var bonus = chestcards['chest' + x].bonus;
    if (chesttype == "bill") {
        updateBalance("-", bill);
    } else if (chesttype == "bonus") {
        updateBalance("+", bonus);
    } else if (chesttype == "move") {
        var newposition = chestcards['chest' + x].newposition;
        var currentposition = players[player].currentpos;
        if (newposition == 40) { //this if the player has to "advance to go"
            updateBalance("+", 200);
        } else if (newposition < currentposition) { //if the new position is less than the current one it means the player has to go past go
            updateBalance("+", 200);
        }
        players[player].prevpos = players[player].currentpos;
        players[player].currentpos = newposition;
        players[player].startpos = players[player].currentpos;

        movePiece();
        checkForSale();

    }

    flipCard("Community Chest");
}


function createCards() {
    chancecards = {
        chance1: {
            title: "Advance to go",
            type: "move",
            newposition: 40
        },
        chance2: {
            title: "Advance to London",
            type: "move",
            newposition: 39
        },
        chance4: {
            title: "Your ass is going to jail",
            type: "move",
            newposition: 10
        },
        chance9: {
            title: "Advance to Rome",
            type: "move",
            newposition: 24
        },
        chance10: {
            title: "Advance to Charles de Gaulle",
            type: "move",
            newposition: 15
        },
        chance11: {
            title: "Advance to Amsterdam",
            type: "move",
            newposition: 11
        },
        chance6: {
            title: "Go back 3 spaces",
            type: "movex",
            newposition: -3
        },
        chance14: {
            title: "No drink and driving mate1",
            type: "bill",
            bill: 20
        },
        chance15: {
            title: "Get out of Jail free card",
            type: "bill",
            bill: 150
        },
        chance7: {
            title: "Pay school fees",
            type: "bill",
            bill: 150
        },
        chance12: {
            title: "Speeding fine",
            type: "bill",
            bill: 150
        },
        chance5: {
            title: "Bank pays you dividend",
            type: "bonus",
            bonus: 40
        },
        chance13: {
            title: "You have won the competition",
            type: "bonus",
            bonus: 200
        },
        chance16: {
            title: "Your building loan matures",
            type: "bonus",
            bonus: 200
        },
        chance3: {
            title: "You are assessed for street repairs $40 per house $115 per hotel",
            type: "billx"
        },
        chance8: {
            title: "House repairs $25 per house $100 per hotel",
            type: "billx"
        }
    };
    chestcards = {
        chest1: {
            title: "Advance to go",
            type: "move",
            newposition: 40,
            bonus: 200
        },
        chest2: {
            title: "Advance to Cairo",
            type: "move",
            newposition: 1
        },
        chest3: {
            title: "Go to Jail",
            type: "move",
            newposition: 10
        },
        chest4: {
            title: "Pay hospital fees",
            type: "bill",
            bill: 100
        },
        chest5: {
            title: "Pay doctor fees",
            type: "bill",
            bill: 50
        },
        chest6: {
            title: "Pay insurance premium",
            type: "bill",
            bill: 50
        },
        chest7: {
            title: "Bank error. Collect $200",
            type: "bonus",
            bonus: 200
        },
        chest8: {
            title: "Annuity matures. Collect $100",
            type: "bonus",
            bonus: 100
        },
        chest9: {
            title: "You inherit $100",
            type: "bonus",
            bonus: 100
        },
        chest10: {
            title: "From sale of stock you get $50",
            type: "bonus",
            bonus: 50
        },
        chest11: {
            title: "Preference shares: $25",
            type: "bonus",
            bonus: 25
        },
        chest12: {
            title: "You have won second prize in a beauty contest. Collect $10.",
            type: "bonus",
            bonus: 10
        },
        chest13: {
            title: "It is your birthday. Collect $10.",
            type: "bonus",
            bonus: 10
        },
        chest14: {
            title: "You win the lottery. Collect $10",
            type: "bonus",
            bonus: 10
        }
    };
}

module.exports = {
    chanceCard,
    chestCard,
    createCards
}