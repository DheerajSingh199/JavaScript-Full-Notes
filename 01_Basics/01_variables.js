// 1. Let, const, var 

const accoundId = "14431"
let accountEmail = "ayushyadav@gmail.com"
var accountPassword = "1234"
accountCity = "Azamgarh" /* We can declare a variable by directly writing it's name but it's not a good
method. */

// Let's change these,
// accoundId = "15531" // This will throw an error cause changing Const variable is not possible.
accountEmail = "amanyadav@gmail.com"
accountPassword = "4321"
accountCity = "Varanasi"

console.table([accountEmail, accountPassword, accountCity]) /* Console.table helps us to write multiple 
variables in it using [] square bracets. */

//1. Either you put ; semicolon in end or not it doesn't matter.
//2. Const, let, var these are keyword.

// const is used to declare variables that are meant to remain constant (unchanged) throughout the execution of a program. Once a value is assigned to a const variable, it cannot be reassigned.
// let is used to declare variables that are block-scoped (limited to the block in which they are defined) and can be reassigned new values.
// (OLDER DONT USE) var is the older way of declaring variables in JavaScript. It's function-scoped rather than block-scoped, and it can be reassigned and re-declared within its scope.
