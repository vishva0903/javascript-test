function findLongestString(stringsArray) {
    if (!Array.isArray(stringsArray) || stringsArray.length === 0) {
      return "Input is not a valid array of strings.";
    }
  
    let longest = stringsArray[0];
  
    for (let i = 1; i < stringsArray.length; i++) {
      if (stringsArray[i].length > longest.length) {
        longest = stringsArray[i];
      }
    }
  
    return longest;
  }
  
  // Example usage:
  const stringArray = ["apple", "banana", "cherry", "date"];
  const longestString = findLongestString(stringArray);
  console.log(longestString); // Output: "banana"
  