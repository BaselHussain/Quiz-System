import inquirer from "inquirer";
console.log("Welcome to Our Typecript Quiz");
var question1 = await inquirer.prompt([{
        name: "option",
        type: "list",
        message: "Please select the topic on which you want to attemot quiz",
        choices: ["Typescript", "Python"]
    }]);
if (question1.option === "Typescript") {
    var questions = [{
            message: "Which of the following companies has developed Typescript?",
            choices: ["Amazon", "Microsoft", "Typescript", "Oracle"],
            correctAnswer: "Microsoft"
        }, {
            message: "What is the typing principle of typescript?",
            choices: ["Gradula", "Duck", "Dynamic", "All of the above"],
            correctAnswer: "Dynamic"
        }, {
            message: "Which of the following filename is the extension of typescript?",
            choices: [".ts", ".tsx", ".tsx", ".nod"],
            correctAnswer: ".ts"
        }, {
            message: "Which of the following is not the primitive data type?",
            choices: ["array", "string", "boolean", "number"],
            correctAnswer: "array"
        }, {
            message: "Which of the following computer languages has influenced the creation of typescript ?",
            choices: ["html", "javascript", "css", "python"],
            correctAnswer: "javascript"
        }];
    var score = 0;
    for (let { choices, message, correctAnswer } of questions) {
        const answer = await inquirer.prompt([{
                type: "list",
                name: "answer",
                message: message,
                choices: choices
            }]);
        if (answer.answer === correctAnswer) {
            score++;
            console.log("Correct answer");
        }
        else {
            console.log(("Incorrect answer"));
        }
    }
    console.log("Quiz completed");
    console.log(`Your score is ${score}`);
}
else {
    var questions = [{
            message: "What is the result of 5 + 3 * 2 in Python?",
            choices: ["16", "11", "10", "13"],
            correctAnswer: "11"
        }, {
            message: "Which of the following data types is mutable in Python?",
            choices: ["Tuple", "String", "List", "Set"],
            correctAnswer: "List"
        }, {
            message: "What does the range() function in Python return?",
            choices: ["A list of numbers", "A tuple of numbers", "An iterator", " A dictionary of numbers"],
            correctAnswer: "An iterator"
        }, {
            message: "What does the append() method do in Python lists?",
            choices: ["Removes an item from the list ", "Adds an item to the end of the list", "Reverses the order of the list", "Sorts the items in the list"],
            correctAnswer: "Adds an item to the end of the list"
        }, {
            message: "Which keyword is used to define a function in Python?",
            choices: ["define", "function ", "def", "define_function"],
            correctAnswer: "def"
        }];
    var score = 0;
    for (let { choices, message, correctAnswer } of questions) {
        const answer = await inquirer.prompt([{
                type: "list",
                name: "answer",
                message: message,
                choices: choices
            }]);
        if (answer.answer === correctAnswer) {
            score++;
            console.log("Correct answer");
        }
        else {
            console.log(("Incorrect answer"));
        }
    }
    console.log("Quiz completed");
    console.log(`Your score is ${score}`);
}
