const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

// Promising
// Here we promising all of these links by looping in the urls array and bringing each url
// in individual way then transfer these data to json data
Promise.all(urls.map(url => {
    fetch(url).then(resp => resp.json())
// After that we bringing the array=(results of the response in json)
// Then printing specific data from each individual API that came from fetch respons as a json data
})).then(array => {
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
// Here if there's any Error above it goign to skip any action and then catch it by the method
// in next line
}).catch('Error')



// Async-Await
// Here we doing the samething but in Async-Await way
// By storing the data we need to promise it in a variable and assign to Async function
// and mapping the data that you want to make a promise to it
// then bringing the responses in individual way using fetch(url)
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