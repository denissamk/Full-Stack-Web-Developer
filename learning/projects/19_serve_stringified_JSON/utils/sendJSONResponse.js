export const sendJSONResponse = (res, statusCode, payload) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Acces Control-Allow-Origin', '*')
    res.setHeader('Acces Control-Allow-Methods', 'GET')
    res.statusCode = statusCode 
    res.end(JSON.stringify(payload))
}