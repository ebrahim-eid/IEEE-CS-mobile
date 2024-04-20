let data = [
    [-1, 4, -5, -9, 3],
    [6, -4, -7, 4, -5],
    [3, 5, 0, -9, -1],
    [1, 5, -7, -8, -9],
    [-3, 2, 1, -5, 6],
  ];
  
  function matrix(array) {
      for (let i = 0; i < array.length; i++) {
          let j = i; 
          if (array[i][j] >= 0) {
            array[i][j] = 1;
          } else if (array[i][j] < 0) {
            array[i][j] = 0;
          }      
      }
      return array;
    }
  console.log(matrix(data));
  