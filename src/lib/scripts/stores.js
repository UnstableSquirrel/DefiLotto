import { writable } from 'svelte/store';

// export let signer = null;
// export let wallet = "";

export let web3 = writable(null);
export let connected = writable(false);
export let selectedAccount = writable('');
export let chainId = writable(0);

// export let update = (newWeb3, newConnected, newWallet) => {
//     web3 = newWeb3;
//     connected = newConnected;
//     selectedAccount = newWallet;
// }
