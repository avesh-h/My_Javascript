const MyEventEmitter = require('./event');

//Create the event emitter from this
let emitter = new MyEventEmitter();

emitter.subscribe('click', (data) => {
  //In basic case when the click event will happened what you want to do in this event
  //So all logic will be here and what you want to do with this data you receive!
  console.log('click event fired! your data is', data);
});

emitter.subscribe('send', () => {
  console.log('sended!');
});

module.exports = emitter;
