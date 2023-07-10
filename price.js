async function getPrices()
{
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const responseBTC = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC");
    const pricesBTC = await responseBTC.json();
    const BTCtoUSD = USDollar.format(pricesBTC?.data?.rates['USD']);
    console.log(BTCtoUSD);

    const responseETH = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH");
    const pricesETH = await responseETH.json();
    const ETHtoUSD = USDollar.format(pricesETH?.data?.rates['USD']);
    console.log(ETHtoUSD);

    const responseUSDT = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=USDT");
    const pricesUSDT = await responseUSDT.json();
    const USDTtoUSD = USDollar.format(pricesUSDT?.data?.rates['USD']);
    console.log(USDTtoUSD);

}

function start() {
    return getPrices();
}

( async() => { await start() } )();