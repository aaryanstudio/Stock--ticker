import { getStockData} from './fakestockAPI.js'
console.log(getStockData())

setInterval(function() {
    const stockData = getStockData()
    renderStockTicer(stockData)
},1500)

let prevprice = null

function renderStockTicer(stockData) {
    const stockDisplayName = document.getelementbyId('name')
    const stockDisplaySymbol = document.getelementbyId('symbol')
    const stockDisplayPrice = document.getelementbyId('price')
    const stockDisplayPriceIcon = document.getelementbyId('price-icon')
    const stockDisplayTime = document.getelementbyId('time')

    const{name, sym, price, time} = stockData

    const priceDirectionIcon = price > prevprice ? 'green.svg' : price < prevprice ? 'red.svg' : 'grey.svg'
    const priceIconElement = document.createElement('img')
    priceIconElement.src = `svg/${priceDirectionIcon}`
    priceIconElement.alt = `Price Direction Icon
    stockDisplayPriceIcon.innerHTML = ''
    stockDisplayPriceIcon.appendChild(priceIconElement)

    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time

    prevprice = price
}