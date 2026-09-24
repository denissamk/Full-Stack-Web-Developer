const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression']
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy']
    },
    { 
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting']
    },  
    { 
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity']
    }
];

// for (let character of characters){
//     console.log(character.title)
// }

characters.forEach(function(character){
    console.log(character.powers);
});

characters.forEach(function(character){
    character.powers.forEach(function(power) {
        console.log(power);
    })
});

characters.forEach(function(character, i){
    console.log(i, character)
});