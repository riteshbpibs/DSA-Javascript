// forEach Loop..............................................

// const numbers = [1, 3, 5, 21, 34]

// function output(param, logic) {
//     let newArr = []
//     param.forEach(elem => {
//         newArr.push(logic(elem))
//     })
//     return newArr;
// }

// function double(param) {
//     return param * param
// }

// console.log(output(numbers, double));


// Hoisting..................................................

// console.log(a);
// x();

// var a = 1;
// function x() {
//     b = 1;
//     console.log("yoo");
//     console.log(a);
//     y();
//     function y() {
//         console.log(b);
//         console.log(a);
//     }
// }

// var a = 10;
// console.log(a);
// var a = 20;


// .........................................................
// console.log(a);

// let a = 9;
// const a = 10;

// console.log(z);
// var z = 9;

// function x() {
//     console.log(a);
//     var a = 10;
//     var b = 12;
//     console.log(a);
//     console.log(b);
//     // console.log(c);
//     function y() {
//         var c = 9;
//         console.log(a, b, z);
//     }
//     y()
// }
// x();


// This keyword .............................................

// console.log(this);

// function x() {
//     var add = 2 + 2;
//     console.log(add);
//     console.log(this);
// }
// x()

// const ritesh = {
//     name: "Ritesh",
//     age: 26,
//     sum: function () {
//         var add = 2 + 2;
//         console.log(add);
//         console.log(this);
//     }
// }
// ritesh.sum()

// const ritesh = {
//     name: "Ritesh Raj",
//     age: 26,
//     sum: function () {
//         console.log(this.name);
//         var add = 2 + 2;
//         console.log(add);
//         console.log(this);

//         function child() {
//             var name = "Ritesh"
//             console.log(name);
//             console.log(this);
//         }
//         child()
//     }
// }

// ritesh.sum();


// Pass by Value, pass by Reference..........................

// let a = 5;
// let b = a;
// b = b + 5;

// console.log(a);
// console.log(b);

// const obj1 = {
//     user1: "ritesh",
//     password: 12345
// }

// const obj2 = obj1;
// obj2.password = 23456

// console.log(obj1);
// console.log(obj2);

// const arr1 = [1, 2, 3, 4]
// const arr2 = [].concat(arr1)
// arr2.push(8)

// console.log(arr1);
// console.log(arr2);

// let like = 100;
// const youtube = {
//     name: "Ritesh",
//     subs: 0
// }

// const ritesh = (a, b) => {
//     a = 200;
//     b.subs = 10
// }

// ritesh(like, youtube);
// console.log(like, youtube.subs);


// First class functions.....................................

// const add = (a, b) => {
//     return a + b;
// }

// function mult(a, b) {
//     return a * b;
// }

// let sum = add
// // console.log(sum);
// const output = (logic, a, b) => {
//     return logic(a, b)
// }
// console.log(output(sum, 5, 6));
// console.log(output(mult, 3, 6));


// ..........................................................

// getName()
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName() {
//     console.log("yoo!!!!");
// }
// console.log(x);
// getName()


// ..........................................................

// var a = 7;
// var b;
// console.log(a);
// if (b === undefined) {
//     console.log('b is undefined');
// }
// else {
//     console.log('b is defined');
// }

// b = 10;
// console.log(b);


// The scope chain, scope and lexical environment............

// function a() {
//     var b = 10;
//     function c() {
//         console.log(b);
//     }
//     c();
//     console.log(b);
// }
// // console.log(b);
// a();


// let and const in JS.......................................

// console.log(a);
// console.log(b);
// console.log(c);

// let a = 10;
// var b = 100;
// const c = 20;

// console.log(a);
// console.log(b);
// console.log(c);

// let d;
// d = 30
// console.log(d); 
// const e;
// e = 40
// console.log(e);


// Block Scope...............................................

// console.log(a);
// var a = 100;

// function x() {
//     var a = 10;
//     let b = 30;
//     const c = 40;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// x();
// console.log(a);
// console.log(b);
// console.log(c);


// Closures..................................................

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y
// }
// var z = x();
// // console.log(z);
// z();

// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         a = 100;
//         y();
//     }
//     x();
// }

// z();


// setTimeout................................................

// function x() {
//     // var i = 1;
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("yooo!!!!!");
// }
// x();


// Function Statement or Function Declaration................

// a()
// function a() {
//     console.log("function statement");
// }

// Function Expression.......................................

// b();
// var b = function () {
//     console.log("Yoo!!!");
// }
// b()

// Anonymous Function........................................

// var a = function () {
//     console.log("anonymous function");
// }
// a();

// Named Function Expression.................................

// var a = function x() {
//     console.log("anonymous function");
// }
// a();
// // x();


// First Class Functions.....................................

// var b = function (param1) {
//     console.log(param1);
// }

// function x() {

// }
// b(x);


// Callback Function.........................................
// setTimeout(() => {
//     console.log("Heelooo");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y() {
//     console.log("y");
// })


// Event Listeners...................,.......................

// const clickMe = document.querySelector("#clickMe")

// clickMe.addEventListener('click', () => {
//     console.log("Button Clicked");
// })

// Event Loop................................................

// console.log("start");

// setTimeout(() => {
//     console.log("middle");
// }, 1000);

// console.log("end");


// Higher Order Function.....................................

// const radius = [2, 3, 4, 6]

// const area = () => {
//     let areas = []
//     for (i = 0; i < radius.length; i++) {
//         areas.push(Math.PI * radius[i] * radius[i])
//     }
//     console.log(areas);
// }
// area();

// const circumference = (param) => {
//     let circum = []
//     param.forEach(elem => {
//         circum.push(2 * Math.PI * elem)
//     })
//     return circum
// }

// console.log(circumference(radius));

// const diameter = (param) => {
//     let diam = []
//     param.forEach(elem => {
//         diam.push(2 * elem * elem)
//     })
//     return diam
// }

// console.log(diameter(radius));

// ............
// const calculate = (param, logic) => {
//     const output = []
//     param.forEach(elem => {
//         output.push(logic(elem))
//     })
//     return output
// }

// const area = (param) => {
//     return Math.PI * param * param
// }
// const circumference = (param) => {
//     return 2 * Math.PI * param
// }
// const diameter = (param) => {
//     return 2 * param * param
// }
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));

