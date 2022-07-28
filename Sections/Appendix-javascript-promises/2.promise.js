const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]


Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('Error'))

// What happened is that we promising the urls together and making a for loop
// by maping them, then throw it to fetch method to bring a response
// Then take these response and transfer it to json data
// and  the last .then() bringing specific data as mentioned above after processing everything