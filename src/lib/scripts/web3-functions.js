import { web3, selectedAccount, connected, chainId } from "./stores.js";
import Web3 from "web3";

let web3Holder = null;
let connectedHolder = false;
let walletsHolder = "";
let chainIdHolder = "";

async function getChainId(_web3) {
    const chain_id = await _web3.eth.getChainId();
    console.log(chain_id);
    chainId.set(parseInt(chain_id));
}

export function logout() {
	web3.set(null);
	connected.set(false);
	selectedAccount.set("");
    chainId.set(0);
}


export async function login(browser, window_eth) {
    if(browser && window_eth) {
        try {
            web3Holder = new Web3(window_eth);
            walletsHolder = await window_eth.request({ method: "eth_requestAccounts" });
            if (walletsHolder.length > 0) {
                connectedHolder = true;
            } else {
                connectedHolder = false;
            }
            await getChainId(web3Holder);
            web3.set(web3Holder);
            connected.set(connectedHolder);
            selectedAccount.set(walletsHolder[0]);   
        } catch (error) {
            console.log(error);
        }
    }
}

export async function switchNetworkToPolygon() {
    const networkData = {
        chainId: "0x89",
        chainName: "Polygon Network",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls: ["https://polygon.llamarpc.com"],
        blockExplorerUrls: ["https://polygonscan.com"],
    };

    try {
        if (window.ethereum) {
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [networkData],
            });
        } else {
            alert("Please install a web3 wallet to use these features.");
        }
    } catch (error) {
        console.error("Failed to switch network in MetaMask", error);
    }
}

export async function switchNetworkToBSC() {
    const networkData = {
        chainId: "0x38",
        chainName: "BNB Network",
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
        },
        rpcUrls: ["https://binance.llamarpc.com"],
        blockExplorerUrls: ["https://bscscan.com"],
    };

    try {
        if (window.ethereum) {
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [networkData],
            });
        } else {
            alert("Please install a web3 wallet to use these features.");
        }
    } catch (error) {
        console.error("Failed to switch network in MetaMask", error);
    }
}
