let die1;
let die2;

$( ".roll-dice" ).click(function() {

die1 = Math.floor( Math.random() * 6 ) + 1;
die2 = Math.floor( Math.random() * 6 ) + 1;



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
}   else if ( die1 === 6) {
   $("#number-21, #number-31, #number-41, #number-61, #number-51, #number-71").css("display", "block")
};

if( die2 === 1 ) {
  $("#number-12").css("display", "block")
} else if ( die2 === 2 ) {
  $("#number-22, #number-32").css("display", "block")
} else if ( die2 === 3) {
   $("#number-12, #number-42, #number-52").css("display", "block")
}  else if ( die2 === 4) {
   $("#number-42, #number-62, #number-52, #number-72").css("display", "block")
}   else if ( die2 === 5) {
   $("#number-12, #number-42, #number-62, #number-52, #number-72").css("display", "block")
}   else if ( die2 === 6) {
   $("#number-22, #number-32, #number-42, #number-62, #number-52, #number-72").css("display", "block")
};

alert("" + die1 + " " + die2);
});




