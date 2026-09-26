// async function getSuggestion() {
//     const response = await fetch('https://apis.scrimba.com/bored/api/activity')
//     const data = await response.json()
//     return data
// }

// console.log(getSuggestion())

    

try {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    if (!response.ok) {
        throw new Error('There was a problem with the API!')
    }
    const data = await response.json()
    
    const imageEl = document.createElement('img')
        imageEl.src = data.message
        imageEl.alt = 'Random dog picture'
    document.getElementById('img-container').appendChild(imageEl)
} catch(err) {
    console.log(err)
    // update the DOM to warn user
    // access an alternative API
    }
finally { 
    console.log('Completed.')
}