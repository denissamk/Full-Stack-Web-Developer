fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const imageEl = document.createElement('img')
        imageEl.src = data.message
        imageEl.alt = 'Random dog picture'
        document.getElementById('img-container').appendChild(imageEl)
    })
    .catch(err => {
        console.log(err)
        // update the DOM to warn user
        // access an alternative API
    })
    .finally(() => console.log('Completed.'))