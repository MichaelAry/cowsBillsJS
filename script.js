var numberLength=4,maxDigit=10;
let inputHistory = []; // Array to store user input history

function generateNumber(){
    let tmpArray=[];
    for (;;){
        if(tmpArray.length<numberLength){
            let numberDigit=Math.floor(Math.random()*10);
            if (!tmpArray.includes(numberDigit)){
                tmpArray[tmpArray.length]=numberDigit;
            }
        }
        else{break;}
    }
    return tmpArray;
}
let randomNumber = generateNumber();
console.log(randomNumber);

function validateInput(){
    var userNumber=document.getElementById("input").value;
    if (userNumber.length!==numberLength){
        alert("Пожалуйста, введите ровно 4 различных цифры");
        return;
    } 
    else{
        for (let i=numberLength-2;i>=0;i--){
            if((isNaN(parseInt(userNumber[i])))||(userNumber.includes(userNumber[i],i+1))){
                alert("Пожалуйста, введите ровно 4 различных цифры");
                return;
            }
        }
    fillHistoryTable();    
    }
   //document.getElementById("demo").innerHTML=userNumber;

}

function fillHistoryTable(){
    var input = document.getElementById("input").value;
    var newRow = document.createElement("tr");
    var newCell = document.createElement("td");
    newCell.innerHTML = input;
    newRow.append(newCell);
    document.getElementById("rows").appendChild(newRow);
    document.getElementById("input").value = '';
}

function valNum_fillTab(){
    validateInput();
}

