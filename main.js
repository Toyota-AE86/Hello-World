var varNumBasicCar = 0;
var varNumMuscleCar = 0;
var varNumSportsCar = 0;

var varIncomeBasicCar = 1;
var varIncomeMuscleCar = 5;
var varIncomeSportsCar = 10;

var varCostNextBasicCar = 10;
var varCostNextMuscleCar = 100;
var varCostNextSportsCar = 1000;

var varMoney = 10;
var timer = setInterval(funcPayment, 1000);

document.getElementById("btnBuyBasicCar").addEventListener("click", funcBuyBasicCar);
document.getElementById("btnBuyMuscleCar").addEventListener("click", funcBuyMuscleCar);
document.getElementById("btnBuySportsCar").addEventListener("click", funcBuySportsCar);

function funcBuyBasicCar() {
    if(varMoney>=varCostNextBasicCar){    
    varNumBasicCar++
    varMoney-=varCostNextBasicCar
    varCostNextBasicCar = Math.pow(varCostNextBasicCar, 1.1)
    document.getElementById("badgeBasicCar").innerHTML = varNumBasicCar
    document.getElementById("spanBankAccount").innerHTML = varMoney.toFixed(2);
    document.getElementById("spanCostNextBasicCar").innerHTML = varCostNextBasicCar.toFixed(2);
    }
}

function funcBuyMuscleCar() {
    if(varMoney>=varCostNextMuscleCar){  
    varNumMuscleCar++
    varMoney-=varCostNextMuscleCar
    varCostNextMuscleCar = Math.pow(varCostNextMuscleCar, 1.1)
    document.getElementById("badgeMuscleCar").innerHTML = varNumMuscleCar
    document.getElementById("spanBankAccount").innerHTML = varMoney.toFixed(2);
    document.getElementById("spanCostNextMuscleCar").innerHTML = varCostNextMuscleCar.toFixed(2);
    }
}

function funcBuySportsCar() {
    if(varMoney>=varCostNextSportsCar){  
    varNumSportsCar++
    varMoney-=varCostNextSportsCar
    varCostNextSportsCar = Math.pow(varCostNextSportsCar, 1.1)
    document.getElementById("badgeSportsCar").innerHTML = varNumSportsCar
    document.getElementById("spanBankAccount").innerHTML = varMoney.toFixed(2);
    document.getElementById("spanCostNextSportsCar").innerHTML = varCostNextSportsCar.toFixed(2);
    }
}

function funcPayment() {
   varMoney+=varIncomeBasicCar + varIncomeMuscleCar + varIncomeSportsCar
   document.getElementById("spanBankAccount").innerHTML = varMoney.toFixed(2);
    }
