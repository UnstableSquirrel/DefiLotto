
<script>
	// import { onMount } from "svelte"
	import { web3, selectedAccount, connected, chainId } from "../../lib/scripts/stores";
	import { browser } from "$app/environment";
	import { Winners } from "../winnerlist.js";

	import polyABI1 from "../../lib/contracts-data/POLYGON/ABI1.json";
	import polyABI2 from "../../lib/contracts-data/POLYGON/ABI2.json";
	import polyABI3 from "../../lib/contracts-data/POLYGON/ABI3.json";
	import polyABI4 from "../../lib/contracts-data/POLYGON/ABI4.json";
	import polyABI5 from "../../lib/contracts-data/POLYGON/ABI5.json";
	import polyABI6 from "../../lib/contracts-data/POLYGON/ABI6.json";
	import ABIWEEKLY from "../../lib/contracts-data/POLYGON/ABI-WEEKLY.json";


	const polyContract1 = "0xf5baB274F8465b477a4e40e9A5B617036DDB4288";
	const polyContract2 = "0x0AA1f9d6e818420AB69D8560937EdE8c86f16D4c";
	const polyContract3 = "0x572e427E0147aa802C70D3e612056866206Bd900";
	const polyContract4 = "0x481A06c7E7dBd44855852Ed5E5c78D5412BAf81F";
	const polyContract5 = "0x0CFFb9EEDE6271e829BBF005A1b8BDcDAF173033";
	const polyContract6 = "0xeF31aFf2B9e50068Afb566B01f57078879a7C8aC";
	const polygonWeeklyContract = "0xc17660427E1FEA7b36405B77772A0F9B3E5C15FC";






	import bnbABI1 from "../../lib/contracts-data/BNB/ABI1.json";
	import bnbABI2 from "../../lib/contracts-data/BNB/ABI2.json";
	import bnbABI3 from "../../lib/contracts-data/BNB/ABI3.json";
	import bnbABI4 from "../../lib/contracts-data/BNB/ABI4.json";
	import bnbABI5 from "../../lib/contracts-data/BNB/ABI5.json";
	import bnbABI6 from "../../lib/contracts-data/BNB/ABI6.json";

	const bnbContract1 = "0x41F548C8e7a40ea9698DCF7A9E5726730f15C2Af";
	const bnbContract2 = "0xC4628B419c817A899b1BAc2B5610077b22d416Dc";
	const bnbContract3 = "0x5E6801d3E2D038938B5081eF10233698E9D0b683";
	const bnbContract4 = "0x701F5fEE08bBfe8536cDa705E4e5207AfeB4C878";
	const bnbContract5 = "0xaAa79958Ae2cE97A653e2E6245327362Ce46Aff5";
	const bnbContract6 = "0xB61364d97640F1C74324a061CaD88E1391fadA69";

	let line1 = "none";
	let line2 = "underline";
	let line3 = "none";
	let line4 = "none";
	let color1 = "#c4cbf9";
	let color2 = "#ffb200";
	let color3 = "#c4cbf9";
	let color4 = "#c4cbf9";

	let selectedRaffle = 2;

	function underline(i) {
		if(i == 1) {
			line1 = "underline";
			color1 = "#ffb200";

			line2 = "none";
			color2 = "#c4cbf9";

			line3 = "none";
			color3 = "#c4cbf9";

			line4 = "none";
			color4 = "#c4cbf9";

			selectedRaffle = 1;
		}

		if(i == 2) {
			line1 = "none";
			color1 = "#c4cbf9";

			line2 = "underline";
			color2 = "#ffb200";

			line3 = "none";
			color3 = "#c4cbf9";

			line4 = "none";
			color4 = "#c4cbf9";

			selectedRaffle = 2;
		}

		if(i == 3) {
			line1 = "none";
			color1 = "#c4cbf9";

			line2 = "none";
			color2 = "#c4cbf9";

			line3 = "underline";
			color3 = "#ffb200";

			line4 = "none";
			color4 = "#c4cbf9";

			selectedRaffle = 3;
		}

		if(i == 4) {
			line1 = "none";
			color1 = "#c4cbf9";

			line2 = "none";
			color2 = "#c4cbf9";

			line3 = "none";
			color3 = "#c4cbf9";
			selectedRaffle = 3;

			line4 = "underline";
			color4 = "#ffb200";
			selectedRaffle = 4;
		}
	}

	let polygonWalletOfOwner1 = [];
	let polygonWalletOfOwner2 = [];
	let polygonWalletOfOwner3 = [];
	let polygonWalletOfOwner4 = [];
	let polygonWalletOfOwner5 = [];
	let polygonWalletOfOwner6 = [];
	let polygonWalletOfOwner7 = [];

	let bnbWalletOfOwner1 = [];
	let bnbWalletOfOwner2 = [];
	let bnbWalletOfOwner3 = [];
	let bnbWalletOfOwner4 = [];
	let bnbWalletOfOwner5 = [];
	let bnbWalletOfOwner6 = [];

	let walletOfOwnerAmount;
	let luckyNFTsOfUser = [];

	$: if ($web3) {
		getData().catch(console.error);
	}

	let error = false;
 
	async function getData() {
			if($web3 !== null) {
				try {
					if ($chainId == 137) {
						const contract1 = new $web3.eth.Contract(polyABI1, polyContract1);
						const contract2 = new $web3.eth.Contract(polyABI2, polyContract2);
						const contract3 = new $web3.eth.Contract(polyABI3, polyContract3);
						const contract4 = new $web3.eth.Contract(polyABI4, polyContract4);
						const contract5 = new $web3.eth.Contract(polyABI5, polyContract5);
						const contract6 = new $web3.eth.Contract(polyABI6, polyContract6);
						const contract7 = new $web3.eth.Contract(ABIWEEKLY, polygonWeeklyContract);

						polygonWalletOfOwner1 = await contract1.methods.walletOfOwner($selectedAccount).call();
						polygonWalletOfOwner2 = await contract2.methods.walletOfOwner($selectedAccount).call();
						polygonWalletOfOwner3 = await contract3.methods.walletOfOwner($selectedAccount).call();
						polygonWalletOfOwner4 = await contract4.methods.walletOfOwner($selectedAccount).call();
						polygonWalletOfOwner5 = await contract5.methods.walletOfOwner($selectedAccount).call();
						polygonWalletOfOwner6 = await contract6.methods.walletOfOwner($selectedAccount).call();
						polygonWalletOfOwner7 = await contract7.methods.walletOfOwner($selectedAccount).call();
						// walletOfOwnerAmount = walletOfOwner.length;
						// console.log(walletOfOwner.length);
						// winningNFTId = await contract.methods.winningNFTId().call();
						// console.table("Address: " + winnerAddress, "NFTId: " + winningNFTId);

						// polygonWalletOfOwner1 = [7, 100];
						// polygonWalletOfOwner2 = [5, 157];
						// polygonWalletOfOwner3 = [11, 73, 220];
						// polygonWalletOfOwner4 = [51, 457];
						// polygonWalletOfOwner5 = [75, 723, 520];
						// polygonWalletOfOwner6 = [521, 657];
						// polygonWalletOfOwner7 = [521, 657, 2, 3, 4, 6, 89 , 67, 434, 346, 4576, 467, 452, 1, 24, 45, 43, 21, 12, 11, 123, 4531, 1213, 5634, 91];
					}
					if ($chainId == 56) {
						const contract1 = new $web3.eth.Contract(bnbABI1, bnbContract1);
						const contract2 = new $web3.eth.Contract(bnbABI2, bnbContract2);
						const contract3 = new $web3.eth.Contract(bnbABI3, bnbContract3);
						const contract4 = new $web3.eth.Contract(bnbABI4, bnbContract4);
						const contract5 = new $web3.eth.Contract(bnbABI5, bnbContract5);
						const contract6 = new $web3.eth.Contract(bnbABI6, bnbContract6);

						// bnbWalletOfOwner1 = [7, 100];
						// bnbWalletOfOwner2 = [5, 157];
						// bnbWalletOfOwner3 = [11, 73, 220];
						// bnbWalletOfOwner4 = [51, 457];
						// bnbWalletOfOwner5 = [75, 723, 520];
						// bnbWalletOfOwner6 = [521, 657];

						bnbWalletOfOwner1 = await contract1.methods.walletOfOwner($selectedAccount).call();
						bnbWalletOfOwner2 = await contract2.methods.walletOfOwner($selectedAccount).call();
						bnbWalletOfOwner3 = await contract3.methods.walletOfOwner($selectedAccount).call();
						bnbWalletOfOwner4 = await contract4.methods.walletOfOwner($selectedAccount).call();
						bnbWalletOfOwner5 = await contract5.methods.walletOfOwner($selectedAccount).call();
						bnbWalletOfOwner6 = await contract6.methods.walletOfOwner($selectedAccount).call();
						// walletOfOwnerAmount = walletOfOwner.length;
					}
				} catch (error) {
					console.error(error);
					error = true;
				}
				
				if($chainId != 137 && $chainId != 56) {
					alert("Please connect to the Polygon or BNB network.");
				}
			}
	}

	let start = 0;
	let finish = 20;

	function forward() {
		start += 10;
		finish += 10;
	}

	function backward() {
		if(start != 0) {
			start -= 10;
			finish -= 10;
		}
	}

	// console.log(Winners);

