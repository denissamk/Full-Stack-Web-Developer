try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Holiday Nightmare',
            body: 'I was not kidnapped...',
            userId: 100
        }),
        headers: {'Content-Type': 'application/json'}
    })
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = response.json()
    console.log(data)
} catch (err) {
    console.log(err)
} finally {
    console.log('Completed')
}


// try {
//     const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
//     if (!response.ok) {
//         throw new Error('There was a problem with the API!')
//     }
//     const data = await response.json()
//     console.log(data[0])
// } catch(error) {
//     console.log(error)
// } finally {
//     console.log('Completed')
// }