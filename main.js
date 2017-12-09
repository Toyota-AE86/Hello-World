var varNumBasicCar = 0;
var varNumMuscleCar = 0;

var varCostNextBasicCar = 10;
var varCostNextMuscleCar = 100;

var varMoney = 10;
var timer = setInterval(funcPayment, 1000);

document.getElementById("btnBuyBasicCar").addEventListener("click", funcBuyBasicCar);

document.getElementById("btnBuyMuscleCar").addEventListener("click", funcBuyMuscleCar);

function funcBuyBasicCar() {
    if(varMoney>=varCostNextBasicCar){    
    varNumBasicCar++
    varMoney-=varCostNextBasicCar
    varCostNextBasicCar = Math.pow(varCostNextBasicCar, 1.1)
    document.getElementById("badgeBasicCar").innerHTML = varNumBasicCar;
    document.getElementById("spanBankAccount").innerHTML = varMoney;
    }
}

function funcBuyMuscleCar() {
    if(varMoney>=100){  
    varNumMuscleCar++
    varMoney-=100
    document.getElementById("badgeMuscleCar").innerHTML = varNumMuscleCar;
    document.getElementById("spanBankAccount").innerHTML = varMoney;
    }
}

function funcPayment() {
   varMoney+=varNumBasicCar+varNumMuscleCar*5
   document.getElementById("spanBankAccount").innerHTML = varMoney;
    }
