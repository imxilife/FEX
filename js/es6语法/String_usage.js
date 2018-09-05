

'use stric'



let firstName = 'John';
let lastName = 'Smith';
const yearBirth = 1990;

function calcAge(year){
  return 2018 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearBirth + '. Today, he is ' + calcAge(yearBirth) + ' years old.');


//ES6
console.log(`This is ${firstName}  ${lastName} He was born is ${yearBirth} Today he is ${calcAge(yearBirth)} years old`);  //这里用了占位符

console.log(firstName.startsWith('J'));
console.log(lastName.endsWith('me'));
console.log(firstName.includes('first'));
console.log(`${firstName}`.repeat(5));





