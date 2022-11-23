<script>
	import { browser } from '$app/environment';
	// import { defaultEvmStores, web3, selectedAccount, connected, chainId, chainData } from 'svelte-web3';

	// if(browser) {
	// 	// defaultEvmStores.setProvider();

	// 	// Ethereum Web3 provider
	// 	defaultEvmStores.setProvider('https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7')

	// 	// Polygon Web3 provider
	// 	// defaultEvmStores.setProvider('https://rpc-mainnet.maticvigil.com')
	// }


	// let address;
	// let result;
	
	// const query_balance = async () => {
	// 		if($web3.utils.isAddress(address)) result = $web3.utils.fromWei(await $web3.eth.getBalance(address)).toString() + " " + $chainData?.nativeCurrency?.symbol;
	// 		else result = "Not a valid address.";
	// }

	let selectedNetwork = 1

	let background1 = "rgba(247, 7, 255, 0.5)"
	let color1 = "white"
	let fontWeight1 = "600"
	let border1 = "2px solid white"

	let background2 = "rgba(244, 245, 255, 0)"
	let color2 = "#c4cbf9"
	let fontWeight2 = "500"
	let border2 = "none"

	function toggleNetwork(i) {
		// console.log(selectedNetwork)
		if (i == 2) {
			background2 = "rgba(247, 7, 255, 0.5)"
			color2 = "white"
			fontWeight2 = "600"
			border2 = "2px solid white"

			background1 = "rgba(244, 245, 255, 0)"
			color1 = "#c4cbf9"
			fontWeight1 = "500"
			border1 = "none"

			selectedNetwork = 2
		}

		if (i == 1) {
			background1 = "rgba(247, 7, 255, 0.5)"
			color1 = "white"
			fontWeight1 = "600"
			border1 = "2px solid white"

			background2 = "rgba(244, 245, 255, 0)"
			color2 = "#c4cbf9"
			fontWeight2 = "500"
			border2 = "none"

			selectedNetwork = 1
		}
	}

</script>

<svelte:head>

    <meta property="og:site_name" content="Berndt Education" />
    <meta property=“og:description“ content="Customized language courses, curricula & language solutions in German, English, Spanish and Dutch." />
    <meta name="google-site-verification" content="dThTT2bH3f172KZ7ZB5QTzFPLGL9K14pqrPUG3uAQ3c" />

	

	<title>DeFi Lotto</title>
	<meta name="author" content="Block Starz">
	<meta name="keywords" content="lotto, lottery, crypto, polygon, bsc, blockchain, decentralized, 
	game, nft, network, message, global, defi, network, defi lotto, defi lottery, finance, eth, 
	ethereum, gambling, prize, win, winning, nft lottery, nft lotto, nfts, million, luck">
	<meta name="description" content="DeFi Lotto is a decentralized NFT based lottery platform where users can mint NFT tickets and win prizes up to 1 Million Dollars in stable coins.">
	<meta property="og:image" content="img/logo.png">
	<meta property="og:title" content="DeFi Lotto">
	<meta property="og:type" content="website" />
    <meta property="og:url" content="https://defilotto.finance" />
	<meta name="twitter:title" content="DeFi Lotto">
	<link rel="shortcut icon" href="img/logo.png" type="image.png">
	<link rel="icon" type="image/png" href="img/logo.png">

</svelte:head>

