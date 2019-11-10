// Let's make a quiz! About JavaScript!

// Let's make some variables!
var secondsLeft = 75;
// var corrent = ;
// var incorrect = ;
// var score = correct - incorrect
// var timeBonus = ;



// element creators
var divElArr = {
    div1: document.createElement("div"),
    div2: document.createElement("div"),
    div3: document.createElement("div"),
    div4: document.createElement("div"),
}
// this creates a <div> to put each <p> answer in
var pEl = document.createElement("p"); // this creates a new <p> to put the answer in

// element grabbers
var startbtn = document.querySelector("#startbtn"); // this grabs the start button for the click eventListener
var title = document.querySelector(".title");  // this is the main content div
var h1El = document.querySelector("h1"); // this is where each question goes
var container = document.querySelector(".container");
var rainbow = document.querySelector("#red");

var adivArr = ["adiv1", "adiv2", "adiv3", "adiv4"];



function playGame() {
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
    
    // for (var i = 0; i < adivArr.length; i++){
    //     divElArr[i].id = adivArr[i];
    // }
    
    

    
    
    
}
    
    // // First we need a timer with setInterval()
    // var interval = setInterval(function(){
        //     secondsLeft--;
//     console.log("tick: ", secondsLeft);
//     if (secondsLeft === 0) {
    //       clearInterval(interval)
//       console.log("Game Over")
//     }
//   }, 1000)

// // Then a timeout to end the quiz and display score
// setTimeout(function(){
    //     console.log("Timeout complete")
    //     h1El.textContent = "GAME OVER!"
    // }, 75000)
    
    // }
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