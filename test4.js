function sortStringsAlphabetically(stringsArray) {
    if (!Array.isArray(stringsArray)) {
      return "Input is not an array of strings.";
    }
  
    // Use the sort method to sort the array alphabetically
    stringsArray.sort();
  
    return stringsArray;
  }
  
  // Example usage:
  const unsortedArray = ["bat", "cat", "app", "day"];
  const sortedArray = sortStringsAlphabetically(unsortedArray);
  console.log(sortedArray); // Output: ["apple", "banana", "cherry", "date"]
  