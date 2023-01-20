// Part 1
const array1: Array<number> = [18, 74, 88, 3];
const array2: Array<number> = [4, 5, 23, 18, 9, -5, 31];

// Create a function to merge the two arrays
function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  // Create an empty array to merge both arrays
  const altArray: Array<number> = [];
  // Create two new variables for the smaller and bigger array
  let biggerArray = arr1;
  let smallerArray = arr2;
  if (arr2.length > arr1.length) {
    biggerArray = arr2;
    smallerArray = arr1;
  }
  for (let i: number = 0; i < smallerArray.length; i += 1) {
    altArray.push(arr1[i]);
    altArray.push(arr2[i]);
  }
  for (let i: number = smallerArray.length; i < biggerArray.length; i += 1) {
    altArray.push(biggerArray[i]);
  }
  return altArray;
}
const mergedArray: Array<number> = merge(array1, array2);
console.log(mergedArray);

// Wordle
// Implement a function to check if the attempted word is correct or not
function checkWord(attemptWord: string, secretWord: string) {
  // Function should return a string
  result = ' ';
  // Iterate over the secret word
  for (let i = 0; i < secretWord.length; i += 1) {
    const secretLetter = secretWord[i];
    const attemptLetter = attemptWord[i];

    if (secretLetter.includes('S')) {
      console.log();
    }
  }
}

// Call the function
// for (const word of attempts) {
//   const result = checkWord(word, 'spoke');
//   console.log(result);
// }
