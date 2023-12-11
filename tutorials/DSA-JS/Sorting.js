// --------------Bubble Sort----------------------------------------

const bubbleSort = (arr) => {
  //Ascending order
  let isSwap = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      isSwap = true;
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  if (isSwap) {
    bubbleSort(arr);
  }
  return arr;
};
console.log(bubbleSort([-6, 20, 8, -2, 4]));
