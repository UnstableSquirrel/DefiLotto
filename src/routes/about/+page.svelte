
<script>

	let deg1 = 270
	let height1 = 0
	let font1 = 0
	let open1 = false

	let deg2 = 270
	let height2 = 0
	let font2 = 0
	let open2 = false

	let deg3 = 270
	let height3 = 0
	let font3 = 0
	let open3 = false

	let deg4 = 270
	let height4 = 0
	let font4 = 0
	let open4 = false

	function toggle1() {
		if (!open1) {
			deg1 = 90
			height1 = 100
			font1 = 16
			open1 = true
			return
		}
		if (open1) {
			deg1 = 270
			height1 = 0
			font1 = 0
			open1 = false
			return
		}
	}

	function toggle2() {
		if (!open2) {
			deg2 = 90
			height2 = 100
			font2 = 16
			open2 = true
			return
		}
		if (open2) {
			deg2 = 270
			height2 = 0
			font2 = 0
			open2 = false
			return
		}
	}

	function toggle3() {
		if (!open3) {
			deg3 = 90
			height3 = 100
			font3 = 16
			open3 = true
			return
		}
		if (open3) {
			deg3 = 270
			height3 = 0
			font3 = 0
			open3 = false
			return
		}
	}

	function toggle4() {
		if (!open4) {
			deg4 = 90
			height4 = 100
			font4 = 16
			open4 = true
			return
		}
		if (open4) {
			deg4 = 270
			height4 = 0
			font4 = 0
			open4 = false
			return
		}
	}

</script>

	<section class="section1">
		<h1>About Us</h1>
		<p>Here you can find all the necessary information about us and our product.</p>

		<div class="main-container">
			<div class="title-top">A few words about us:</div>
			<h2 class="title">We want you to make it!</h2>
			<p class="para">
				And we mean that. We are building a community and an ecosystem where everyone can have a fair chance of winning. 
				With win probabilities ranging from 1:1,000 to 1:10,000, we are giving everyone an equal chance at making it in crypto, without the risk of a rug 
				or mishandled user funds. All lottery transactions happen on-chain and are totally traceable, verifiable, and reliable. Winning picks are generated 
				through Chainlink's Verifiable Random Function (VRF). Everyone around the world can participate, and everyone can win.
			</p>
		</div>
	</section>

	<div class="bottom-banner">
		<img src="/img/wave2.svg" alt="Bottom-Banner">
	</div>

	<section class="section2">

		<div class="sec2-text">
			<span>An explanation on</span>
			<h2>What makes us different?</h2>
			<p>
				We aren't just a lotto portal. We're building a whole ecosystem around our DeFi NFT Lottery so that everyone can participate, stake, invest, 
				and get rewarded while doing so.
			</p>
			<p>
				We are mainly building for our community, and are actively listening when adding new features.
			</p>
			<p>
				Our DeFi Lottery is fully decentralized, secure, with true on-chain randomness through Chainlink.
			</p>
			<p>
				We have many things planned for the future, including a token launch and staking features, and are constantly working on improving our ecosystem. 
			</p>
			<p>
				For more information about our plans take a look into our <a style="color: yellow; text-decoration: none;" href="/#Roadmap">Roadmap</a>
			</p>
		</div>

	</section>

	<section class="section3" id="FAQ">

		<div class="sec3-text">
			<h2>Our FAQ</h2>
			<p>To help clear out the most common questions regarding DeFi Lotto.</p>
		</div>

		<div class="faq-main-container">

			<div class="faq-container">
				<div class="faq-header" on:click="{() => toggle1()}">
					<h2>What do I need to participate in a lottery raffle?</h2>
					<p style="transform: rotate({deg1}deg);">❯</p>
				</div>
				<div class="col-text" style="height: {height1}%">
					<p style="height: {height1}%; font-size: {font1}px">
						You'll need enough of the chain's gas token to pay for the transaction and enough of the stablecoin required for the ticket.
					</p>
				</div>
			</div>

			<div class="faq-container">
				<div class="faq-header" on:click="{() => toggle2()}">
					<h2>How does the prize get distributed? When can I claim my prize?</h2>
					<p style="transform: rotate({deg2}deg);">❯</p>
				</div>
				<div class="col-text" style="height: {height2}%">
					<p style="height: {height2}%; font-size: {font2}px">
						Each raffle prize is automatically send to the wallet holding the winning NFT, as determined by Chainlink's Verifiable Random Function.
					</p>
				</div>
			</div>

			<div class="faq-container">
				<div class="faq-header" on:click="{() => toggle3()}">
					<h2>How high are my chances in winning a NFT lottery?</h2>
					<p style="transform: rotate({deg3}deg);">❯</p>
				</div>
				<div class="col-text" style="height: {height3}%">
					<p style="height: {height3}%; font-size: {font3}px">
						Mainstream lotteries can have chances of around 1:300,000,000. With DeFi Lotto your chances of winning a raffle can range 
						from 1:1,000 to 1:10,000, depending on the lottery you choose. 
					</p>
				</div>
			</div>

			<div class="faq-container">
				<div class="faq-header" on:click="{() => toggle4()}">
					<h2>How does the whole NFT lottery process work?</h2>
					<p style="transform: rotate({deg4}deg);">❯</p>
				</div>
				<div class="col-text" style="height: {height4}%">
					<p style="height: {height4}%; font-size: {font4}px">
						First users mint NFT lottery tickets from a certain competition until the max amount that can be minted is reached. 
						A function is then called which sends a request to Chainlink VRF in order to receive a random number in the range 
						from 1 to the max mint amount of the current competition. The number that is returned from Chainlink is the winner, 
						and the prize is automatically sent to the wallet that holds the winning NFT. The owner of that NFT is determined by 
						the same function that called the random function. The competition is then finished and a new one will take its place.
					</p>
				</div>
			</div>

		</div>

	</section>
	

