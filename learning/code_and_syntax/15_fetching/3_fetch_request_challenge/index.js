try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    if (!response.ok) {
        throw new Error('There was a problem with the API!')
    }
    const data = await response.json()
    console.log(data)
} catch(error) {
    console.log(error)
} finally {
    console.log('Completed')
}