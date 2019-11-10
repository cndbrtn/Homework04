var questions = [
{
    title: "1. How do you call a function?",
    choices: ["functionName[]", "functionName{}", "functionName;", "functionName()"],
    answer: "functionName()"
},

{
    title: "2. What's the simplest way to grab different elements spanning classes and ids?",
    choices: ["getElementbyId()", "querySelector()", "getElement()", "getElementsByClass()"],
    answer: "querySelector()"
},

{ 
    title: "3. If you console log var varName; what will you get?",
    choices: ["true", "null", "false", "undefined"],
    answer: "undefined"
},

{
    title: "4. What is the purpose of Math.floor()?",
    choices: ["Generate even numbers", "Round up", "Round down", "Generate odd numbers"],
    answer: "Round down"
},

{
    title: "5. How would you add/change text in a <p> tag?",
    choices: ['setAttribute("value", "change text")', 'textContent("value", "change text")', 'textContent = "change text"', 'appendChild("change text")'],
    answer: 'textContent = "change text"'
}]

console.log(questions)