let leapYearFinder = function(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
}
console.log(leapYearFinder(1700));
console.log(leapYearFinder(1800));
console.log(leapYearFinder(1900));
console.log(leapYearFinder(2100));
console.log(leapYearFinder(2200));

console.log(leapYearFinder(1600));
console.log(leapYearFinder(2000));
console.log(leapYearFinder(2400));