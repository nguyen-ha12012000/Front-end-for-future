//Ex1:

//a.
console.log("7 numbers, starting from 0:");
for(let a1=0; a1<7; a1++) {
    console.log(a1);
}

//b.
let n1 = Number(prompt("Enter n: "));
console.log(n1 + " numbers, starting from 0: " );
for(let a2=0; a2 < n1; a2++) {
    console.log(a2);
}

//c.

let n2 = Number(prompt("Enter n: "));
console.log("A sequence of numbers, starting from 3, ending before" +  n );
let isLoop = true;
while(isLoop) {
    if(n2 < 3) {
    alert("Enter the number greater than 3:  ");
    n2 = Number(prompt("Enter n: "));        
    }

    else {
        for(let a3=3; a3<n2; a3++) {
        console.log(a3);
        }
    isLoop = false;
    }
}

//d. 

let n3 = Number(prompt("Enter n: "));
let c1 = Number(prompt("Enter c: "));
console.log("A sequence of numbers, starting from " + c1 + ", ending before " + n3);

while(true) {
    if(n3 < c1) {
        alert("Enter n is greater than c: ")
        n3 = Number(prompt("Enter n: "));
        c1 = Number(prompt("Enter c: "));
    }
    else {
        for(let a4=c1; a4 < n3; a4++) {
        console.log(a4);
        }
        false;
    }
}

//e. 

let n4 = Number(prompt("Enter n: "));
let c2 = Number(prompt("Enter c: "));
console.log("A sequence of numbers, starting from " + c2 + ", ending before " + n4 + ", stepping by 3");

while(true) {
    if((n4 - c2) < 3) {
        alert("Enter n is 3 units larger than c: ");
        n4 = Number(prompt("Enter n: "));
        c2 = Number(prompt("Enter c: "));
    }
    else {
        for(let a5=c2; a5 < n4; a5 += 3) {
        console.log(a5);
        }
        false;
    }
}


//f. 

let n5 = Number(prompt("Enter n: "));
let c3 = Number(prompt("Enter c: "));
let s1 = Number(prompt("Enter s: "));
console.log("A sequence of numbers, starting from " + c3 + ", ending before " + n5 + ", stepping by " + s1);

while(true) {
    if((n5 - c3) < s1) {
        alert("Enter n is s units larger than c:");
        n4 = Number(prompt("Enter n: "));
        c2 = Number(prompt("Enter c: "));
    }
    else {
        for(let a6=c3; a6 < n5; a6 += s1) {
        console.log(a6);
        }
        false;
    }
}


// Ex2: 

let n6 = Number(prompt("Enter n: "));
console.log("Factorial number of " + n6 + ":");
let fact = 1;
if(n6 < 0) {
    console.log("-1");
}else if (n6 == 0) {
    console.log("1");
} else {
    for(let a7=1; a7 <= n6; a7++) {
    fact *= a7;
}
console.log(fact);
}



//Ex3:

let inputAge = Number(prompt("Enter your age: "));
while(true) {
    if(inputAge <= 0) {
        alert("Error!");
        inputAge = Number(prompt("Enter your age: "));
    }
    else if (inputAge > 0 && inputAge < 14) {
        alert("You are not old enough to view this content!");
    }
    else if(inputAge >= 14) {
        alert("Enjoy!");
        false;
    }    
}   


//Ex4: 

let inputNum = Number(prompt("Enter a number in range 0-9: "));
while(true) {
    if (inputNum < 0 || inputNum > 9) {
        alert("Error!");
        inputNum = Number(prompt("Enter a number in range 0-9: "));
    } 
    else if(inputNum >= 0 && inputNum < 4 ) {
        alert("Lower half of 9");
        false;
    }
    else if(inputNum === 4 || inputNum === 5) {
        alert("In the half of 9");
        false;
    } 
    else if(inputNum > 5 && inputNum <=9) {
        alert("Higher half of 9");
        false;
    }
}


//Ex5: 

let inputN = Number(prompt("n = "));
let inputX = Number(prompt("x = "));

while(true) {
    if(inputX >= inputN) {
        alert("Error");
        inputN = Number(prompt("n = "));
        inputX = Number(prompt("x = "));
    } 
    else {
        if(inputX < (inputN / 2)) {
            alert(inputX + " is in lower half of " + inputN);
            false;
        }
        else if(inputX > (inputN / 2)) {
            alert(inputX + " is in higher half of " + inputN);
            false;
        }
        else if(inputX == (inputN / 2)) {
            alert(inputX + " equals half of " + inputN);
            false;
        }
        false;
    }
}


//Ex6:

let inputNum1 = Number(prompt("n = "));

if(inputNum1 === 0) {
    alert("n equals 0");
}
else {
    if((inputNum1 % 2) === 0) {
        alert(inputNum1 + " is an even number!");
    }
    else {
        alert(inputNum1 + " is a odd number!");
    }

} 


// Ex7: 

console.log("a. 6 L’s and H’s, half L’s, half H’s: ")
for(let m=0; m < 3; m++) {
    console.log("L");
    console.log("H");
}


console.log("b. n L’s and H’s in total")
let inputNum2 = Number(prompt("Enter the number of L's and H's: "));

for(let a8=1; a8 <= inputNum2; a8++) {
    if((a8 % 2) !== 0) {
        console.log("L");
    }else if((a8 % 2) === 0) {
        console.log("H");
    }
}


console.log("c. 8 1’s and 0’s in total")
for(let m=0; m < 4; m++) {
    console.log("0");
    console.log("1");
}


console.log("d. n 1’s and 0’s in total")
let inputNum3 = Number(prompt("Enter the number of 1's and 0's: "));

for(let a10=1; a10 <= inputNum2; a10++) {
    if((a10 % 2) !== 0) {
        console.log("L");
    }else if((a10 % 2) === 0) {
        console.log("H");
    }
}

//chữa bài

let input= Number(prompt("Enter your number: "));
for (let i = 1; i <= input; i++) {
    if( i <= Math.ceil(input/2)) {
        console.log("L");
    }
    else {
        console.log("H");
    }
    
}



//Ex8:

let inputMass = Number(prompt("Enter your mass(kg): ")); 
let inputHeigh = Number(prompt("Enter your heigh(cm): ")); 

let BMI = (inputMass * 10000) / (inputHeigh * inputHeigh);

alert(BMI);

if(BMI < 16) {
    alert("You are severely underweight");
}
else if(BMI >= 16 && BMI < 18.5) {
    alert("You are underweight");
}
else if(BMI >= 18.5 && BMI < 20) {
    alert("You are normal");
}
else if(BMI >=25 && BMI < 30) {
    alert("You are overweight");
}
else if(BMI >= 30) {
    alert("You are obese");
}
