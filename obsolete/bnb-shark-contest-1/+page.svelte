
<script>

// import { defaultEvmStores as evm, web3, selectedAccount, connected, chainId, chainData, contracts} from 'svelte-web3'
import { onMount } from 'svelte'
import { browser } from '$app/environment'
import ABI from "../contracts/BNB/ABI3.json"
import busdABI from "../contracts/BUSD_ABI.json"
let busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"


	// onMount(async () => {
	// 	connectToWeb3 = await evm.setProvider()
	// });

	let approved = false
	let display
	let allowedSpending = 0

	const CONTRACT = "0x5E6801d3E2D038938B5081eF10233698E9D0b683"
	///// Variables derived from chain data //////
	let totalTickets = 0
	let cost = 0
	let prize = 0
	
	let remainingTickets = 0
	let ticketPercentage = 0
	let soldTickets = 0
	let limit
	////////////////////////////////////////////

	let amount = 1

	// console.log("ticketPercentage: ", ticketPercentage.toFixed(0))




	$: if (remainingTickets == 0) {
		display = "grid"
	}

	$: if (remainingTickets > 0) {
		display = "none"
	}

	$: if (amount < 1) {
		amount = 1
	}

	$: if (amount > limit) {
		amount = limit
	}

	function check() {
		if ((remainingTickets <= amount) && (remainingTickets != 0)) {
			amount = remainingTickets
		}
		if (remainingTickets == 0) {
			amount = 1
		}
	}

	function increaseAmount() {
		if(amount <= 19) {
			amount++
		}
		if (allowedSpending >= amount) {
			approved = true
		}
		if (allowedSpending < amount) {
			approved = false
		}
	}

	function  decreaseAmount() {
		if(amount >= 2) {
			amount--
		}
		if (allowedSpending >= amount) {
			approved = true
		}
		if (allowedSpending < amount || allowedSpending == 0) {
			approved = false
		}
	}

	// $: soldTickets
	// $: cost
	// $: prize
	// $: totalTickets

	let mintPayment 
	$: mintPayment = amount * cost

	async function getData() {
		if(browser) {
			await evm.setProvider()
				if ($chainId == 56) {
					const contract = new $web3.eth.Contract(ABI, CONTRACT)
					soldTickets = await contract.methods.supply().call()
					cost = await contract.methods.cost().call()
					prize = await contract.methods.prizeAmount().call()
					totalTickets = await contract.methods.maxSupply().call()
					limit = await contract.methods.maxMintAmount().call()
					// console.log(ticketPercentage)
					remainingTickets = totalTickets - soldTickets
					ticketPercentage = (totalTickets / 100000) * soldTickets 

					const contract2 = new $web3.eth.Contract(busdABI, busdAddress)
					const allowance = await contract2.methods.allowance($selectedAccount, CONTRACT).call({ from: $selectedAccount })
					allowedSpending = allowance / cost
					// console.log(allowedSpending)
					if (BigInt(allowance) >= mintPayment) {
						approved = true
					}

					// console.log("cost: " + cost, "prize: " + prize)

					///////////////////////////////////////////////////////////////////////////////
					// await contract.methods.requestRandomNumber().send({ from: $selectedAccount })
					///////////////////////////////////////////////////////////////////////////////
				}
				else {
					alert("Please connect to the BNB network.")
				}
		}
   }

   async function mint() {
	// console.log($selectedAccount)
		const contract = new $web3.eth.Contract(ABI, CONTRACT)
		const contract2 = new $web3.eth.Contract(busdABI, busdAddress)

		const allowance = await contract2.methods.allowance($selectedAccount, CONTRACT).call({ from: $selectedAccount })
		// console.log(allowance)

		if (allowance < BigInt(mintPayment)) {
			let receipt
			const approve = await contract2.methods.approve(CONTRACT, BigInt(mintPayment)).send({ from: $selectedAccount, gasPrice : 5000000000, gasLimit: 200000 })
			receipt = await $web3.eth.getTransactionReceipt(approve.transactionHash)
			// console.log(approve.transactionHash)
			approved = receipt.status
			const allowance = await contract2.methods.allowance($selectedAccount, CONTRACT).call({ from: $selectedAccount })
			allowedSpending = allowance / cost
			// altert("approval is pending, wait until the transaction goes through before buying a ticket!")
		}
		if (allowance >= BigInt(mintPayment)) {
			if (amount < 5) {
				mint = await contract.methods.mint($selectedAccount, amount).send({ from: $selectedAccount, gasPrice : 5000000000, gasLimit: 700000})
				const allowance = await contract2.methods.allowance($selectedAccount, CONTRACT).call({ from: $selectedAccount })
				allowedSpending = allowance / cost
				console.log(mint)
			}
			if ((amount >= 5) && (amount <= 10)) {
				mint = await contract.methods.mint($selectedAccount, amount).send({ from: $selectedAccount, gasPrice : 5000000000, gasLimit: 1000000})
				const allowance = await contract2.methods.allowance($selectedAccount, CONTRACT).call({ from: $selectedAccount })
				allowedSpending = allowance / cost
				console.log(mint)
			}
			if ((amount > 10) && (amount <= 15)) {
				mint = await contract.methods.mint($selectedAccount, amount).send({ from: $selectedAccount, gasPrice : 5000000000, gasLimit: 2000000})
				const allowance = await contract2.methods.allowance($selectedAccount, CONTRACT).call({ from: $selectedAccount })
				allowedSpending = allowance / cost
				console.log(mint)
			}

			if ((amount > 15) && (amount <= 20)) {
				mint = await contract.methods.mint($selectedAccount, amount).send({ from: $selectedAccount, gasPrice : 5000000000, gasLimit: 2500000})
				const allowance = await contract2.methods.allowance($selectedAccount, CONTRACT).call({ from: $selectedAccount })
				allowedSpending = allowance / cost
				console.log(mint)
			}
		}
   }

	// $: remainingTickets = totalTickets - soldTickets
	// $: ticketPercentage = (totalTickets / 10000) * soldTickets 