<main>

	<section class="section1">

		<div class="main-container">
			<div class="lp-content">
				<div class="top-title">Your chance to</div>
				<h2 class="top-title2">Really make it</h2>
				<p>Are you tired of getting rugged by every other project? Do you want to have a fair chance making it? With DeFi Lotto you can actually become a crypto millionaire.</p>
				<div class="buy-button-container">
				  <a href="/lottery1" class="btn1">BUY A TICKET NOW</a>
				  <!-- <a class="video-btn" href="/" data-rel="lightcase:myCollection"><i class="fas fa-play"></i></a> -->
				</div>
			</div>
	
			<!-- <div class="lp-img-container">
				<img src="/img/ticket.png" alt="Main">
			</div> -->
		</div>
	
		<div class="bottom-banner">
			<img src="/img/bottom.png" alt="bottom-banner">
		</div>
	
	</section>

	<section class="features-section">

		<div class="features-container">

			<div class="feature-box-container1">
				<div class="feature-box">
					<div class="feature-img-container">
						<img src="img/security.png" alt="Icon">
					</div>
					<div class="feature-text-container">
						<h3>Safe Service</h3>
						<p>
							By operating our NFT lottery fully on chain
						</p>
					</div>
				</div>
				<div class="feature-box">
					<div class="feature-img-container">
						<img src="img/link.png" alt="Icon">
					</div>
					<div class="feature-text-container">
						<h3>True Randomness</h3>
						<p>To guarante fairness in all our lotteries, we use Chainlink's 
							VRF
						</p>
					</div>
				</div>
			</div>

			<div class="feature-box-container2">
				<div class="feature-box">
					<div class="feature-img-container">
						<img src="img/lucky.png" alt="Icon">
					</div>
					<div class="feature-text-container">
						<h3>High Winning Chances</h3>
						<p>Ranging from <span style="color: yellow">1:1,000</span> to <span style="color: yellow">1:10,000</span></p>
					</div>
				</div>
				<div class="feature-box">
					<div class="feature-img-container">
						<img src="img/door.png" alt="Icon">
					</div>
					<div class="feature-text-container">
						<h3>Open</h3>
						<p>DeFi Lotto is fully decentralized and open for everyone globally</p>
					</div>
				</div>
			</div>

			<div class="features-title-container">
				<span></span>
				<h2>Our Features</h2>
				<p>
					Enjoy our features while interacting with our services and aiming for the jackpot.
					Today might be your lucky day.
				</p>
			</div>

		</div>

	</section>
	
	<section class="section2">
	
		<div class="section-header">
			<span class="section-sub-title">Want to know how</span>
			<h2 class="section-title">How To Play</h2>
			<p>Follow these 3 easy steps</p>
		</div>

		<div class="card-section">
			<div>
				<!-- <img src="/img/3.png" alt="Icon1"> -->
				<h1>1</h1>
				<h2>Buy Ticket</h2>
				<p>Buy a ticket of your choice. We have various prize and ticket ranges from which you can choose from.</p>
			</div>
			<div>
				<!-- <img src="/img/3.png" alt="Icon2"> -->
				<h1>2</h1>
				<h2>Get Lucky</h2>
				<p>Wait until the contest you're participating in is minted out. After the mint out winners will be rolled via Chainlink VRF.</p>
			</div>
			<div>
				<!-- <img src="/img/3.png" alt="Icon3"> -->
				<h1>3</h1>
				<h2>Win Prize</h2>
				<p>If you happen to be amongst the lucky winners, the prize amount will be transfered in USDC directly and immediately into the wallet that holds the winning NFT.</p>
			</div>
		</div>

		<div class="section2-explanation">
			<p>
				Our DeFi lottery aims to give everyone a fair and equal chance of making a good amount of money. Normal lotteries usually have a winning ratio in the range from 1:50,000,000 to 1:250,000,000.
				It is far more likely for you to win one of our prize pools than winning the lottery, and this is due to our game design. The majority of the money that is generated through the NFT lottery ticket 
				sales is given back to the community, blessing someone with a fortune guaranteed.
			</p>
		</div>

	</section>

	<section class="section3">
		<div class="section-header">
			<span class="section-sub-title">Choose from one of</span>
			<h2 class="section-title">Our Lotteries</h2>
			<p>With various entry points and prizes</p>
		</div>

		<div class="select-chain-lotteries">
			<div on:click="{() => toggleNetwork(1)}" style="background-color:{background1};">
				<img style="border:{border1};" src="img/Polygon.png" alt="Polygon">
					<p style="font-weight: {fontWeight1}; color: {color1};">Polygon Network</p>
			</div>
			<div on:click="{() => toggleNetwork(2)}" style="background-color:{background2};">
				<img style="border:{border2};" src="img/BSC.png" alt="Binance Smart Chain">
				<p style="font-weight: {fontWeight2}; color: {color2};">Binance Smart Chain</p>
			</div>
		</div>

		<div class="lotteries-container">

			<div class="ticket-prize-sec">$1.50 Tickets</div>

			<div class="lotteries-1">

				<div>
					<div class="prize-top">
						<p>Win</p>
						<h1>$1,000</h1>
					</div>
					<img src="/img/usdc.png" alt="USDC">
					<div>
						<p>Ticket Prize: <span>$1.50</span></p>
						<p>Total Tickets: <span>1,000</span></p>
						<p>Winning Probability: <span>1:1,000</span></p>
						<a href="/"><button disabled="disabled">Get Tickets</button></a>
					</div>
				</div>

				<div>
					<div class="prize-top">
						<p>Win</p>
						<h1>$10,000</h1>
					</div>
					<img src="/img/usdc.png" alt="USDC">
					<div>
						<p>Ticket Prize: <span>$1.50</span></p>
						<p>Total Tickets: <span>10,000</span></p>
						<p>Winning Probability: <span>1:10,000</span></p>
						<a href="/"><button disabled="disabled">Get Tickets</button></a>
					</div>
				</div>

			</div>


			<div class="ticket-prize-sec">$5 Tickets</div>


			<div class="lotteries-2">
				
				<div>
					<div class="prize-top">
						<p>Win</p>
						<h1>$3,500</h1>
					</div>
					<img src="/img/usdc.png" alt="USDC">
					<div>
						<p>Ticket Prize: <span>$5</span></p>
						<p>Total Tickets: <span>1,000</span></p>
						<p>Winning Probability: <span>1:1,000</span></p>
						<a href="/"><button disabled="disabled">Get Tickets</button></a>
					</div>
				</div>

				<div>
					<div class="prize-top">
						<p>Win</p>
						<h1>$35,000</h1>
					</div>
					<img src="/img/usdc.png" alt="USDC">
					<div>
						<p>Ticket Prize: <span>$5</span></p>
						<p>Total Tickets: <span>25,000</span></p>
						<p>Winning Probability: <span>1:10,000</span></p>	
						<a href="/"><button disabled="disabled">Get Tickets</button></a>
					</div>
				</div>

			</div>



			<div class="ticket-prize-sec">$15 Tickets</div>

			<div class="lotteries-3">
				
				<div>
					<div class="prize-top">
						<p>Win</p>
						<h1>$10,000</h1>
					</div>
					<img src="/img/usdc.png" alt="USDC">
					<div>
						<p>Ticket Prize: <span>$15</span></p>
						<p>Total Tickets: <span>1,000</span></p>
						<p>Winning Probability: <span>1:1,000</span></p>
						<a href="/"><button disabled="disabled">Get Tickets</button></a>
					</div>
				</div>

				<div>
					<div class="prize-top">
						<p>Win</p>
						<h1>$100,000</h1>
					</div>
					<img src="/img/usdc.png" alt="USDC">
					<div>
						<p>Ticket Prize: <span>$15</span></p>
						<p>Total Tickets: <span>10,000</span></p>
						<p>Winning Probability: <span>1:10,000</span></p>
						<a href="/"><button disabled="disabled">Get Tickets</button></a>
					</div>
				</div>
				
			</div>

			<!-- <div>
				<div>
					<h1>$10,000</h1>
				</div>
				<img src="/img/usdc.png" alt="USDC">
				<div>
					<p>Mint a ticket for $15 from a total set of 1000 tickets in order to have a chance of winning 10,000 $USDC. Winning probability per ticket is 1:1,000.</p>
					<a href="/"><button disabled="disabled">Get Tickets</button></a>
				</div>
			</div>

			<div>
				<div>
					<h1>$100,000</h1>
				</div>
				<img src="/img/usdc.png" alt="USDC">
				<div>
					<p>Mint a ticket for $15 from a total set of 10,000 tickets in order to have a chance of winning 100,000 $USDC. Winning probability per ticket is 1:10,000.</p>
					<a href="/"><button disabled="disabled">Get Tickets</button></a>
				</div>
			</div> -->

			<!-- <div>
				<div>
					<h1>$1,000,000</h1>
				</div>
				<img src="/img/usdc.png" alt="USDC">
				<div>
					<p>Mint a ticket for $150 from a total set of 10,000 tickets in order to have a chance of winning 100,000 $USDC. Winning probability per ticket is 1:10,000.</p>
					<a href="/"><button disabled="disabled">Get Tickets</button></a>
				</div>
			</div> -->

		</div>
	</section>

	<section class="section4" id="Roadmap">

		<div class="section-header">
			<span class="section-sub-title">Take a look into our</span>
			<h2 class="section-title">Roadmap</h2>
			<p>We have planned a lot for the future</p>
		</div>

		<div class="roadmap-container">
			<div class="roadmap-paragraph">
				<p>Growing the community and ecosystem with lottery raffles.</p>
				<br>
				<p>Increase the prize pools and total NFT mints.</p>
				<br>
				<p>Build out the Lottery to be adapted by the entire crypto space.</p>
				<br>
				<p>Slowly grow and increase the outreach.</p>
				<br>
				<p>Audit the core lottery contract and upcoming ones.</p>
			</div>
			<div class="circle-style">
				<h1>1</h1>
			</div>
			<div class="circle-style">
				<h1>2</h1>
			</div>
			<div class="roadmap-paragraph">
				<p>Release a token holders can stake for a very sustainable passive income, which is generated through the lottery 
					and further development that will be built out and integrated into the ecosystem.
				</p>
				<br>
				<p>Make staking with certain limited NFTs possible.</p>
			</div>
			<div class="roadmap-paragraph">
				<p>Create a staking platform. </p>
				<br>
				<p>List our token to various tracking sites.</p>
				<br>
				<p>Partner up with strong projects.</p>
				<br>
				<p>Create a DAO investment fund where token holders can decide where to invest and earn interest when staking into the DAO pool and other pools.</p>
			</div>
			<div class="circle-style">
				<h1>3</h1>
			</div>
			<div class="circle-style">
				<h1>4</h1>
			</div>
			<div class="roadmap-paragraph">
				<p>Build out more income streams for stakers to earn passive income.</p>
				<br>
				<p>Slowly look into building a decentralized casino platform in additon to our lottery platform.</p>
			</div>
			<div class="roadmap-paragraph">
				<p>Look for other strong projects to partner with.</p>
				<br>
				<p>Build out all the platforms to make everything more robust and user friendly.</p>
			</div>
			<div class="circle-style">
				<h1>5</h1>
			</div>
			<div class="circle-style">
				<h1>6</h1>
			</div>
			<div class="roadmap-paragraph">
				<p>Test other income streams and advance the platform by listeing to the community.</p>
				<br>
				<p>Hire more staff and solidify the ecosystem.</p>
			</div>
			<div></div>
		</div>

	</section>

