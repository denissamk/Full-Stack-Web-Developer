// for in
const user = {
    name: 'Denis',
    age: 19,
    isSuccessful: true
};

for (const i in user) {
    console.log(i)
}

for (const i in user) {
    console.log(user[i])
}

// for of
const name = ['Denis', 'Sam'];

for (const i of name) {
    console.log(i)
}