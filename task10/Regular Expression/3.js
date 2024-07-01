let phone = "+(995)-123 (4567)";
let re =/\W+\d+\W+\d+ \W+\d+\W/ig
console.log(phone.match(re))