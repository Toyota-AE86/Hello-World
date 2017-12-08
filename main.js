var varNumBasicCar = 0;
var varNumMuscleCar = 0;
var varMoney = 0;


document.getElementById("btnBuyBasicCar").addEventListener("click", funcBuyBasicCar);

document.getElementById("btnBuyMuscleCar").addEventListener("click", funcBuyMuscleCar);

function funcBuyBasicCar() {
    varNumBasicCar++
    document.getElementById("badgeBasicCar").innerHTML = varNumBasicCar;
}

function funcBuyMuscleCar() {
    varNumMuscleCar++
    document.getElementById("badgeMuscleCar").innerHTML = varNumMuscleCar;
}
