//#Fisrt question to answer....#feetToMile

function feetToMile(feet){
    var mile= feet / 5280  // 1 mile =5280 feets;
    return mile;
}

var result = feetToMile(20000);

console.log(result);

//#second question to answer......#woodCalculator
function woodCalculator(chair, table, bed){
    var chairForWood= chair * 1;
    var tableForWood= table * 3;
    var bedForWood= bed * 5;

    var totalWood= chairForWood + tableForWood + bedForWood;

    return totalWood;
}

var totalQubitWood= woodCalculator(5, 6, 4);

console.log(totalQubitWood);

//#third question to answer...#brickCalculator






//#4th question to answer..... #tinyFriend
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
