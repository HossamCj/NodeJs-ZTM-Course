// For Await Of - function
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

// We looping on the array using "for (object of array)"
// Then printing it 
const loopThroughUrls = url=> {
    for (url of urls) {
        console.log(url)
    }
}

loopThroughUrls()


const promises = async () => urls.map(url => fetch(url))
const getData = async () => {
    try {
        const [users, posts, albums] = await Promise.all(await promises())
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('ummm', err)
    }
}


const getData2 = async () => {
    // Here we doing the same thing but more smarter and with short code
    // as the variable promises before getData()
    const arrayOfPromises = urls.map(url => fetch(url))
    // Here we making a for-await-of loop
    // That making a loop of the arrayOfPromises
    // And then sorting each response in data variable after transfer it to json data
    // Then console it
    for await (let request of arrayOfPromises) {
        const data = await request.json()
        console.log(data)
    }
}