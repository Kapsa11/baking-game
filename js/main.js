let wheat = 0;
let bread = 0;
let money = 5000;
let farmers = 0;
let breadBakers = 0;



document.getElementById("money").innerHTML = Math.floor(money);

function harvestWheat(number) {                               // increments wheat by given number
    wheat += number;

    if (wheat > 0) {
        document.getElementById("wheat").innerHTML = "Wheat: " + Math.floor(wheat);
    }

}

function bakeBread(number) {                                  // baked 1 bread out of 20 wheat
    if (wheat >= 20 * number){
        wheat -= number * 20;
        bread += number;

        if (bread >= 1){
            document.getElementById("bread").innerHTML = "Bread: " + Math.floor(bread);
        }

        document.getElementById("wheat").innerHTML = "Wheat: " + Math.floor(wheat);
    }
}

function sellBread(number) {                                 //sells 1 bread for 30 bucks
    if (bread >= 1){
        bread -= number;
        money += number * 30;


        document.getElementById("bread").innerHTML = "Bread: " + Math.floor(bread);
        document.getElementById("money").innerHTML = money;
    }
}

function sellAllBread(){
    if(bread >=1){
        money += bread * 25;
        bread -= bread;

        document.getElementById("money").innerHTML = Math.floor(money);
        document.getElementById("bread").innerHTMl = "Bread: " + Math.floor(bread);
    }
}

function hireFarmer (number) {
    let farmerCost = Math.floor(10 * Math.pow(1.1, farmers));
    if (money >= farmerCost){
        farmers += number;
        money -= farmerCost * number;

        document.getElementById("money").innerHTML = Math.floor(money);
        document.getElementById("farmers").innerHTML = "farmers: " + farmers;
    }
    let nextFarmerCost = Math.floor(10 * Math.pow(1.1, farmers))
    document.getElementById("farmerCost").innerHTML = Math.floor(nextFarmerCost) + " bucks";
}

function fireFarmer(number){
    if(farmers >= 1){
        farmers -= number;

        document.getElementById("farmers").innerHTML = "farmers: " + Math.floor(farmers);

    }
}

function hireBreadBaker(number) {
    let breadBakerCost = Math.floor(50 * Math.pow(1.1, breadBakers))
    if (money >= breadBakerCost){
        breadBakers += number;
        money -= breadBakerCost * number;

        document.getElementById("money").innerHTML = Math.floor(money);
        document.getElementById("breadBakers").innerHTML = "bread bakers: " + breadBakers;
    }
    let nextBreadBakerCost = Math.floor(50 * Math.pow(1.1, breadBakers))
    document.getElementById("breadBakerCost").innerHTML = Math.floor(nextBreadBakerCost) + " bucks";
}

function fireBreadBaker(number) {
    if (breadBakers >= 1){
        breadBakers -= number;

        document.getElementById("breadBakers").innerHTML = "bread bakers: " + Math.floor(breadBakers);
    }

}





window.setInterval(function(){

    harvestWheat(farmers / 10);
    bakeBread(breadBakers /30)


}, 100);



