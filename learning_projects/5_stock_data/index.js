import {getStockData} from "./fakeStockAPI.js"

setInterval(function(){
    const stockData = getStockData()
    renderStockTicker(stockData)
    },
    1500
)

let prevPrice = null

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById("name")
    const stockDisplaySymbol = document.getElementById("symbol")
    const stockDisplayPriceValue = document.getElementById("price-value")
    const stockDisplayPriceIcon = document.getElementById("price-icon")
    const stockDisplayTime = document.getElementById("time")

    const {name, sym, price, time} = stockData
    const numPrice = Number(price)

    const priceDirectionIcon =
        numPrice < prevPrice ? "▼" :
        numPrice > prevPrice ? "▲" :
        "▶"

    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = sym
    stockDisplayPriceValue.innerText = price
    stockDisplayPriceIcon.textContent = priceDirectionIcon
    stockDisplayPriceIcon.className =
        priceDirectionIcon === "▲" ? "up" :
        priceDirectionIcon === "▼" ? "down" :
        "flat"
    stockDisplayTime.innerText = time

    prevPrice = numPrice
}




const names = ["denis", "devon", "levan"]
names.forEach(names => console.log(names))



const response = fetch("https://example.com");
console.log(response);