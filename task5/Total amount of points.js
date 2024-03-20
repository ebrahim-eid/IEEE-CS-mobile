function points(games) {
    let result = 0;
    games.forEach((element) => {
      const gameElements = element.split(":");
      const x = gameElements[0];
      const y = gameElements[1];
      if (x > y) {
        result += 3;
      } else if (x === y) {
        result += 1;
      }
    });
    return result;
  }
  