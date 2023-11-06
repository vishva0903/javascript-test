function sumArrayElementsGreaterThanB(arr, b) {
    if (!Array.isArray(arr)) {
      return "Input is not a valid array.";
    }
  
    const filteredArray = arr.filter(element => typeof element === 'number' && element > b);
  
    const sum = filteredArray.reduce((acc, element) => acc + element, 0);
  
    return sum;
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5];
  const b = 2;
  const result = sumArrayElementsGreaterThanB(array, b);
  console.log(result);
  