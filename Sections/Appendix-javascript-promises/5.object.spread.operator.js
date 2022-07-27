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

// console.log(sum(...array))

// Object spread operator exercise 3
function objectOperator(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const { tiger, lion, ...rest } = animals
console.log(objectOperator(tiger, lion, rest))