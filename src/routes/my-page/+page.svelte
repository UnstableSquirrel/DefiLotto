
<script>

	import { defaultEvmStores as evm, web3, selectedAccount, connected, chainId, chainData, contracts} from 'svelte-web3'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import ABI from "../contracts/DFL_ABI.json"
	const CONTRACT = "0x1f0E70986dFc95D65Ed87e46750F8C77830fE7B4"

	// let line1 = "none"
	// let line2 = "underline"
	// let line3 = "none"

	// function underline(i) {
	// 	if(i == 1) {
	// 		line1 = "underline"
	// 		line2 = "none"
	// 		line3 = "none"
	// 	}

	// 	if(i == 2) {
	// 		line1 = "none"
	// 		line2 = "underline"
	// 		line3 = "none"
	// 	}

	// 	if(i == 3) {
	// 		line1 = "none"
	// 		line2 = "none"
	// 		line3 = "underline"
	// 	}
	// }

	let walletOfOwner
	let walletOfOwnerAmount

	async function getData() {
			if(browser) {
				await evm.setProvider()
				if ($chainId == 137) {
					const contract = new $web3.eth.Contract(ABI, CONTRACT)

					walletOfOwner = await contract.methods.walletOfOwner($selectedAccount).call()
					walletOfOwnerAmount = walletOfOwner.length
					// console.log(walletOfOwner.length)
					// winningNFTId = await contract.methods.winningNFTId().call()
					// console.table("Address: " + winnerAddress, "NFTId: " + winningNFTId)
				}
				else {
					alert("Please connect to the Polygon network.")
				}
			}
	}

