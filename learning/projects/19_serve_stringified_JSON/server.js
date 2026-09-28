import http from 'node:http'
import {getDataFromDB} from './database/db.js'
import {sendJSONResponse} from './utils/sendJSONResponse.js'
import {getDataByPathParams} from './utils/getDataByPathParams.js'
import {getDataByQueryParams} from './utils/getDataByQueryParams.js'



const PORT = 8000



const server = http.createServer(async (req, res) => {

    const destinations = await getDataFromDB()
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    console.log(urlObj)
    const queryObj = Object.fromEntries(urlObj.searchParams)


    if (urlObj.pathname === '/api' && req.method === 'GET') {
        const filteredDestinations = getDataByQueryParams(destinations, queryObj)
        console.log(queryObj)    
        sendJSONResponse(res, 200, filteredDestinations)}

    else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = req.url.split('/').pop()
        const filteredData = getDataByPathParams(destinations, 'continent', continent)
        sendJSONResponse(res, 200, filteredData)}

    else if (req.url.startsWith('/api/country') && req.method === 'GET') {
        const country = req.url.split('/').pop()
        const filteredData = getDataByPathParams(destinations, 'country', country)
        sendJSONResponse(res, 200, filteredData)}

    else {
        sendJSONResponse(res, 404, {
            error: "not found",
            message: "The requested route does not exist"
        })}
})



server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))



/* 1
Challenge:
  1. Store our data in a const ‘destinations’.
  2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
    Think: What changes will you need to make to get this to work?
*/



/* 2
  Challenge:
  1. Check if the url starts with “/api/continent”.
    (Is there a JS method that allows you to check what a string starts with?)

  2. If it does, serve only items from that continent.
    (How can you get to what comes after the final slash?)
    (What method can you use to filter data?)
*/