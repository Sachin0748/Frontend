import readline from "readline-sync";
let year = parseInt(readline.question("Enter year : "));

if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
  console.log("Leap year");
}else{
  console.log("Not a Leap Year");
}