<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	// import { onMount } from 'svelte';
	// import { browser } from '$app/environment';
	// import { defaultEvmStores as evm, web3, selectedAccount, connected, chainId, chainData, contracts } from 'svelte-web3';


	// onMount(async () => {
	// 	if(browser) {
	// 		await evm.setProvider()
	// 		// if ($chainId != 137 && $chainData != 56) {
	// 		// 	alert("Please connect to the Polygon or BSC network.")
	// 		// }
	// 	}
	// });

</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	
	<Footer />

</div>

<style>


</style>
