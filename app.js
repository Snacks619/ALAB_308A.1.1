// Declare a global counter variable

let globalCounter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.

// Surround the initial function call in a try/catch block.
try {
function increment (){
    globalCounter++;
    console.log(globalCounter)
    increment()

    }
    // Within the catch, log the error and the value of the counter variable.
} catch (error) {
    console.log("This is where it Ends")

}
