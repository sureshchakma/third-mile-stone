//#Fisrt problem to solved the answer....#feetToMile

function feetToMile(feet){
    var mile= feet / 5280  // 1 mile =5280 feets;
    return mile;
}

var result = feetToMile(20000);

console.log(result);

//#second problem to solve the answer......#woodCalculator
function woodCalculator(chair, table, bed){
    var chairForWood= chair * 1;
    var tableForWood= table * 3;
    var bedForWood= bed * 5;

    var totalWood= chairForWood + tableForWood + bedForWood;

    return totalWood;
}

var totalQubitWood= woodCalculator(5, 6, 4);

console.log(totalQubitWood);

//#third problem to solve the answer...#brickCalculator;
function brickCalculator(floor){
    
    if(floor <=10){
        var building1= floor * 15;
        var bricksCount=building1 * 1000;
    }

    else if(floor <=20){
        var building2 =floor * 12;
        var bricksCount =building2 * 1000;
    }
    else if(floor >=20){
        building3 = floor * 10;
        var bricksCount =building3 * 1000;
    }
    return bricksCount;
}
var output =brickCalculator(10);

console.log(output);




//#4th problem to solve answer..... #tinyFriend
function tinyFriend(names){
    var smallName=names[0];

    for(var i=0; i<names.length; i++){
        var currentName=names[i];
        if(currentName.length < smallName.length){
            smallName=currentName;
        }
    }
    return smallName;
}

var smallestName=tinyFriend(['Rahim', 'Karim', 'Salam', 'Mahi', 'Choity', 'Keya', 'Mo']);

console.log(smallestName);
