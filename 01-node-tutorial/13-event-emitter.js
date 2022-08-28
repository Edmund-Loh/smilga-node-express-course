// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
let EventEmitter = require('events');

let customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
})

customEmitter.on('event', () => {
  console.log('some other logic here');
})

customEmitter.on('some other event', (...args) => {
  console.log('a listener for some other event...');
  let params = args.join(', ');
  console.log(`It has these params: ${params}`);
})

customEmitter.emit('response', 'john', 34);

customEmitter.emit('event');

customEmitter.emit('some other event', 1, 2, 3, 4, 5, 6, 7);