function select(item) {
    let price = 0;

    switch(item) {
        case 'coffee':
            price = 5
            break;
        case 'biscuit':
            price = 4
            break;
        case 'tea':
            price = 3
            break;
        default:
            return `Sorry, we don't have this item`
    }

    return `You selected ${item}, that would be $${price}.`;
}

console.log(select('coffeee'));