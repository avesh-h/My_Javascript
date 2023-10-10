// Set
//it will always store unique value
// const setArr = new Set([2, 3, 8, 4, 8]);

// console.log("arr", setArr);
// if (setArr.has(2)) {
//   setArr.delete(2);
// }

// console.log(setArr.entries());

// for (const entry of setArr.entries()) {
//   console.log("entry", entry[0]);
// }

//Map
//It always work like it will store the data in Object.entries form which the array of key and value like this[["key","value"],["key","value"]]
const mapArr = new Map([
  ["asda", "ascs"],
  ["xzxc", "cxvc"],
]);
console.log("mapArr", mapArr);

console.log("--->", mapArr.entries());

// so main thing is where we gonna use for this map function/

// So like whenever you have object in project and you want add attach extra information with that perticular object then map function might be useful

// example:

const obj1 = { name: "user", age: "24" };
const obj2 = { name: "unknown", age: "34" };
const arr1 = ["captain america", "iron man", "thor", "hulk"];
const arr2 = ["batman", "flash", "superman", "aquaman"];

// and let's say i want to attach extra information with obj1 and obj2 and both infromation will be private

const doNothing = () => {};

const objData = new Map([
  [obj1, { birthYear: "1998", email: "user@gmail.com" }],
  [obj2, { birthYear: "1989", email: "unknoawn@gmail.com" }],
  [arr2, { studio: "DC" }],
  [arr1, { studio: "MCU" }],
  [doNothing, "just for delete"],
]);

//See it can also store function refrence as a key for the object
console.log(objData.get(doNothing));

//Then you gonna see output this { { name: 'user', age: '24' } => { birthYear: '1998' } }

// that means we can add whole object as a key for the birthYear

// so basically Map function let you use Object as a key for the value you want to add in above example you can see

console.log(objData);

//How we gonna access perticular value from the map

//As below you can see for get the value of the map birthyear we use that perticular use object for getting the value or extra information of that user.

console.log(objData.get(obj1)); //access from object refrence
console.log(objData.get(arr1)); //access from array refrence

//Inshort it's special type of object that let's you use the object refrence or anything[array,function,object,symbol] you can use as key for perticular object

// Actually in key it store the refrence of that object in map object so it can access based on refrence
