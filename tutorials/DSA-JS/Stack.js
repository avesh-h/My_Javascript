class Stack {
  constructor() {
    this.stack = [];
  }

  //for push the value in stack
  push(val) {
    return this.stack.push(val);
  }
  //pop
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty, Can't perform pop";
    }
    return this.stack.pop();
  }

  //   peek : - it always give top element from the array
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty, Can't perform peek";
    }
    return this.stack[this.size() - 1];
  }

  //isEmpty : to check if the stack is empty
  isEmpty() {
    return this.size() === 0;
  }

  //   size:- always give us the length of the stack
  size() {
    return this.stack.length;
  }

  //Print stack : - print the all the element of the stack
  printElements() {
    // let currEle;
    for (let i = 0; i < this.stack.length; i++) {
      //   currEle = this.stack[i];
      console.log(this.stack[i]);
    }
  }
}

const myStack = new Stack();
// myStack.push(9);
// myStack.push(40);
// myStack.push(5);
// myStack.push(8);
// console.log(myStack.size());
// console.log(myStack.printElements());
// myStack.pop();
// console.log(myStack.peek());

// example

// const reverseWords = (str) => {
//   // const updatedStrArr = [...new Set(str.split(" "))].filter((e) => e);
//   const stack = [];
//   for (let i of str.split(" ")) {
//     stack.push(i);
//   }
//   let finalS = "";
//   while (stack.length) {
//     const currEle = stack.pop();
//     if (currEle) {
//       finalS += " " + currEle;
//     }
//   }
//   return finalS.trim();
// };
// console.log(reverseWords("the  sky is  blue "));

// -----------------QUestion
const bracesFunc = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (isEmpty(stack)) {
        return false;
      }
      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
};

//for check stack length
function isEmpty(stack) {
  return stack.length === 0;
}

console.log(bracesFunc("([]{})"));