</script>

<section class="section1">
	<h1>My Page</h1>
	<p>All your tickets in one place.</p>

	<!-- {#await getData()} -->
	<!-- <i style="display: none;">get Data</i> -->
	
	<div class="main-container">
	<div class="title-top"></div>
		<div class="ticket-details-container">
			<h2 class="title">Loading ...</h2>
		</div>
	</div>
	<!-- {:then connected} -->

	<div class="main-container">
		<div class="title-top">Here you can view</div>
		<h2 class="title">Your ongoing tickets</h2>

		<div class="ticket-details-container">
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p on:click={() => underline(1)} class="para" style="text-decoration: {line1}; color: {color1};">Dolphin Tickets: </p>
				<span class="para-span">

					{#if $chainId == 137}
						{polygonWalletOfOwner1.length + polygonWalletOfOwner2.length}
					{:else if $chainId == 56}
						{bnbWalletOfOwner1.length + bnbWalletOfOwner2.length}
					{:else}
						<p>0</p>
					{/if}

				</span>
			</div>
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p on:click={() => underline(2)} class="para" style="text-decoration: {line2}; color: {color2};">Shark Tickets: </p>
				<span class="para-span">

					{#if $chainId == 137}
						{polygonWalletOfOwner3.length + polygonWalletOfOwner4.length}
					{:else if $chainId == 56}
						{bnbWalletOfOwner3.length + bnbWalletOfOwner4.length}
					{:else}
						<p>0</p>
					{/if}

				</span>
			</div>
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p on:click={() => underline(3)} class="para" style="text-decoration: {line3}; color: {color3};">Whale Tickets: </p>
				<span class="para-span">

					{#if $chainId == 137}
						{polygonWalletOfOwner5.length + polygonWalletOfOwner6.length}
					{:else if $chainId == 56}
						{bnbWalletOfOwner5.length + bnbWalletOfOwner6.length}
					{:else}
						<p>0</p>
					{/if}

				</span>
			</div>
			<hr style="width: 100%; grid-column: 1/3;">
		</div>


	<div class="tickets-container">

		{#if error}

			{#if selectedRaffle == 1}
				<div class="container">
					<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No Tickets yet</p>
					<img class="ticket" src="Tickets/Polygon/polygon2.png" alt="Ticket">
				</div>
			{:else if selectedRaffle == 2}
				<div class="container">
					<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No Tickets yet</p>
					<img class="ticket" src="Tickets/Polygon/polygon4.png" alt="Ticket">
				</div>
			{:else if selectedRaffle == 3}
				<div class="container">
					<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No Tickets yet</p>
					<img class="ticket" src="Tickets/Polygon/polygon6.png" alt="Ticket">
				</div>
			{:else if selectedRaffle == 4}
				<div class="container">
					<img class="ticket" src="Tickets/polygonWeekly.png" alt="Ticket">
				</div>
			{/if}


		{:else if !error}

			{#if $chainId == 137}

				{#if selectedRaffle == 1}
					{#if polygonWalletOfOwner1.length > 0}
						{#each polygonWalletOfOwner1.slice(start, finish) as id}
							<div class="container">
								<img class="ticket" src="Tickets/Polygon/polygon1.png" alt="Ticket">
								<div class="centered">#{id}</div>
							</div>
						{/each}
					{/if}
					{#if polygonWalletOfOwner2.length > 0}
						{#each polygonWalletOfOwner2.slice(start, finish) as id}
							<div class="container">
								<img class="ticket" src="Tickets/Polygon/polygon2.png" alt="Ticket">
								<div class="centered">#{id}</div>
							</div>
						{/each}
					{/if}
					{#if polygonWalletOfOwner1.length + polygonWalletOfOwner2.length == 0}
						<div class="container">
							<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No Tickets yet</p>
							<img class="ticket" src="Tickets/Polygon/polygon2.png" alt="Ticket">
						</div>
					{/if}
				{:else if selectedRaffle == 2}
					{#if polygonWalletOfOwner3.length > 0}
						{#each polygonWalletOfOwner3.slice(start, finish) as id}
							<div class="container">
								<img class="ticket" src="Tickets/Polygon/polygon3.png" alt="Ticket">
								<div class="centered">#{id}</div>
							</div>
						{/each}
					{/if}
					{#if polygonWalletOfOwner4.length > 0}
						{#each polygonWalletOfOwner4.slice(start, finish) as id}
							<div class="container">
								<img class="ticket" src="Tickets/Polygon/polygon4.png" alt="Ticket">
								<div class="centered">#{id}</div>
							</div>
						{/each}
					{/if}
					{#if polygonWalletOfOwner3.length + polygonWalletOfOwner4.length == 0}
						<div class="container">
							<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No Tickets yet</p>
							<img class="ticket" src="Tickets/Polygon/polygon4.png" alt="Ticket">
						</div>
					{/if}
				{:else if selectedRaffle == 3}
					{#if polygonWalletOfOwner5.length > 0}
						{#each polygonWalletOfOwner5.slice(start, finish) as id}
							<div class="container">
								<img class="ticket" src="Tickets/Polygon/polygon5.png" alt="Ticket">
								<div class="centered">#{id}</div>
							</div>
						{/each}
					{/if}
					{#if polygonWalletOfOwner6.length > 0}
						{#each polygonWalletOfOwner6.slice(start, finish) as id}
							<div class="container">
								<img class="ticket" src="Tickets/Polygon/polygon6.png" alt="Ticket">
								<div class="centered">#{id}</div>
							</div>
						{/each}
					{/if}
					{#if polygonWalletOfOwner5.length + polygonWalletOfOwner6.length == 0}
						<div class="container">
							<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No Tickets yet</p>
							<img class="ticket" src="Tickets/Polygon/polygon6.png" alt="Ticket">
						</div>
					{/if}
				{:else if selectedRaffle == 4}
					{#if polygonWalletOfOwner7.length > 0}
						{#each polygonWalletOfOwner7.slice(start, finish) as id}
							<div class="container">
								<img class="ticket" src="Tickets/polygonWeekly.png" alt="Ticket">
								<div class="centered">#{id}</div>
							</div>
						{/each}
					{/if}
					{#if polygonWalletOfOwner7.length == 0}
						<div class="container">
							<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No Tickets yet</p>
							<img class="ticket" src="Tickets/polygonWeekly.png" alt="Ticket">
						</div>
					{/if}
				{/if}

			{:else if $chainId == 56}

				{#if selectedRaffle == 1}
					{#each bnbWalletOfOwner1.slice(start, finish) as id}
						<div class="container">
							<img class="ticket" src="Tickets/BNB/bnb1.png" alt="Ticket">
							<div class="centered">#{id}</div>
						</div>
					{/each}
					{#each bnbWalletOfOwner2.slice(start, finish) as id}
						<div class="container">
							<img class="ticket" src="Tickets/BNB/bnb2.png" alt="Ticket">
							<div class="centered">#{id}</div>
						</div>
					{/each}
					{#if bnbWalletOfOwner1.length + bnbWalletOfOwner2.length == 0}
						<div class="container">
							<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No Tickets yet</p>
							<img class="ticket" src="Tickets/BNB/bnb2.png" alt="Ticket">
						</div>
					{/if}
				{:else if selectedRaffle == 2}
					{#each bnbWalletOfOwner3.slice(start, finish) as id}
						<div class="container">
							<img class="ticket" src="Tickets/BNB/bnb3.png" alt="Ticket">
							<div class="centered">#{id}</div>
						</div>
					{/each}
					{#each bnbWalletOfOwner4.slice(start, finish) as id}
						<div class="container">
							<img class="ticket" src="Tickets/BNB/bnb4.png" alt="Ticket">
							<div class="centered">#{id}</div>
						</div>
					{/each}
					{#if bnbWalletOfOwner3.length + bnbWalletOfOwner4.length == 0}
						<div class="container">
							<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No Tickets yet</p>
							<img class="ticket" src="Tickets/BNB/bnb3.png" alt="Ticket">
						</div>
					{/if}
				{:else if selectedRaffle == 3}
					{#each bnbWalletOfOwner5.slice(start, finish) as id}
						<div class="container">
							<img class="ticket" src="Tickets/BNB/bnb5.png" alt="Ticket">
							<div class="centered">#{id}</div>
						</div>
					{/each}
					{#each bnbWalletOfOwner6.slice(start, finish) as id}
						<div class="container">
							<img class="ticket" src="Tickets/BNB/bnb6.png" alt="Ticket">
							<div class="centered">#{id}</div>
						</div>
					{/each}
					{#if bnbWalletOfOwner5.length + bnbWalletOfOwner6.length == 0}
						<div class="container">
							<p style="font-size: 40px; font-weight: 700; color: #ffb200;">No Tickets yet</p>
							<img class="ticket" src="Tickets/BNB/bnb6.png" alt="Ticket">
						</div>
					{/if}
				{/if}

			{/if}
					<!-- <p style="color: white; font-size: 20px; font-weight: bold; margin: 10px 0px 0px 0px;">{walletOfOwnerAmount}x</p> -->
					<!-- <img class="ticket" src="img/ticket.png" alt="Ticket"> -->
		{/if}
	</div>
	<!-- {/await} -->
</section>

	<div class="bottom-banner">
		<img src="/img/wave2.svg" alt="Bottom-Banner">
	</div>

	<section class="section2">

		<div class="sec2-text">
			<span>Check if you won and look at</span>
			<h2>All your lucky tickets</h2>
			<div>
				{#each Winners as winner}
				{#if $selectedAccount == winner.Wallet}
					<div>
						<img src="{winner.Src}.png" alt="Winner NFT">
					</div>
					<i style="display: none;">{luckyNFTsOfUser.push(winner.NFTId)}</i>
				{/if}
				{/each}

				{#if luckyNFTsOfUser.length == 0}
					<p class="no-lucky-tickets">No Lucky Numbers Yet ...</p>
				{/if}

			</div>
		</div>

	</section>
	
<style>

	.container {
		position: relative;
		text-align: center;
		color: white;
	}

	.centered {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 30px;
		font-weight: 700;
	}

	h2 {
		text-transform: uppercase;
	}

	.no-lucky-tickets {
		font-size: 25px;
		font-weight: 600;
		color: #ffb200;
		text-transform: uppercase;
	}

@media(min-width: 901px) and (max-width: 1231px) {
	/* .tickets-container {
		grid-template-columns: auto auto auto auto !important;
	} */
}

@media (min-width: 431px) and (max-width: 900px) {
	/* .tickets-container {
		grid-template-columns: auto auto auto !important;
	} */
	.centered {
		font-size: 30px;
	}
	.section2 {
		padding: 400px 10px 250px 10px !important;
	}

	
	.sec2-text > h2 {
		text-align: center !important;
	}
}

@media (max-width: 750px) {
	.centered {
		font-size: 5vw;
	}
	.tickets-container {
		grid-template-columns: auto auto !important;
	}

	.section2 {
		padding-bottom: 250px !important;
	}
}

@media (min-width: 0px) and (max-width: 430px) {
	.centered {
		font-size: 8vw;
	}
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
		text-align: center !important;
		font-size: 30px !important;
	}

	.sec2-text > div > p {
		font-size: 20px !important;
		text-align: center;
	}
}

@media (min-width: 0px) and (max-width: 330px) {
	.tickets-container {
		grid-template-columns: auto !important;
	}

	.centered {
		font-size: 10vw;
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
		grid-template-columns: auto auto;
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
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
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
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
		margin: 25px 0px;
		/* grid-template-columns: auto auto auto auto auto; */
		grid-gap: 10px 15px;
		padding-top: 50px;
	}

	.ticket {
		max-width: 250px;
		width: 100%;
		height: auto;
		margin: 0px 0px 0px 0px;
	}
		
</style>
