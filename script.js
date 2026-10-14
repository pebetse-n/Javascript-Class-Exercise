
// Question 1:

let score = 85;

let grade;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;

  case score >= 80 && score <= 89:
    grade = "B";
    break;

  case score >= 70 && score <= 79:
    grade = "C";
    break;

  case score >= 60 && score <= 69:
    grade = "D";
    break;

  default:
    grade = "F";
}

console.log(`Grade: ${grade}`);

let result = score >= 60 ? "Passed" : "Failed";

console.log(result);

//Question 2
// Convert a string into a number
let input = "25";
let convertedNumber = Number(input);

console.log(convertedNumber);
console.log(typeof convertedNumber);

// Test truthy and falsy values using a loop
let values = [0, "", "hello", null, undefined, NaN];

for (let value of values) {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
} 

// Question 3

function greetingBot(name, isMorning) {
  const greeting = isMorning ? "Good Morning" : "Hello";
  return ${greeting} ${name}
}

// Question 4

const post = {
  username: "Pebetse",
  caption: "Learning JavaScript!",
  likes: 10,
  comments: ["Great post!", "Keep going!"],

  addLike() {
    this.likes++;
  }
};

console.log(post);

post.addLike();

console.log(`Likes: ${post.likes}`);
const { username, caption } = post;

console.log(username);
console.log(caption);

// Question 5

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = [...numbers1, ...numbers2];

console.log(combinedNumbers);

// Pattern using loop 

for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat((5 - i) * 3);
  let stars = "* ".repeat(i);

  console.log(spaces + stars);
}
// While in loop

let number = 10;

while (number >= 1) {
  console.log(number);
  number--;
}