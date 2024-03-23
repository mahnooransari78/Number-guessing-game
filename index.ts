#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() *6+1) ;


const answer = await inquirer.prompt([
 {
    name : "userGuessNumber",
    type : "number",
    message : "Please Guess a Number between 1-6 :",
 }
]);
if ( answer.userGuessNumber === "randomNumber") {
    console.log(" Congratulation 🎉🥳! You guesss correct number👍");
} else {
    console.log("💀Aww ⚠ ! You guess wrong number😔");
}