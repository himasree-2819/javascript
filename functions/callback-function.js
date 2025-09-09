//function that are passed as arguments to other functions
//handle as asynchronous operation
//avoid blocking code execution

function greetUser(name) {
    console.log(`Hello,${name}`);

}

//this function takes another function (callback) as parameter
function getUserInput(callback) {
    const name = "sreeniketh";
    callback(name);
}
//getuserinput pass greetUser as a callback
getUserInput(greetUser)