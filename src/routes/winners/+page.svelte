<script>

import { defaultEvmStores as evm, web3, selectedAccount, connected, chainId, chainData, contracts} from 'svelte-web3'
import { onMount } from 'svelte'
import { browser } from '$app/environment'
import ABI from "../contracts/DFL_ABI.json"
const CONTRACT = "0x1f0E70986dFc95D65Ed87e46750F8C77830fE7B4"

let winnerAddress
let winningNFTId

async function getData() {
		if(browser) {
			await evm.setProvider()
			const contract = new $web3.eth.Contract(ABI, CONTRACT)

			winnerAddress = await contract.methods.winnerAddress().call()
			winningNFTId = await contract.methods.winningNFTId().call()
			// console.table("Address: " + winnerAddress, "NFTId: " + winningNFTId)
		}
   }

</script>

	{#await getData()}
	<i style="display: none;">get Data</i>
	{:then connected}
	<i style="display: none;">get Data</i>
	{/await}

	<section class="section1">
		<h1>Winner List</h1>
		<p>Here you can check all the previous winners from all our lottery rolls.</p>

		<div class="latest-winner-container">
			<div>
				<p>Winning Ticket: TBA</p>
				<!-- <p>Date: <span>June 12, 2022</span></p> -->
				<div class="line"></div>
				<h2>Winner Address</h2>
				<div class="latest-winner-address"><h1>TBA</h1></div>
			</div>
		</div>
	</section>
	<div class="bottom-banner">
		<img src="/img/wave2.svg" alt="Bottom-Banner">
	</div>

	<section class="section2">

		<div class="top-sec2">
			<h2>Explanation</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ex eget mi sollicitudin consequat. 
				Sed rhoncus ligula vel justo dignissim aliquam. Maecenas non est vitae ipsum luctus feugiat. 
				Fusce purus nunc, sodales at condimentum sed, ullamcorper a nulla.
				Nam justo est, venenatis quis tellus in, volutpat eleifend nunc. Vestibulum congue laoreet mi non interdum. Ut ut dapibus tellus.
			</p>
		</div>

		<div class="winners-container">
<!-- 
			<div class="winner">

				<div class="winner-img-container">
					<img src="/img/card-bg-1.jpg" alt="Lottery Type">
				</div>

				<div class="description-container">
					<div class="part1">
						<div class="left">
                            <h5>The Breeze Zodiac IX</h5>
                        </div>
						<div class="right">
                            <span>Draw took place on</span>
							<p>Saturday April 20, 2020</p>
                        </div>
					</div>
					<div class="part2">
						<p>Winner</p>
						<div class="winner-addr">
							<p>0x3154d38f35febe08fd0afdc6c3a1b833a49f69de</p>
						</div>
					</div>
				</div>
			</div>
			<br>
			<div class="winner">

				<div class="winner-img-container">
					<img src="/img/card-bg-1.jpg" alt="Lottery Type">
				</div>

				<div class="description-container">
					<div class="part1">
						<div class="left">
                            <h5>The Breeze Zodiac IX</h5>
                        </div>
						<div class="right">
                            <span>Draw took place on</span>
							<p>Saturday April 20, 2020</p>
                        </div>
					</div>
					<div class="part2">
						<p>Winner</p>
						<div class="winner-addr">
							<p>0x3154d38f35febe08fd0afdc6c3a1b833a49f69de</p>
						</div>
					</div>
				</div>
			</div> -->

		</div>

	</section>

	<section class="section3">

	</section>
	

<style>

@media (min-width: 743px) and (max-width: 1400px) {
		.section2 {
			padding: 200px 25px 50px 25px !important;
		}
}

@media (min-width: 531px) and (max-width: 742px) {
		.latest-winner-address > h1 {
			font-size: 18px !important;
		}

		.section2 {
			padding: 200px 25px 50px 25px !important;
		}

		.winner {
			grid-template-columns: auto !important;
			padding: 20px 10px 20px 10px !important;
		} 

		.description-container > .part1 {
			grid-template-columns: auto !important;
		}

		.winner-img-container {
			margin: 0px !important;
		}

		.winner-img-container > img {
			margin: 0px !important;
		}
}

@media (min-width: 431px) and (max-width: 530px) {
		.latest-winner-address > h1 {
			font-size: 15px !important;
		}

		.section2 {
			padding: 200px 25px 50px 25px !important;
		}

		.winner {
			grid-template-columns: auto !important;
			padding: 20px 10px 20px 10px !important;
		} 

		.description-container > .part1 {
			grid-template-columns: auto !important;
		}

		.winner-img-container {
			margin: 0px !important;
		}

		.winner-img-container > img {
			margin: 0px !important;
		}

		.winner-addr > p {
			font-size: 15px !important;
		}
}

@media (min-width: 0px) and (max-width: 430px) {

		.section1 > p {
			margin: -100px 0px 50px 0px !important;
		}

		.latest-winner-address > h1 {
			font-size: 10px !important;
		}

		.latest-winner-container {
			padding: 10px 5px !important;
		}

		.section2 {
			padding: 200px 5px 50px 5px !important;
		}

		.top-sec2 > h2 {
			font-size: 25px !important;
			margin: 0px 0px 20px 0px !important;
		}

		.top-sec2 > p {
			max-width: 200px !important;
		}

		.winner {
			grid-template-columns: auto !important;
			padding: 20px 5px 20px 5px !important;
		} 

		.description-container > .part1 {
			grid-template-columns: auto !important;
		}

		.winner-img-container {
			margin: 0px !important;
		}

		.winner-img-container > img {
			margin: 0px !important;
		}

		.winner-addr > p {
			font-size: 10px !important;
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

	.line {
		width: 215px;
		height: 3px;
		background-color: #ffffff;
		border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		-o-border-radius: 50%;
		margin: 10px 0px;
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
		margin: 0px 0px 0px 0px;
    	background-color: #0f0233;
		padding: 0px 0px 50px 0px;
		z-index: 1;
	}

	@keyframes anim1 {
		0% {border-color: rgb(245, 245, 245);}
		25% {border-color: rgb(255, 0, 255);}
		50% {border-color: rgb(0, 255, 255);}
		75% {border-color: rgb(255, 255, 255);}
		100% {border-color: rgb(222, 194, 253);}
	}

	.latest-winner-container {
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
		background-image: -moz-linear-gradient(90deg, #c165dd 0%, #c165dd  100%);
    	background-image: -webkit-linear-gradient(90deg, #c165dd 0%, #c165dd  100%);
    	background-image: -ms-linear-gradient(90deg, #c165dd 0%, #c165dd  100%);
		margin: 0px 0px -200px 0px;
    	z-index: 1;

		border-width: 5px;
		border-style: solid;
		animation-name: anim1;
		animation-duration: 5s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;

		box-shadow: 0px 5px 40px 10px #0ff;

		/* box-shadow:
			inset 0 0 60px whitesmoke,
			inset 20px 0 80px #f0f,
			inset -20px 0 80px #0ff,
			inset 20px 0 300px #f0f,
			inset -20px 0 300px #0ff,
			0 0 50px #fff,
			-10px 0 80px #f0f,
			10px 0 80px #0ff; */
	}

	.latest-winner-container > div {
		display: grid;
		justify-items: center;
		align-items: center;
	}

	.latest-winner-container > div > p {
		margin: 5px 0px;
		font-size: 16px;
    	color: #ffffff;
	}

	.latest-winner-container > div > h2 {
		text-align: center;
		font-weight: 400;
    	font-size: 22px;
		color: #ffffff;
		margin: 0;
		line-height: 1.3;
	}

	.latest-winner-address {
		margin: 10px 0px;
		padding: 5px 10px;
		background-image: -moz-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
		background-image: -webkit-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
		background-image: -ms-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
		box-shadow: 0px 17px 40px 0px rgb(243 42 126 / 35%);
		border-radius: 5px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
	}

	.latest-winner-address > h1 {
		font-size: 25px;
		color: #ffffff;
		line-height: 1;
		margin: 5px 0px;
	}

	.winners-container {
		display: grid;
		justify-items: center;
		align-items: center;
	}

	.winner {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto auto;
		background-image: -moz-linear-gradient(90deg, #c165dd 0%, #5c27fe 100%);
		background-image: -webkit-linear-gradient(90deg, #c165dd 0%, #5c27fe 100%);
		background-image: -ms-linear-gradient(90deg, #c165dd 0%, #5c27fe 100%);
		padding: 5px 25px;
	}

	.part1 {
		display: grid;
		justify-items: center;
		align-items: baseline;
		grid-template-columns: auto auto;
		border-bottom: 1px solid #c4a1f8;
	}

	.winner-img-container {
		margin: 0px 25px 0px 0px;
	}

	.winner-img-container > img {
		width: 100%;
		height: auto;
		max-width: 150px;
		transform: rotate(90deg);
		margin: 0px 25px 0px 0px;
	}

	.left {
		margin: 0px 5px 0px 0px;
	}

	.left > h5 {
		color: #ffffff;
		font-weight: 600;
		margin: 0;
		line-height: 1.3;
	}

	.right {
		margin: 0px 0px 0px 5px;
		text-align: center;
	}

	.right > span {
		color: #27ff5a;
		font-size: 16px;
		line-height: 1.7;
		margin: 0;
		text-align: center;
	}

	.right > p {
		font-size: 18px;
		color: #c4cbf9;
		line-height: 1.7;
		margin: 0;
	}

	.part2 {
		display: grid;
		justify-content: center;
		align-items: center;
	}

	.part2 > p {
		font-size: 22px;
		color: #ffffff;
		line-height: 1.7;
		margin: 0;
		font-weight: 600;
		text-align: center;
	}

	.part2 > div {
		margin: 0px;
		padding: 2.5px 10px;
		background-image: -moz-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
		background-image: -webkit-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
		background-image: -ms-linear-gradient(86deg, #ec038b 0%, #fb6468 44%, #fbb936 100%);
		box-shadow: 0px 17px 40px 0px rgb(243 42 126 / 35%);
		border-radius: 5px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
	}

	.part2 > div > p {
		font-size: 18px;
		color: #ffffff;
		line-height: 1.7;
		margin: 0;
		text-align: center;
	}

	.section3 {
		display: grid;
		justify-items: center;
		align-items: center;
		margin: 0px 0px 0px 0px;
    	background-color: #0f0233;
		padding: 0px 10px 200px 10px;
		z-index: 1;
	}

	.top-sec2 {
		display: grid;
		justify-items: center;
		align-items: center;
		max-width: 800px;
		border-bottom: 1px solid #2d246d;
		padding: 20px 0px;
		margin: 0px 0px 50px 0px;
	}

	.top-sec2 > h2 {
		font-size: 45px;
    	text-transform: uppercase;
		color: #ffffff;
		font-weight: 600;
		margin: 0;
		line-height: 1.3;
	}

	.top-sec2 > p {
		margin-top: 10px;
		font-size: 15px;
		color: #f1f3ff;
		line-height: 1.7;
    	margin: 0;
	}

	.section3 > div {
		display: grid;
		justify-items: left;
		align-items: center;
		max-width: 700px
	}

	.section3 > div > h2 {
		text-align: left;
		color: #ffffff;
		font-weight: 600;
		margin: 25px 0px;
	}
		
</style>
