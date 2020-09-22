// FeetToMileCalculatorFunction 

function feetToMile(feet) {
    return feet / 5280;
}

var collegeFromHome = feetToMile(118110);
console.log("feetToMile:", collegeFromHome);

// WoodCalculatorFunction

function woodCalculator(chair, table, bed) {
    var woodForChair = 1;
    var woodForTable = 3;
    var woodForBed = 5;
    if(chair == true && table == false && bed == false) {
        return chair * woodForChair;
    } else if(table == true && chair == false && bed == false) {
        return table * woodForTable;
    } else if(table == false && chair == false && bed == true) {
        return bed * woodForBed;
    } else if(chair == true && table == true && bed == false) {
        return chair * woodForChair + table * woodForTable;
    } else if(chair == true && bed == true && table == false) {
        return chair * woodForChair + bed * woodForBed
    } else if(table == true && bed == true && chair == false) {
        return table * woodForTable + bed * woodForBed
    } else {
        return chair * woodForChair + table * woodForTable + bed * woodForBed
    }
}
var neededWood = woodCalculator(0,2,0);
console.log("NeededWood:", neededWood)

// BrickCalculatorFunction

function brickCalculator(floor) {
    var bricksNeeded = 0;
    var brick = 1000;
    if(floor >= 1) {
        var floorCount = 10;
        if(floor <=10) {
            floorCount = floor;
        }
        var bricksPerFloor = 15*brick;
        bricksNeeded = floorCount * bricksPerFloor;
    }
    if(floor >= 11) {
        var floorCount = 10;
        if(floor <= 20) {
            floorCount = floor - floorCount;
        }
        var bricksPerFloor = 12*brick;
        bricksNeeded += floorCount * bricksPerFloor;
    } 
    if(floor > 20) {
        var floorCount = floor - 20;
        var bricksPerFloor = 10*brick;
        bricksNeeded += floorCount * bricksPerFloor;
    }
    return bricksNeeded;
}

var netBricksNeeded = brickCalculator(23);
console.log("netBricksNeeded", netBricksNeeded)

// TinyFriendFunction

function tinyFriend(names) {
    var tinyName = names[0];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if(name.length < tinyName.length) {
            tinyName = name;
        }
    }
    return tinyName;
}

var smallestNamedFriend = tinyFriend(['Joe','Jami','Jaman','Arifin','Jhankar',]);
console.log("smallestNamedFriend:",smallestNamedFriend);