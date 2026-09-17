// const promise = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5
//     if (success) {
//         resolve('Operation successful')
//     } else {
//         reject('Operation failed')
//     }
// })

// try {
//     const response = await promise
//     console.log(response)
// } catch (err) {
//     console.log(err)



function preLoadImg(url) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url
        image.alt = "a beautiful scene"
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', () => reject('image has NOT loaded.'))
    })}

try {
    const results = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
    console.log(results)
    document.getElementById('container').appendChild(results)
} catch (err) {
    console.log(err)
}