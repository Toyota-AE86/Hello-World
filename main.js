var varNumBasicCar = 0;
var varNumMuscleCar = 0;
var varMoney = 0;


document.getElementById("btnBuyBasicCar").addEventListener("click", funcBuyBasicCar);

document.getElementById("btnBuyMuscleCar").addEventListener("click", funcBuyMuscleCar);

function funcBuyBasicCar() {
    if(varMoney>=10){    
    varNumBasicCar++
    varMoney-=10
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
