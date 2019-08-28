let nr_problems = 100;

nr_problems - nr_problems - 1

let sentence = "I've got " + nr_problems + " nr_problems, but using variables ain't one!"
 
console.log(sentence)

// Function - Return statements and values are optional
function sayHello() {
    console.log('Hello,')
}
function sayWelcome() {
    console.log('Welcome to the console.')
    return
}

// Call the functions
let result = sayHello() // result === undefined
result = sayWelcome() // result === undefined