//its a way to define function inside an expression& assign it to a variable
// keyfeatures:-
// 1. anonymous / named function 
// 2. its not hoisted
// 3.can be used as argument
// 4. can be assigned to variable/object
const SayHello = function(){
    console.log("Hello!");    
}

SayHello();
  
// -- example-object --
const math = {
    add: function(a,b){ //parameter
        return a + b;
    }
        
    }
    console.log(math.add(5,3)); //argument
    
