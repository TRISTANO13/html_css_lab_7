fetch('https://tristano13.github.io/json/crypto.json')
    .then(response => response.json())
    .then(data => {
        const cryptoContainer = document.getElementById('crypto-container');
        data.cryptocurrencies.forEach(crypto => {
            cryptoContainer.innerHTML += `
                <div class="crypto">
                    <h2>${crypto.name} (${crypto.symbol})</h2>
                    <p>Current Price: $${crypto.current_price}</p>
                    <p>Market Cap: $${crypto.market_cap}</p>
                </div>
            `;
        });
    });