</main>

<style>


@media (min-width: 901px) and (max-width: 1100px) {
	.lotteries-container > div {
		grid-template-columns: auto auto !important;
	}
}

@media (min-width: 731px) and (max-width: 900px) {
	.section1 {
		padding: 100px 0px 25px 150px !important;
	}

	.lotteries-container > div {
		grid-template-columns: auto auto !important;
	}
}


@media (min-width: 525px) and (max-width: 790px) {

	.features-container {
		grid-template-columns: auto !important;
	}

	.features-title-container {
		grid-column: 1 / span 2;
		margin: 0px 0px 100px 0px;
	}

	.feature-box-container1 {
		grid-row: 2 / span 1;
	}

	.feature-box-container2 {
		grid-row: 2 / span 2;
	}
}

@media (min-width: 0px) and (max-width: 525px) {

	.features-container {
		grid-template-columns: auto !important;
		justify-items: center;
		align-items: center;
	}

	.features-title-container {
		grid-row: 1 / span 1;
		margin: 0px 0px 100px 0px !important ;
	}

	.feature-box-container1 {
		grid-column: 1 / span 1;
	}

	.feature-box-container2 {
		grid-column: 1 / span 1;
		margin: 0px 0px 0px 0px !important;
	}

}

@media (min-width: 601px) and (max-width: 730px) {
	.section1 {
		padding: 100px 0px 25px 70px !important;
	}

	.card-section {
		grid-template-columns: auto auto !important;
	}

	.lotteries-container > div {
		grid-template-columns: auto !important;
	}
}

