// ---------------Ex1-------------------
// let arr = prompt("Enter your array: ");
// let newArr = arr.split(',');
// console.log(newArr);
// let sum = 0;
// for (let i = 0; i < newArr.length; i++) {
//     sum += Number(newArr[i]);
// }
// console.log(sum);


//----------------Ex2-------------------

// let arr = prompt("Enter your array: ");
// let newArr = arr.split(',');

// let minNumber = Math.min.apply(Math,newArr);
// console.log(minNumber);


//-----------------Ex3--------------------

//c1:

// let arr = [2,4,6,7,8,3,1,99]
// let inputNum = Number(prompt("Enter your number: "));
// let check = false;
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(inputNum === arr[i]) {
//         index = i;
//         check = true;
//     }  
// }
// if(check) {
//     alert(`${inputNum} have in arr, and index is ${index}`);
// }
// else {
//     alert(`${inputNum} not found`);
// }

// //c2:

// let index = arr.indexOf(inputNum);
// if(index === -1) {
//     console.log((`${number} NOT found in array`));
// }
// else {
//     console.log(`${inputNum} have in array at index ${index}`);
// }


//Ex4: 

// let arrSheep = [5,7,300,90,24,50,75];
// console.log("Hello my name is Ha, and sheep's size is: ");
// console.log(...arrSheep);

// let biggestSheep = Math.max(...arrSheep);
// console.log(`Now my biggest size of sheep is ${biggestSheep}`);

// arrSheep[arrSheep.indexOf(biggestSheep)] = 8;
// console.log(...arrSheep);

// for (let month = 0; month < 3; month++) {
    
//     for(let i = 0; i < arrSheep.length; i++) {
//         arrSheep[i] += 50;
//     }

// console.log(`MONTH ${month + 1} : Sheep size`);
// console.log('After month, here is my sheep');
// console.log(...arrSheep);

// biggestSheep = Math.max(...arrSheep);
// console.log(`Now my biggest size of sheep is ${biggestSheep}`);
// arrSheep[arrSheep.indexOf(biggestSheep)] = 8;

// console.log(`After shearing, here is my flock: `);
// console.log(...arrSheep);
// console.log(`----------------------------------`)

// }

// let allSheep = 0;
// for (let i = 0; i < arrSheep.length; i++) {
//     allSheep += arrSheep[i];
// }

// console.log(`my flock size in total: ${allSheep}`);
// console.log(`I would get ${allSheep}* 3$ = ${allSheep * 3}`);


//-----------------Ex5-------------------

// let input = prompt('Enter your list name: ')
// let newList = input.split(',');
// let arrName = [];

// for (let i = 0; i < newList.length; i++) {
//     arrName.push("<" + newList + ">");
// }
// console.log(`${newList} ===> ${arrName}`);


//----------------Ex6--------------------

// let arr = [];
// let input = prompt(`Enter your number arr`);
// let newArr = input.split(',');
// for (let i = 0; i < newArr.length; i++) {
//     if(Number(newArr[i]) %2 == 1) {
//         arr.push(newArr[i]);
//     }
// }
// console.log(`${newArr} ======> ${arr}`);