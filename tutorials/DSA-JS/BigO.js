// BIg notation Time complexity(time to take complete the operations)

function someOperation(n) {
  return (n * (n + 5)) / 2; //O(1) the number of operation are not dependent on args operations = 3
}

function anathorOperation(n) {
  // O(n) are dependent on the number of arg if n =5 then loop will run 5 time and total number of operation will be O(n)  operations = 5

  for (let i; i < n; i++) {
    console.log("i", i);
  }
}

//As you can see there are two different operation, The big O notation is that someOperation function has constant number of operation it will not depend upon the input.

//But anathorOperation will dependent on the input that it recieve example if input is 100 then operations will be 100

// Now Big o notation space complexity

const spaceOne = (arr) => {
  //Not bad space complexity because it is not depend upon the input it return only single variable
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += 0;
  }
  return sum;
};

const spaceTwo = (n) => {
  //Bad space complexity = O(n) because it returns the whole array in function inshort it requires more space in memory becausse string , object , array always have multiple length thats why it require multiple space for that
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i * n);
  }
  return arr;
};

console.log(spaceOne([2, 3, 4, 5]));
console.log(spaceTwo(5));
