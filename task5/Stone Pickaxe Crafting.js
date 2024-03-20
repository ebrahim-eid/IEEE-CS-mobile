function result(arr) {
  return Math.min(
    Math.floor(arr.filter((e) => e == "Cobblestone").length / 3),
    Math.floor(arr.filter((e) => e == "Sticks").length / 2) +
      Math.floor((arr.filter((e) => e == "Wood").length * 4) / 2)
  );
}
