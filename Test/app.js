//=================Ex1===================

    function reverseString(str_input) {
        let arrayChar = str_input.split("");
        let strArray = arrayChar.reverse();
        let newString = strArray.join("");
        console.log(newString) ;
    }

    reverseString("hello");

//==================Ex2==================

function upperChar(str) {
    let newStr =  str.capitalize();
    console.log(newStr)
}

upperChar("hello a");



//==================Ex3==================

function deleteChar(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    console.log(newArr);
}

deleteChar([1,2,3,3,4,5,4,4,4,5,5])

//================Ex4=====================


// let inforList = [
//     Staff1 = {
//         ID : 1,
//         Name : "A",
//         Age : 22,
//         Salary : 10000000000,
//         Position : "Tester"
//     },
//     Staff2 = {
//         ID : 2,
//         Name : "B",
//         Age : 23,
//         Salary :11000000000,
//         Position : "Front-end Dev" 
//     },
//     Staff3 = {
//         ID : 3,
//         Name : "C",
//         Age : 24,
//         Salary : 12000000000,
//         Position : "BA"
//     },
// ]

// let isLoop = true;

// while(isLoop) {
//     let inputChoice = prompt("Enter Read, Create, Update, Delete: ")
//     if (inputChoice.toLowerCase() === "read") {
//         for (let i = 0; i < inforList.length; i++) {
//             console.log(`ID : ${inforList[i].ID}`); 
//             console.log(`Name : ${inforList[i].Name}`); 
//             console.log(`Age : ${inforList[i].Age}`); 
//             console.log(`Salary : ${inforList[i].Salary}`); 
//             console.log(`Position : ${inforList[i].Position}`); 
//             console.log('--------------------------------');
//        }
//     }
//     else if(inputChoice.toLowerCase() === "create") {
//         let newID = inforList.length + 1;
//         let newName = prompt("Enter new name: ");
//         let newAge = Number(prompt("Enter new age: "));
//         let newSalary = prompt("Enter new salary: ");
//         let newPosition = prompt("Enter new position: ");

//         let newObj = {
//             ID : newID,
//             Name : newName,
//             Age : newAge,
//             Salary : newSalary,
//             Position : newPosition
//         }
//         inforList.push(newObj);
    //     for (let j = 0; j < inforList.length; j++) {
    //         console.log(`ID : ${inforList[j].ID}`); 
    //         console.log(`Name : ${inforList[j].Name}`); 
    //         console.log(`Age : ${inforList[j].Age}`); 
    //         console.log(`Salary : ${inforList[j].Salary}`); 
    //         console.log(`Position : ${inforList[j].Position}`); 
    //         console.log('--------------------------------');
    //    }
//     }
//     else if(inputChoice.toLowerCase() === "update") {
//         let indexInput = Number(prompt("Enter id: "));
//         if(indexInput  < 0 && indexInput  >= inforList.length) {
//             alert("Not Found");
//         } 
//         else {
//             let newName1 = prompt("Enter new name: ");
//             let newAge1 = Number(prompt("Enter new age: "));
//             let newSalary1 = prompt("Enter new salary: ");
//             let newPosition1 = prompt("Enter new position: ");
//             inforList[indexInput-1].Name = newName1;
//             inforList[indexInput-1].Age = newAge1;
//             inforList[indexInput-1].Salary = newSalary1;
//             inforList[indexInput-1].Position = newPosition1;
//         }
//         for (let j = 0; j < inforList.length; j++) {
//             console.log(`ID : ${inforList[j].ID}`); 
//             console.log(`Name : ${inforList[j].Name}`); 
//             console.log(`Age : ${inforList[j].Age}`); 
//             console.log(`Salary : ${inforList[j].Salary}`); 
//             console.log(`Position : ${inforList[j].Position}`); 
//             console.log('--------------------------------');
//        }
//     }
//     else if(inputChoice.toLowerCase() === "delete") {
//         let idInput = Number(prompt("Enter id: "));
//         if(idInput < 0 && idInput >= inforList.length) {
//             alert("Not Found");
//         } 
//         else {
//             inforList.splice(idInput, 1);
//         }
//     }
//     else {
//         alert("Error!");
//         inputChoice = prompt("Enter Read, Create, Update, Delete: ")
//     }
// }