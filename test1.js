function findIndexOfIs(inputString) {
    const index = inputString.indexOf('is');
    
    return index;
  }
  
  const inputString = "The string contains the substring is";
  const index = findIndexOfIs(inputString);
  
  if (index !== -1) {
    console.log(`'is' found at index ${index}`);
  } else {
    console.log("'is' not found in the string.");
  }
  