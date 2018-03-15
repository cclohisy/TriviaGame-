
$(document).ready(function () {
//hide all but startGame div
$("#startGame").show();
//question
$("#question").hide();   
//result
$("#result").hide();
//gameOver
$("#gameOver").hide();

//define variables needed

    //userCorrect - store correct answer total
    var userCorrect = 0;
    console.log("correct answers" + userCorrect);
    //userWrong - store inccorecrt answer total
    var userWrong = 0;
    console.log("wrong answers" + userWrong);
    //userTimeout- store unaswered total 
    var userTimeout= 0;
    console.log("unanswerd questions" + userTimeout);
    //countdown - 25 seconds to answer each question
    var countdown = 25
    console.log("clock countdown" + countdown)
    //timeRemains - true/false 
    var timeRemains = true;
    //question number- stores which question user in on ... 0-19
    var questionNumber = 0;

    //question and answer arrays? objects? 
    var questionArr =[
        q1={
            question: " Leslie Knope was born in which Town?",
            answers: {
                Pawnee : false,
                " option 2": true,
                "New York, NY": false,
                "Washington D.C": false,
            }

        }
        
    ]

    console.log(questionArr[0].question);
    console.log(question[0].answers);
    
    //when player clicks start game button
    //initialize game
    $("#startButton").on("click", function () {
        //display question div for 25 seconds
            //display countdown = 25
            //display question
            //display answer options1-4
        $("#question").show();
        $("#startGame").hide();
        
        });


    //on player click determine if choice was right or wrong
    $(".answers").on("click", "#ans1", function(){
        //questionNumber ++
        //runs as long as there are still questions... for loop? 
        // for(i=0; i<= questionArray.length; i ++)

    //IF userChoice == true
        //playerCorrect + 1
        //run result display function
    //ELSE
        //playerwrong + 1
            //run result display function

    }).on("click", "#ans2", function(){

    }).on("click", "#ans3", function(){
        
    }).on("click", "#ans4", function(){
        
    });

//timeout function - see if user ran out of time 
    
    //IF coundown == 0 
        //(player runs out of time timeRemains==false)
        //playerTimeout +1
        //display results div with TIME OUT message
            //run result display function
        
                
    //ELSE 


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