</script>

<section class="section1">
	<section class="section2">

		{#await getData()}
		<i style="display: none;">get Data</i>
		{:then connected}
		<i style="display: none;">get Data</i>

			{#if chainId != 56}
			<div class="cover" style="display: {display};">
				<div>
					Wrong Network
				</div>
			</div>
			{/if}

			{#if chainId == 56}
			<div class="cover" style="display: {display};">
				<div>
					Minted Out!
				</div>
			</div>
			{/if}

		{/await}
		

		<!-- <div class="banner"> <i style="visibility: hidden;">kfsjsgdfs</i> Minted Out!</div> -->

		<div class="lottery-container">
		<!-- <div class="cover"></div> -->
			<div>
				<h3>Enter now for a chance to win</h3>
				<h2>{parseInt(JSON.stringify(prize).slice(1, prize.length - 17)).toLocaleString('en')} $USDC</h2>
			</div>
			<div class="img-container">
				<img src="Tickets/BNB/bnb3.png" alt="Ticket">
			</div>
			<div class="content-container">
				<!-- <h3>Enter now for a chance to win</h3>
				<h2>10,000 $USDC</h2>
				<br> -->
				<p>This competition has a maximum of {parseInt(totalTickets).toLocaleString('en')} entries.</p>
				<!-- <div class="img-container"></div> -->
				<div class="tickets-sold">					
					<h4>Tickets Sold</h4>
					<p>{parseInt(soldTickets).toLocaleString('en')}</p>
				</div>
				<div class="ticket-amount">
					<span class="left">0</span>
					<span class="right">{parseInt(totalTickets).toLocaleString('en')}</span>
					<div class="progressbar">
						<div class="bar" style="width: {ticketPercentage.toFixed(0)}%;"></div>
					</div>
					{#if soldTickets >=  500}
					<p>Only {parseInt(remainingTickets).toLocaleString('en')} remaining!</p>
					{/if}
					{#if soldTickets < 500}
					<p>{parseInt(remainingTickets).toLocaleString('en')} remaining!</p>
					{/if}
				</div>
	
				<div class="ticket-price">
					<span class="amount">${JSON.stringify(cost).slice(1,2)}</span>
					<small>Per ticket</small>
				</div>
	
				<div class="buy-ticket-container">
	
					<div class="quantity-text">
						<p>Quantity</p>
					</div>
	
					<div class="quantity-amount">
						<div on:click="{decreaseAmount}">
							<div></div>
						</div>
						<p>{amount}</p>
						<div on:mousedown="{check}" on:click="{increaseAmount}">
							<div></div>
						</div>
					</div>
				</div>
	
				{#if remainingTickets == 0}
				<div class="buy-button-container">
					<a href="#-" class="button-disabled">buy Tickets</a>
				</div>
				{/if}
				{#if remainingTickets > 0 && approved == false}
				<div class="approve-button-container">
					<a href="#-" on:click={mint}>Approve BUSD</a>
				</div>
				{/if}
				{#if remainingTickets > 0 && approved == true}
				<div class="buy-button-container" on:click={mint}>
					<a href="#-" class="buy-tickets-button">buy Tickets</a>
				</div>
				{/if}
			</div>
		</div>
	</section>
</section>
<div class="bottom-banner">
	<img src="/img/wave2.svg" alt="Bottom-Banner">
</div>

<section class="section3">

	<div class="contract-address">
		<span >Contract Address:</span>
		<a href="https://polygonscan.com/address/{CONTRACT}">
			{CONTRACT}
		</a>
	</div>

	<div class="info1">
		<h2>Summary</h2>

		<div class="info-box-container">
			<div class="info-box">
				<div><img src="/img/dice.png" alt="Dice"></div>
				<div>
					<h2>Win Probability</h2>
					<p>1:{parseInt(totalTickets).toLocaleString('en')}</p>
				</div>
			</div>
			<div class="info-box">
				<div><img src="/img/money.png" alt="Prize Pool"></div>
				<div>
					<h2>Prize Pool</h2>
					<p>${parseInt(JSON.stringify(prize).slice(1, prize.length - 17)).toLocaleString('en')}</p>
				</div>
			</div>
			<div class="info-box">
				<div><img src="/img/tickets.png" alt="Ticket Prize"></div>
				<div>
					<h2>Ticket Prize</h2>
					<p>${JSON.stringify(cost).slice(1,2)}</p>
				</div>
			</div>
			<div class="info-box">
				<div><img src="/img/self-service.png" alt="Ticket Limit"></div>
				<div>
					<h2>Total Tickets</h2>
					<p>{parseInt(totalTickets).toLocaleString('en')}</p>
				</div>
			</div>
		</div>
	</div>

	<div class="info2">
		<h2>Additional Information</h2>

		<p>
			By minting one or more lottery tickets, you are entering a raffle for a set prize amount in USDC that is mentioned above. 
			Each ticket increases your chance in winning the prize. 
			Each ticket also has a chance of winning multiple prizes if there are any offered.
			The winner of the raffle is determined via Chainlink's Verifiable Random Function. 
			This determines on chain the number of the winning lottery ticket.
			The owner of that winning ticket is then determined via a contract function and will automatically receive the prize through the contract.
		</p>
	</div>

</section>


<style>

.cover {
position: fixed; /* Sit on top of the page content */
width: 100%; /* Full width (cover the whole page) */
height: 100%; /* Full height (cover the whole page) */
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5); /* Black background with opacity */
z-index: 3; /* Specify a stack order in case you're using a different order for other elements */
cursor: pointer; /* Add a pointer on hover */
justify-items: center;
align-items: center;
}

.cover > div {
display: grid;
justify-items: center;
align-items: center;
font-size: 54px;
color: white;
background-color: rgb(168, 1, 1);
height: 100px;
width: 100%;
}

.button-disabled {
border: 1px solid #999999;
background-color: #cccccc;
color: #666666;
text-decoration: none;
padding: 15px 35px;
font-size: 18px;
font-weight: 600;
text-transform: uppercase;
border-radius: 999px;
-webkit-border-radius: 999px;
-moz-border-radius: 999px;
-ms-border-radius: 999px;
-o-border-radius: 999px;
box-shadow: 0px 17px 40px 0px rgb(124 78 25 / 35%);
-webkit-transition: background-size 0.3s;
-o-transition: background-size 0.3s;
transition: background-size 0.3s;
color: #ffffff;
}

.button-disabled:hover { 
cursor: not-allowed;
}

.banner {
height: 35px;
width: 580px;
margin: -22px 0px 0px 0px;
padding: 0px;
background-color: #c50000;
position: absolute;
/* top: 48px; */
/* right: -6px; */
text-align: center;
color: #FFF;
font-weight: 600;
font-size: 28px;
text-transform: uppercase;
/* white-space: nowrap; */
  -webkit-transform: rotate(35deg);
-moz-transform: rotate(35deg);
-ms-transform: rotate(35deg);
-o-transform: rotate(35deg);
transform: rotate(35deg);
z-index: 5;
}

.banner:before {
box-sizing: border-box;
border-style: solid;
border-color: transparent;
border-width: 37px;
border-left-width: 53px;
border-right-width: 26px;
content: "";
display: block;
left: -49px;
position: absolute;
width: 143.6%;
border-top-width: 0px;
border-bottom-color: #c50000;
top: -2px;
z-index: -1;
}

@media (min-width: 901px) and (max-width: 1400px) {
.section3 {
	padding: 150px 0px 200px 0px !important;
}
}

@media (min-width: 690px) and (max-width: 900px) {
.section3 {
	padding: 250px 25px 200px 25px !important;
}

.info-box {
	width: 200px !important;
	height: 70px !important;
}
}

@media (min-width: 481px) and (max-width: 689px) {
.section3 {
	padding: 250px 25px 200px 25px !important;
}

.info-box {
	width: 160px !important;
	height: 70px !important;
}

.lottery-container {
	grid-template-columns: auto !important;
}

.lottery-container > div:nth-child(1) {
	grid-row: 1 !important;
	grid-column: 1 / 1 !important;
}

.img-container {
	margin: 0px 0px 25px 0px !important;
}
}

@media (min-width: 0px) and (max-width: 480px) {
.section3 {
	padding: 250px 25px 200px 25px !important;
}

.info-box {
	width: 160px !important;
	height: 70px !important;
}

.lottery-container {
	grid-template-columns: auto !important;
}

.lottery-container > div:nth-child(1) {
	grid-row: 1 !important;
	grid-column: 1 / 1 !important;
}

.img-container {
	display: grid;
	margin: 0px 0px 25px 0px !important;
	align-items: center !important;
	justify-items: center !important;
	/* width: 170px !important;
	height: 150px !important; */
}

.info-box-container {
	grid-template-columns: auto !important;
}

.lottery-container > div:nth-child(1) > h2 {
	text-align: center !important;
}

.lottery-container > div:nth-child(1) > h3 {
	text-align: center !important;
}

.img-container > img {
	margin: 40px 0px 0px 0px !important;
	max-width: 250px !important;
	/* height: 80px !important; */
	/* transform: rotate(-20deg) !important; */
}
.contract-address {
		font-size: 11px;
	}
}

.section1 {
	display: grid;
	justify-items: center;
	align-items: center;
	padding: 500px 10px 0px 10px;
	background-image: linear-gradient(0deg, #ec1379 0%, #8d0b70 25%, #54056a 50%, #54056a 75%, #54056a 100%);
	margin: 0px;
	z-index: 2;
}

.bottom-banner {
	/* position: absolute; */
	margin: 0px 0px 0px 0px;
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
	margin: -250px 0px 0px 0px;
	background-color: #0f0233;
	padding: 0px 0px 0px 0px;
	z-index: 1;
	border-radius: 10px;
}

.lottery-container {
	display: grid;
	justify-items: center;
	/* align-items: center; */
	align-items: flex-start;
	grid-template-columns: auto auto;
	/* width: 500px; */
	/* height: 1000px; */
	background-color: #12023e;
	padding: 10px 20px 50px 10px;
	margin: 0px 0px -250px 0px;
	border: 5px solid #ec038b;
	border-radius: 10px;
}

.lottery-container > div:nth-child(1) {
	grid-row: 1;
	/* Start on the first column line and extend all the to the last column line */
	grid-column: 1 / 4;
	margin-bottom: 40px;
	text-align: center;
}

.img-container {
	max-width: 350px;
	width: 100%;
	height: auto;
	/* background-color: #5a4bcc; */
	/* padding: 15px; */
	/* border-radius: 25px; */
	margin: 0px 25px 0px 5px;
}

.img-container > img {
	margin: 0px 0px 0px 0px;
	max-width: 350px;
	width: 100%;
	height: auto;
	/* transform: rotate(-45deg); */
}

.lottery-container > div:nth-child(1) > h3 {
	font-size: 22px;
	color: #ffb200;
	margin-bottom: 15px;
}

.lottery-container > div:nth-child(1) > h2 {
	font-size: 36px;
	color: #ffffff;
	font-weight: 600;
	margin: 0;
	line-height: 1.3;
}

.content-container > p {
	font-size: 16px;
	color: #c4cbf9;
	line-height: 1.7;
	margin: 50px 0px 10px 0px;
}

.tickets-sold {
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: auto;
}

.tickets-sold > h4 {
	font-size: 22px;
	color: #ffffff;
	font-weight: 600;
	margin: 0;
	line-height: 1.3;
}

.tickets-sold > p {
	text-align: center;
	font-size: 18px;
	color: #fbb936;
	font-weight: 700;
}

.ticket-amount {
	margin: 0px 0px 20px 0px;
}

.ticket-amount .left {
	font-weight: 500;
	color: #ffffff;
}

p, span {
	font-size: 16px;
	color: #c4cbf9;
	line-height: 1.7;
	margin: 0;
}

.ticket-amount .right {
	float: right;
	font-weight: 500;
	color: #ffffff;
}

.progressbar {
	position: relative;
	display: block;
	width: 100% !important;
	height: 10px !important;
	background-color: #200e54;
	margin-top: 10px !important;
	border-radius: 999px !important;
	-webkit-border-radius: 999px !important;
	-moz-border-radius: 999px !important;
	-ms-border-radius: 999px !important;
	-o-border-radius: 999px !important;
	margin: 5px 0px !important;
}

.progressbar .bar {
	position: absolute;
	height: 100%;
	top: 0;
	left: 0;
	background: #ec6624;
	overflow: hidden;
	border-radius: 999px;
	-webkit-border-radius: 999px;
	-moz-border-radius: 999px;
	-ms-border-radius: 999px;
	-o-border-radius: 999px;
}

.ticket-price {
	display: flex;
	justify-content: center;
	align-items: baseline;
	margin: 0px;
}

.ticket-price .amount {
	color: #ffffff;
	font-weight: 600;
	font-size: 36px;
}

.ticket-price small {
	font-size: 14px;
	margin-left: 5px;
	color: #c4cbf9;
	text-transform: capitalize;
}

.quantity-amount {
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 25px;
}

.quantity-amount > p:nth-child(2) {
	color: #ffffff;
	font-size: 24px;
	margin: 5px 10px;
}

.quantity-amount > div:nth-child(1) {
	width: 35px;
	height: 35px;
	background-color: #20115a;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
	color: #c4cbf9;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	cursor: pointer;
	margin: 5px 10px;
}

.quantity-amount > div:nth-child(3) {
	width: 35px;
	height: 35px;
	background-color: #20115a;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
	color: #c4cbf9;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	cursor: pointer;
	margin: 5px 10px;
}

.quantity-amount > div:nth-child(1) > div {
	width: 35px;
	height: 2px;
	margin: 10px;
	background: white;
}

.quantity-amount > div:nth-child(3) > div {
	--b: 2px; /* the thickness */
	width: 35px; /* the size */
	aspect-ratio: 1;
	display: inline-block;
	border: none;
	margin: 10px;
	background:
		conic-gradient(from 90deg at var(--b) var(--b),#20115a 90deg,#ffffff 0) 
		calc(100% + var(--b)/2) calc(100% + var(--b)/2)/
		calc(50%  + var(--b))   calc(50%  + var(--b));
}

.buy-ticket-container {
	margin: 25px 0px;
	display: grid;
	justify-items: center;
	align-items: center;
	text-align: center;
}

.buy-button-container {
	display: grid;
	justify-items: center;
	align-items: center;
	margin: 35px 0px 25px 0px;
}

.buy-button-container > .buy-tickets-button {
	text-decoration: none;
	padding: 15px 35px;
	font-size: 18px;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 999px;
	-webkit-border-radius: 999px;
	-moz-border-radius: 999px;
	-ms-border-radius: 999px;
	-o-border-radius: 999px;
	background-image: -moz-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
	background-image: -webkit-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
	background-image: -ms-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
	box-shadow: 0px 17px 40px 0px rgb(124 78 25 / 35%);
	-webkit-transition: background-size 0.3s;
	-o-transition: background-size 0.3s;
	transition: background-size 0.3s;
	color: #ffffff;
}


.approve-button-container {
	display: grid;
	justify-items: center;
	align-items: center;
	margin: 35px 0px 25px 0px;
}

.approve-button-container > a {
	text-decoration: none;
	padding: 15px 35px;
	font-size: 18px;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 999px;
	-webkit-border-radius: 999px;
	-moz-border-radius: 999px;
	-ms-border-radius: 999px;
	-o-border-radius: 999px;
	background-image: -moz-linear-gradient(86deg, #7003ec 0%, #9703ec 44%, #ec03ec 100%);
	background-image: -webkit-linear-gradient(86deg, #7003ec 0%, #9703ec 44%, #ec03ec 100%);
	background-image: -ms-linear-gradient(86deg, #7003ec 0%, #9703ec 44%, #ec03ec 100%);
	box-shadow: 0px 17px 40px 0px rgb(124 78 25 / 35%);
	-webkit-transition: background-size 0.3s;
	-o-transition: background-size 0.3s;
	transition: background-size 0.3s;
	color: #ffffff;
}

.buy-tickets-button:hover {
	background-image: -moz-linear-gradient(86deg, #ec038b 0%, #ec038b 44%, #ec038b 100%);
	background-image: -webkit-linear-gradient(86deg, #ec038b 0%, #ec038b 44%, #ec038b 100%);
	background-image: -ms-linear-gradient(86deg, #ec038b 0%, #ec038b 44%, #ec038b 100%);
	transition: all 0.3s linear;
}

.section3 {
	display: grid;
	justify-items: center;
	align-items: center;
	margin: -1px 0px 0px 0px;
	background-color: #0f0233;
	padding: 0px 10px 200px 10px;
	z-index: 1;
}

.info1 {
	display: grid;
	justify-items: center;
	align-items: center;
}

.info1 > h2 {
	text-align: left;
	color: #ffffff;
	font-weight: 600;
	margin: 25px 0px;
}

.info1 > .info-box-container {
	display: grid;
	justify-items: center;
	align-items: center;
	grid-template-columns: auto auto;
}

.info1 > .info-box-container > .info-box {
	display: grid;
	justify-items: center;
	align-items: center;
	grid-template-columns: auto auto;
	padding: 10px 20px;
	background-color: #170943;
	margin: 10px;
}

.info1 > .info-box-container > .info-box > div > img {
	width: 50px;
	height: 50px;
}

.info-box {
	width: 250px;
	height: 70px;
}


.info-box > div:nth-child(2) {
	text-align: center;
	padding-left: 25px;
}

.info-box > div:nth-child(2) > h2 {
	color: #22b868;
	font-size: 18px;
	margin: 0px;
}

.info-box > div:nth-child(2) > p {
	color: #ffffff;
	font-size: 24px;
	line-height: 1.5;
}

.info2 {
	display: grid;
	justify-items: left;
	align-items: center;
	max-width: 800px;
	margin: 50px 0px;
}

.info2 > h2 {
	text-align: left;
	color: #ffffff;
	font-weight: 600;
	margin: 25px 0px;
}

.contract-address {
	display: grid; 
	justify-items: center; 
	margin: 0px 0px 100px 0px;
}

.contract-address > a {
	text-decoration: none; 
	color: #ffc000;
	transition: all 0.2s linear;
}

.contract-address > a:hover {
	color: #b58800;
}
	
</style>
