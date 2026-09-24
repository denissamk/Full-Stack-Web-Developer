function logAnswer(answer, points) {
    console.log(`The answer is ${answer}! You've got ${points} points!`);
}

console.log("What's the Capital of Jakarta?");

const answer = setTimeout(logAnswer, 2000, 'Jakarta', 10);

document.getElementById('stop-btn').addEventListener('click', function() {
    clearTimeout(answer);
});