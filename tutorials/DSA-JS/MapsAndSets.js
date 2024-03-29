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

// const doNothing = () => {};

// const objData = new Map([
//   [obj1, { birthYear: "1998", email: "user@gmail.com" }],
//   [obj2, { birthYear: "1989", email: "unknoawn@gmail.com" }],
//   [arr2, { studio: "DC" }],
//   [arr1, { studio: "MCU" }],
//   [doNothing, "just for delete"],
// ]);

//See it can also store function refrence as a key for the object
// console.log(objData.get(doNothing));

//Then you gonna see output this { { name: 'user', age: '24' } => { birthYear: '1998' } }

// that means we can add whole object as a key for the birthYear

// so basically Map function let you use Object as a key for the value you want to add in above example you can see

// console.log(objData);

//How we gonna access perticular value from the map

//As below you can see for get the value of the map birthyear we use that perticular use object for getting the value or extra information of that user.

// console.log(objData.get(obj1)); //access from object refrence
// console.log(objData.get(arr1)); //access from array refrence

//Inshort it's special type of object that let's you use the object refrence or anything[array,function,object,symbol] you can use as key for perticular object

// Actually in key it store the refrence of that object in map object so it can access based on refrence

// also we can store some specifically property of object

//Difficult

const obj3 = { name: "sfasf", work: "devloper", id: "odi234w2@d333" };
const arr3 = ["sce2232234", "ioi00332"];

const stroreVal = () => "Now we get value from the specific array element";

const extraData = new Map([
  [obj3.id, { note: "we get value from perticular object property" }],
  [arr3[1], stroreVal()],
]);

// console.log(extraData.get(arr3[1]));
// console.log(extraData.get(obj3.id));

//Add data in map
extraData.set("microsoft", ["software", "gaming", "windows"]);

//FOr getting value in loop as a key value pair from entries
// for (let [key, value] of extraData.entries) {
//   console.log("key", key);
//   console.log("value", value);
// }

//FOr get keys only
for (let key of extraData.keys()) {
  console.log(key);
}

// /FOr get values only
for (let value of extraData.values()) {
  console.log(value);
}

if (extraData.has(obj3.id)) {
  extraData.delete("microsoft");

  // console.log(extraData);

  //WeakSet and WeakMap

  // There's also something known as weakmap and weakset and the main differnce is than set and map is that map and set data is always stored in garbage collection and it requires memory to store, so weakmap and weakset doesn't hold up the data and javascript automatically released or delete from the garbage collection.
}

//------------------SET examples

// Example:1
// const interSection = (setA, setB) => {
//   const commonSet = new Set();
//   for (let element of setB) {
//     if (setA.has(element)) {
//       commonSet.add(element);
//     }
//   }
//   return [...commonSet];
// };

// const setA = new Set([2, 3, 4, 5, 12, 5, 8, 77]);
// const setB = new Set([2, 55, 77, 8]);
// console.log("interSection", interSection(setA, setB));

// Example:2
// const isSuperSet = (setA, setB) => {
//   for (let element of setB) {
//     if (!setA.has(element)) {
//       return false;
//     }
//   }
//   return true;
// };

// const set1 = new Set([2, 3, 4, 5, 12, 5, 8, 77]);
// const set2 = new Set([2, 5, 77, 8]);
// console.log("isSuperSet", isSuperSet(set1, set2));

// Example:3

// const unionSet = (setA, setB) => {
//   // const mainSet = new Set([...setA, ...setB]);
//   let mainSet = new Set(setA);
//   for (let elem of setB) {
//     if (!setA.has(elem)) {
//       mainSet.add(elem);
//     }
//   }
//   return [...mainSet];
//   // return mainSet;
// };

// console.log("unionSet", unionSet(new Set([1, 2, 3, 4]), new Set([3, 4, 5, 6])));

// Example:4

// const differnceSet = (setA, setB) => {
//   const finalSet = new Set(setA);
//   for (let elem of setB) {
//     if (finalSet.has(elem)) {
//       finalSet.delete(elem);
//     }
//   }
//   return [...finalSet];
// };

// console.log(differnceSet(new Set([1, 2, 3, 4]), new Set([2, 3])));
