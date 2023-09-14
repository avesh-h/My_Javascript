const emitter = require('./createEvents');

//Click event called in another file
emitter.emit('click', { name: 'avesh', profession: 'developer' });
