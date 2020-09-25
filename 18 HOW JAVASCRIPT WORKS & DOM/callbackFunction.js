function explainCallback(name, age, task) {
    console.log('Hello '+ name);
    console.log('Your age '+ age);
    task();
}
// explainCallback('Jami', 22);

function washHands() {
    console.log('Wash Hands With Soap')
}

function takeShower() {
    console.log("Take shower");
}
explainCallback('Jami', 22, takeShower);
explainCallback('Jami', 22, washHands);
