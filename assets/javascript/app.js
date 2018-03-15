$(document).ready(function () {
    //hide all but startGame div
    $("#startGame").show();
    //question
    $("#qaData").hide();
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
var userTimeout = 0;
console.log("unanswered questions" + userTimeout);
//countdown - 25 seconds to answer each question
var countdown = 5
//timeRemains - true/false 
var timeRemains = true;
//question number- stores which question user in on ... 0-19
var questionNumber = 0;

var countdownTimer = 0;

//question and answer arrays? objects? 
var questionArr = [
    q1 = {
        question: " Where was Leslie Knope born?",
        answerArr: [
            option1 = {
                text: "Pawnee, IN",
                value: false
            },
            option2 = {
                text: "Eagleton, IN",
                value: true
            },
            option3 = {
                text: "New York, NY",
                value: false
            },
            option4 = {
                text: "Washington D.C",
                value: false
            }],
        correctAnswer: 1,

    },
    q2 = {
        question: " What College did Leslie Knope attend?",
        answerArr: [
            option1 = {
                text: "Pawnee, IN",
                value: false
            },
            option2 = {
                text: "neighbor town, IN",
                value: true
            },
            option3 = {
                text: "New York, NY",
                value: false
            },
            option4 = {
                text: "Washington D.C",
                value: false

            },

        ]

    },
    q3 = {
        question: " What is the name of Andy's most succesful Band?",
        answerArr: [
            option1 = {
                text: "Rat Poison",
                value: false
            },
            option2 = {
                text: "Rat Mouse",
                value: false
            },
            option3 = {
                text: "Mouse Rat",
                value: true
            },
            option4 = {
                text: "Rodent Trap",
                value: false
            }]
    },
    q4 = {
        question: " Which of the following were NEVER the offical town slogan of Pawnee? ",
        answerArr: [
            option1 = {
                text: "First in Friendship, Fourth in Obesity",
                value: false
            },
            option2 = {
                text: "A Town and a Place",
                value: false
            },
            option3 = {
                text: "The Akron of Southwest Indiana",
                value: false
            },
            option4 = {
                text: "Storied Past, Bright Future",
                value: true
            }]
    },

    q5 = {
        question: " Who is Andy's alter ego",
        answerArr: [
            option1 = {
                text: "Burt Macklin",
                value: true
            },
            option2 = {
                text: "Mike Burton",
                value: false
            },
            option3 = {
                text: "Ben Houndle",
                value: false
            },
            option4 = {
                text: " Andy Dier",
                value: false
            }]
    },

    q6 = {
        question: 'What "holidy" do Tom and Donna celebrate once a year?',
        answerArr: [
            option1 = {
                text: "Galentines Day",
                value: false
            },
            option2 = {
                text: "Thier friendship aniversary",
                value: false
            },
            option3 = {
                text: "Treat yo' self!",
                value: true
            },
            option4 = {
                text: "National Parks",
                value: false
            }]
    },
    q7 = {
        question: " What is Ben's favorite food? ",
        answerArr: [
            option1 = {
                text: "Pie",
                value: false
            },
            option2 = {
                text: "Waffles",
                value: false
            },
            option3 = {
                text: "Pizza",
                value: false
            },
            option4 = {
                text: "Calzones",
                value: true
            }]
    },
    q8 = {
        question: " What is the name of Leslie's adolescent nemesis?",
        answerArr: [
            option1 = {
                text: "George Weasly",
                value: false
            },
            option2 = {
                text: "Greg Pikitus",
                value: true
            },
            option3 = {
                text: "April Ludgate",
                value: false
            },
            option4 = {
                text: "Peter Finklestein",
                value: false
            }]
    },
    q9 = {
        question: " What is Leslie's favorite food?",
        answerArr: [
            option1 = {
                text: "Ice Cream",
                value: false
            },
            option2 = {
                text: "Bacon",
                value: false
            },
            option3 = {
                text: "Waffles ",
                value: true
            },
            option4 = {
                text: "Whipped Cream",
                value: false
            }]
    },
    q10 = {
        question: " Tom invents which alcoholic beverage?",
        answerArr: [
            option1 = {
                text: "Viper Venom",
                value: false
            },
            option2 = {
                text: "Tom's Potion",
                value: false
            },
            option3 = {
                text: "Blackout Bev",
                value: false
            },
            option4 = {
                text: "Snake Juice",
                value: true
            }]
    },
    q11 = {
        question: " What is 'Jerry' Gergich's real name?",
        answerArr: [
            option1 = {
                text: "Larry",
                value: false
            },
            option2 = {
                text: "Garry",
                value: true
            },
            option3 = {
                text: "Gerry",
                value: false
            },
            option4 = {
                text: "Terry",
                value: false
            }]
    },
    q12 = {
        question: " Ben was the mayor of which Minnesota town?",
        answerArr: [
            option1 = {
                text: "Fridley",
                value: false
            },
            option2 = {
                text: "Patridge",
                value: true
            },
            option3 = {
                text: "Roseville",
                value: false
            },
            option4 = {
                text: "Eagan",
                value: false
            }]
    },


];

//when player clicks start game button
//initialize game
$("#startButton").on("click", function () {
    //display countdown = 7
    $("#timeRemaining").text(countdown);
    //display question
    $("#trivia").text(questionArr[questionNumber].question)
    //display answer options1-4
    $("#ans1").text(questionArr[questionNumber].answerArr[0].text)
    $("#ans2").html(questionArr[questionNumber].answerArr[1].text)
    $("#ans3").text(questionArr[questionNumber].answerArr[2].text)
    $("#ans4").text(questionArr[questionNumber].answerArr[3].text)
    //display qestion data
    $("#qaData").show()
    //hide startGame div
    $("#startGame").hide();

    //timeout function - see if user ran out of time 
    countdownTimer = setInterval(function () {
        // for (countdown = 25; countdown == 0; countdown++) {// does not work.. works with out but does not stop 
        countdown = countdown - 1;
        $("#timeRemaining").text(countdown);
        //IF countdown == 0 
        if (countdown == 0) {
            clearInterval(countdownTimer)
            //     userTimeout++
            userTimeout++
            console.log(userTimeout)
            //display results div with TIME OUT message
            timesUpsResults()
        }

    }, 1000)
},
    questionNumber ++

);
function questionDisplay() {
    //display countdown = 5
    $("#timeRemaining").text(countdown);
    //display question
    $("#trivia").text(questionArr[questionNumber].question)
    //display answer options1-4
    $("#ans1").text(questionArr[questionNumber].answerArr[0].text)
    $("#ans2").html(questionArr[questionNumber].answerArr[1].text)
    $("#ans3").text(questionArr[questionNumber].answerArr[2].text)
    $("#ans4").text(questionArr[questionNumber].answerArr[3].text)
    //display qestion data
    $("#qaData").show()
    //hide result div
    $("#result").hide();

    //timeout function - see if user ran out of time 
    // function timeOut(){

    countdownTimer = setInterval(function () {
        // for (countdown = 25; countdown == 0; countdown++) {// does not work.. works with out but does not stop 
        countdown = countdown - 1;
        $("#timeRemaining").text(countdown);
        //IF countdown == 0 
        if (countdown == 0) {
            clearInterval(countdownTimer)
            //     userTimeout++
            userTimeout++
            console.log(userTimeout)
            //display results div with TIME OUT message
            timesUpsResults()
        }

    }, 1000);


}

//on player click determine if choice was right or wrong
$(".answers").on("click", function () {
    //hide question screeen
    $("#qaData").hide();
    // show result screen
    $("#result").show();
    //stoptimer
    clearInterval(countdownTimer);
    //reset countdown
    countdown = 7;

}).on("click", "#ans1", function () {

    //IF userChoice == true
    if (questionArr[questionNumber].answerArr[0].value == true) {
        //playerCorrect + 1
        userCorrect++;
        console.log(" correct answer " + userCorrect);
        //display YOU ARE RIGHT message
        $("#resultMessage").text("YOU GOT IT! ")
        $("#timeRemaining").text(countdown)
        //after 3 seconds display next question
        nextQuestionTimer()
    }
    //ELSE
    else {
        //playerwrong + 1
        userWrong++
        console.log("wrong answer" + userWrong)
        //display wrong message
        $("#timeRemaining").text(countdown)
        $("#resultMessage").text("WRONG. Nice Try.")
        //display correct answer
        $("#correctAnswer").text("the correct answer was")
        //after 3 seconds display next question 
        nextQuestionTimer()
    }
    //questionNumber ++
    questionNumber++

}).on("click", "#ans2", function () {
    if (questionArr[questionNumber].answerArr[1].value == true) {
        //playerCorrect + 1
        userCorrect++;
        console.log(" correct answer " + userCorrect);
        //display YOU ARE RIGHT message
        $("#resultMessage").text("YOU GOT IT! ")
        //after 3 seconds display next question
        nextQuestionTimer()
    }
    //ELSE
    else {
        //playerwrong + 1
        userWrong++
        console.log("wrong answer" + userWrong)
        //display wrong message
        $("#resultMessage").text("WRONG. Nice Try.")
        //display correct answer
        $("#correctAnswer").text("the correct answer was")
        //after 3 seconds display next question 
        nextQuestionTimer()
    }
    //questionNumber ++
    questionNumber++

}).on("click", "#ans3", function () {
    if (questionArr[questionNumber].answerArr[2].value == true) {
        //playerCorrect + 1
        userCorrect++;
        console.log(" correct answer " + userCorrect);
        //run result display function
        $("#resultMessage").text("YOU GOT IT! ")
        //after 3 seconds display next question
        nextQuestionTimer()
    }
    //ELSE
    else {
        //playerwrong + 1
        userWrong++
        console.log("wrong answer" + userWrong)
        //display wrong message
        $("#resultMessage").text("WRONG. Nice Try.")
        //display correct answer
        $("#correctAnswer").text("the correct answer was")
        //after 3 seconds display next question 
        nextQuestionTimer()
    }
    //questionNumber ++
    questionNumber++

}).on("click", "#ans4", function () {
    if (questionArr[questionNumber].answerArr[3].value == true) {
        //playerCorrect + 1
        userCorrect++;
        console.log(" correct answer " + userCorrect);
        //display right message 
        $("#resultMessage").text("YOU GOT IT! ")
        //after 3 seconds display next question
        nextQuestionTimer()
    }
    //ELSE
    else {
        //playerwrong + 1
        userWrong++
        console.log("wrong answer" + userWrong)
        //display wrong message
        //display wrong message
        $("#resultMessage").text("WRONG. Nice Try.")
        //display correct answer
        $("#correctAnswer").text("the correct answer was")
        //after 3 seconds display next question
        nextQuestionTimer()
    }
    //questionNumber ++
    questionNumber++

});

function timesUpsResults() {
    //hide question screeen
    $("#qaData").hide();
    // show result screen
    $("#result").show();
    //display results div with TIME OUT message
    $("#resultMessage").text("Out of Time")
    //display correct answer
    $("#correctAnswer").text("the correct answer was")
    //display 0 time 
    $("#timeRemaining").text(countdown)
    //after 3 seconds display next question 
    nextQuestionTimer()
};

function nextQuestionTimer() {
    resultsTimer = setInterval(function () {
        //hide results show question             
        $("#results").hide();
        // show question screen
        $("#qaData").show();
        //reset countdown
        countdown = 7;


    }, 3000);

    if (questionNumber == 11) {
        endGame()        
    }
    else
    questionDisplay();       
};




// when questions done... display game over screen not working 
function endGame() {
    //hide final result screen
    $("#result").hide();
    //hide question div 
    $("#")
    //display game over screen 
    $("#gameOver").show();
    //display correct answer total 
    $("#correct").text("Correct Answers: " + userCorrect);
    //display incorrect answer total 
    $("#wrong").text("Incorrect Answers : " + userWrong)
    //display unanswered total 
    $("#unanswered").text("Unanswered : " + userTimeout)
}

})
