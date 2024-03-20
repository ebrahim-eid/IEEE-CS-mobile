function well(x) {
  let rank = 0;
  for (let i of x) {
    if (i === "good") {
      rank += 1;
    }
  }
  switch (rank) {
    case 1 || 2:
      return "Publish!";
    case 0:
      return "Fail!";
    default:
      return "I smell a series!";
  }
}
