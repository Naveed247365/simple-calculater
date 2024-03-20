#! /usr/bin/env node
//shabang
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter Frist Number:", type: "number", name: "Fristnumber" },
    { message: "Enter second Number:", type: "number", name: "secondnumber" },
{ message: "select one of the opearators to parform opreation",
type: "list",
name: "opearator",
choices: ["addition", "subtraction", "multiplication", "division"],
},

]);
//canditional statement
if (answer.opearator === "addition") 
{console.log(answer.Fristnumber + answer.secondnumber);}

else if (answer.opearator === "subtraction") 
{console.log(answer.Fristnumber - answer.secondnumber);}

else if (answer.opearator === "multiplication") 
{console.log(answer.Fristnumber * answer.secondnumber);}

else if (answer.opearator === "division") 
{console.log(answer.Fristnumber / answer.secondnumber);}

else {console.log("please select valid operation");}