@media (min-width: 484px) and (max-width: 600px) {
	.section1 {
		padding: 100px 0px 25px 20px !important;
	}

	.card-section {
		grid-template-columns: auto auto !important;
	}

	.lotteries-container > div {
		grid-template-columns: auto !important;
	}

	.roadmap-container {
		grid-template-columns: auto !important;
	}

	.roadmap-container > div:nth-child(13) {
		display: none !important;
	}

	.roadmap-container > div:nth-child(2) {
		grid-row: 1;
	}

	.roadmap-container > div:nth-child(6) {
		grid-row: 5;
	}

	.roadmap-container > div:nth-child(10) {
		grid-row: 9;
	}

	.roadmap-paragraph {
		border: none !important;
		margin: 50px 0px !important;
	}
}

@media (min-width: 380px) and (max-width: 483px) {
	.top-title {
		font-size: 25px !important;
	}

	.top-title2 {
		font-size: 70px !important;
	}

	.lp-content > p {
		padding: 0px 5px !important;
		font-size: 14px !important;
	}

	.section1 {
		padding: 100px 0px 25px 20px !important;
	}

	.card-section {
		grid-template-columns: auto !important;
	}

	.lotteries-container > div {
		grid-template-columns: auto !important;
	}

	.roadmap-container {
		grid-template-columns: auto !important;
	}

	.roadmap-container > div:nth-child(13) {
		display: none !important;
	}

	.roadmap-container > div:nth-child(2) {
		grid-row: 1;
	}

	.roadmap-container > div:nth-child(6) {
		grid-row: 5;
	}

	.roadmap-container > div:nth-child(10) {
		grid-row: 9;
	}

	.roadmap-paragraph {
		border: none !important;
		margin: 50px 0px !important;
	}
}

