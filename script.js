////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:
console.log(12*8);
// 2.Divide 10 by 2 add result to variables x, and console x:
x = 10/2;
console.log(x);
// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.
num1=20;
num2=17
console.log(num1+num2);
/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */
name = "Parviz";
surname = "Babazada";
year = 2001

info = name + ' ' + surname + ' ' + year;
console.log(info);
// 5.Console the remainder(%) when 17 is divided by 12.
console.log(17%12);
// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.
let cityName = 'Baku';
cityName = 'Gence';
console.log(cityName);


////////////// TASK 2 //////////////

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); // 2
// console.log(d); // 1
// console.log(b); // 2


////////////// TASK 3 //////////////

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // 5


////////////// TASK 4 //////////////

// console.log('test1', test); // test1 undefined
// {
//     let test = "something"
//     console.log('test2', test); // test2 something
// }
// console.log('test3', test);  // test3 undefined


// console.log('test1', test);  // test1 undefined
// {
//     var test = "something"
//     console.log('test2', test); // test2 something
// }
// console.log('test3', test); // test3 something


////////////// TASK 5 //////////////

//Find the type of all the following cases

// let name = "Ulfat" // string
// let surname = Zakirli // error, if it was intended as string it should be in ' '
// let year = 2000 // number
// year = "2000" // now year changed to string
// let city; // not defined any type 
// let qualification = null // object - not correct way of doing it in js, as it is a bug
// let obj = { name: 'ulfat' } // object
// let arr = ['a', 'b', 'c'] // object (arrays are also objects )


////////////// TASK 6 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sort "arr1" ascending
const sortedAsc = arr1.slice().sort((a, b) => a - b);
// 2.Sort "arr1" descending
const sortedDesc = arr1.slice().sort((a, b) => b - a);
// 3.Find min number from 'arr1'
const minNumber = Math.min(...arr1);
// 4.Find max number from 'arr1'
const maxNumber = Math.max(...arr1);
// 5.Sum all the numbers in 'arr1'
const sum = arr1.reduce((acc, curr) => acc + curr, 0);
// 6.Add two numbers (10,88) to end of arr1 (push methods)
arr1.push(10, 88);
// 7.Remove first two numbers from arr1
arr1.splice(0, 2);
// 8.Add three numbers (0,9,11) in front of arr1(unshift)
arr1.unshift(0, 9, 11);
// 9.Remove four numbers in front of arr1(shift)
arr1.splice(0, 4);

////////////// TASK 7 //////////////
const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// 1.Console values from "Rufet" to "Fuad"
console.log(arr2.slice(2, -1));
// 2.Add Rovshen between Gulshen and Nermin
arr2.splice(4, 0, "Rovshen");
// 3.Revers "arr2"
arr2.reverse();
// 4.Sort "arr2" ascending
arr2.sort();
// 5.Console each name with for loop
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
  }
// 6.Console only names which is Anar
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "Anar") {
      console.log(arr2[i]);
    }
  }
// 7.Console all names where name is Anar change it to "Perviz"
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "Anar") {
      arr2[i] = "Perviz";
    }
  }
// 8.Console second to last value of arr2
console.log(arr2[arr2.length - 2]);
// 9.Console length of arr2
console.log(arr2.length);



////////////// TASK 8 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// 1.Show only numbers
console.log(arr3.filter(item => typeof item === 'number'));
// 2.Show only true values
console.log(trueValues = arr3.filter(item => item === true));

// 3.Show only false values
console.log(arr3.filter(item => item === false));
// 4.Show only strings
console.log(arr3.filter(item => typeof item === 'string'));


////////////// TASK 8 //////////////
// 1.Console numbers form 0 to 100 (with for loop)
for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
// 2.Console numbers from 2 to 20 (only even numbers)
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
// 3.Console numbers from 1 to 10 (only odd numbers)
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
  }

////////////// TASK 9 //////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]
console.log(arr4.map(value => {
    if (typeof value === 'number') {
        return value + 10;
    } else if (typeof value === 'string') {
        return `${value} is string`;
    } else if (!value) {
        return `${value} is falsy value`;
    }
}));

// 2.Sum all numbers of arr4
console.log(arr4.reduce((acc, curr) => typeof curr === 'number' ? acc + curr : acc, 0));
// 3.Count only the values that are true
console.log(arr4.filter(value => value === true).length);
// 4.Count only the values that are string
console.log(arr4.filter(value => typeof value === 'string').length);
// 5.Count only the values that are false
console.log(arr4.filter(value => value === false).length);

////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
let person = {
    name: 'Parviz',
    surname: 'Babazada',
    age: 22,
    city: 'Baku'
};
// 2.Then change name to "Jhon"
person.name = 'John';



const obj = {
    email: 'parvizeb@code.edu.az',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Confidential',
            education: {
                "uni name": "ADA",
            }
        }
    }
}

// 3.Console gender
console.log(obj.info.gender);
// 4.Console city
console.log(obj.info.loc.city);
// 5.Console uni name
console.log(obj.info.loc.education);





