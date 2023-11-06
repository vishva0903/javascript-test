function insertStringAfterEvery3rdChar(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') {
      return "Both input values must be strings.";
    }
  
    const result = [];
    const aLength = a.length;
    const insertEvery = 3;
  
    for (let i = 0; i < aLength; i++) {
      result.push(a[i]);
  
      if ((i + 1) % insertEvery === 0) {
        result.push(b);
      }
    }
  
    return result.join('');
  }

  const a = "123456789";
  const b = "XYZ";
  const result = insertStringAfterEvery3rdChar(a, b);
  console.log(result);
  