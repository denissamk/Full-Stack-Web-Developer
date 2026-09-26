// OLD WAY

// function uploadFile(callback) {
//     console.log('Step 1...')
//     setTimeout(() => {
//         callback()
//     }, 1000)
// }

// function processFile(callback) {
//     console.log('Step 2...')
//     setTimeout(() => {
//         callback()
//     }, 1000)
// }

// function notifyUser(callback) {
//     console.log('Step 3...')
//     setTimeout(() => {
//         callback()
//     }, 1000)
// }

// uploadFile(() =>
//     processFile(() =>
//         notifyUser(
//             () => console.log('All done.')
//         )
//     )   
// )



// NEW WAY

function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function processFile() {
     return new Promise((resolve, reject) => {
        console.log('Step 2...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function notifyUser() {
     return new Promise((resolve, reject) => {
        console.log('Step 3...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

try {
    await uploadFile()
    await processFile()
    await notifyUser()
    console.log('All done.')
} catch(error) {
    console.log(error)
}














// try {
//     await uploadFile()
//     await processFile()
//     await notifyUser()
//     console.log('All completed.')
// } catch (err) {
//     console.log(err)
// }