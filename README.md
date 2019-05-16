# demo-dapp-pet-shop

Pet shop dapp, for use as an Arbitrum demo

## Getting Started

1. Add the [Metamask](https://metamask.io/) browser extension
    - `Get Started`
    - `Import Wallet`
    - `No Thanks`
    - Wallet Seed: `jar deny prosper gasp flush glass core corn alarm treat leg smart`
    - Note: `password` is 8 characters
    - `All Done`
    - Keep this browser window open for later

2. Start Ganache on 8545

    (Install with `npm install -g ganach-cli` if not done already)

    ``` bash
    PORT=8545
    MNEMONIC="jar deny prosper gasp flush glass core corn alarm treat leg smart"
    ganache-cli -p $PORT -m "$MNEMONIC"
    ```

3. Add local Ganache to Metamask

    - Go back to Metamask or click the extension icon
    - Select `Main Ethereum Network` top right hand side
    - Choose `Localhost 8545` (if using another port will need to select `Custom RPC`)
    - You should see `100 ETH` in `Account 1` with address `0x81183C9C61bdf79DB7330BBcda47Be30c0a85064`

4. Deploy Pet Shop Contract

    ``` bash
    cd demo-dapp-pet-shop
    truffle compile
    truffle migrate
    ```

4. Launch the frontend

    Starting in `demo-dapp-pet-shop`, run:

    - `npm install` or `yarn`
    - `npm run dev` or `yarn dev`

    In the popup window that appears, select `Connect`

5. Adopt a Pet

    Choose `Adopt` on a pet.

    Select `Confirm` for the GAS fee of `0.001263` ETH.

    Finally the button should change to `Success`

## FAQ

- Clicking on `Adopt` does nothing:

    Open the developer console and click the `Adopt` button again. Expected to see:
    `Contract has not been deployed to detected network (network/artifact mismatch)`.

    Solution: Make sure the app is deployed using `truffle migrate` and then force reload
    the pet shop page.
