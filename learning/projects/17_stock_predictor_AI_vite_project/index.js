import { dates } from './utils/dates.js'
import { GoogleGenAI } from '@google/genai'



const tickersArr = []

const generateReportBtn = document.querySelector('.generate-report-btn')

generateReportBtn.addEventListener('click', fetchStockData)

document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const tickerInput = document.getElementById('ticker-input')
    if (tickerInput.value.length > 2) {
        generateReportBtn.disabled = false
        const newTickerStr = tickerInput.value
        tickersArr.push(newTickerStr.toUpperCase())
        tickerInput.value = ''
        renderTickers()
    } else {
        const label = document.getElementsByTagName('label')[0]
        label.style.color = 'red'
        label.textContent = 'You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'
    }
})



function renderTickers() {
    const tickersDiv = document.querySelector('.ticker-choice-display')
    tickersDiv.innerHTML = ''
    tickersArr.forEach((ticker) => {
        const newTickerSpan = document.createElement('span')
        newTickerSpan.textContent = ticker
        newTickerSpan.classList.add('ticker')
        tickersDiv.appendChild(newTickerSpan)
    })
}



const loadingArea = document.querySelector('.loading-panel')
const apiMessage = document.getElementById('api-message')

async function fetchStockData() {
    document.querySelector('.action-panel').style.display = 'none'
    loadingArea.style.display = 'flex'
    try {
        const stockData = await Promise.all(tickersArr.map(async (ticker) => {
            const url = `https://api.massive.com/v1/open-close/${ticker}/2026-07-20?adjusted=true&apiKey=${import.meta.env.VITE_MASSIVE_API_KEY}`
            // `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey={import.meta.env.VITE_MASSIVE_API_KEY}`
            const response = await fetch(url)
            const data = await response.text()
            const status = await response.status
            if (status === 200) {
                apiMessage.innerText = 'Creating report...'
                return data
            } else {
                loadingArea.innerText = 'There was an error fetching stock data.'
            }
        }))
        fetchReport(stockData.join(''))
    } catch(err) {
        loadingArea.innerText = 'There was an error fetching stock data.'
        console.error('error: ', err)
    }
}



async function fetchReport(data) {
    console.log(data)
    try {
        const ai = new GoogleGenAI({
            apiKey: import.meta.env.VITE_GEMINI_API_KEY,
            dangerouslyAllowedBrowser: true
        })

        const response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            // 1. SYSTEM PROMPT (Replaces OpenAI's {role: 'system'})
            config: {systemInstruction: `- You are a trading guru. Given data on share prices on a specific day, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold, or sell.
                                         - For the text output, don't use markdown file format. Still use some formatting, but just use standard document formatting for readibility purposes.`
            },
            // 2. USER CONTENT (Replaces OpenAI's {role: 'user'})
            contents: data
        })

        // 3. PRINT RESPONSE (Replaces OpenAI's response.choices[0].message.content)
        renderReport(response.text)
    } catch (error) {
        console.log(`Error: ${error}`)
        loadingArea.innerText ='Unable to access API. Please refresh and try again!'
    }
}



function renderReport(output) {
    loadingArea.style.display = 'none'
    const outputArea = document.querySelector('.output-panel')
    const report = document.createElement('p')
    outputArea.appendChild(report)
    report.textContent = output
    outputArea.style.display = 'flex'
}



/** 
 * Challenge:
 * 1. Use the OpenAI API to generate a report advising 
 * on whether to buy or sell the shares based on the data 
 * that comes in as a parameter.
 * 
 * 🎁 See hint.md for help!
 * 
 * 🏆 Bonus points: use a try catch to handle errors.
 * **/