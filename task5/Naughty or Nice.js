function naughtyOrNice(data) {
    let naughty = 0;
    let nice = 0;
    for (let i in data) {
      for (let j in i) {
        if (data[i][j] === "Naughty") {
          naughty++;
        } else if (data[i][j] === "Nice") {
          nice++;
        }
      }
    }
    return nice > naughty || nice == naughty ? "Nice!" : "Naughty!";
  }
  