@media (min-width: 0px) and (max-width: 379px) {
	.top-title {
		font-size: 20px !important;
	}

	.top-title2 {
		font-size: 50px !important;
	}

	.lp-content > p {
		padding: 0px 5px !important;
		font-size: 12px !important;
	}

	.btn1 {
		padding: 10px 15px !important;
    	font-size: 17px !important;
	}

	.section-header > .section-sub-title {
		font-size: 18px !important;
	}

	.section-header > .section-title {
		font-size: 30px !important;
	}

	.section-header > p {
		font-size: 12px !important;
	}

	
	.features-title-container > span {
		font-size: 18px !important;
	}

	.features-title-container > h2 {
		font-size: 30px !important;
	}

	.features-title-container > p {
		font-size: 12px !important;
	}

	.section1 {
		padding: 100px 0px 25px 20px !important;
	}

	.section2-explanation > p {
		font-size: 14px !important;
	}

	.card-section {
		grid-template-columns: auto !important;
	}

	.ticket-prize-sec {
		font-size: 33px !important;
		padding: 0px 0px 0px 0px !important;
	}

	.lotteries-container > div {
		grid-template-columns: auto !important;
	}

	.lotteries-container > div > div > div > h1 {
		font-size: 38px !important;
	}

	.lotteries-container > div > div {
		width: 200px !important;
		height: 480px !important;
	}
/* 
	.lotteries-container > div > div:nth-child(2) {
		width: 200px !important;
		height: 535px !important;
	}

	.lotteries-container > div > div:nth-child(3) {
		width: 200px !important;
		height: 535px !important;
	} */

	.lotteries-container > div > div > img {
		margin: -80px 0px 0px 20px !important;
	}

	.lotteries-container > div > div > div:nth-child(3) > p:nth-child(1) {
		margin-top: 10px !important;
	}

	.lotteries-container > div > div > div:nth-child(3) > p {
		padding: 0px 0px 0px 0px !important;
		margin: 2px 0px; 
		text-align: center !important;
	}

	.lotteries-container > div > div > div:nth-child(3) > p:nth-child(3) {
		margin-bottom: 20px !important;
	}

	.lotteries-container > div > div > div:nth-child(3) > a > button {
		padding: 10px 10px 10px 10px !important;
		margin: 10px 0px 10px 0px !important;
	}

	.roadmap-container {
		grid-template-columns: auto !important;
	}

	.roadmap-container > div:nth-child(13) {
		display: none !important;
	}

	.roadmap-container > div:nth-child(2) {
		grid-row: 1;
	}

	.roadmap-container > div:nth-child(6) {
		grid-row: 5;
	}

	.roadmap-container > div:nth-child(10) {
		grid-row: 9;
	}

	.roadmap-paragraph {
		border: none !important;
		margin: 50px 0px !important;
	}

	.roadmap-paragraph > p {
		font-size: 14px !important;
	}
}

