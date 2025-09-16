//compare arguments v/s rst parameter//
function showArgs(){
    console.log(arguments); //not an array
    
}

showArgs(1,2,3,4);

function showRest(...arg){
    console.log(arg); //real array
    
}
 
showArgs(1,2,3,4,5)
