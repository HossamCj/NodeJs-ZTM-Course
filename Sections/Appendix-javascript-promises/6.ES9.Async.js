// Finally 
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array => {
        // throw Error
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])

    })
    .catch(err => console.log('umm, Fix it', err))
    .finally(() => console.log('Extra data'))