<style>

@media (min-width: 431px) and (max-width: 900px) {
	.section2 {
		padding: 200px 10px 50px 10px !important;
	}
}

@media (min-width: 0px) and (max-width: 430px) {
	.section1 > p {
		margin: -100px 0px 50px 0px !important;
	}

	.main-container {
		padding: 50px 20px 25px 20px !important;
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
		padding: 200px 10px 50px 10px !important;
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

	.faq-header > h2 {
		font-size: 20px !important;
	}

	.sec3-text > span {
		font-size: 20px !important;
		text-align: center;
	}

	.sec3-text > h2 {
		text-align: center;
		font-size: 30px !important;
	}

	.sec3-text > p {
		font-size: 16px !important;
		text-align: center;
	}

	.faq-header > h2 {
		font-size: 20px !important;
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
		padding: 50px 10px 50px 10px;
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
		margin: 0px 0px -200px 0px;
    	z-index: 1;

		padding: 80px 50px;
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
		font-size: 60px;
		font-weight: 700;
		color: #ffffff;
		text-transform: uppercase;
		max-width: 700px;
		text-align: center;
		margin: 0px;
	}

	.para {
		font-size: 18px;
		color: #c4cbf9;
		line-height: 1.7;
		margin: 0;
		margin: 50px 0px 0px 0px;
		max-width: 800px;
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

	@keyframes open {
		0% {opacity: 0; margin-left: -20px}
		100% {opacity: 1; margin-left: 0px}
	}

	.section3 {
		display: grid;
		justify-items: center;
		align-items: center;
		padding: 100px 20px 300px 20px;
		margin: 0px;
		background-color: #0f0233;
	}

	.sec3-text {
		display: grid;
		justify-items: center;
		align-items: center;
		margin: 0px 0px 50px 0px;
	}

	.sec3-text > span {
		font-size: 24px;
		color: #ffb200;
		margin-bottom: 13px;
	}

	.sec3-text > h2 {
		color: #ffffff;
		font-weight: 600;
		margin: 0;
		line-height: 1.3;
		font-size: 50px;
	}

	.sec3-text > p {
		margin-top: 10px;
		font-size: 18px;
		color: #f1f3ff;
		max-width: 700px;
	}

	.faq-main-container {	
		display: grid;
		justify-items: center;
		align-items: center;
		grid-gap: 25px 10px;

	}

	.faq-container {
		border: none;
		background-color: #683df5;
		padding-left: 30px;
		padding-right: 30px;
		border-radius: 20px !important;
		-webkit-border-radius: 20px !important;
		-moz-border-radius: 20px !important;
		-ms-border-radius: 20px !important;
		-o-border-radius: 20px !important;
		padding: 10px 20px;
		transition: all 0.4s linear;
		word-wrap: break-word;
		background-clip: border-box;
		border: 1px solid rgba(0,0,0,.125);
		border-radius: .25rem;
		max-width: 700px;
	}

	.faq-header {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto auto;
		border-bottom: 1px solid rgba(0,0,0,.125);
	}

	.faq-header:hover {
		cursor: pointer;
	}

	.faq-header > h2 {
		background-color: #683df5;
		padding: 0px 20px 20px 20px;
		margin-bottom: 0 !important;
		transition: all 1s linear;
		font-size: 20px;
		color: #ffffff;
		font-weight: 600;
		line-height: 1.3;
		font-size: 30px;
	}

	.faq-header > p {
		font-size: 30px;
		color: #c4cbf9;
		line-height: 1.7;
		margin: 0;	
		transition: all 0.1s linear;
	}

	.col-text {
		display: grid;
		justify-content: center;
		align-items: center;
		transition: all 0.1s linear;
		padding: 20px 0px 10px 0px;
	}

	.col-text > p {
		font-size: 16px;
		color: #c4cbf9;
		line-height: 1.7;
		margin: 0;	
		transition: all 0.1s linear;
		text-align: left;
		padding: 0px 25px;
	}
		
</style>
