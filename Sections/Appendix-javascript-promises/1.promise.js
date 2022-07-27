const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Pass')
    } else {
        reject('Error')
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Al SalamuA\'ala\'ikom')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Ahlan')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'It\'t me you looking for!')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })

// What happened Above that the promise waited untile the whole 
// promises finished processing and then loaded