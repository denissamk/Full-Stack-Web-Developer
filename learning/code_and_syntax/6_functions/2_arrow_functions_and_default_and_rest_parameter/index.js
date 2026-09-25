const itemsBoughtArr = [
    {
        name: 'Electric Toothbrush Holder',
        priceUSD: 40,
        desc: 'A robotic arm that holds and moves your electric toothbrush for you, ensuring optimal brushing technique.'
    },
    {
        name: 'Invisible Milk',
        priceUSD: 10,
        desc: 'A carton of milk that turns completely transparent when poured into a glass, providing a magical and mysterious drinking experience.'
    },
    {
        name: 'Self-Chilling Soup Can',
        priceUSD: 15,
        desc: 'A can of soup that instantly chills itself when opened, so you can enjoy a refreshing cold soup on a hot summer day.'
    },
];

// arrow function
// function calcTotalCost(itemsBoughtArr) {
//     const total = itemsBoughtArr.reduce((total, currentVal) => 
//         total + currentVal.priceUSD, 0
//     );
//     return total;                                                          
// }

// console.log(calcTotalCost(itemsBoughtArr));

// default parameter (discount = 0)
function calcTotalCost(itemsBoughtArr, discount = 0) {
    const total = itemsBoughtArr.reduce((total, currentVal) => 
        total + currentVal.priceUSD, 0
    );
    return total - discount;                                                          
}

console.log(calcTotalCost(itemsBoughtArr));

// rest parameter
function setPermissionLevel(permissionLevel, ...names) {
    console.log(names);
    names.forEach(name => console.log(`${name} now has ${permissionLevel} level access.`));
}

setPermissionLevel('admin', 'Dave', 'Sally', 'Mike')
