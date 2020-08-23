import React, { useState, useEffect } from 'react';
import './App.css';

const url = 'https://api.coinbase.com/v2/'

function App() {
  const [coins, setCoins] = useState({})
  const [txs, setTxs] = useState({}) 

  var Client = require('coinbase').Client;

  var client = new Client({'apiKey': '232d03a0757507b1dec043751f38cc8e',
                          'apiSecret': 'yI35sh/7xTXnduCWaj+zzKqg4T+jqYr5HLhZZzTTDUOxyE/jCKB1yurRA4ucnxpVXpqaDeCYuYVHpxiE0XkB4A=='});

  client.getAccount('82de7fcd-db72-5085-8ceb-bee19303080b', function(err, account) {
    account.getAddress('dd3183eb-af1d-5f5d-a90d-cbff946435ff', function(err, address) {
      console.log(address);
      address.getTransactions({}, function(err, txs) {
        console.log(txs);
      });
    });
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
