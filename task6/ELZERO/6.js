let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
if(chosen >=1&&chosen<=3){
  let {
    title,
    age,
    available,
    skills: [, a],
  } = myFriends[chosen-1];

  console.log(title)
  console.log(age)
  console.log(available==true? 'Available':'Not Available')
  console.log(a)
}

