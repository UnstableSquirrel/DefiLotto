import type { PageServerLoad, PageData, Actions } from '../../svelte-kit/types/src/routes/$types';
import { page } from '$app/stores';
import { error } from '@sveltejs/kit';
import { dev } from '$app/environment';
import supabase from '../db/db.js';
import request from '$app/forms';
import { onMount } from 'svelte';
import { enhance } from '$app/forms';
import web3 from 'web3';
import DeFiGirls from '../contracts/ABI.json';
import type { ActionData } from './$types.js';
import { invalid } from '@sveltejs/kit';
import * as db from '$lib/server/database';

// const Web3 = new web3("https://ethereum.blockpi.network/v1/rpc/public")
// let selectedAccount
// let blockNumber :number
// const ABI = DeFiGirls
// const ADDRESS :string = "0x3B14d194c8CF46402beB9820dc218A15e7B0A38f"
// const contract = new Web3.eth.Contract(DeFiGirls, ADDRESS)

// const Web3 = new web3(new web3.providers.HttpProvider("http://localhost:5173"))

// import DeFiGirlsABI from "../contracts/ABI.json"
// const ADDRESS :string = "0x3B14d194c8CF46402beB9820dc218A15e7B0A38f"

// import Web3 from "web3"
// const web3 = new Web3("https://ethereum.blockpi.network/v1/rpc/public")

// async function loginWithWallet() {
//   // let wallet = await web3.eth.
//   const selectedAccount = await web3.eth.requestAccounts()
//   // wallet = "0xHk939jh8849JIHu..."
//   return selectedAccount
// }

export const load = (async ({ cookies }) => {
	// throw error(404, 'Not found')
	// onMount(
	//     async () => {
	//         // add a test to return in SSR context
	//         // await evm.setProvider("https://ethereum.blockpi.network/v1/rpc/public")
	//         // console.log( allChainsData )
	//         // await Web3.eth.accounts.wallet
	//         selectedAccount = await Web3.eth.getAccounts()
	//         blockNumber = await Web3.eth.getBlockNumber()
	//         // console.log(blockNumber)
	//     }
	// )
	// const data = await contract.methods.tokensOfOwner("0xaa79C2a79efD664834850D87Cf2e73AA33403f1A").call({})

	return {
		// test1: await contract.methods.tokensOfOwner("0xaa79C2a79efD664834850D87Cf2e73AA33403f1A").call({}),
		// test2: await Web3.eth.getAccounts(),
		test3: 'Test'
		// action: actions.login.toString()
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	// login: async ({ cookies, request }) => {
	//   let message = ""
	//   if(await contract.methods.tokensOfOwner("0xaa79C2a79efD664834850D87Cf2e73AA33403f1A").call({}) > 0){
	//     message = "true"
	//   }
	//   if(await contract.methods.tokensOfOwner("0xaa79C2a79efD664834850D87Cf2e73AA33403f1A").call({}) <= 0){
	//     message = "false"
	//   }
	//   return {
	//     // FormData: await contract.methods.tokensOfOwner("0xaa79C2a79efD664834850D87Cf2e73AA33403f1A").call({}),
	//     // FormData: await contract.methods.tokensOfOwner("0xaa79C2a79efD664834850D87Cf2e73AA33403f1A").call({}),
	//     Result: message
	//   }
	// },
};
