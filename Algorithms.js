function areVectorsOrthogonal(v1, v2) {
    const dotProduct = dot_product(v1, v2);
    return dotProduct === 0;
  }
  
  function checkOrthogonality(vectorPairs) {
    const results = [];
    
    for (let i = 0; i < vectorPairs.length; i++) {
      const v1 = vectorPairs[i][0];
      const v2 = vectorPairs[i][1];
      
      const isOrthogonal = areVectorsOrthogonal(v1, v2);
      results.push(isOrthogonal);
    }
    
    return results;
  }

  const vectorPairs = [
    [[1, 0], [0, 1]],   // Orthogonal vectors
    [[1, 2], [3, 4]],   // Non-orthogonal vectors
    [[-2, 4], [2, 1]]   // Non-orthogonal vectors
  ];
  
  const results = checkOrthogonality(vectorPairs);
  console.log(results); // Output: [true, false, false]