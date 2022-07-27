const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

// Promising
Promise.all(urls.map(url => {
    fetch(url).then(resp => resp.json())

})).then(array => {
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
}).catch('Error')


// Async-Await
const promises = async () => urls.map(url => fetch(url))
const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(await promises())
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('ummm', err)
    }
}