// 1. How do you call a function?
        //functionName[] x
        //functionName{} x
        //functionName() o

    // 2. What would you use to grab anything from an element to a class?
        //getElementById()      x
        //querySelector()       o
        //getElementsByClass()  x

    // 3. If you console log var = variableName; what will you get?
        //true      x
        //null      x
        //undefined o

    // 4. What is the purpose of Math.floor()?
        //creates only even numbers x
        //rounds up                 x
        //rounds down               o

    // 5. How would you add/change text in a <p> tag via js?
        // pVar.setAttribute("value", "change the text") x
        // pVar.textContent("change the text")           x
        // pVar.textContent = "change the text"          o

var questions = [
{
    title: "How do you call a function",
    choices: ["functionName[]", "functionName{}", "functionName;", "functionName()"],
    answer: "functionName()"
},

{
    title: "What's the simplest way to grab different elements spanning classes and ids?",
    choices: ["getElementbyId()", "querySelector()", "getElement()", "getElementsByClass()"],
    answer: "querySelector()"
},

{ 
    title: "If you console log var varName; what will you get?",
    choices: ["true", "null", "false", "undefined"],
    answer: "undefined"
},

{
    title: "What is the purpose of Math.floor()?",
    choices: ["Generate even numbers", "Round up", "Round down", "Generate odd numbers"],
    answer: "Round down"
},

{
    title: "How would you add/change text in a <p> tag?",
    choices: ['setAttribute("value", "change text")', 'textContent("value", "change text")', 'textContent = "change text"', 'appendChild("change text")'],
    answer: 'textContent = "change text"'
}

]

console.log(questions)