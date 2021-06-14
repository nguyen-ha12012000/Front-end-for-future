
let numClick = 0;

// ============== Ex1===============

let btn1 = document.getElementById("click-me-1");

btn1.onclick = function() {
    if(numClick %2 == 0) {
        document.getElementById("box-1").style.visibility = 'hidden';
        document.getElementById("des_text_1").style.visibility = 'hidden';
    }
    else {
        document.getElementById("box-1").style.visibility= 'visible';
        document.getElementById("des_text_1").style.visibility = 'visible';
    }
    numClick++;
}

// ============== Ex2 ===============

let btn2 = document.getElementById("click-me-2");
let listColor = ['black', 'white', 'greeen', 'blue', 'pink', 'red', 'yellow', 'grey', 'brown'];

btn2.onclick = function() {
    document.getElementById("box-2").style.background = listColor[Math.floor(Math.random()*listColor.length)];
    numClick++;
}

// ============== Ex3 ===============

let btn3 = document.getElementById("click-me-3");

let text3_1 = document.getElementById("des_text_3_1");
let text3_2 = document.getElementById("des_text_3_2");

let tempText;
let tempBd;

btn3.onclick = function() {
    if(numClick %2 == 0) {
        tempText = text3_2.innerText;
        text3_2.innerText = text3_1.innerText;
        text3_1.innerText = tempText;
    }
    else {
        tempText = text3_2.innerText;
        text3_2.innerText = text3_1.innerText;
        text3_1.innerText = tempText;
    }
    numClick++;
}

// ============== Ex4 ===============

let btn4 = document.getElementById("click-me-4");

let text4 = document.getElementById("des_text_4");
text4.style.fontSize = "14px";

let fontSize = 1;

btn4.onclick = function() {
    text4.style.fontSize = `${14+fontSize}px`;
    fontSize ++;
    numClick ++;
}
