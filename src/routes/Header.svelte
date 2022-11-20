<script>
	
	import { page } from '$app/stores';
	import './styles.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { defaultEvmStores as evm, web3, selectedAccount, connected, chainId, chainData, contracts } from 'svelte-web3';
	// import usdcABI from "./contracts/USDC_ABI.json"
	// let usdcAddress = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"

	let y = 0
	let display = "flex"

	const stickToTop = () => {
		if (y > 50) {
			display = "none"
		}
		else {
			display = "flex"
		}
	}

	let menuBar = "menu-btn"
	let menuDiv = "menu-section"
	let col = "col-list-hidden"
	let height1 = 0
	let height2 = 0
	let disp1 = "none"

	const toggleMenu = () => {
		if (menuBar === "menu-btn") {
			menuBar = "menu-btn open"
			menuDiv = "" + "ms-open"
			col = "col-list"
			height1 = 200
			height2 = 18
			disp1 = "block"
		}
		else {
			menuBar = "menu-btn"
			menuDiv = "" + "menu-section"
			col = "col-list-hidden"
			height1 = 0
			height2 = 0
			disp1 = "none"
		}
	}














//   // @ts-ignore
//   window.userAddress = null
//   let wallet
//   // @ts-ignore
//   $: if (wallet != window.userAddress) {
// 		// @ts-ignore
// 		wallet = window.userAddress
//   }

//   $: wallet




//   let gas
//   // $: gas

//   $:  change = function changeGas() {
//         gas = window.localStorage.setItem("gas", gas + "000000000")
//         gas = window.localStorage.getItem("gas").substring(0, window.localStorage.getItem("gas").length - 9)
//       }

//   $:  if (window.localStorage.getItem("gas") === null || window.localStorage.getItem("gas") === undefined) {
//         gas = window.localStorage.setItem("gas", "50000000000")
//         gas = window.localStorage.getItem("gas").substring(0, window.localStorage.getItem("gas").length - 9)
//       }
  
//   $:  if (window.localStorage.getItem("gas") != null || window.localStorage.getItem("gas") != undefined) {
//         gas = window.localStorage.getItem("gas").substring(0, window.localStorage.getItem("gas").length - 9)
//       }

//   let gasModal = "close"




//   onMount(async () => {
// 	// window.onload = async () => {
// 		// @ts-ignore
// 		if (window.ethereum) {
// 		// @ts-ignore
// 		window.web3 = new Web3(window.ethereum)
// 		} else {
// 		alert("No ETH brower extension detected.")
// 		}
// 		// @ts-ignore
// 		window.userAddress = window.localStorage.getItem("userAddress")
// 		// @ts-ignore
// 		wallet = window.userAddress
// 	// }
//   })

//   function truncateAddress(address) {
//     if (!address) {
//       return ""
//     }
//     return `${address.substr(0, 5)}...${address.substr(
//       address.length - 5,
//       address.length
//     )}`
//   }

//   function logout() {
//     // @ts-ignore
//     window.userAddress = null
//     // @ts-ignore
//     wallet = window.userAddress
//     window.localStorage.removeItem("userAddress")
//   }

//   async function loginWithEth() {
//     // @ts-ignore
//     if (window.web3) {
//         try {
//           // @ts-ignore
//           const selectedAccount = await window.ethereum
//             .request({
//               method: "eth_requestAccounts",
//             })
//             .then((accounts) => accounts[0])
//             .catch(() => {
//               throw Error("No account selected!")
//             })
//           // @ts-ignore
//           window.userAddress = selectedAccount
//           // @ts-ignore
//           wallet = window.userAddress
//           window.localStorage.setItem("userAddress", selectedAccount)
//         } catch (error) {
//           console.error(error)
//         }
//       } else {
//         alert("No ETH brower extension detected.")
//       }
//   }

  function logout() {
	evm.disconnect()
  }

  export async function loginWithEth() {
	if(browser) {
		// defaultEvmStores.setProvider();

		// Ethereum Web3 provider
		// defaultEvmStores.setProvider('https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7')

		// Polygon Web3 provider
		// evm.setProvider('https://rpc-mainnet.maticvigil.com')
		// evm.setProvider('https://polygon-rpc.com')
		await evm.setProvider()
		// if ($chainId != 137) {
		// 	alert("Please connect to the Polygon network.")
		// }
		// console.log(selectedAccount)

		// evm.setProvider()
	}
  }

