function animalCount(depth) {
    var animal = 0;
    if(depth <=10) {
        animal = depth * 50;
    } else if (depth <=20) {
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var remainingPart = remaining * 100;
        animal = firstPart + remainingPart;
    } else {
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var remainingPart = remaining * 300;
        animal = firstPart + secondPart + remainingPart;
    }
    return animal;
}
console.log(animalCount(22))