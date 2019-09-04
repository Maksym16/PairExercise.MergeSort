// [3, 5, 2, 7, 1]
function mergeSort(array) {
  /* your code here */
  if (array.length <= 1) {
    return array;
  }

  let [leftHalf, rightHalf] = split(array);
  console.log(
    `original: ${array}, left half: ${leftHalf}, right half: ${rightHalf}`
  );

  let sortedArray = merge(mergeSort(leftHalf), mergeSort(rightHalf));
  console.log(`sorted: ${sortedArray}`);
  return sortedArray;
}

function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let middle = Math.floor(wholeArray.length / 2);
  const leftHalf = wholeArray.slice(0, middle);
  const rightHalf = wholeArray.slice(middle);

  return [leftHalf, rightHalf];
}

function merge(leftHalf, rightHalf) {
  const mergedArray = [];

  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] < rightHalf[0]) {
      mergedArray.push(leftHalf.shift());
    } else {
      mergedArray.push(rightHalf.shift());
    }
  }
  return [...mergedArray, ...leftHalf, ...rightHalf];
}