//   evm.attachContract('DFL', CONTRACT, ABI, { from: "0x18F6b05512BD9ec4E1B2bBbecca45459e6FEA775" })
//   let USDC = evm.attachContract('USDC', usdcAddress, usdcABI, { from: "0x18F6b05512BD9ec4E1B2bBbecca45459e6FEA775" })

//   async function testFunction() {
// 	const contract = new $web3.eth.Contract(usdcABI, usdcAddress)
//     // const web3 = new Web3(window.ethereum)
//     // const contract = new web3.eth.Contract(usdcABI, usdcAddress)
//     // const info = await contract.methods.balanceOf("0x7141129679319e1bbb5dcfc63b845a94d0e816b6").call({ from: wallet })
// 	// const info = await contract.methods.approve("0x7141129679319e1bbb5dcfc63b845a94d0e816b6", 15000000).send({ from: wallet })
// 	// const info = await contract.methods.allowance("0x18F6b05512BD9ec4E1B2bBbecca45459e6FEA775", usdcAddress).call({ from: "0x18F6b05512BD9ec4E1B2bBbecca45459e6FEA775" })
// 	const info = await contract.methods.allowance("0x18F6b05512BD9ec4E1B2bBbecca45459e6FEA775", usdcAddress).call()
//     console.log(info)
//   }

</script>

