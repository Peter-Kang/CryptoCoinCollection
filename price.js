let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

async function getPriceOf(selectedPreview)
{
    //get the ticker from the element
    const ticker = selectedPreview.getAttribute("ticker");
    //Get the price
    const response = await fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${ticker}`);
    
    const prices = await response.json();
    const toUSD = USDollar.format(prices?.data?.rates['USD']);
    //Set the value
    selectedPreview.setAttribute('price',toUSD);
    //print the value
    console.log(ticker, toUSD);
}