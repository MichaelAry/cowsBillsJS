let numberLength=4,maxDigit=10,bulls=0,cows=0,attemptsCounter=1,randomNumber=generateNumber();
/////////////////////////////////////////////////////////////
function generateNumber(){
    let tmpArray=[];
    while(tmpArray.length<numberLength){
        let numberDigit=Math.floor(Math.random()*10);
        if(!tmpArray.includes(numberDigit)){
            tmpArray.push(numberDigit);
        }
    }
    return tmpArray;
}
/////////////////////////////////////////////////////////////
function validateInput(){
    let userNumber=document.getElementById("input").value;
    if(userNumber.length!==numberLength){
        alert("введите 4 различных цифры");
        document.getElementById("input").value="";
        return "";
    }
    else{
        for(let i=numberLength-2;i>=0;i--){
            if(isNaN(parseInt(userNumber[i]))||userNumber.includes(userNumber[i],i+1)){
                alert("введите 4 различных цифры");
                document.getElementById("input").value="";
                return "";
            }
        }
    }
    return userNumber;
}
/////////////////////////////////////////////////////////////
function fillHistoryTable(userNumber,bulls,cows){
    let newRow=document.createElement("tr");
    let attemptCell=document.createElement("td");
    attemptCell.innerHTML=attemptsCounter;
    newRow.append(attemptCell);
    let numberCell=document.createElement("td");
    numberCell.innerHTML=userNumber;
    newRow.append(numberCell);
    let bullsCell=document.createElement("td");
    bullsCell.innerHTML=bulls;
    newRow.append(bullsCell);
    let cowsCell=document.createElement("td");
    cowsCell.innerHTML=cows;
    newRow.append(cowsCell);
    document.getElementById("rows").appendChild(newRow);
    document.getElementById("input").value='';
}
/////////////////////////////////////////////////////////////
function defineAnimal(userNumber){
    bulls=0;
    cows=0;
    for(let i=0;i<numberLength;i++){
        if(userNumber[i]===randomNumber[i].toString()){
            bulls++;
        }
        else if(randomNumber.includes(parseInt(userNumber[i]))){
            cows++;
        }
    }
}
/////////////////////////////////////////////////////////////
function valNum_fillTab(){
    let userNumber=validateInput();
    if(userNumber!==""){
        defineAnimal(userNumber);
        fillHistoryTable(userNumber,bulls,cows);
        attemptsCounter++;
        if(bulls===numberLength){
            alert("вы угадали число");
            resetGame();
        }
    }
}
/////////////////////////////////////////////////////////////
function resetGame(){
    randomNumber=generateNumber();
    attemptsCounter=1;
    bulls=0;
    cows=0;
    document.getElementById("rows").innerHTML="";
}

