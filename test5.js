function generateRange(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
      return "Invalid input. Please provide valid min and max values.";
    }
  
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
  
    return result;
  }
  
  // Example usage:
  const min = 1;
  const max = 5;
  const rangeArray = generateRange(min, max);
  console.log(rangeArray); // Output: [1, 2, 3, 4, 5]
  