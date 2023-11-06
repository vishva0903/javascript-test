function replaceEmptyStringsWithNull(obj) {
    if (typeof obj !== 'object') {
      return "Input is not an object.";
    }
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] === 'string') {
        if (obj[key].trim() === '') {
          obj[key] = null;
        }
      }
    }
  
    return obj;
  }
  
  // Example usage:
  const inputObject = {
    prop1: "Non-empty value",
    prop2: "",
    prop3: "   ",
    prop4: "Another non-empty value",
  };
  
  const resultObject = replaceEmptyStringsWithNull(inputObject);
  console.log(resultObject);
  