// console.log(radius.map(elem => {
//     return (2 * elem * elem)
// }));
// console.log(radius.map(diameter));


// Map, reduce and filter method.............................

// const arr = [5, 1, 3, 2, 6]

// MAP
// const double = arr.map(elem => {
//     return 2 * elem
// })
// console.log(double);

// const double = (param) => {
//     return 2 * param
// }
// const triple = (param) => {
//     return 3 * param
// }
// const binary = (param) => {
//     return param.toString(2)
// }
// console.log(arr.map(double));
// console.log(arr.map(triple));
// console.log(arr.map(binary));

// const output = arr.map(x => x.toString(2))
// console.log(output);


// Filter

// const odd = (param) => {
//     return param % 2 != 0;
// }
// const even = (param) => {
//     return param % 2 == 0;
// }

// console.log(arr.filter(odd));
// console.log(arr.filter(even));

// const output = arr.filter(x => x > 4)
// console.log(output);

// Reduce

// function sum(param) {
//     a = 0;
//     for (i = 0; i <= param.length - 1; i++) {
//         a = a + param[i]
//     }
//     return a;
// }
// console.log(sum(arr));

// const output = arr.reduce((acc, curr) => acc = acc + curr, 0)
// console.log(output);

// function maxVal(param) {
//     max = 0
//     for (i = 0; i <= param.length - 1; i++) {
//         if (param[i] > max) {
//             max = param[i]
//         }
//     }
//     return max;
// }

// console.log(maxVal(arr));

// const output = arr.reduce((acc, curr) => {
//     if (curr > acc) {
//         acc = curr
//     }
//     return acc
// }, 0)

// console.log(output);

// const users = [
//     {
//         firstName: "Ritesh",
//         LastName: "Raj",
//         age: 25
//     },
//     {
//         firstName: "Shilpa",
//         LastName: "Singh",
//         age: 25
//     },
//     {
//         firstName: "Honey",
//         LastName: "Kumari",
//         age: 23
//     }
// ]

// const output = users.map(({ firstName, LastName }) => {
//     return (`${firstName} ${LastName}`)
// })

// console.log(output);

// const output = users.reduce((acc, curr) => {
//     if (curr.age == 25) {
//         acc.push(curr.firstName)
//     }
//     return acc;
// }, [])

// console.log(output);
// console.log(output.length);

// const output = users.reduce((acc, curr) => {
//     if (curr.age > 24) {
//         acc.push(curr.firstName)
//     }
//     return acc
// }, [])
// console.log(output);


// 1. Just loop through an array.............................

// const myArray = [{ x: 100 }, { x: 200 }, { x: 300 }];

// myArray.forEach((element, index, array) => {
//     console.log(element.x); // 100, 200, 300
//     console.log(index); // 0, 1, 2
//     console.log(array); // same myArray object 3 times
// });


// 2. Check if any of the elements in an array pass a test...

// const people = [
//     { name: 'John', age: 23 },
//     { name: 'Andrew', age: 3 },
//     { name: 'Peter', age: 8 },
//     { name: 'Hanna', age: 14 },
//     { name: 'Adam', age: 37 }];

// const anyAdult = people.some(person => person.age >= 18);
// console.log(anyAdult); // true


// 3. Transform to a new array...............................

// const myArray = [{ x: 100 }, { x: 200 }, { x: 300 }];

// const newArray = myArray.map(element => element.x);
// console.log(newArray); // [100, 200, 300]


// 4. Sum up a particular property, and calculate its average..

// const myArray = [{ x: 100 }, { x: 200 }, { x: 300 }];

// const output = myArray.reduce((acc, curr) => {
//     acc = (acc + curr.x)
//     return acc
// }, 0)

// console.log(output / myArray.length);


// 5. Create a new array based on the original but without modifying it

// const myArray = [{ x: 100 }, { x: 200 }, { x: 300 }];

// const output = myArray.map(elem => {
//     return {
//         x: elem.x * 2
//     }
// })

// console.log(output);


// 6. Sort an array..........................................

// const people = [
//     { name: "John", age: 21 },
//     { name: "Peter", age: 31 },
//     { name: "Andrew", age: 29 },
//     { name: "Thomas", age: 25 }
// ];

// const output = people.sort((a, b) => {
//     return a.age - b.age
// })
// console.log(output);

// let employees = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 27,
//         joinedDate: 'December 15, 2017'
//     },

//     {
//         firstName: 'Ana',
//         lastName: 'Rosy',
//         age: 25,
//         joinedDate: 'January 15, 2019'
//     },

//     {
//         firstName: 'Zion',
//         lastName: 'Albert',
//         age: 30,
//         joinedDate: 'February 15, 2011'
//     }
// ];

// const output = employees.sort((a, b) => a.age - b.age)
// console.log(output);

// const output = employees.sort((a, b) => b.age - a.age)
// console.log(output);

// const output = employees.forEach(elem => {
//     console.log(`${elem.firstName} ${elem.lastName} ${elem.age}`);
// })

// const output = employees.sort((a, b) => {
//     let da = new Date(a.joinedDate)
//     let db = new Date(b.joinedDate)

