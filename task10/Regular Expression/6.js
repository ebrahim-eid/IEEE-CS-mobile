let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re =/\w+.(org)/ig
let re2 =/\w+:\/\/\w+.(org)/ig
let re3 =/\w+:\/\/(www.)?\w+.(org)/ig
let re4 =/\w+:\/\/(www.)?\w+.(org)/ig
let re5 =/\w+:\/\/(www.)?\w+.(org):\w+\/\w+.(php)\W\w+.+/ig



console.log(url1.match(re));
console.log(url2.match(re2));
console.log(url3.match(re3));
console.log(url4.match(re4));
console.log(url5.match(re5));