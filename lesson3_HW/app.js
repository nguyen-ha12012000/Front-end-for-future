// // ---------- Lesson --------------

// let initNumber = [1, 2, 3, 4, 5];

// let isLoop = true;

// while (isLoop) {
//     let input = prompt("Chose the function C/R/U/D:");
//     if (input === 'C' || input === 'c') {
//         let addPhoneNumber = Number(prompt('add Phone number :'));
//         initNumber.push(addPhoneNumber);
//         alert(initNumber);

//     } else if (input === 'R' || input === 'r') {
//         let inputIndex = Number(prompt('Enter an index :'));
//         if (inputIndex < 0 || inputIndex > initNumber.length) {
//             alert('Error!');
//             inputIndex = Number(prompt('Enter another index :'));
//         } else {
//             alert(initNumber[inputIndex]);
//         }

//     } else if (input === 'U' || input === 'u') {
//         let inputIndex2 = Number(prompt('Enter an index :'));
//         let newValue = Number(prompt('Enter the new phone :'));
//         if (inputIndex2 < 0 || inputIndex2 > initNumber.length) {
//             alert('Error!');
//             newValue= Number(prompt('Enter another index :'));
//         } else {
//             initNumber[inputIndex2] = getValue;
//             alert(initNumber);
//         }

//     } else if (input === 'D' || input === 'd') {
//         let delNumber = Number(prompt('enter ur index for delete :'));
//         if (delNumber < 0 || delNumber > initNumber) {
//             alert('Error!');
//             delNumber = Number(prompt('Enter another index :'));
//         }else {
//             initNumber.splice(delNumber , 1 );
//             alert(initNumber);
//         }

//     }else {
//         alert('something wrong , please press C/U/R/D');
//     }

// }




// -----------Ex1----------------

// let arrayInput = prompt("Enter numbers separated by commas: ")
// arrayNum = arrayInput.split(',');
// let sum = 0;
// for (let i = 0; i < arrayNum.length; i++) {
//     sum += Number(arrayNum[i]);
// }
// alert("The sum of them is: " + sum);


// -----------Ex2-----------------

// let arrayInput = prompt("Enter numbers separated by commas: ")
// arrayNum = arrayInput.split(',');
// let minNumber = arrayNum[0];
// for (let i = 1; i < arrayNum.length; i++) {
//     if(minNumber >= arrayNum[i]) {
//         minNumber = arrayNum[i];
//     }
// }
// alert("The smallest number is: " + minNumber);

// ----------------Ex3-----------------

const array = [3, 4, 6, -9, 10, -88, 2];
let inputNum = Number(prompt("Enter the number: "));

for (let i = 0; i < array.length; i++) {
    if(inputNum == array[i]) {
        alert( inputNum + " is FOUND at index " + i);
    }
    else {
        alert(inputNum + " is NOT found in array!");
    }
    
}


// ----------------- Ex4 --------------------

// let sizeSheep = [5,7,300, 90, 24, 75];
// console.log("Hello, my name is Phuong Nam and here is my sheep's size: ");
// console.log(...sizeSheep);

// let maxSize = sizeSheep[0];
// for (let i = 1; i < sizeSheep.length; i++) {
//     if(maxSize <= sizeSheep[i]) {
//         maxSize = sizeSheep[i];
//     }

// }
// console.log("Now my biggest sheep has size " + maxSize + ", let shave it.");

// console.log("After shearing, here is my flock: ")
// let index = sizeSheep.indexOf(Math.max(...sizeSheep))
// sizeSheep[index] = 8;
// console.log(...sizeSheep);

// for (let k = 0; k < sizeSheep.length; k++) {
//     sizeSheep[k] += 50;
// }
// console.log("MONTH 1");
// console.log("One month has, passed, my sheep have grown, here are their size: ")
// console.log(...sizeSheep);


// let maxSize1 = sizeSheep[0];
// for (let i1 = 1; i1 < sizeSheep.length; i1++) {
//     if(maxSize1 <= sizeSheep[i1]) {
//         maxSize1 = sizeSheep[i1];
//     }
// }
// console.log("Now my biggest sheep has size " + maxSize1 + ", let shave it.");

// console.log("After shearing, here is my flock: ")
// let index1 = sizeSheep.indexOf(Math.max(...sizeSheep))
// sizeSheep[index1] = 8;
// console.log(...sizeSheep);

// for (let k1 = 0; k1 < sizeSheep.length; k1++) {
//     sizeSheep[k1] += 50;
// }
// console.log("MONTH 2");
// console.log("One month has, passed, my sheep have grown, here are their size: ")
// console.log(...sizeSheep);


// let maxSize2 = sizeSheep[0];
// for (let i2 = 1; i2 < sizeSheep.length; i2++) {
//     if(maxSize <= sizeSheep[i2]) {
//         maxSize = sizeSheep[i2];
//     }

// }
// console.log("Now my biggest sheep has size " + maxSize + ", let shave it.");

// console.log("After shearing, here is my flock: ")
// let index2 = sizeSheep.indexOf(Math.max(...sizeSheep))
// sizeSheep[index2] = 8;
// console.log(...sizeSheep);

// for (let k = 0; k < sizeSheep.length; k++) {
//     sizeSheep[k] += 50;
// }
// console.log("MONTH 3");
// console.log("One month has, passed, my sheep have grown, here are their size: ")
// console.log(...sizeSheep);

