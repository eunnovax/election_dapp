var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "XXXXXX";
var mnemonic =
  "brown grit awful puppy crouch picnic annual street also rich business marriage";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(
        mnemonic,
        "https://ropsten.infura.io/v3/aa53b4a238d840a38cecf616102aa6b3"
      ),
      gas: 5000000,
      gasPrice: 10000000000,
      network_id: 3
    }
  }
};
