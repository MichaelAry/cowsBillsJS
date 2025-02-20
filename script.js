var numberLength=4,maxDigit=10;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validateInput(){
    var userNumbert=document.getElementById("input").value;
    if (userNumbert.length!==numberLength){
        alert("Пожалуйста, введите ровно 4 различных цифры");
        input.value="";
        return 0;
    } 
    else{
        for (let i=numberLength-2;i>=0;i--){
            if((isNaN(parseInt(userNumbert[i])))||(userNumbert.includes(userNumbert[i],i+1))){
                alert("Пожалуйста, введите ровно 4 различных цифры");
                input.value="";
                return 0;
            }
        }
       
    }
    //document.getElementById("demo").innerHTML=userNumber;
    fillHistoryTable();
    return userNumbert;
}
let userNumber=validateInput();
console.log(userNumber);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function fillHistoryTable(){
    var input = document.getElementById("input").value;
    var newRow = document.createElement("tr");
    var newCell = document.createElement("td");
    newCell.innerHTML = input;
    newRow.append(newCell);
    document.getElementById("rows").appendChild(newRow);
    document.getElementById("input").value = '';
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function valNum_fillTab(){
    validateInput();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function defineAnimal(userNumber, randomNumber){
    for (let i=0;i<numberLength;i++){
        for(let j=0;j<numberLength;j++){

        }
    }    
}
