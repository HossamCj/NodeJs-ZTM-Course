// Copy all the console to test it

// Promise way
fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json)
    .then(console.log)

// Async-Await way
async function fetchUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json()
    console.log(data)
}
fetchUsers()