//     return da - db
// })
// console.log(output);



// Anonymous Function .......................................

// document.addEventListener('click', () => {
//     console.log("yoooo!!!!!");
// })

// let sum = function (a, b) {
//     let add = a + b
//     console.log(add);
// }

// sum(3, 4)


// Higher Order Function.....................................

// const interviewQues = (name) => {
//     if (name == "Ritesh") {
//         return function (topic) {
//             console.log(`Hii ${name}. What is ${topic}`);
//         }
//     }
//     if (name == "Shilpa") {
//         return function (topic) {
//             console.log(`Hii ${name}. What is ${topic}`);
//         }
//     }
//     else {
//         return function (topic) {
//             console.log(`Hii ${name}. You are not eligible`);
//         }
//     }
// }

// interviewQues("Ritesh")("HTML")
// interviewQues("Honey")()

// const cand1 = interviewQues("Ritesh")
// cand1("HTML")
// cand1("CSS")
// cand1("React")


// Closure...................................................

// var a = 3
// var z = 19;

// function name(params) {
//     var a = 2
//     console.log(a);
//     // var a = 2
//     // console.log(b);
//     function name1(params) {
//         var b = 5
//         console.log(b);
//         console.log(z);
//         // var b = 5
//     }
//     name1()
// }
// name()


// Call(), Apply(), Bind()...................................

// const ex1 = {
//     name: "Ritesh",
//     age: 25,
//     skils: "JavaScript",
//     feature: function (rating) {
//         console.log(`Yoooo!!!! ${this.name} with ${this.skils} skills. Ratings = ${rating}`);
//     }
// }

// ex1.feature(3)

// const ex2 = {
//     name: "Shilpa",
//     age: 25,
//     skils: "BakBak"
// }

// ex1.feature.call(ex2, 5);
// ex1.feature.apply(ex2, [5]);


// const name1 = {
//     name: "Ritesh",
//     age: 25
// }
// const name2 = {
//     name: "Shilpa",
//     age: 25
// }
// const name3 = {
//     name: "Honey",
//     age: 23
// }

// function features() {
//     console.log(`Yooo!!! ${this.name}. Age = ${this.age}`);
// }
// features()

// let newName1 = features.bind(name1)
// newName1()


// forof, forin..............................................

// const ex1 = ["html", "css", "js", "React", "node"]

// for (item of ex1) {
//     console.log(item);
// }

// for (item in ex1) {
//     console.log(item);
// }

// const ex2 = {
//     name: "Ritesh",
//     age: 25
// }

// for (item in ex2) {
//     console.log(item);
// }


// call, apply, bind.........................................

// const obj = {
//     name: "Ritesh",
//     age: 25,
//     lname: "Raj",
//     method1: function () {
//         console.log(`My full name is ${this.name} ${this.lname}`);
//     }
// }

// const obj1 = {
//     name: "Shilpa",
//     lname: "Kumari",
//     age: 26
// }

// obj.method1()
// obj.method1.call(obj1)

// const fullname = function (location) {
//     console.log(`My name is ${this.name} and age is ${this.age}. I live in ${location}`);
// }

// fullname.call(obj, "Patna")
// fullname.apply(obj1, ["Patna"])

// let printName = fullname.bind(obj, "Patna")
// console.log(printName);
// printName();


// Prototype and Prototype Inheritence.......................

// let arr = ["Ritesh", "Raj"]
// let obj = {
//     name: "Ritesh",
//     city: "Patna",
//     getIntro: function (age) {
//         console.log(`${this.name} from ${this.city} and age is ${age}`);
//     }
// }

// let obj2 = {
//     name: "Shilpa",
// }

// obj2.__proto__ = obj;
// console.log(obj2.city);
// obj2.getIntro(26)

// function fun() {

// }

// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);
// console.log(obj.__proto__);
// console.log(fun.__proto__);


// 
// let cat = {
//     breed: "munchkin"
// }

// let myCat = {
//     name: "Honey"
// }

// Object.setPrototypeOf(myCat, cat)
// console.log(myCat.breed);
// console.log(myCat.__proto__);

// cat.tailLength = 15

// console.log(myCat.__proto__);


// Function Currying.........................................

// function mult(x, y) {
//     console.log(x * y);
// }

// let multByTwo = mult.bind(2, 3)
// multByTwo(4)

// let multByTwo = mult.bind(this, 2)
// multByTwo(4)

// let multByTwo = mult.bind(this, 2, 3)
// multByTwo(4)

// let multByThree = mult.bind(this, 3)
// multByThree(5)

// .................
// let multiply = function (x) {
//     return function (y) {
//         console.log(x * y);
//     } 
// }
// multiply(2)(3)

// let multByTwo = multiply(2)
// multByTwo(3)


// Sum(1)(2)(3)(4)...........................................

// function sum(x) {
//     return function (y) {
//         return function (z) {
//             return function (a) {
//                 console.log(a + z + y + x);
//             }
//         }
//     }
// }
// sum(1)(2)(3)(4)

// let sum = function (a) {
//     return function (b) {
//         if (b) {
//             return sum(a + b)
//         }
//         return a
//     }
// }
// console.log(sum(2)(4)(1)());


// Event Bubbling & Capturing/Trickling......................

// Bubbling........
// document.querySelector("#grandParent")
//     .addEventListener('click', () => {
//         console.log("Grand P");
//     })

// document.querySelector("#parent")
//     .addEventListener('click', () => {
//         console.log("Parent");
//     })

// document.querySelector("#child")
//     .addEventListener('click', () => {
//         console.log("Child");
//     })

// Capturing/Trickling........
// document.querySelector("#grandParent")
//     .addEventListener('click', () => {
//         console.log("Grand P");
//     }, true)

