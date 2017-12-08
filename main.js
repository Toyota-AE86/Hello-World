var varNumBasicCar = 0;
var varNumMuscleCar = 0;
var varMoney = 0;


document.getElementById("btnBuyBasicCar").addEventListener("click", funcBuyBasicCar);

document.getElementById("btnBuyMuscleCar").addEventListener("click", funcBuyMuscleCar);

function funcBuyBasicCar() {
    varMoney++
    document.getElementById("badgeBasicCar").innerHTML = varMoney;
}
