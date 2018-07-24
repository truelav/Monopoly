$(document).ready(function(){

    

    $('#player-number').change(function() {
        var numberOfPlayers = $("#player-number").val();
        // for (var i = 1; i <= numberOfPlayers; i++){
            if (numberOfPlayers === '2'){
              $( `#player-${1}-input, #player-${2}-input`).css("display", "block");
              $(`#player-${3}-input, #player-${4}-input`).css("display", "none");
            } else if (numberOfPlayers === '3'){
                $(`#player-${3}-input, #player-${1}-input, #player-${2}-input`).css("display", "block");
                $(`#player-${4}-input`).css("display", "none");
            } else if (numberOfPlayers === '4'){
                $(`#player-${3}-input, #player-${1}-input, #player-${2}-input, #player-${4}-input`).css("display", "block");
            }
        // }
        // $('#player-4-input').css("display", "none");
        console.log($("#player-number").val())
    })

    $(".start-game").click(function(){
        $("#setup").css("display", "none");
        $(".page-view").css("display", "block");
    })


})