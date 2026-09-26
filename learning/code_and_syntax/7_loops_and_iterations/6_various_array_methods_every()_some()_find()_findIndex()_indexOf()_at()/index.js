// every()
let dailyStepsArr = [10000, 12000, 15000];

const areAllOverTenK = dailyStepsArr.every(stepCount => {
    return stepCount >= 10000;
});

console.log(areAllOverTenK);



// some()
dailyStepsArr = [10000, 1200, 1500];

const isAtLeastOneOverTenK = dailyStepsArr.some(stepCount => {
    return stepCount >= 10000;
});

console.log(isAtLeastOneOverTenK);



// find()
dailyStepsArr = [10000, 12000, 15000];

const overTwelveK = dailyStepsArr.find(stepCount => {
    return stepCount > 12000;
});

console.log(overTwelveK);



// findIndex()
dailyStepsArr = [10000, 12000, 15000];

const overTwelveKIndex = dailyStepsArr.findIndex(stepCount => {
    return stepCount > 12000;
});

console.log(overTwelveKIndex);

// indexOf()
console.log(dailyStepsArr.indexOf(15000));

// at()
console.log(dailyStepsArr.at(-1));