// usefull when comparing a single value against a multiple conditions//
const prompt = require('prompt-sync')();

let day = prompt("enter the day:")

switch (day) {
    case "Monday":
        console.log("start of work week");
        break;
    case "Friday":
        console.log("end of the work week");
        break;
    case "Sunday":
        console.log("Weekend!");
        break;
        
    default:
        console.log("regularday");
        
        break;
}
