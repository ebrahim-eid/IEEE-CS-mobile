function pillars(number, distance, width) {
    if (number === 1) {
      return 0;
    }
  
    if (number === 2) {
      return distance * 100;
    }
  
    const realDistance = distance * 100 * (number - 1);
    const realWidth = width * number - 2 * width;
    return realDistance + realWidth;
  }
// two between three so number -1
  