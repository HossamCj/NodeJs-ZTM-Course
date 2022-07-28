// 1- Callback Queue - Task Queue
setTimeout(() => console.log('1', 'This is come after Job Queue'))
setTimeout(() => console.log('2', 'This come after Job Queue'))

// 2- Job Queue - Microtask Queue
Promise.resolve('Hello from Promise(Job Queue').then((data) => {
    console.log('3', data)
})

// 3- This is call first because it's not asyncronous
console.log("4", "is a crwod")