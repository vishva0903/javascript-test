function findBProperty(obj) {
    if (typeof obj === 'object' && obj !== null) {
      if ('a' in obj) {
        return obj.a.b;
      } else {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const result = findBProperty(obj[key]);
            if (result !== undefined) {
              return result;
            }
          }
        }
      }
    }
  
    return undefined;
  }
  
  const myObject = {
    a: {
      b: 'Value of b'
    },
    x: {
      y: {
        z: {
          a: {
            b: 'Nested Value of b'
          }
        }
      }
    },
    otherProp: 'Not relevant',
  };
  
  const result = findBProperty(myObject);
  console.log(result); 
  