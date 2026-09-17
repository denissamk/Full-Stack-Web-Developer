try {
    const response = await fetch ('https://apis.scrimba.com/jsonplaceholder/posts',
        {
            method: 'POST',
            body: JSON.stringify({
                title: 'Holiday Nightmare',
                body: 'I was kidnapped...',
                userId: 100
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = response.json()
    console.log(data)
} catch (err) {
    console.log(err)
}