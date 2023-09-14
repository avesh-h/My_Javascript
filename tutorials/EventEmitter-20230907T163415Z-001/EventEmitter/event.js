class MyEventEmitter {
  constructor() {
    this.events = {};
  }

  //For call that particular event
  emit(eventName, data) {
    const event = this.events[eventName];

    if (event) {
      //so the foreach is for like is there any event call "click" and it fired, so the foreach will make call all the function that event name is "click"
      event.forEach((fn) => {
        fn.call(null, data);
      });
    }
  }

  //Added the new event in the instance
  subscribe(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);

    return () => {
      this.events[eventName] = this.events[eventName].filter(
        (eventFn) => fn !== eventFn
      );
    };
  }
}

module.exports = MyEventEmitter;
