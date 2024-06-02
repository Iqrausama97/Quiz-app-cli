import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.redBright("\nWelcome to daily Quiz"));
console.log(chalk.magentaBright("\nEach Question is of 10 marks\n"));
let marks = 0;
let userInput = await inquirer.prompt([
    {
        type: "list",
        name: "Question1",
        message: "Which is the capital of Pakistan?",
        choices: ["Karachi", "Larkana", "Islamabad", "Lahore"]
    },
    {
        type: "list",
        name: "Question2",
        message: "What is the longest river in the world?",
        choices: ["Nile", "Darya-e-Sindh", "Jehlam", "Chanab"]
    },
    {
        type: "list",
        name: "Question3",
        message: "What is the highest point of the Karakoram Range?",
        choices: ["Mount Everest", "K2", "Nanga Parbat", "Broad Peak"]
    },
    {
        type: "list",
        name: "Question4",
        message: "In which year did the Titanic sink?",
        choices: [1910, 1911, 1912, 1913]
    },
    {
        type: "list",
        name: "Question5",
        message: "What is the National Sport Game of Pakistan?",
        choices: ["Cricket", "Tennis", "Badminton", "Field Hockey"]
    }
]);
//Destructuring
const { Question1, Question2, Question3, Question4, Question5 } = userInput;
let correctOptions = ['Islamabad', 'Nile', 'K2', 1912, 'Field Hockey'];
if (Question1 === "Islamabad")
    marks += 10;
if (Question2 === "Nile")
    marks += 10;
if (Question3 === "K2")
    marks += 10;
if (Question4 === 1912)
    marks += 10;
if (Question5 === "Field Hockey")
    marks += 10;
console.log(marks);
function myAnswer() {
    console.log(`\n Correct Option :`, correctOptions);
    if (marks == 50) {
        console.log(chalk.bold.bgGray.italic(`\nCongratulations! You have got ${marks} marks.`));
    }
    else if (marks > 0) {
        console.log(chalk.bold.bgGray.italic(`\nYou have got ${marks} marks out of 50.`));
    }
    else {
        console.log(chalk.bold.bgGray.italic(`\nUnfortunately! You got ${marks} marks out of 50.`));
    }
}
;
myAnswer();
