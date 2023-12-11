class Queue {
  constructor() {
    this.queue = [];
  }
  //For adding the element in the queue
  enqueue(ele) {
    return this.queue.push(ele);
  }
  //deque for remove the element from the front side
  dequeue() {
    if (this.isEmpty()) {
      return "Sorry the queue is alerady empty!";
    }
    return this.queue.shift();
  }
  //Peek
  peek() {
    if (this.isEmpty()) {
      return "Sorry the queue is alerady empty!";
    }
    return this.queue[0];
  }
  //for check the the queue is empty or not
  isEmpty() {
    return this.size() === 0;
  }
  //for give size of the queue
  size() {
    return this.queue.length;
  }
  //Print queue
  printQueue() {
    let print = "";
    for (let i = 0; i < this.size(); i++) {
      print += this.queue[i] + ", ";
    }
    return print;
  }
}

const myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.printQueue());
