let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let regex = /Os\w*O/ig;
console.log(specialNames.match(regex));
