const ages = [12, 35, 19, 17];

// const agesAdult = ages.filter(age => {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
//     }
// );

const agesAdult = ages.filter(age => {
    return age >= 18;
    }
);

console.log(agesAdult);







const series = [
    {
        name: 'The Wire',
        location: 'Baltimore',
        lengthInHours : 60,
        genres: ['action', 'thriller', 'detective', 'suspense']
    },
    {
        name: 'Game of Thromes',
        location: 'Westeros and Essos',
        lengthInHours : 70.25,
        genres: ['fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours : 85,
        genres: ['comedy', 'romance', 'drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours : 131,
        genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
    },
    {
        name: 'The Big Bang Theory',
        location: 'Pasadena',
        lengthInHours : 139.66,
        genres: ['comedy', 'nerd', 'romance']
    },
]


const newYorkSeries = series.filter(function(show){
    return show.location === 'New York'
})

console.log(newYorkSeries)


const thrillerSeries = series.filter(show => {
    return show.genres.includes('thriller');
});

console.log(thrillerSeries);