// document.querySelector("#parent")
//     .addEventListener('click', () => {
//         console.log("Parent");
//     }, true)

// document.querySelector("#child")
//     .addEventListener('click', () => {
//         console.log("Child");
//     }, true)


// Event Delegation..........................................

// document.querySelector('#category')
//     .addEventListener('click', (e) => {
//         console.log(e.target.id);
//         // if (e.target.tagName == "LI") {
//         //     window.location.href = "/" + e.target.id
//         // }
//     })


// Debouncing................................................

// let counter = 0;
// const getData = () => {
//     console.log("Fetch Data", counter++);
// }

// const doSomeMagic = (fn, d) => {
//     let timer;
//     return function () {
//         let context = this,
//             args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(context, args)
//         }, d);
//     }
// }

// const betterFunction = doSomeMagic(getData, 300)


// Unique....................................................

// const products = [
//     {
//         title: "Iphone",
//         company: "apple"
//     },
//     {
//         title: "IphoneX",
//         company: "apple"
//     },
//     {
//         title: "Galaxy",
//         company: "samsung"
//     },
//     {
//         title: "Note10",
//         company: "redmi"
//     },
//     {
//         title: "Ipad",
//         company: "apple"
//     },
// ]


// function unique(arr) {
//     let newArr = []
//     arr.filter(elem => {
//         if (elem.company == "apple") {
//             newArr.push(elem.title)
//         }
//     })
//     return newArr
// }

// console.log(unique(products));


// Iterate through an array..................................

// var cars = [
//     {
//         make: "honda",
//         model: "ciciv",
//         year: 2014,
//         color: "blue"
//     },
//     {
//         make: "toyota",
//         model: "camry",
//         year: 2000,
//         color: "red"
//     },
//     {
//         make: "ford",
//         model: "mustang",
//         year: 2005,
//         color: "black"
//     }
// ]

// for (i = 0; i < cars.length; i++) {
//     if (cars[i].year < 2010) {
//         console.log(cars[i].make + "," + cars[i].model)
//     }
// }


// Sum(a)(b)(c)..............................................

// let sum = function (a) {
//     return function (b) {
//         if (b) {
//             return sum(a + b)
//         }
//         return a
//     }
// }

// console.log(sum(1)(2)());


// JSON......................................................

// let companies = [
//     {
//         "name": "Ritesh",
//         "numberOfEmployees": 10000,
//         "ceo": "Mary",
//         "rating": 3.6
//     },
//     {
//         "name": "Shilpa",
//         "numberOfEmployees": 3,
//         "ceo": null,
//         "rating": 4.3
//     }
// ]

// console.log(companies[0].name);


// Promises..................................................

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve("Success")
//     }
//     else {
//         reject("Failed")
//     }
// })

// p.then((res) => console.log(res)).catch((error) => console.log(error))


//
// let userLeft = true
// let userWatchingCatMeme = false

// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             resolve({
//                 name: "User Left",
//                 message: ':('
//             })
//         }
//         else if (userWatchingCatMeme) {
//             resolve({
//                 name: "User Watching",
//                 message: ':)'
//             })
//         }
//         else {
//             reject("Sedlyf")
//         }
//     })
// }

// watchTutorialPromise()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))


//
// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve("Video 1 Recorded")
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve("Video 2 Recorded")
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve("Video 3 Recorded")
// })

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((res) => console.log(res))
//     .catch((err) => console.log(err))


// Array methods..............................................

// const items = [
//     { name: "Bike", price: 100 },
//     { name: "TV", price: 200 },
//     { name: "Album", price: 10 },
//     { name: "Book", price: 5 },
//     { name: "Phone", price: 500 },
//     { name: "Keyword", price: 1000 },
// ]

// Filter..............
// const filteredItems = items.filter(elem => {
//     return elem.price <= 100
// })
// console.log(filteredItems);

// Map.................
// const itemNames = items.map(elem => {
//     return elem.name
// })
// console.log(itemNames);

// Find................
// const foundItem = items.find(elem => {
//     return elem.name == "Book"
// })
// console.log(foundItem);

// ForEach.............
// items.forEach(elem => {
//     console.log(elem.name);
// })

// Some................
// const itemSome = items.some(elem => {
//     return (elem.price <= 100);
// })
// console.log(itemSome);

// Every...............
// const itemEvery = items.every(elem => {
//     return elem.price < 100
// })
// console.log(itemEvery);

// Reduce..............
// const reduce = items.reduce((acc, curr) => {
//     return acc += curr.price
// }, 0)
// console.log(reduce);


// Reference vs Value........................................

// let a = 10
// let b = "Hi"
// let c = a
// c = c + 1
// let c = [1, 2]
// let d = c
// d.push(3)
// d = [1, 2]

// console.log(`a = ${a}`);
// console.log(`b = ${b}`);
// console.log(`c = ${c}`);
// console.log(`d = ${d}`);
// console.log(c == d);
// console.log(c === d);


// DOM Manipulation..........................................

// const body = document.body
// body.append("Yooo!!!!!!", "What is up")

// const div = document.createElement('div')
// div.innerText = "Hello World"
// div.textContent = "Hello World 2"
// div.innerHTML = "<strong>Hello World</strong>"
// const strong = document.createElement('strong')
// strong.innerText = "Hello Strong"

// body.append(strong)
// body.append(div)

// strong.remove()

// const div = document.querySelector('div')
// console.log(div.innerText);
// console.log(div.textContent);

// const span1 = document.querySelector("#hii")
// span1.removeAttribute("title")

// console.log(span1.dataset);
// span1.classList.add("new")
// span1.style.color = "red"


// Event listeners...........................................

