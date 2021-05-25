//======================Ex1=======================

// ----------1.1----------------

let array = [
    obj1 = {
        Name : "Xiaomi portable charger 20000mah", 
        Brand : "Xiaomi",
        Price : 428,
        Color : "white",
        Category : "Charger"
    },

    obj2 = {
        Name : "VSmart Active 1", 
        Brand : "VSmart",
        Price : 5487,
        Color : "Black",
        Category : "Phone"
    },

    obj3 = {
        Name : "IPhone X", 
        Brand : "Apple",
        Price : 21490,
        Color : "Gray",
        Category : "Phone"
    },

    obj4 = {
        Name : "Samsung Galaxy A9", 
        Brand : "Samsung",
        Price : 8490,
        Color : "Blue",
        Category : "Phone"
    }
]

for (let i = 0; i < array.length; i++) {
    console.log("--------------------------");
    console.log(`Name : ${array[i].Name}`);
    console.log(`Price : ${array[i].Price}`);
    
}


//------------1.2-----------------

let inputPosition = Number(prompt("Enter product's position: "));

console.log("--------------------------")

for (let j = 0; j < array.length; j++) {
    if (inputPosition === array.indexOf(array[j])) {
        console.log(`Name : ${array[j].Name}`);
        console.log(`Brand : ${array[j].Brand}`);
        console.log(`Price : ${array[j].Price}`);
        console.log(`Color : ${array[j].Color}`);
        console.log(`Category: ${array[j].Category}`);
    }
}

//-----------------1.3------------------

let inputCat = prompt("Enter your category: ");

console.log("-----------------------------------------------");

for (let k = 0; k < array.length; k++) {
    if (inputCat.toLowerCase() === (array[k].Category).toLowerCase()) {
        console.log(`Name : ${array[k].Name}`);
        console.log(`Price : ${array[k].Price}`);
        console.log("-------------------------");
    }
}

//-----------------1.4--------------------

array[0].Providers = "PhukienzeroDientuccc";
array[1].Providers = "Tgdd";
array[2].Providers = "Tgdd";
array[3].Providers = "Tgdd";

for (let b = 0; b < array.length; b++) {
    console.log(`Name : ${array[b].Name}`);
    console.log(`Price : ${array[b].Price}`);
    console.log(`Providers : ${array[b].Providers}`)
    console.log("-------------------------");
    
}

//-----------------1.5----------------------

let inputProvider = prompt("Enter your provider: ");

console.log("-----------------------------------------------");

for (let c = 0; c < array.length; c ++) {
    if (inputProvider.toLowerCase() === (array[c].Providers).toLowerCase()) {
        console.log(`Name : ${array[c].Name}`);
        console.log(`Brand : ${array[c].Brand}`);
        console.log(`Price : ${array[c].Price}`);
        console.log(`Color : ${array[c].Color}`);
        console.log(`Category : ${array[c].Category}`);
        console.log(`Providers : ${array[c].Providers}`)
        console.log("-------------------------");
    }
}




//=======================Ex2==========================


//-------------2.1-----------------

let listTask = [
    html = {
        id : 1,
        Name : "HTML",
        Complete : false
    },
    css= {
        id : 2,
        Name : "CSS",
        Complete : false
    },
    js = {
        id : 3,
        Name : "Basic of JavaScript",
        Complete : false
    },
    npm = {
        id : 4,
        Name : "Node Package Manager (npm)",
        Complete : false
    },
    git = {
        id : 5,
        Name : "Git",
        Complete : false
    }
]

console.log("Hi there, this is your task to front-end develop career:  ");
for (let c = 0; c < listTask.length; c++) {
    console.log(`${c + 1}. ${listTask[c].Name}`);
    console.log(`   Complete : ${listTask[c].Complete}`);
}

//------------------2.2-2.5--------------------

let isLoop = true;

while(isLoop) {
    let inputChoice = prompt("Enter your command(New, Update, Delete, Complete):");

    if(inputChoice.toLowerCase() === 'new') {
        let newName = prompt("Enter new task: ");
        let newID = listTask.length + 1;
        let newTask = {
            id : newID,
            Name : newName,
            Complete : false
        }
        listTask.push(newTask);

        for (let d = 0; d < listTask.length; d++) {
            console.log(`${d + 1}. ${listTask[d].Name}`);
            console.log(`   Complete : ${listTask[d].Complete}`);
        }
        
    }
    
    else if(inputChoice.toLowerCase() === 'update') {
        let indexInput = Number(prompt("Enter position: "));
        if(indexInput < 0 && indexInput >= listTask.length) {
            alert("Not Found");
        } 
        else {
            let newName1 = prompt("Enter new title: ");
            listTask[(indexInput - 1)].Name = newName1;
        }

        for (let e = 0; e < listTask.length; e++) {
            console.log(`${e + 1}. ${listTask[e].Name}`);
            console.log(`   Complete : ${listTask[e].Complete}`);
        }   
    } 

    else if(inputChoice.toLowerCase() === 'delete') {
        let indexDelete = prompt("Enter position: ");
        if(indexDelete  < 0 && indexDelete >= listTask.length) {
            alert("Not Found");
        }
        else {
            listTask.splice(indexDelete - 1 , 1);
        }
        for (let k1 = 0; k1 < listTask.length; k1 ++) {
            console.log(`${k1 + 1}. ${listTask[k1].Name}`);
            console.log(`   Complete : ${listTask[k1].Complete}`);
        }
    }

    else if(inputChoice.toLowerCase() === 'complete'){
        let updateCom = prompt("Enter position: ");
        if(updateCom < 0 && updateCom >= listTask.length) {
            alert("Not Found");
        } 
        else {
            listTask[(updateCom - 1)].Complete = "true";
        }
        for (let f = 0; f < listTask.length; f ++) {
            console.log(`${f + 1}. ${listTask[f].Name}`);
            console.log(`   Complete : ${listTask[f].Complete}`);
        } 
    }

    else {
        alert("Error!")
        inputChoice = prompt("Enter your command(New, Update, Delete, Complete):");
    }
}

