function mergeObjectsAndCorrectProperty(obj1, obj2) {
    // Create a new object that combines properties from both objects
    const mergedObject = {
      ...obj1,
      ...obj2,
      d: obj2.b // Rename 'b' to 'd'
    };
  
    return mergedObject;
  }
  
  // Example usage:
  const object1 = {
    a: 1,
    b: 2,
    c: 3
  };
  
  const object2 = {
    b: 4,
    e: 5
  };
  
  const mergedObject = mergeObjectsAndCorrectProperty(object1, object2);
  console.log(mergedObject);
  
  