// const grandParent = document.querySelector(".grandParent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// Bubbling................
// grandParent.addEventListener('click', (e) => {
//     console.log("grandParent");
// })
// parent.addEventListener('click', (e) => {
//     console.log("parent");
// })
// child.addEventListener('click', (e) => {
//     console.log("child");
// })

// Capturing...............
// grandParent.addEventListener('click', (e) => {
//     console.log("grandParent");
// }, getCapture = "true")
// parent.addEventListener('click', (e) => {
//     console.log("parent");
// }, getCapture = "true")
// child.addEventListener('click', (e) => {
//     console.log("child");
// }, getCapture = "true")

// Delegation..............
// const divs = document.querySelectorAll('div')

// document.addEventListener('click', (e) => {
//     if (e.target.matches('div')) {
//         console.log("hii");
//     }
// })

// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log("hii");
//     })
// })

// const newDiv = document.createElement('div')
// newDiv.style.width = "200px"
// newDiv.style.height = "200px"
// newDiv.style.backgroundColor = "purple"
// document.body.append(newDiv)


// Nullis Coalescing.........................................

// function calculatePrice(price, taxes, description) {
//     taxes = taxes ?? 0.05
//     description = description ?? "Default Value"
//     const total = price * (1 + taxes)
//     console.log(`%c ${description} With Tax: %c $${total}`, "font-weight: bold", "color: green");
// }

// calculatePrice(100, 0.07, "My Item")
// calculatePrice(100, 0, "My Item")
// calculatePrice(100, undefined, "")


// Optional Chaining.........................................

// const obj = {
//     name: "Ritesh",
//     hobbies: [
//         "fitness",
//         "music"
//     ],
//     pets: {
//         dog: "dusky",
//     },
//     age: undefined
// }

// console.log(obj.address);
// console.log(obj.address?.city);


// Async/Defer...............................................

// const button = document.querySelector('button')
// button.style.backgroundColor = "green"

// Updating objects..........................................

// const person = {
//     name: "Ritesh", address: {
//         country: "INDIA",
//         city: "Patna"
//     }
// }

// let p1 = person
// p1.name = "Raj"
// console.log(p1);
// console.log(person);

// const updated = Object.assign({}, person, { name: "Raj", age: 25 })
// console.log(updated);
// console.log(person);

// const updated = {
//     ...person,
//     name: "Raj",
//     address: {
//         ...person.address,
//         city: "Delhi"
//     }
// }
// console.log(updated);
// console.log(person);


// Reduce....................................................

// var orders = [
//     { amount: 250 },
//     { amount: 400 },
//     { amount: 100 },
//     { amount: 325 }
// ]

// let a = 0;
// for (i = 0; i < orders.length; i++) {
//     a = a + orders[i].amount
// }
// console.log(a);

// const output = orders.reduce((acc, curr) => {
//     return acc + curr.amount
// }, 0)

// console.log(output);


// JavaScript OOP............................................

// Contructor 

// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
//     // this.getSummary = function () {
//     //     return this.title + this.author + this.year
//     // }
// }

// Book.prototype.getSummary = function () {
//     return this.title + this.author + this.year
// }

// Book.prototype.getAge = function () {
//     const age = new Date().getFullYear() - this.year;
//     return `${this.title} is ${age} year old`
// }

// Book.prototype.revise = function (newYear) {
//     this.year = newYear
//     this.revised = true
// }

// const book1 = new Book('Book one', "Ritesh", 2013);
// const book2 = new Book('Book two', "Ritesh", 2009)
// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(book2.getAge());

// console.log(book2);
// book2.revise(2015)
// console.log(book2);


// Classes

// class Students {
//     constructor(name, age, hobby) {
//         this.name = name
//         this.age = age
//         this.hobby = hobby
//     }
//     // instance method
//     biodata() {
//         return `${this.name} is ${this.age} years old with ${this.hobby} as a hobby`
//     }
// }

// class Player extends Students {
//     constructor(name, age, hobby, game) {
//         super(name, age, hobby);
//         this.game = game
//     }
//     player_biodata() {
//         return `${super.biodata()} and my fav game is ${this.game}`
//     }
// }

// // const obj1 = new Students("Ritesh", 25, "Music")
// // obj1.biodata()

// const obj1 = new Player("Ritesh", 25, "Music", "Cricket")
// const obj2 = new Player("Shilpa", 26, "dance", "Badminton")
// console.log(obj1.player_biodata());
// console.log(obj2.player_biodata());


// Approach for Object Creation..............................

// Solution 1.........................

// function userCreated(name, score) {
//     const newUser = {}
//     newUser.name = name
//     newUser.score = score
//     newUser.increment = function () {
//         this.score++
//     }
//     return newUser
// }

// const user1 = userCreated("Ritesh", 5)
// console.log(user1);
// user1.increment()
// console.log(user1);


// Solution 2..........................

// function userCreated(name, score) {
//     const newUser = Object.create(functionStore)
//     newUser.name = name
//     newUser.score = score
//     return newUser
// }

// const functionStore = {
//     increment: function () { this.score++ },
//     login: function () { console.log(`${this.name} is logged in`); }
// }

// const user1 = userCreated("Ritesh", 5)
// console.log(user1);
// user1.increment()
// console.log(user1);
// user1.login()

// // console.log(user1.__proto__);


// Solution 3............................

// function User(name, score) {
//     this.name = name
//     this.score = score
// }

// User.prototype.increment = function () {
//     return this.score++
// }

// const user1 = new User("Ritesh", 5)
// console.log(user1);
// user1.increment()
// console.log(user1);


// Recursion...............................................

// let counter = 1
// function demo(num) {
//     if (counter > num) {
//         return
//     }
//     console.log("Yooo");
//     counter++
//     demo(num)
// }
// demo(10)


