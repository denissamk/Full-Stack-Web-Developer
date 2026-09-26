function createPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5
        if (success) {
            resolve('Operation successful')
        } else {
            reject('Operation failed')
        }
    })
}

try {
    const p1 = createPromise()
    const p2 = createPromise()
    const p3 = createPromise()
    const result = await Promise.all([p1, p2, p3])
    console.log(result)
} catch (err) {
    console.log(err)
}