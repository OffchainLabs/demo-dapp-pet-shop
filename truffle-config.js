const ArbProvider = require("arb-truffle-provider");
const path = require("path");
const mnemonic = "jar deny prosper gasp flush glass core corn alarm treat leg smart";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    arbitrum: {
      provider: function() {
        if(typeof this.provider.prov == 'undefined') {
            this.provider.prov = ArbProvider.provider(
              __dirname,
              'build/contracts',
              {
                'mnemonic': mnemonic,
              }
            );
        }
        return this.provider.prov
      },
      network_id: "*",
    }
  }
};