</script>

	<section class="section1">
		<h1>My Page</h1>
		<p>All your tickets in one place.</p>

		<div class="main-container">
			<div class="title-top">Here you can view</div>
			<h2 class="title">Your ongoing tickets</h2>

			<!-- <div class="ticket-details-container">
				<div>
					<p on:click={() => underline(1)} class="para" style="text-decoration: {line1};">Lucky Tickets: </p><span class="para-span">5</span>
				</div>
				<div>
					<p on:click={() => underline(2)} class="para" style="text-decoration: {line2};">Total Tickets: </p><span class="para-span">5</span>
				</div>
				<div>
					<p on:click={() => underline(3)} class="para" style="text-decoration: {line3};">New Tickets: </p><span class="para-span">5</span>
				</div>
			</div> -->

			<div class="tickets-container">
				{#await getData()}
				<i style="display: none;">get Data</i>
				{:then connected}
					{#if $chainId == 137 && walletOfOwner.length > 0}
						{#each walletOfOwner as id}
						<img class="ticket" src="tickets/{id}.png" alt="Ticket">
						{/each}
					{/if}
					<!-- {#if $chainId == 56 && walletOfOwner.length > 0}
						{#each walletOfOwner as id}
						<img class="ticket" src="tickets/{id}.png" alt="Ticket">
						{/each}
					{/if} -->
					{#if walletOfOwner.length == 0}
						<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No tickets yet</p>
					{/if}
				{/await}
					<!-- <p style="color: white; font-size: 20px; font-weight: bold; margin: 10px 0px 0px 0px;">{walletOfOwnerAmount}x</p> -->
				<!-- <img class="ticket" src="img/ticket.png" alt="Ticket"> -->
			</div>
		</div>
	</section>

	<div class="bottom-banner">
		<img src="/img/wave2.svg" alt="Bottom-Banner">
	</div>

	<section class="section2">
<!-- 
		<div class="sec2-text">
			<span>An Exhaustive list of amazing features</span>
			<h2>What makes Rifa different?</h2>
			<p>
				We're bold in our ambition: to be the world's biggest and best online lottery platform. 
				We're for every player that's ever dreamed of hitting the jackpot, which is why we bring you the biggest prizes from around the world and offer you tons of ways to play. 
				Our aim is to offer unprecedented variety as well as quality. Our team of creative programmers, marketing experts, and members of the global lottery community have worked 
				together to build the ultimate lottery site, and every win and happy customer reminds us how lucky we are to be doing what we love.
			</p>
		</div> -->

	</section>
	
<style>

@media (min-width: 431px) and (max-width: 900px) {
	.section2 {
		padding: 400px 10px 250px 10px !important;
	}
}

@media (max-width: 750px) {
	.tickets-container {
		grid-template-columns: auto !important;
	}

	.section2 {
		padding-bottom: 250px !important;
	}
}

@media (min-width: 0px) and (max-width: 430px) {
	.section1 > p {
		margin: -200px 0px 50px 0px !important;
	}

	.main-container {
		padding: 50px 10px 25px 10px !important;
		margin: 0px 0px -250px 0px !important;
	}

	.title-top {
		font-size: 20px !important;
		text-align: center !important;
	}

	.title {
		font-size: 30px !important;
		text-align: center !important;
	}

	.para {
		font-size: 16px !important;
		text-align: center !important;
	}

	.section2 {
		padding-top: 400px !important;
		padding-left: 10px !important;
		padding-right: 10px !important;
	}

	.sec2-text > span {
		font-size: 20px !important;
		text-align: center;
	}

	.sec2-text > h2 {
		text-align: center;
		font-size: 30px !important;
	}

	.sec2-text > p {
		font-size: 16px !important;
		text-align: center;
	}
}

	.section1 {
		display: grid;
		justify-items: center;
		align-items: center;
		padding: 500px 10px 50px 10px;
    	background-image: linear-gradient(0deg, #ec1379 0%, #8d0b70 25%, #54056a 50%, #54056a 75%, #54056a 100%);
		margin: 0px;
		z-index: 2;
	}

	.section1 > h1 {
		text-align: center;
		margin: -420px 0px 0px 0px;
		font-size: 60px;
		color: #ffffff;
		font-weight: 600;
		text-transform: uppercase;
	}

	.section1 > p {
		text-align: center;
		margin: -250px 0px 0px 0px;
		font-size: 18px;
		color: #f1f3ff;
	}

	.bottom-banner {
		/* position: absolute; */
		margin: 0px;
		background-color: #0f0233;
	}

	.bottom-banner > img {
		max-width: 100%;
		height: auto;
	}

	.section2 {
		display: grid;
		justify-items: center;
		align-items: center;
    	background-color: #0f0233;
		z-index: 1;
		padding: 250px 10px 250px 10px;
	}

	.main-container {
		padding: 10px 20px;
		display: grid;
		justify-items: center;
		align-items: center;
		border-radius: 20px;
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		-ms-border-radius: 20px;
		-o-border-radius: 20px;
		/* background-color: #7d51f7; */
		background-image: -moz-linear-gradient(90deg, #c165dd 0%, #5c27fe 100%);
    	background-image: -webkit-linear-gradient(90deg, #c165dd 0%, #5c27fe 100%);
    	background-image: -ms-linear-gradient(90deg, #c165dd 0%, #5c27fe 100%);
		background-image: url("/img/winner-details.jpg");
		background-size: cover;
    	background-position: center;
		margin: 0px 0px -400px 0px;
    	z-index: 1;

		padding: 50px 50px 50px 50px;
		background-image: -moz-linear-gradient(120deg, #3b26db 1%, #7b19cb 100%);
		background-image: -webkit-linear-gradient(120deg, #3b26db 1%, #7b19cb 100%);
		background-image: -ms-linear-gradient(120deg, #3b26db 1%, #7b19cb 100%);
		box-shadow: 0px 10px 25px 0px rgb(0 0 0 / 30%);
		border-radius: 20px;
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		-ms-border-radius: 20px;
		-o-border-radius: 20px;
	}

	.title-top {
		font-size: 24px;
		font-weight: 600;
		color: #ffb200;
		margin-bottom: 10px;
	}

	.title {
		font-size: 40px;
		font-weight: 700;
		color: #ffffff;
		text-transform: uppercase;
		max-width: 700px;
		text-align: center;
		margin: 0px;
	}

	.ticket-details-container {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto auto auto;
		margin: 10px 0px 0px 0px;
	}

	.ticket-details-container > div {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto;
		margin: 0px 10px 0px 10px;
	}

	.para {
		font-size: 18px;
		color: #c4cbf9;
		line-height: 1.7;
		margin: 0;
		margin: 0px 5px 0px 0px;
		max-width: 800px;
	}

	.para:hover {
		cursor: pointer;
	}

	.para-span {
		font-size: 19px;
		color: #fafafa;
		margin: 0px 0px 0px 0px;
		text-decoration: none !important;
	}

	.main-container > div {
		display: grid;
		justify-items: center;
		align-items: center;
	}

	.sec2-text {
		display: grid;
		justify-items: center;
		align-items: center;
	}

	.sec2-text > span {
		font-size: 24px;
		color: #ffb200;
		margin-bottom: 13px;
	}

	.sec2-text > h2 {
		color: #ffffff;
		font-weight: 600;
		margin: 0;
		line-height: 1.3;
		font-size: 50px;
	}

	.sec2-text > p {
		margin-top: 10px;
		font-size: 18px;
		color: #f1f3ff;
		max-width: 700px;
	}

	.tickets-container {
		display: grid;
		justify-items: center;
		align-items: center;
		margin: 25px 0px;
		grid-template-columns: auto auto;
		grid-gap: 10px 15px;
		padding-top: 50px;
	}

	.ticket {
		max-width: 500px;
		width: 100%;
		height: auto;
		margin: 0px 0px 0px 0px;
	}
		
</style>