// Object.create()...........................................

// const cat = {
//     makeSound: function () {
//         console.log(this.sound);
//     }
// }

// const mark = Object.create(cat)
// mark.sound = "Yoooo"
// mark.makeSound()


// Flat nested array.........................................

// const newArr = [[[1, [1.1]], 2, 3], [4, 5]]

// function flatten(ary) {
//     var ret = [];
//     for (var i = 0; i < ary.length; i++) {
//         if (Array.isArray(ary[i])) {
//             ret = ret.concat(flatten(ary[i]));
//         } else {
//             ret.push(ary[i]);
//         }
//     }
//     return ret;
// }

// console.log(flatten(newArr));

// Array.prototype.flatten = function () {
//     var ret = [];
//     for (var i = 0; i < this.length; i++) {
//         if (Array.isArray(this[i])) {
//             ret = ret.concat(this[i].flatten());
//         } else {
//             ret.push(this[i]);
//         }
//     }
//     return ret;
// };

// console.log(newArr.flatten());


// Iterators..................................................

// let mySet = new Set([1, 2, 2, 2, 3])

// const iterator = mySet[Symbol.iterator]()
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (val of mySet) {
//     console.log(val);
// }


// let anObject = {
//     name: "RItesh",
//     age: 20,
//     friends: ['john', 'kim', 'peter'],
//     getName: function () {
//         return this.name
//     }
// }

// for (i in anObject) {
//     console.log(i);
// }


// let myArray = [1, 2, 3, 4, 5];

// let iterator = myArray[Symbol.iterator]()

// console.log(iterator);
// for (i = 0; i <= myArray.length; i++) {
//     console.log(iterator.next());
// }


// Generators.................................................

// function* simpleGenerator() {

//     yield 1
//     yield 2

//     // infinite loop
//     // let id = 1
//     // while (true) {
//     //     yield id++
//     // }
// }

// const generatorObject = simpleGenerator()
// console.log(generatorObject);
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());


// Two Sum......................................................

// function twoSum(arr, target) {
//     let newArr = []
//     for (i = 0; i < arr.length; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             let sum = arr[i] + arr[j]
//             if (sum == target) {
//                 newArr.push(i, j)
//             }
//         }
//     }
//     console.log(newArr);
// }

// twoSum([1, 3, 5, 2, 7, 9], 14)

// second method

// function sum(arr) {
//     let left = 0
//     let right = arr.length - 1
//     while (left < right) {
//         sum = arr[left] + arr[right]
//         if (sum == 0) {
//             return [arr[left], arr[right]]
//         }
//         else if (sum > 0) {
//             right--;
//         }
//         else {
//             left++
//         }
//     }
// }

// console.log(sum([-5, -4, -3, -2, 0, 2, 4, 6, 8]));


// Longest Substring Without Repeating Characters.............

// function longestSubstring(s) {
//     let set = new Set()
//     let max = 0
//     let left = 0
//     let right = 0
//     while (right < s.length) {
//         if (!set.has(s.charAt(right))) {
//             set.add(s.charAt(right))
//             max = Math.max(max, set.size)
//             right++
//         }
//         else {
//             set.delete(s.charAt(left))
//             left++
//         }
//     }
//     console.log(max);
// }

// longestSubstring("dvdf")


// Longest Palindrome.........................................

// var longestPalindrome = function (s) {
//     if (s.length < 1 || s == null) return ''
//     let longest = "";

//     for (let i = 0; i < s.length; i++) {
//         expand(i, i)
//         expand(i - 1, i)
//     }
//     function expand(l, r) {
//         while (l >= 0 && r < s.length && s[l] === s[r]) {
//             if (r - l + 1 > longest.length) {
//                 longest = s.slice(l, r + 1);
//             }
//             l--;
//             r++;
//         }
//     }
//     return longest;
// };

// console.log(longestPalindrome("ababcb"));


// Second Method

// function fun(str) {
//     function rev(str) {
//         return str.split("").reverse().join("")
//     }

//     let count = ""
//     for (i = 0; i < str.length; i++) {
//         let temp = ""
//         for (j = i; j < str.length; j++) {
//             temp = temp + str[j]
//             if (temp == rev(temp)) {
//                 if (count.length < temp.length) {
//                     count = temp
//                 }
//             }

//         }
//     }
//     return count
// }

// console.log(fun("aaaabbaa"));


// Angle between hands of clock.................................

// Hour hand: 30degree/hour
//            0.5degree/min
// Min hand:  0degree/hour
//            6degree/min
// Angle = hour - min

// function angle(x, y) {
//     let hr = (30 * x + (y / 2))
//     let min = 6 * y
//     let result = Math.abs(hr - min)

//     if (result > 180) {
//         result = 360 - result
//     }
//     return `The angle between hands is ${result}`
// }

// console.log(angle(3, 10));


// Find missing number in array.................................

// function missing(arr) {
//     let n = arr[arr.length - 1]
//     let sum1 = (n * (n + 1)) / 2
//     let sum2 = arr.reduce((acc, curr) => acc += curr, 0)

//     // arr.forEach(elem => {
//     //     sum2 += elem
//     // })
//     return `The missing number in array is ${sum1 - sum2}`
// }

// console.log(missing([1, 2, 4, 5]));


// Sort an array................................................

// function largest(arr) {
//     let temp = 0
//     for (i = 0; i < arr.length; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(largest([1, 3, 66, 4, 0, 9]));


//setTimout + Closure.........................................

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// x()


// Missing number in an array.................................

// function missing(arr) {
//     let a = 0
//     arr.sort((a, b) => a - b)
//     for (i = arr[0]; i <= arr[arr.length - 1]; i++) {
//         a += i
//     }

