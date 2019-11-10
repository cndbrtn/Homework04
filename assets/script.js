// Let's make a quiz! About JavaScript!

// Let's make some variables!
var secondsLeft = 75;
var correct = {
    answer1: questions[0].answer, 
    answer2: questions[1].answer, 
    answer3: questions[2].answer, 
    answer4: questions[3].answer, 
    answer5: questions[4].answer
    }
console.log(correct)

var score;
var userChoice;



// element creators
var divElArr = {
    div1: document.createElement("div"),
    div2: document.createElement("div"),
    div3: document.createElement("div"),
    div4: document.createElement("div"),
    countdiv: document.createElement("div")
}

// this creates a <div> to put each <p> answer in
var pEl = document.createElement("p"); // this creates a new <p> to put the answer in

// element grabbers
var startbtn = document.querySelector("#startbtn"); // this grabs the start button for the click eventListener
var title = document.querySelector(".title");  // this is the main content div
var h1El = document.querySelector("h1"); // this is where each question goes
var container = document.querySelector(".container");
var rainbow = document.querySelector("#red");
var scorebox = document.querySelector(".scorebox");
var highbtn = document.querySelector("#highbtn");
var scorediv = document.querySelector("#scorediv")


var adivArr = ["adiv1", "adiv2", "adiv3", "adiv4"];
var i = 0;

function playGame() {
    score = 0;
    scorediv.textContent = "Your Score:" + score;
    // With this function the first thing it does is rewrite the html to give us questions[0]
    h1El.textContent = questions[0].title;
    h1El.setAttribute("style", "font-family: 'Press Start 2P', 'Times New Roman', cursive;");
    h1El.setAttribute("style", "font-size: 18pt;");
    // then remove the rainbow container with the start quiz button
    container.removeChild(rainbow);
    // then add all the new content somehow from the question array
    container.appendChild(divElArr.div1).id = "adiv1";
    document.querySelector("#adiv1").textContent = questions[0].choices[0];
    container.appendChild(divElArr.div2).id = "adiv2";
    document.querySelector("#adiv2").textContent = questions[0].choices[1];
    container.appendChild(divElArr.div3).id = "adiv3";
    document.querySelector("#adiv3").textContent = questions[0].choices[2];
    container.appendChild(divElArr.div4).id = "adiv4";
    document.querySelector("#adiv4").textContent = questions[0].choices[3];
    
    
    
    title.appendChild(divElArr.countdiv).id = "countdiv";
    
    
    // First we need a timer with setInterval()
    var interval = setInterval(function(){
        secondsLeft--;
        // console.log("tick: ", secondsLeft);
        document.querySelector("#countdiv").textContent = "Time Left: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(interval);
            console.log("Game Over");
            document.querySelector("#countdiv").textContent = "GAME OVER";
        }
    }, 1000);
    
    // Then a timeout to end the quiz and display score
    setTimeout(function(){
        console.log("Timeout complete")
        h1El.textContent = "GAME OVER!"
    }, 75000);
    
    // Next an eventListener for div clicks
    container.addEventListener("click", function(event){
        event.stopPropagation();
        // console.log(event);
        userChoice = event.target.textContent;
        if (event.target.matches("div")) {
            i++;
            console.log(i)

                if (i === 1){
                h1El.textContent = questions[i].title;
                document.querySelector("#adiv1").textContent = questions[i].choices[0];
                document.querySelector("#adiv2").textContent = questions[i].choices[1];
                document.querySelector("#adiv3").textContent = questions[i].choices[2];
                document.querySelector("#adiv4").textContent = questions[i].choices[3];
            }
                if (i === 2){
                h1El.textContent = questions[i].title;
                document.querySelector("#adiv1").textContent = questions[i].choices[0];
                document.querySelector("#adiv2").textContent = questions[i].choices[1];
                document.querySelector("#adiv3").textContent = questions[i].choices[2];
                document.querySelector("#adiv4").textContent = questions[i].choices[3];
            }
                if (i === 3){
                h1El.textContent = questions[i].title;
                document.querySelector("#adiv1").textContent = questions[i].choices[0];
                document.querySelector("#adiv2").textContent = questions[i].choices[1];
                document.querySelector("#adiv3").textContent = questions[i].choices[2];
                document.querySelector("#adiv4").textContent = questions[i].choices[3];
            }
                if (i === 4){
                h1El.textContent = questions[i].title;
                document.querySelector("#adiv1").textContent = questions[i].choices[0];
                document.querySelector("#adiv2").textContent = questions[i].choices[1];
                document.querySelector("#adiv3").textContent = questions[i].choices[2];
                document.querySelector("#adiv4").textContent = questions[i].choices[3];
            }

                if (i > 4) {
                    h1El.textContent = "Game Over!"
                    container.removeChild(document.querySelector("#adiv1"));
                    container.removeChild(document.querySelector("#adiv2"));
                    container.removeChild(document.querySelector("#adiv3"));
                    container.removeChild(document.querySelector("#adiv4"));

                    document.querySelector("#countdiv").textContent = "You Finished!";
                    document.querySelector("#scorediv").textContent = "Final score:" + score;
                    clearInterval(interval);
                    var userScore = prompt("Enter your initials to save your score!")


                }

            if (userChoice === correct.answer1 || userChoice === correct.answer2 || userChoice === correct.answer3 || userChoice === correct.answer4 || userChoice === correct.answer5) {
                score = score + 20;
                console.log("correct! you chose", userChoice);
                console.log("score: ", score);
            }
            
            else {
                console.log("worng!")
                score = score - 10;
                console.log("score: ", score);
                secondsLeft = secondsLeft - 5;
                console.log("seconds left: ", secondsLeft)
            }

            
            
        }
    })    
}

