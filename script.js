var numberLength=4,maxDigit=10;
///////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////
function validateInput(){
    var x=document.getElementById("input").value;
    if (x.length !== numberLength){
        alert("Пожалуйста, введите ровно 4 различных цифры");
        return;
    } 
    else{
        for (let i=numberLength-2;i>=0;i--){
            if((isNaN(parseInt(x[i])))||(x.includes(x[i],i+1))){
                alert("Пожалуйста, введите ровно 4 различных цифры");
                return;
            }
        }
    }
    document.getElementById("demo").innerHTML=x;}
///////////////////////////////////////////////////////
function checkGuess(){}