//     let sum = arr.reduce((acc, curr) => acc += curr, 0)

//     return `The missing number is ${a - sum}`
// }

// console.log(missing([10, 11, 12, 14, 15, 16, 17, 18, 19, 20]));


// Find missing numbers in array................................

// function prletMissingElements(arr, N) {
//     let diff = arr[0] - 0;
//     let newArr = []
//     for (let i = 0; i < N; i++) {
//         if (arr[i] - i != diff) {
//             while (diff < arr[i] - i) {
//                 newArr.push(i + diff)
//                 diff++;
//             }
//         }
//     }
//     console.log(newArr);
// }

// let arr = [6, 7, 10, 11, 13];
// let N = arr.length;

// prletMissingElements(arr, N);


// Area of container with maximum water.......................

// var maxArea = function (height) {
//     let area = 0;
//     let temp = 0;
//     for (i = 0; i < height.length; i++) {
//         for (j = i + 1; j < height.length; j++) {
//             temp = Math.min(height[i], height[j]) * (j - i)
//             area = Math.max(area, temp)
//         }
//     }
//     return area
// };

// console.log(maxArea([1, 2, 1]))


// Array rotation...............................................

// function rotate(arr) {
//     for (i = 0; i < arr.length - 1; i++) {
//         arr.push(arr.shift())
//     }
//     return arr
// }

// console.log(rotate([1, 2, 3, 4, 5]));


// Contiguous subarray which has the maximun sum................
// Kadane's Algorithm

// function max(arr) {
//     let sum = arr[0]
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[i] + arr[i - 1]) {
//             arr[i] = arr[i] + arr[i - 1]
//         }
//         if (sum < arr[i]) {
//             sum = arr[i]
//         }

//         // or
//         // arr[i] = Math.max(arr[i], arr[i] + arr[i - 1])
//         // sum = Math.max(sum, arr[i])
//     }
//     return sum
// }

// Second Method - Brute Force

// var max = function (arr) {
//     let result = arr[0]
//     for (i = 0; i < arr.length; i++) {
//         let temp = 0
//         for (j = i; j < arr.length; j++) {
//             temp = temp + arr[j]
//             result = Math.max(result, temp)
//         }
//     }
//     return result
// };

// console.log(max([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(max([-2, -1]));


// Count Inversion..............................................

// function inverse(arr) {
//     let newArr = []
//     for (i = 0; i < arr.length; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 newArr.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return newArr.length
// }

// console.log(inverse([2, 4, 1, 3, 5]));
// console.log(inverse([2, 3, 4, 5, 6]));
// console.log(inverse([10, 10, 10]));


//Best Time to Buy and Sell Stock...............................

// var maxProfit = function (a) {
//     let profit = 0;
//     let buy = a[0]
//     for (i = 1; i < a.length; i++) {
//         buy = Math.min(buy, a[i])
//         profit = Math.max(profit, a[i] - buy)
//     }
//     return profit
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([[7, 6, 4, 3, 1]]));


// Count pairs with given sum...................................

// function pairs(a, k) {
//     let newArr = []
//     for (i = 0; i < a.length; i++) {
//         for (j = i + 1; j < a.length; j++) {
//             if (a[i] + a[j] == k) {
//                 newArr.push([a[i], a[j]])
//             }
//         }
//     }
//     return newArr.length
// }

// console.log(pairs([1, 5, 7, 1], 6));
// console.log(pairs([1, 1, 1, 1], 2));


// Subarray with sum equals to k................................

// function sum(arr, k) {
//     let count = 0
//     for (i = 0; i < arr.length; i++) {
//         let sum = 0
//         for (j = i; j < arr.length; j++) {
//             sum = sum + arr[j]
//             if (sum == k) count++
//         }
//     }
//     return count
// }

// console.log(sum([4, 2, -3, 1, 6], 0));
// console.log(sum([1, 1, 1], 2));


// Maximum product subarray.....................................

// var maxProduct = function (arr) {
//     let result = arr[0]
//     for (i = 0; i < arr.length; i++) {
//         let temp = 1
//         for (j = i; j < arr.length; j++) {
//             temp = temp * arr[j]
//             result = Math.max(result, temp)
//         }
//     }
//     return result
// };

// console.log(maxProduct([6, -3, -10, 0, 2]))


// Longest consecutive subsequence..............................

