// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/stocks', async (req, res) => {
    const statusInvest = require('statusinvest')

    const stocks = [
        'NEOE3',
        'CMIG4',
        'CPFE3',
        'EGIE3'
    ]

    let stock = await statusInvest.getStockHistoricalInfo({ ticker: 'BBDC4' })

    return stock
    let stocksInfo = stocks.map( async (s) => {
        return {
            'divindYeild': stock.get('Dividend Yield'),
            'pl': stock.get('P/L'),
            'pvp': stock.get('P/VP'),
            'div_ebitda': stock.get('Dívida Líquida/EBITDA'),
            'div_patrimonio': stock.get('Dívida Líquida/Patrimônio'),
            'liquidez_corrente': stock.get('Liquidez Corrente'),
            'ROE': stock.get('ROE')
        }
    })

    res.send(stocksInfo)
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
