const EventEmitter = require('events')
const celebrity = new EventEmitter()


// Subscribe to celebrity for observer 1
celebrity.on('race win', () => {
    console.log('Congratulations! I support you Dude!')
})

// Subscribe to celebrity for observer 2
celebrity.on('race win', () => {
    console.log('HEEEY, This is awesome, keep going!')
})


celebrity.emit('race win')