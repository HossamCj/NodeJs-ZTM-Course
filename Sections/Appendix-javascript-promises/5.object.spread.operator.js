// // Object spread operator exercise 1
const animals = {
    tiger: 20,
    lion: 18,
    monkey: 200,
    zebra: 66,
}

// Object spread operator exercise 2
const array = [1, 2, 3, 4, 5]
function sum(a, b, c, d, e) {
    return a + b + c + d + e
}

// By using (...) this is mean take the data and spread it on the arguments
// console.log(sum(...array))

// Object spread operator exercise 3
function objectOperator(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

// Here we assigned 3 variables the first 2 each one equal 1 variable data(tiger='tiger: value', lion='lion: value')
// and we used(...rest) to assign rest variable to the rest of the array(...rest='monkey: value', 'zebra: value')
const { tiger, lion, ...rest } = animals
console.log(objectOperator(tiger, lion, rest))