@media (max-width: 1000px) {
	.bottom-banner {
		margin: 0px 0px 0px -250px !important;
	}
}

	section {
		margin-top: -35px;
		padding: 150px 0px 100px 0px;
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto;
		/* background-image: linear-gradient(7deg, #ec1379 0%, #6c0092 100%); */
		z-index: 5;
		background-color: #0f0233;
	}

	.main-container {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto auto;
	}

	.section-header {
		margin-bottom: 70px;
    	margin-top: -8px;
		z-index: 5;
	}

	.section-sub-title {
		font-size: 24px;
		color: #ffb200;
		margin-bottom: 13px;
		text-transform: uppercase;
	}

	@media (max-width: 1199px) {
		.section-title {
			font-size: 56px;
		}
	}

	.section-title {
		font-size: 50px;
		text-transform: uppercase;
	}

	.section-header > p {
		font-size: 16px;
		color: #c4cbf9;
		line-height: 1.7;
		margin: 0;
		font-weight: 500;
	}

	.circle-style {
		width: 100px;
		height: 100px;
		text-align: center;
		line-height: 100px;
		margin: 0 auto;
		background-color: #352882;
		box-shadow: 0px 13px 21px 0px rgb(215 38 116 / 60%), inset 0px 0px 15px 5px #fd4099;
		border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		-o-border-radius: 50%;
		z-index: 1;
		display: grid;
		justify-items: center;
		align-items: center;
	}

	.circle-style > h1 {
		vertical-align: middle;
    	border-style: none;
		font-size: 50px;
		font-weight: 700;
	}

	main {
		width: 100%;
	}

	.section1 {
		display: grid;
		justify-items: left;
		align-items: center;
		padding: 100px 0px 25px 250px;
		/* background-image: linear-gradient(7deg, #ec1379 0%, #6c0092 100%); */
		background-image: linear-gradient(0deg, #ec1379 0%, #6c0092 50%, #4c0859 100%);
	}

	.lp-content {
		margin-top: 170px;
		display: grid;
		justify-items: left;
		align-items: center;
		max-width: 500px;
		z-index: 1;
	}

	.top-title {
		font-size: 28px;
		font-weight: 600;
		text-transform: uppercase;
		color: #ffb200;
		margin-bottom: 10px;
		z-index: 1;
	}

	.top-title2 {
		font-size: 110px;
		font-weight: 700;
		text-transform: uppercase;
		line-height: 1.1;
		z-index: 1;
	}

	h1, h2 {
		color: #ffffff;
		font-weight: 600;
		margin: 0;
		line-height: 1.3;
		max-width: 500px;
	}

	p, span {
		font-size: 16px;
		color: #c4cbf9;
		line-height: 1.7;
		margin: 0;
		font-weight: 500;
	}

	.buy-button-container {
		margin-top: 30px;
	}

	.btn1 {
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
		box-shadow: 0px 17px 40px 0px rgba(124, 78, 25, 0.35);
		-webkit-transition: background-size 0.3s;
		-o-transition: background-size 0.3s;
		transition: background-size 0.3s;
		color: #ffffff;
		z-index: 1;
	}

	.btn1:hover {
		background-image: linear-gradient(86deg, #fb6468 0%, #fb6468 44%, #fb6468 100%);
	}

	a {
		text-decoration: none;
		display: inline-block;
		font-family: "Josefin Sans", sans-serif;
		color: #ffffff;
	}

	.lp-img-container {
		margin: 0px 0px 0px 200px;
	}

	.lp-img-container > img {
		width: 500px;
		height: 200px;
		transform: rotate(-10deg);
	}

	.bottom-banner {
		/* position: absolute; */
		margin: -150px 0px 0px -250px;
	}

	.bottom-banner > img {
		max-width: 100%;
		height: auto;
	}








	.features-section {
		display: grid;
		justify-items: center;
		align-items: center;
		padding: 100px 25px 0px 25px;
	}

	.features-container {
		max-width: 800px;
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto auto auto;
	}

	.features-title-container  {
		margin-left: 25px;
	}

	.features-title-container > span {
		font-size: 24px;
		color: #ffb200;
		margin-bottom: 13px;
	}

	.features-title-container > h2 {
		font-size: 56px;
		color: #ffffff;
		font-weight: 600;
		margin: 0;
		line-height: 1.3;
	}

	.features-title-container > p {
		margin-top: 10px;
		font-size: 18px;
		color: #f1f3ff;
		line-height: 1.7;
    	margin: 0;
	}

	.feature-box-container1 {
		display: grid;
		justify-items: center;
		align-items: center;
		margin: -70px 0px 0px 0px;
	}

	.feature-box-container2 {
		display: grid;
		justify-items: center;
		align-items: center;
		margin: 70px 0px 0px 0px;
	}

	.feature-box {
		margin: 15px;
		text-align: center;
		background-image: -moz-linear-gradient(45deg, #d73df5 0%, #8f3df5 100%);
		background-image: -webkit-linear-gradient(45deg, #d73df5 0%, #8f3df5 100%);
		background-image: -ms-linear-gradient(45deg, #d73df5 0%, #8f3df5 100%);
		border-radius: 10px;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		-ms-border-radius: 10px;
		-o-border-radius: 10px;
		-webkit-transition: all 0.3s;
		-o-transition: all 0.3s;
		transition: all 0.3s;
		width: 200px;
		height: 300px;
		padding: 5px;
	}

	.feature-img-container {
		margin: 20px 0px 20px 0px;
	}
	 
	.feature-img-container > img {
		width: 70px;
		height: 70px;
	}

	.feature-text-container > h3 {
		color: #ffffff;
		font-weight: 600;
		margin: 0;
		line-height: 1.3;
		margin: 10px 0px 15px 0px;
	}

	.feature-text-container > p {
		color: #f4f5ff;
    	margin-top: 15px !important;
		line-height: 1.7;
    	margin: 0;
		padding: 0px 25px;
	}









	.section2 {
		padding: 150px 0px 0px 0px;
	}

	.card-section {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto auto auto;
		grid-gap: 10px 20px;
	}

	.card-section > div {
		display: grid;
		justify-items: center;
		margin: 0px;
		padding: 25px 25px 5px 25px;
		width: 170px;
		height: 280px;
		background-image: url("/img/card-bg-1.jpg");
		border-radius: 15px;
		text-align: center;
	}

	.card-section > div > p {
		font-size: 14px;
		line-height: 1.2;
	}

	.card-section > div:nth-child(2) {
		width: 170px;
		height: 280px;
		background-image: url("/img/card-bg-2.jpg");
	}

	.card-section > div:nth-child(3) {
		width: 170px;
		height: 280px;
		background-image: url("/img/card-bg-3.jpg");
	}

	/* .card-section-1 > div > img {
		display: grid;
		justify-items: center;
		margin: 0px;
		padding: 0px;
		width: 50px;
		height: 50px;
	} */

	.card-section > div > h1 {
		font-size: 50px;
		font-weight: 700;
		background-image: -moz-linear-gradient(-45deg, #c165dd 0%, #5c27fe 100%);
		background-image: -webkit-linear-gradient(-45deg, #c165dd 0%, #5c27fe 100%);
		background-image: -ms-linear-gradient(-45deg, #c165dd 0%, #5c27fe 100%);
		border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		-o-border-radius: 50%;
		text-align: center;
		color: #ffffff;
		width: 65px;
		height: 65px;
	}
	
	.section2-explanation {
		display: grid;
		justify-content: center;
		align-items: center;
		padding: 25px;
		margin: 25px 0px 50px 0px;
	}

	.section2-explanation > p {
		max-width: 700px;
		font-size: 16px;
	}








	.section3 {
		background-color: #15004e;
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto;
	}

	.select-chain-lotteries {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto auto;
		background-image: linear-gradient(45deg, rgba(214, 61, 245, 0.5) 0%, rgba(144, 61, 245, 0.5) 100%);
		border-radius: 10px;
	}

	.select-chain-lotteries >  div {
		display: grid;
		justify-items: center;
		align-items: center;
		/* background-color: rgba(247, 7, 255, 0.5); */
		padding: 10px 0px 8px 0px;
		width: 120px;
		/* transition: all 0.4s; */
	}

	.select-chain-lotteries >  div:hover {
		cursor: pointer;
		/* background-color: rgba(247, 7, 255, 0.5); */
		/* transition: all 0.4s; */
	}

	.select-chain-lotteries >  div:nth-child(1) {
		border-radius: 10px 0px 0px 10px;
		/* transition: all 0.4s; */
	}

	.select-chain-lotteries >  div:nth-child(2) {
		border-radius: 0px 10px 10px 0px;
		/* transition: all 0.4s; */
	}


	.select-chain-lotteries >  div > img {
		width: 55px;
		height: 55px;
		margin: 0px 10px 10px 10px;
		border-radius: 50px;
		/* transition: all 0.4s; */
	}

	.select-chain-lotteries >  div > p {
		max-width: 200px;
		font-size: 14px;
		margin: 0px 10px;
		text-align: center;
		/* transition: all 0.4s; */
	}
	
	.lotteries-container > div {
		display: grid;
		justify-content: center;
		justify-items: center;
		grid-template-columns: auto auto auto;
	}

	.ticket-prize-sec {
		/* color: #ffb200; */
		color: white;
		font-size: 40px;
		font-weight: 800 !important;
		/* max-width: 400px; */
		/* width: 70vw; */
		background-image: linear-gradient(135deg, #5496ff 0%, #8739e6 100%);
		/* background-image: linear-gradient(45deg, #d73df5 0%, #8f3df5 100%); */
		height: 50px;
		border-radius: 5px;
		align-self: center;
		padding: 0px 0px 10px 0px;
		margin: 100px 0px 0px 0px; 
	}

	.lotteries-container > div > div {
		width: 300px;
		height: 450px;
		padding: 0px;
		border-radius: 5px;
		border: 5px solid #352882;
		background-image: linear-gradient(0deg, #ec1379 0%, #6c0092 50%, #4c0859 100%);
		box-shadow: 0px 0px 10px 10px #ff20883a;
		margin: 25px;
	}

	.prize-top > p {
		text-align: left;
		margin: 10px 0px 0px 0px; 
		width: 100%; 
		font-size: 20px;
		padding: 0px;
		color: #ffb200;
	}

	.lotteries-container > div > div > div:nth-child(1) {
		display: grid;
		justify-content: center;
		justify-items: center;
		padding: 10px;
		padding: 0px;
		border-radius: 2px 2px 0px 0px;
		border: none;
		background: rgba(90, 75, 204, 0.5);
		box-shadow: none;
	}

	.lotteries-container > div > div > div:nth-child(1) > h1 {
		margin: 00px 0px 80px 0px;
		font-size: 45px;
		z-index: 2;
	}

	.lotteries-container > div > div > img {
		margin: -80px 0px 0px 70px;
		width: 150px;
		height: 150px;
	}

	.lotteries-container > div > div > div:nth-child(3) {
		display: grid;
		justify-content: center;
		justify-items: center;
		padding: 70px 15px 25px 15px;
		border-radius: 0px 0px 2px 2px;
		border: none;
		background: rgba(73, 57, 192, 0.5);
		box-shadow: none;
		margin: -75px 0px 0px 0px;
		z-index: 2;
	}

	.lotteries-container > div > div > div:nth-child(3) > p {
		padding: 5px 0px 0px 25px;
		text-align: left;
		width: 100%;
	}

	.lotteries-container > div > div > div:nth-child(3) > p > span {
		color: #ffb200;
		font-size: 17px;
		font-weight: 600;
	}

	.lotteries-container > div > div > div:nth-child(3) > p:nth-child(3) {
		margin-bottom: 7px;
	}

	.lotteries-container > div > div > div:nth-child(3) > a > button {
		margin: 15px 0px 0px 0px;
    	padding: 15px 40px 15px 40px;
		font-size: 18px;
		font-weight: 600;
		text-transform: uppercase;
		border-radius: 999px;
		-webkit-border-radius: 999px;
		-moz-border-radius: 999px;
		-ms-border-radius: 999px;
		-o-border-radius: 999px;
		/* background-image: -moz-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
		background-image: -webkit-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
		background-image: -ms-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%); */
		box-shadow: 0px 17px 40px 0px rgba(124, 78, 25, 0.35);
		-webkit-transition: background-size 0.3s;
		-o-transition: background-size 0.3s;
		transition: background-size 0.3s;
		color: #ffffff;
		
	}

	/* .lotteries-container > div > div:nth-child(3) > a > button:hover {
		cursor: pointer;
		background: #fb6468;
		transform: scale(1.02);
		transition: all 0.2s linear;
	}

	.lotteries-container > div > div:nth-child(3) > a > button:active {
		cursor: pointer;
		background: #fb6468;
		transform: scale(0.97);
		transition: all 0.1s linear;
	} */













	.section4 {
		display: grid;
		justify-items: center;
		align-items: center;
		padding: 100px 0px 300px 0px;
		background-color: #0f0233;
	}

	.roadmap-container {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto auto;
		grid-gap: 0px;
	}

	.roadmap-paragraph {
		padding: 10px;
		margin: 0px;
		width: 250px;
	}

	.roadmap-paragraph:nth-child(1) {
		border-left: 5px solid #c4cbf9;
		border-bottom: 5px solid #c4cbf9;
		border-radius: 0px 0px 0px 15px;
	}

	.roadmap-paragraph:nth-child(4) {
		border-right: 5px solid #c4cbf9;
		border-bottom: 5px solid #c4cbf9;
		border-top: 5px solid #c4cbf9;
		margin: -5px 0px;
		border-radius: 0px 15px 15px 0px;
	}

	.roadmap-paragraph:nth-child(5) {
		border-left: 5px solid #c4cbf9;
		border-bottom: 5px solid #c4cbf9;
		border-top: 5px solid #c4cbf9;
		margin: 0px 0px -5px 0px;
		border-radius: 15px 0px 0px 15px;
	}

	.roadmap-paragraph:nth-child(8) {
		border-right: 5px solid #c4cbf9;
		border-bottom: 5px solid #c4cbf9;
		border-top: 5px solid #c4cbf9;
		margin: 0px 0px -5px 0px;
		border-radius: 0px 15px 15px 0px;
	}

	.roadmap-paragraph:nth-child(9) {
		border-top: 5px solid #c4cbf9;
		border-left: 5px solid #c4cbf9;
		border-bottom: 5px solid #c4cbf9;
		border-radius: 15px 0px 0px 15px;
	}

	.roadmap-paragraph:nth-child(12) {
		border-right: 5px solid #c4cbf9;
		border-bottom: 5px solid #c4cbf9;
		border-top: 5px solid #c4cbf9;
		margin: -5px 0px;
		border-radius: 0px 15px 15px 0px;
	}

	.roadmap-paragraph > p {
		font-size: 17px;
		color: white;
		padding: 0px;
		margin: 0px;
	}

	.roadmap-container > div:nth-child(13) {
		padding: 10px;
		margin: 0px;
		width: 250px;
		border-top: 5px solid #c4cbf9;
		margin: 0px 0px -5px 5px;
		border-radius: 0px;
	}






	/* .play-card {
		padding: 30px 25px;
		border-radius: 10px;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		-ms-border-radius: 10px;
		-o-border-radius: 10px;
		-webkit-transition: all 0.3s;
		-o-transition: all 0.3s;
		transition: all 0.3s;
	}

	.play-card__icon {
		position: relative;
		width: 100px;
		height: 100px;
		text-align: center;
		line-height: 100px;
		margin: 0 auto;
		background-color: #352882;
		box-shadow: 0px 13px 21px 0px rgb(215 38 116 / 60%), inset 0px 0px 15px 5px #fd4099;
		border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		-o-border-radius: 50%;
		z-index: 1;
	}

	.play-card__icon {
		position: relative;
		width: 100px;
		height: 100px;
		text-align: center;
		line-height: 100px;
		margin: 0 auto;
		background-color: #352882;
		box-shadow: 0px 13px 21px 0px rgb(215 38 116 / 60%), inset 0px 0px 15px 5px #fd4099;
		border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		-o-border-radius: 50%;
		z-index: 1;
	}

	.play-card__icon .play-card__number {
		position: absolute;
		bottom: -6px;
		right: -21px;
		width: 40px;
		height: 40px;
		background-image: -moz-linear-gradient(-45deg, #c165dd 0%, #5c27fe 100%);
		background-image: -webkit-linear-gradient(-45deg, #c165dd 0%, #5c27fe 100%);
		background-image: -ms-linear-gradient(-45deg, #c165dd 0%, #5c27fe 100%);
		border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		-o-border-radius: 50%;
		text-align: center;
		line-height: 44px;
		font-size: 22px;
		color: #ffffff;
	} */


</style>
