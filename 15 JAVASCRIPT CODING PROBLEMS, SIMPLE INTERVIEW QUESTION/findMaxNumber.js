let business = 550, minister = 350, sochib = 150, bunny = 50;

console.log(Math.max(business, minister, sochib))

if (business > minister && business > sochib && business > bunny) {
    console.log('business is bigger!');
} else if(minister > business && minister > sochib && minister > bunny) {
    console.log('Minister is biggger!')
} else if(sochib > business && sochib > minister && sochib > bunny) {
    console.log("Sochib bigger!")
} else {
    console.log("Bunny bigger!")
}

/* if(business > minister) {
    if(business > sochib) {
        console.log("Business bigger")
    } else {
        console.log("sochib bigger")
    }
} else {
    if(minister > sochib) {
        console.log("minister bigger")
    } else {
        console.log("sochib bigger")
    }
} */