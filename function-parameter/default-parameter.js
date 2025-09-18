//A default parameter lets you set a default value for a function parameter if no value (or undefined) is provided when the function is called.
function greet( name = "avanthika"){
    console.log("Hello, "+ name + "!");
    
}
greet();
greet("hima");