<svelte:window on:scroll={stickToTop} bind:scrollY={y} />

	<header>

		<div class="top-container" style="display: {display}">
			<!-- <div class="left">
					<select class="language-container">
						<option>En</option>
						<option>Rus</option>
						<option>Bn</option>
						<option>Hp</option>
						<option>Frn</option>
						</select>
			</div> -->
			<div class="right">

				<!-- <div class="flex flex-col justify-center items-center">
					<h1 class="font-bold">{$chainData?.name}</h1>
					<p>Native Currency: {$chainData?.nativeCurrency?.name} ({$chainData?.nativeCurrency?.symbol})</p>
				</div>
			
				<form on:submit|preventDefault={query} class="m-2 p-2">
					<input bind:value={address} type="text"/>
					<button type="submit">Get Balance</button>
					<div bind:textContent={result} contenteditable="true"></div>
					<p>Connected to chain with id {$chainId}</p>
				</form> -->
			
				<!-- {#if wallet != null || wallet != undefined} -->
				{#if $selectedAccount}
				<div class="login" on:click={logout}>
					<button>{evm.$selectedAccount.slice(0, 5)}...{evm.$selectedAccount.slice(38, 42)}</button>
				</div>
				{:else}
				<div class="login" on:click={loginWithEth}>
					<button>Connect Wallet</button>
				</div>
				{/if}

				<br>

				<!-- <div style="display: grid">
					<div class="login" on:click={testFunction}>
						<button>Test Function 1</button>
					</div>
					<div class="login" on:click={getData}>
						<button>Test Function 2</button>
					</div>
				</div> -->

			</div>
		</div>

		<div class="under-container">
			<div class="left">
				<img src="/img/logo.png" alt="DeFi Lottery Logo">
			</div>
			<div class="right">
				<a href="/">Home</a>
				<div class="dropdown">
					<a href="/lottery1">Lotteries</a>
					<!-- <div class="dropdown-content">
						<a href="/">Link 1</a>
						<a href="/">Link 2</a>
						<a href="/">Link 3</a>
					</div> -->
				</div>
				<a href="/winners">Winners</a>
				<a href="/about">About</a>
				<a href="/my-page"><button>My Page</button></a>
			</div>

			<div class="menu2-container">
				<div on:click={toggleMenu} class={menuBar}>
					<div class="menu-btn__burger"></div>
				</div>
			</div>
		</div>

		<div class="menu2-list" style="height: {height1}px">
			<a on:click={toggleMenu} style="font-size: {height2}px" href="/">Home</a>
			<a on:click={toggleMenu} style="font-size: {height2}px" href="/lottery1">Lotteries</a>
			<a on:click={toggleMenu} style="font-size: {height2}px" href="/winners">Winners</a>
			<a on:click={toggleMenu} style="font-size: {height2}px" href="/about">About</a>
			<a on:click={toggleMenu} style="font-size: {height2}px;
				display: {disp1};
				color: white;
				border-radius: 20px;
				border: none;
				background-image: -moz-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
				background-image: -webkit-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
				background-image: -ms-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
				box-shadow: 0px 3px 7px 0px rgb(0 0 0 / 35%);
				padding: 10px 15px" 
			href="/my-page">My Page</a>
		</div>
		
	</header>

<style>


	@media (min-width: 950px) and (max-width: 1200px) {
		.left {
			margin: 0px 5px !important;
		}

		.right {
			margin: 0px 10px 0px 200px !important;
		}

		.top-container > .right {
			margin: 0px !important;
		}
	}

	@media (min-width: 830px) and (max-width: 949px) {
		.left {
			margin: 0px !important;
		}

		.right {
			margin: 0px 0px 0px 100px !important;
		}
		
		.top-container > .right {
			margin: 0px !important;
		}
	}

	@media (max-width: 829px) {
		.menu2-list {
			display: grid !important;
			justify-items: center;
			align-items: center;
			/* background-image: linear-gradient(7deg, #ec1379 0%, #6c0092 100%); */
			background: #55056a;
			transition: all 0.2s linear;
		}

		.menu2-list > a {
			color: white;
			font-weight: 600;
			margin: 5px 0px;
			transition: all 0.2s linear;
		}

		.menu2-list > a:nth-child(5):hover {
			color: white !important;
			background: #6c0092 !important;
		}
	}

	@media (min-width: 400px) and (max-width: 829px) {

		.under-container {
			justify-content: space-between !important;
		}

		.left {
			margin: 0px 5px 0px 5px !important;
		}

		.under-container > .right {
			display: none !important;
		}
		
		.top-container > .right {
			margin: 0px !important;
		}

		.menu2-container {
			display: grid !important;
		}

		.under-container > .left > img {
			width: 70px !important;
			height: 65px !important;
		}
	}

	@media (min-width: 30px) and (max-width: 399px) {
		.under-container {
			justify-content: space-between !important;
		}

		.left {
			margin: 0px 5px 0px 5px !important;
		}

		.under-container > .right {
			display: none !important;
		}
		
		.top-container > .right {
			margin: 0px !important;
		}

		.menu2-container {
			display: grid !important;
		}

		.under-container > .left > img {
			width: 70px !important;
			height: 65px !important;
		}
	}



/****************************************** Small Menu ***************************************************/

	.menu2-container {
		display: none;
	}

	.menu2-list {
		display: none;
	}

	.menu-btn {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80px;
		height: 80px;
		cursor: pointer;
		transition: all .5s ease-in-out;
		/* border: 3px solid #fff; */
	}

	.menu-btn:hover .menu-btn__burger {
		background-color: #ec1379
	}

	.menu-btn:hover .menu-btn__burger::before {
		background-color: #ec1379
	}

	.menu-btn:hover .menu-btn__burger::after {
		background-color: #ec1379
	}

	.menu-btn__burger {
		width: 50px;
		height: 6px;
		background: rgb(255, 255, 255);
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(255,101,47,.2);
		transition: all .5s ease-in-out;
	}
	.menu-btn__burger::before,
	.menu-btn__burger::after {
		content: '';
		position: absolute;
		width: 50px;
		height: 6px;
		background: rgb(255, 255, 255);
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(255,101,47,.2);
		transition: all .5s ease-in-out;
	}
	.menu-btn__burger::before {
		transform: translateY(-16px);
	}
	.menu-btn__burger::after {
		transform: translateY(16px);
	}
	
	.menu-btn.open .menu-btn__burger {
		transform: translateX(-50px);
		background: transparent;
		box-shadow: none;
	}
	.menu-btn.open .menu-btn__burger::before {
		transform: rotate(45deg) translate(35px, -35px);
	}
	.menu-btn.open .menu-btn__burger::after {
		transform: rotate(-45deg) translate(35px, 35px);
	}

 /********************************************** Small Menu End **********************************************************/




	header {
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 9;
		background-image: linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
	}

	.top-container {
		padding: 10px 0;
		background-color: #3c0455;
    	border-bottom: 1px solid rgba(90, 75, 204, 0.502);
		/* justify-content: space-between; */
		justify-content: center;
		height: 50px;
	}

	.left {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 25px;
	}

	.right {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 25px;
	}

	.under-container {
		-webkit-transition: all 0.3s;
		-o-transition: all 0.3s;
		transition: all 0.3s;
	}

	/* .language {
		margin-left: 30px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		align-items: center;
	} */

	/* select {
		padding: 5px 5px 5px 5px;
		width: 55px;
		border: 1pxsolidrgba(255, 255, 255, 0.1);
		cursor: pointer;
		color: #c4cbf9;
		background-color: transparent;
		height: 35px;
		border-radius: 4px;
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		-ms-border-radius: 4px;
		-o-border-radius: 4px;
		transition: all 0.2s;
	}

	option {
		transition: all 0.2s;
	}

	select option {
		background-color: #02014a;
	} */

	.dropdown {
		max-width: 200px;
	}

	.dropdown > a {
		text-decoration: none;
		color: #ffffff;
		font-size: 20px;
		margin: 0px 20px;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-image: -webkit-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
	}

	.dropdown-content a {
		float: none;
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
	}

	.dropdown-content a:hover {
		background-color: hsla(284, 100%, 29%, 0.5);
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.login > button {
		margin-left: 38px;
		width: 140px;
		height: 40px;
		background-color: #5a4bcc;
		/* background-image: -moz-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
		background-image: -webkit-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
		background-image: -ms-linear-gradient(7deg, #ec1379 0%, #6c0092 100%); */
		border-radius: 5px;
		-webkit-border-radius: 10px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
		text-align: center;
		font-size: 15px;
		color: #ffffff;
		font-weight: 700;
		transition: all 0.2s ease-in;
		border: 1px solid rgb(136, 0, 163)	
	}
	
	.login > button:hover {
		background-color: #7562ff;
		/* background-image: linear-gradient(40deg, #ec1379 20%, #6c0092 100%); */
		/* background-image: -webkit-linear-gradient(40deg, #ec1379 30%, #6c0092 100%);
		background-image: -ms-linear-gradient(40deg, #ec1379 30%, #6c0092 100%); */
		transition: all 0.2s ease-in;
		/* color: #ffca9f; */
		cursor: pointer;
	}

	.under-container {
		/* background-color: #4c0859;
		background-color: #550569; */
		background-color: #55056a;
		background-image: linear-gradient(0deg, #56056b 0%, #3c0455 100%);
		height: 70px;
		padding: 20px 15px;
		display: flex;
		justify-content: center;
	}

	.under-container > .left {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 50px;
	}

	.under-container > .left > img {
		width: 100px;
		height: 95px;
	}

	.under-container > .right {
		display: flex;
		justify-content: right;
		align-items: center;
		margin-left: 400px;
	}

	.under-container > .right > a {
		text-decoration: none;
		color: white;
		font-size: 20px;
		margin: 0px 20px;
		display: inline-block;
		color: #ffffff;
	}

	.under-container > .right > a > button {
		margin: 0px 0px 0px 20px;
		padding: 5px 0px 7px 0px;
		width: 130px;
		height: 40px;
		color: white;
		font-size: 18px;
		font-weight: 600;
		border-radius: 20px;
		border: none;
		background-image: -moz-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
		background-image: -webkit-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
		background-image: -ms-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
		box-shadow: 0px 3px 7px 0px rgb(0 0 0 / 35%);
	}

	.under-container > .right > a > button:hover {
		background-image: -moz-linear-gradient(7deg, #ec1379 0%, #ec1379 100%);
		background-image: -webkit-linear-gradient(7deg, #ec1379 0%, #ec1379 100%);
		background-image: -ms-linear-gradient(7deg, #ec1379 0%, #ec1379 100%);
		transition: all 0.5s linear;
		cursor: pointer;
	}

	.under-container > .right > a > button:active {
		box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 35%);
		transform: scale(0.95);
		transition: all 0.1s linear;
	}

	a {
    	color: #007bff;
		text-decoration: none;
		font-weight: 500;
		background-color: transparent;
	}

	a:hover {
		color: #ec1379 !important;
		transition: all 0.2s linear;
	}


	

</style>
