// replace() and replaceAll()
const wish = 'i want to go to the America and i am already preparing it.';

console.log(wish.replace('i', 'I'));
console.log(wish.replaceAll('i', 'I'));
console.log(wish.replaceAll(/\b(i)\b/g, 'I'));





// regex
const message = 'I love you with all my heart.';

console.log(message.replaceAll(/\b(love|heart)\b/g, match => {
    return `${match} ❤️`;
}));


// regex the first letter after a full stop or period and a space ('. ')
const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring";

console.log(paragraph);
console.log(paragraph.replaceAll(/(?:^|\.\s)([a-zA-z])/g, match => {
    return match.toUpperCase()
}));

// regex flags
// const text = "Please switch off the WIFI before you leave.";

// const regex = /wifi/gi;

// const doesMatch = regex.test(text) //boolean

// console.log(doesMatch)

// regex constructor
const text = "Please switch off the WIFI before you leave.";
const userInput = "wifi"

const regex = new RegExp(userInput, 'gi')

const doesMatch = regex.test(text) //boolean

console.log(doesMatch)