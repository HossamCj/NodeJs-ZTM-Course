// Copy all the console to test it

// Promise way
// Here we try to taking a response by using fetch() method and passing an API bringing some users data
// and then transferring these data to json, and after all of this printing it to the console
fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json)
    .then(console.log)


// Async-Await way
// Here we doing the samething but in async-await function way
// We creating an async function buy using asyc key word before the function
// And we created a response variable that assign to await fetch(throwing the API that we want)
// Then storing thet response that came from await fetch() and transferring it to json data
// After processing all of this response and storing data, we printing it to the console
// Then call it as a function when ever we need
async function fetchUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json()
    console.log(data)
}
fetchUsers()