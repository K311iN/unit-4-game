// Generate random number in random number box  
// On click of crystal image generate random number between 1 - 12. Then
//add that number to the counter.
// If counter === random number incremate wins++
// Else incremate losses++
// 


//Game Counter
var winsCounter = 0;
var lossesCounter = 0;
var score = 0;






$(document).ready(function() {

    function getRandomInt(min, max {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    });   
    
    
    
    //Generate a random numnber & Display random # in random number box
    //randomNumber = Math.floor(Math.random() * 120) + 19;
    //document.getElementById(ranNumber).innerHTML = randonNumber;

   // $("#ranNumber").text(Math.floor(Math.random() * 120) + 19);//???

    
    
    
    //$("#number-to-guess").text(????);
     
    var counter = 0; 
     
    $(".crystral-image").each(click, function() {
      
        var value = getRandomInt (1, 12);
       
        console.log("crystal-value", value);

        $(this).attr('data-crystal-value', value);
        
        
    });

    
    //Need a random number generator

    var randomNumber = getRandomInt(19, 120);
    $('ranNumber').text(randomNumber);
    console.log()

    $(".crystal-image").on('click', function() {
        
        var getCrystalValue = ($(this).attr('data-crystal-value'));
        getCrystalValue = parseInt(getCrystalValue);
        console.log('The Crystals vale when clicked: ', getCrystalValue);
        
        playerScore += getCrystalValue;
        console.log('This is the current score: ', playerScore);
        $('playertotal-text').text(playerScore);

        
        if (playerScore === randomNumber) {
            // increment wins counter
            wins++;
            $('wins-text').text(wins);
        } else if (playerScore >= randomNumber) {
            // increment losses counter
            losses++;
            $('losses-text').text(losses);
            $('.modal').trigger('focus');

        }
    
    });
   

});


