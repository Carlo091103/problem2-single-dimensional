// sortArray.js

function sortArrays() {
  let numbersStr = prompt("Enter numbers separated by commas (e.g., 24,65,21,5,9,32,42,80,57):");
  let namesStr = prompt("Enter names separated by commas (e.g., Zenvo,Erica,Jordie,Alicia,Redon):");

  //Error Handling for empty inputs
  if (!numbersStr || !namesStr) {
    console.error("Please enter both numbers and names.");
    return;
  }

  const numbers = numbersStr.split(",").map(Number);
  const names = namesStr.split(",");


  // Input validation: Check if numbers are valid numbers.
  if (numbers.some(isNaN)) {
    console.error("Invalid input: Numbers must be numeric.");
    return;
  }


  const mergedArray = numbers.concat(names);

  console.log("Merged array:", mergedArray);

  numbers.sort((a, b) => b - a); // Sort numbers in descending order
  console.log("Sorted numbers (descending):", numbers);

  names.sort(); // Sort names alphabetically
  console.log("Sorted names (ascending):", names);
}

sortArrays();