// that timer needs to count down with the ability to remove time based on user input

    // Then we need to keep score
    // score is modified by user input based on correct or incorrect answers
    // 10 questions worth max 10 points each to = 100
    
    // We need an event to start the game!
    
    startbtn.addEventListener("click", playGame);
    // We need a series of questions
    
    // questions stored in questions.js
    
    // followed by events to track answers given via radio dial button thingie?
    
    // Then conditions to give points for correct answers
    
    // Or penalties for incorrect answers
    
    // Once complete we need something spit out score!
    
    // And finally something to store the user's score locally!










    // // FUCKED UP CODE THAT DIDN'T WORK
    // // THEN we add a div per answer using insertBefore 
    // // (but we're inserting it before the "nextSibling" of the hiEl which doesn't exist so it's appending AFTER the h1El)
    // // these are our div grabbers for our answers to go in
    
    // // var adiv2 = document.querySelector("#adiv2");
    // // var adiv3 = document.querySelector("#adiv3");
    
    // // var answer1 = document.querySelector("#answer1"); // these are our text answer grabbers
    // // var answer2 = document.querySelector("#answer2");
    // // var answer3 = document.querySelector("#answer3");
    // // var answer4 = document.querySelector("#answer4");
    
    // // adiv1.appendChild(pEl).id = "answer1";
    // // title.insertBefore(answerdiv, adiv1.nextSibling).id = "adiv2";
    // // title.insertBefore(answerdiv, adiv2.nextSibling).id = "adiv3";
    // // title.insertBefore(answerdiv, adiv3.nextSibling).id = "adiv4";
    
    // // var adiv4 = document.querySelector("#adiv4");
    
    
    
    
    
    // // adiv1.appendChild(makeAnswerList);
    // // answer1.setAttribute("type", "radio");
    // // answer1.setAttribute("value", questions[0].choices[0]);
    // // title.insertBefore(answer1P, answer1.nextSibling).id = "answer1P";
    // var a1p = document.querySelector("#answer1P");
    // var a1text = document.createTextNode(questions[0].choices[0]);
    // // a1p.appendChild(a1text);