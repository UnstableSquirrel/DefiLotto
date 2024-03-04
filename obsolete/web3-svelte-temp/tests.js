	import { onMount } from 'svelte'
	import { query, address } from 'page.svelte'

	if(browser) {
		// defaultEvmStores.setProvider();

		// Ethereum Web3 provider
		// defaultEvmStores.setProvider('https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7')

		// Polygon Web3 provider
		// defaultEvmStores.setProvider('https://rpc-mainnet.maticvigil.com')
		console.log(selectedAccount)
	}

	let address
	let result

	$: if(browser) {
		if(selectedAccount = null) {
			defaultEvmStores.disconnect()
		}
	}

	defaultEvmStores.attachContract('myContract', usdcAddress, usdcABI)

	let info
	async function getInfo() {
		info = await contracts.myContract.methods.balanceOf(selectedAccount).call()
		console.log(info)
	}
	
	const query = async () => {
			if($web3.utils.isAddress(address)) {
				result = $web3.utils.fromWei(await $web3.eth.getBalance(address)).toString() + " " + $chainData?.nativeCurrency?.symbol
				console.log(selectedAccount)
			} 
			else { 
				result = "Not a valid address."
			}
	}

	const disconnect = async () => {
		defaultEvmStores.disconnect()
	}

	const connect = async () => {
		if(browser) {
			// defaultEvmStores.setProvider("https://matic-mainnet.chainstacklabs.com")
			defaultEvmStores.setProvider()
			getInfo()
			// if ($connected) {
			// 	address = selectedAccount
			// 	console.log(selectedAccount)
			// }
			// if($web3.utils.isAddress(address)) {
			// 	result = $web3.utils.fromWei(await $web3.eth.getBalance(address)).toString() + " " + $chainData?.nativeCurrency?.symbol
			// } 
		}
	}