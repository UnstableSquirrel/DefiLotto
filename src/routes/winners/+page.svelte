<script>

import { defaultEvmStores as evm, web3, selectedAccount, connected, chainId, chainData, contracts} from 'svelte-web3'
import { onMount } from 'svelte'
import { browser } from '$app/environment'
import ABI from "../contracts/DFL_ABI.json"
const CONTRACT = "0x1f0E70986dFc95D65Ed87e46750F8C77830fE7B4"
import { Winners } from './winnerlist.js'

let winnerAddress = "0xd0e9a6deeB289bC20c5C09C2e37049D188C263e3"
let winningNFTId = 17
let txHash = "0x8354b056eca474d7a695ab976e5a44750730eb73c1ec2f8bf1f73c59f6c6f897"

// let address1
// let address2

// console.log(Winners[0].Transaction)

// async function getData() {
// 		if(browser) {
// 			// await evm.setProvider()
// 			// if ($chainId == 137) {
// 			// 	const contract = new $web3.eth.Contract(ABI, CONTRACT)

// 			// 	winnerAddress = await contract.methods.winnerAddress().call()
// 			// 	winningNFTId = await contract.methods.winningNFTId().call()

// 			// 	address1 = winnerAddress.slice(0,12)
// 			// 	address2 = winnerAddress.slice(30,42)
// 			// 	// console.table("Address: " + winnerAddress, "NFTId: " + winningNFTId)
// 			// }
// 			// else {
// 			// 	alert("Please connect to the Polygon network.")
// 			// }
// 		}
//    }

</script>

	<!-- {#await getData()}
	<i style="display: none;">get Data</i>
	{:then connected}
	<i style="display: none;">get Data</i>
	{/await} -->

	<section class="section1">
		<h1>Winner List</h1>
		<p>Here you can check all the previous winners from all our lottery rolls.</p>

		<div class="latest-winner-container">
			<h1 style="font-size: 40px; font-weight: 700; color: white; margin: 10px 0px 10px 0px; text-align: center !important;">Latest Winner</h1>
			<div>
				<img style="margin: 0px 0px 10px 0px; width: 40px; height: 40px;" src="img/Polygon.png" alt="Polygon">
				<p >Winning Ticket: <span style="color: #fba93f; font-size: 18px; font-weight: 700;">{winningNFTId}</span></p>
				<p>Date: <span style="color: #fba93f; font-size: 18px; font-weight: 700;">Nov 18, 2022</span></p>
				<div class="line"></div>
				<h2>Winner Address</h2>
				<a href="https://polygonscan.com/address/{winnerAddress}">
					<div class="latest-winner-address">
						<h1>{winnerAddress.slice(0,12)}...{winnerAddress.slice(30,42)}</h1>
						<!-- <h1>{winnerAddress}</h1> -->
					</div>
				</a>
				<div style="display: grid; justify-items: center; align-items: center; grid-template-columns: auto auto;">
					<a class="txhash-1" href="https://polygonscan.com/tx/{txHash}">
						<h2>Tx Hash</h2>
					</a>
					<div style="display: grid; justify-items: center; align-items: center; margin: 5px 0px 5px 20px;">
						<h2 style="font-weight: 400; margin: 5px 0px 5px 0px; text-align: center; font-size: 16px; color: white;">Prize</h2>
						<p style="font-weight: 700; margin: 0px 0px 10px 0px; text-align: center; color: #fba93f; font-size: 18px;">$100</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="bottom-banner">
		<img src="/img/wave2.svg" alt="Bottom-Banner">
	</div>

	<section class="section2">

		<div class="top-sec2">
			<h2>All Winners</h2>
			<p>
				Above is a collection of all the previous winners from every DeFi Lottery held in the past. 
			</p>
		</div>

		<div class="winners-container">

			{#each Winners as winner}
			<div class="winner">

				<div class="winner-img-container">
					<img src="/tickets/{winner.NFTId}.png" alt="Winning Lottery Ticket">
				</div>

				<div class="description-container">
					<div class="part1">
						<div class="left">
                            <h5 style="margin-top: 15px;">{winner.Contest}</h5>
							<p style="font-size: 18px;
							color: #c4cbf9;
							line-height: 2;
							margin: 0;
							text-align: center;">Prize: $100</p>
                        </div>
						<div class="right">
                            <span>Draw took place on</span>
							<p>{winner.Date}</p>
                        </div>
					</div>
					<div class="part2">
						<p>Winner</p>
						<div class="winner-addr">
							<a style="text-decoration: none; max-height: 30px;" href="https://polygonscan.com/address/{winner.Wallet}">
								<p>{winner.Wallet.slice(0,7)}...{winner.Wallet.slice(35,42)}</p>
							</a>
						</div>
					</div>
					<div style="text-align: center; margin: 0px;">
						<a class="txhash-2" style="text-decoration: none; display: grid; justify-items: center;" href="https://polygonscan.com/tx/{winner.Transaction}">
							<div>
								<img src="img/{winner.Network}.png" alt="Polygon">
								<p>Tx Hash</p>
							</div>
						</a>
					</div>
				</div>
			</div>
			{/each}
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

		.winner-addr > a > p {
			font-size: 15px !important;
		}
}

@media (min-width: 0px) and (max-width: 430px) {

		.section1 > p {
			margin: -100px 0px 50px 0px !important;
		}

		.latest-winner-address > h1 {
			font-size: 15px !important;
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

		.winner-addr > a > p {
			font-size: 15px !important;
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
		0% {border-color: rgb(253, 255, 161);}
		25% {border-color: rgb(255, 87, 87);}
		50% {border-color: rgb(161, 252, 255);}
		75% {border-color: rgb(199, 78, 255);}
		100% {border-color: rgb(255, 255, 255);}
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
		background-image: -moz-linear-gradient(90deg, #7f46e9 0%, #0f0233 100%);
    	background-image: -webkit-linear-gradient(90deg, #7f46e9 0%, #0f0233 100%);
    	background-image: -ms-linear-gradient(90deg, #7f46e9 0%, #0f0233 100%);
		margin: 0px 0px -200px 0px;
    	z-index: 1;

		border-width: 5px;
		border-style: solid;
		animation-name: anim1;
		animation-duration: 2s;
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

	.latest-winner-container > div > a {
		text-decoration: none;
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
		margin: 15px 0px;
		border: 5px solid #fb9f45;
		border-radius: 5px;
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
		max-width: 250px;
		/* transform: rotate(90deg); */
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

	.part2 > div > a > p {
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

	/* .section3 > div {
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
	} */

	.txhash-1 {
		padding: 3px 3px; 
		margin: 0px 0px 8px 0px; 
		text-decoration: none;
	}

	.txhash-1 > h2 {
		padding: 5px; 
		margin: 0px 0px 0px 0px; 
		color: #fba93f;
		font-size: 16px; 
		border: 2px solid white; 
		border-radius: 5px;
	}

	.txhash-1 > h2:hover {
		color: #ffe343;
		transition: all 0.2s;
	}

	.txhash-2 {
		margin: 5px 0px;
		padding: 0px;
	}

	.txhash-2 > div {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: auto auto;
	}

	.txhash-2 > div > img {
		width: 28px; 
		height: 28px;
		margin-right: 5px;
	}

	.txhash-2 > div > p {
		border: 2px solid white;
		border-radius: 5px;
		padding: 2.5px;
		margin: 5px 0px 5px 0px; 
		color: #c4cbf9;
		/* margin-left: 5px; */
	}

	.txhash-2 > div > p:hover {
		color: white;
		transition: all 0.2s;
	}
		
</style>