// function long(arr) {
//     if (arr.length == 0) return 0
//     arr.sort((a, b) => a - b)
//     let count = 1
//     let max = 1
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] - arr[i - 1] == 1) {
//             count++
//             max = Math.max(max, count)
//         }
//         else if (arr[i] == arr[i - 1]) continue
//         else {
//             count = 1
//         }
//     }
//     return max

// }

// console.log(long([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log(long([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));


// Repeating characters.........................................

// function fun(str) {
//     let newArr = []
//     for (i = 0; i < str.length; i++) {
//         if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//             if (newArr.indexOf(str[i]) == -1) {
//                 newArr.push(str[i])
//             }
//         }
//     }
//     return newArr
// }

// console.log(fun("geeksforgeeks"));


// Check if strings are rotation of each other................

// function fun(str1, str2) {
//     let arr = str1.split("")
//     let newArr = []
//     let a, b;
//     for (i = 1; i <= arr.length; i++) {
//         arr.push(arr.shift())
//         newArr.push(arr.join(""))
//     }
//     if (newArr.includes(str2)) return true
//     return false
// }

// console.log(fun("ABCD", "CDAB"));


// Reverse a string............................................

// const str = "This is a string"

// function rev(str) {
//     return str.split(" ").reverse().join(" ")
// }

// console.log(rev(str));

// function revStr(str) {
//     let a = str.split(" ")
//     let newArr = []
//     a.forEach(elem => {
//         newArr.push((elem.split("").reverse().join("")))
//     })
//     console.log(newArr.join(" "));
// }
// revStr(str);


// Unique character............................................

// const str = "abcaef"

// function unique() {
//     let a = str.split("")
//     let b = "";
//     for (let i of a) {
//         if (a.indexOf(i) == a.lastIndexOf(i)) {
//             b += i
//         }
//     }
//     return b
// }

// console.log(unique(str));


// function unique(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.indexOf(str[i]) != i) {
//             return false
//         }
//     }
//     return true
// }

// console.log(unique("abcde"));
// console.log(unique("abacde"));


// Palindrome...................................................

// function palindrome(str) {
//     let a = str.toLowerCase().split("").reverse().join("")
//     if (a == str.toLowerCase()) {
//         return true
//     }
//     return false
// }

// console.log(palindrome("lol"));


// Reverse a integer............................................

// function rev(num) {
//     let temp, rem, final = 0;
//     temp = num
//     while (num > 0) {
//         rem = num % 10;
//         num = parseInt(num / 10);
//         final = final * 10 + rem
//     }
//     if (final == temp) {
//         return true
//     }
//     return false
// }

// console.log(rev(110));


// Capitalize letters...........................................

// function capitalize(str) {
//     let a = str.split(" ").map(elem => {
//         return elem[0].toUpperCase() + elem.slice(1)
//     })
//     return a.join(" ")
// }

// console.log(capitalize("hey there javascript"));


// Print longest word...........................................

// function longest(str) {
//     let a = str.split(" ")
//     let b = "";
//     a.forEach(element => {
//         if (element.length > b.length) {
//             b = element
//         }
//     });
//     return b
// }

// console.log(longest("Yo! what is up Ritesh"));


// Capitalize first letter......................................

// function capitalize(str) {
//     let a = str.split(" ").map(elem => {
//         return elem[0].toUpperCase() + elem.slice(1)
//     })
//     return a.join(" ")
// }

// console.log(capitalize("hey there javascript"));


// Check weather the sum of all elem of array is equal to largest number in array

// function large(arr) {
//     let a = arr.sort((a, b) => a - b)
//     let sum = 0
//     for (i = 0; i < arr.length - 1; i++) {
//         sum = sum + a[i]
//     }
//     if (a[a.length - 1] == sum) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(large([2, 3, 4, 16, 7]));
// console.log(large([1, 2, 10, 3]));


// Factorial..............................................

// function fact(num) {
//     var a = 1;
//     for (i = num; i >= 1; i--) {
//         a = a * i
//     }
//     console.log(a);
// }

// fact(3);


// Find Longest Word..........................................

// function longWord(str) {
//     var words = str.split(" ")
//     var longest = ""
//     words.forEach(element => {
//         if (element.length > longest.length) {
//             longest = element
//         }
//     });

//     return (`The longest word is ${longest} an length is ${longest.length}`)
// }

// console.log(longWord("Yo! What is good Ritesh"));


// function longWord(str) {
//     a = str.split(" ")
//     a.sort((a, b) => {
//         return a.length - b.length
//     })

//     return a[a.length - 1].length
// }

// console.log(longWord("Hey there Shilpa kk"));


// String ends with target.....................................

// function fun(str, target) {
//     a = str.split(" ")
//     b = a[a.length - 1]
//     if (target.toLowerCase() == b.toLowerCase()) {
//         console.log(`${str} end with ${target}`);
//     }
// }

// fun("Yooo! What is up", "up")


// Repeat a string.............................................

// function repeat(str, num) {
//     let a = ""
//     if (num > 0) {
//         for (i = 1; i <= num; i++) {
//             a = a + str
//         }
//         console.log(a);
//     }
//     else {
//         console.log("");
//     }
// }
// repeat("fun", 5)

// function repeat(str, num) {
//     if (num < 0) console.log("");
//     console.log(str.repeat(num));
// }
// repeat("fun", 5)


// Truncate a string...................................

// function trun(str, num) {
//     if (num <= 3) {
//         return str.slice(0, num) + "..."
//     }
//     return str.slice(0, num - 3) + "..."
// }

// output = trun("Have a good day fucker", 5)
// console.log(output);


// Binary Search.............................................

// let array = [3, 4, 6, 2, 3, 645, 2, 3, 6, 83, 23, 13]

// function binarySearch(arr, value) {
//     let max = arr.length - 1
//     let min = 0;
//     let mid = 0;

//     while (min <= max) {
//         mid = Math.floor((max + min) / 2)
//         if (arr[mid] == value) {
//             return mid
//         }
//         else if (arr[mid] < value) {
//             min = mid + 1
//         }
//         else {
//             max = mid - 1
//         }
//     }
//     return -1
// }

// let sortedArray = array.sort((a, b) => a - b)
// console.log(sortedArray);

// console.log(binarySearch(sortedArray, 83));


// ...........................................................

// function fun(str) {
//     let count = 0
//     let temp = ""
//     for (i = 0; i < str.length; i++) {
//         let tempRepeat = ""
//         let tempCount = 0
//         if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//             tempRepeat = str[i]
//             for (j = i + 1; j < str.length; j++) {
//                 if (str[j] == tempRepeat) {
//                     tempCount++
//                     if (temp.length < tempCount) {
//                         temp = str[j]
//                     }
//                 }
//             }
//         }
//     }
//     console.log(`Most repeated character: ${temp}`);

//     for (i = 0; i < str.length; i++) {
//         if (str[i] == temp) {
//             count++
//         }
//     }
//     if (str.length - count == count) {
//         console.log("Yes");
//     }
//     else {
//         console.log("No");
//     }
// }

// fun("aaabbc")


