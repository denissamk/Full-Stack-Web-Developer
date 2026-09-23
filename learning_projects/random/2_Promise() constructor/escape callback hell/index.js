function uploadFile() {
    console.log('Step 1...')
    setTimeout(() => {
        processFile()
    }, 1000)
}


function processFile(callback) {
    console.log('Step 2...')
    setTimeout(() => {
        notifyUser()
    }, 1000)
}

function notifyUser(callback) {
    console.log('Step 3...')
    setTimeout(() => {
        console.log('All done.')
    }, 1000)
}

// function uploadFile() {
//     return new Promise((resolve, reject) => {
//         console.log('Step 1...')
//         setTimeout(() => {
//             resolve()
//         }, 1000)
//     })
// }

// function processFile(callback) {
//      return new Promise((resolve, reject) => {
//         console.log('Step 2...')
//         setTimeout(() => {
//             resolve()
//         }, 1000)
//     })
// }

// function notifyUser(callback) {
//      return new Promise((resolve, reject) => {
//         console.log('Step 3...')
//         setTimeout(() => {
//             resolve()
//         }, 1000)
//     })
// }

// uploadFile()

uploadFile(() =>
    processFile(() =>
        notifyUser(
            () => console.log('All done.')
        )
    )   
)

// try {
//     await uploadFile()
//     await processFile()
//     await notifyUser()
//     console.log('All completed.')
// } catch (err) {
//     console.log(err)
// }