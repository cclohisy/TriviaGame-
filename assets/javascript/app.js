
$(document).ready(function () {
//define variables needed
    //questionand answer arrays
    //userChoice
    //correctChoice
    //userCorrect
    //userWrong
    //userTimeout
    //countdown
    //timeRemains
    //questionArray


//hide all but startGame div
//question
//result
//gameOver


//when player clicks start game button
    //initialize game
    //runs as long as there are still questions... for loop? 
    // for(i=0; i<= questionArray.length; i ++)

    

    //generate random question to display question div for 25 seconds
        //IF timeRemains== true? 
            //on player click answer option
                //IF userChoice == correctChoice
                    //playerCorrect + 1
                    //run result display function
                //ELSE
                    //playerwrong + 1
                        //run result display function

                    
        //ELSE (player runs out of time)
            //playerTimeout +1
            //display results div with TIME OUT message
                //run result display function


//function to determine which result message to display
    //IF userChoice == correct choice
        //display results div with YOU ARE RIGHT message 
            //after 10 seconds display next question
    //ELSE IF countdown == 0
        //display results div with TIME OUT message
        //display correctChoice 
            //after 10 seconds display next question
    //ELSE 
        //display results div with YOU ARE WRONG message
            //display correctChoice 
             //after 10 seconds display next question

//function to "reset" from result display to question display 















})
