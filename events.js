const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

setTimeout(function() {
    eventEmitter.emit('newsevent');
},5000)

setTimeout(function() {
    eventEmitter.emit('newsevent2',2,3);
},7000)


eventEmitter.on('newsevent',() => {
    console.log('Event object received.')
})

eventEmitter.on('newsevent2',(a,b) => {
    console.log('Event object received.',a,b);
})

