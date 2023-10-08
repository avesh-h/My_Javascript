function promisify(item, delay) {
  return new Promise((res) => setTimeout(() => res(item), delay));
}

// const a = () => promisify("a", 500);
// const b = () => promisify("b", 2000);
// const c = () => promisify("c", 3000);

//Parellel Resolving promise
// const allPromises = async () => {

//   const promises = [a(), b(), c()];

//   const [output1, output2, output3] = await Promise.all(promises);
//   console.log("result", output1, output2, output3);
// };

// allPromises();

//Race Resolving promise
// const racePromises = async () => {

//   const promises = [a(), b(), c()];

//   const result = await Promise.race(promises);
//   console.log("result", result);
// };

// racePromises();

//Sequence resolving of promise
// const sequencePromises = async () => {
//   const promise1 = await a();
//   const promise2 = await b();
//   const promise3 = await c();

//   return `${promise1},${promise2},${promise3}`;
// };

// sequencePromises().then(console.log);
