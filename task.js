1)let - we can reassign value , but not for const

function example() {
  let a = 100; 

  if (true) {
    let a = 200; 
    console.log(a); 
  }

  console.log(a); 
}

example();

2)const add = (a,b) => a+b;

3) var name = "John";
var age = 25;
console.log(`Hello, my name is ${name}, and I am ${age} years old.`)

4)function Calculate(l,b=10){
    var area = l*b;
    console.log(area);
}

Calculate(5);

5)const user= {name:"Alice",age:30,city:"New York"};
const {name, city} = user;

console.log(name);
console.log(city);

6)
var arr1= [1,2,3];
var arr2= [4,5,6];

console.log(...arr1,...arr2);

7)
function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 2000);
  });
}


myPromise().then((message) => {
  console.log(message); 
});

8)
const num= [1,2,3,4,5];
 var newNum = [];
num.map((no) => {
    newNum.push(no*2);
})
console.log(newNum);

const num= [1,2,3,4,5];
const evenNum = num.filter((no) => {
  return  no%2==0;
})
console.log(evenNum);

9)
const fruits = ['apple', 'banana', 'cherry'];

for(fruit of fruits){
    console.log(fruit);
}

10)
const array = [1,2,2,3,4,5,4];

const uniqueArr = (arr) => {
    return [...new Set(arr)]
}
console.log(uniqueArr(array));

