import POLY_DFL_1 from "./POLYGON/ABI1.json";
import POLY_DFL_2 from "./POLYGON/ABI2.json";
import POLY_DFL_3 from "./POLYGON/ABI3.json";
import POLY_DFL_4 from "./POLYGON/ABI4.json";
import POLY_DFL_5 from "./POLYGON/ABI5.json";
import POLY_DFL_6 from "./POLYGON/ABI6.json";

import BNB_DFL_1 from "./BNB/ABI1.json";
import BNB_DFL_2 from "./BNB/ABI2.json";
import BNB_DFL_3 from "./BNB/ABI3.json";
import BNB_DFL_4 from "./BNB/ABI4.json";
import BNB_DFL_5 from "./BNB/ABI5.json";
import BNB_DFL_6 from "./BNB/ABI6.json";

import POLY_USDC_ABI_LINK from "./POLY_USDC_ABI.json";
import BSC_BUSD_ABI_LINK from "./BSC_BUSD_ABI.json";
const POLY_USDC_ADDRESS = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
const BSC_BUSD_ADDRESS = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";

export const ALL_CONTRACT_DATA = [
    {
        contest_name: "Dolphin Competition $1,000",
        contract_address: "0xf5baB274F8465b477a4e40e9A5B617036DDB4288",
        abi_link: POLY_DFL_1,
        chain: "Polygon",
        chain_id: 137,
        contest_currency_addr: POLY_USDC_ADDRESS,
        contest_currency_abi_link: POLY_USDC_ABI_LINK,
        contest_currency_decimals: 6,
        ticket_prize: 1.50,
        total_tickets: 1000,
        pot: 1000,
    },
    {
        contest_name: "Dolphin Competition $10,000",
        contract_address: "0x0AA1f9d6e818420AB69D8560937EdE8c86f16D4c",
        abi_link: POLY_DFL_2,
        chain: "Polygon",
        chain_id: 137,
        contest_currency_addr: POLY_USDC_ADDRESS,
        contest_currency_abi_link: POLY_USDC_ABI_LINK,
        contest_currency_decimals: 6,
        ticket_prize: 1.50,
        total_tickets: 10000,
        pot: 10000,
    },
    {
        contest_name: "Shark Competition $3,500",
        contract_address: "0x572e427E0147aa802C70D3e612056866206Bd900",
        abi_link: POLY_DFL_3,
        chain: "Polygon",
        chain_id: 137,
        contest_currency_addr: POLY_USDC_ADDRESS,
        contest_currency_abi_link: POLY_USDC_ABI_LINK,
        contest_currency_decimals: 6,
        ticket_prize: 5,
        total_tickets: 1000,
        pot: 3500,
    },
    {
        contest_name: "Shark Competition $35,000",
        contract_address: "0x481A06c7E7dBd44855852Ed5E5c78D5412BAf81F",
        abi_link: POLY_DFL_4,
        chain: "Polygon",
        chain_id: 137,
        contest_currency_addr: POLY_USDC_ADDRESS,
        contest_currency_abi_link: POLY_USDC_ABI_LINK,
        contest_currency_decimals: 6,
        ticket_prize: 5,
        total_tickets: 10000,
        pot: 35000,
    },
    {
        contest_name: "Whale Competition $1,000",
        contract_address: "0x0CFFb9EEDE6271e829BBF005A1b8BDcDAF173033",
        abi_link: POLY_DFL_5,
        chain: "Polygon",
        chain_id: 137,
        contest_currency_addr: POLY_USDC_ADDRESS,
        contest_currency_abi_link: POLY_USDC_ABI_LINK,
        contest_currency_decimals: 6,
        ticket_prize: 15,
        total_tickets: 1000,
        pot: 10000,
    },
    {
        contest_name: "Whale Competition $100,000",
        contract_address: "0xeF31aFf2B9e50068Afb566B01f57078879a7C8aC",
        abi_link: POLY_DFL_6,
        chain: "Polygon",
        chain_id: 137,
        contest_currency_addr: POLY_USDC_ADDRESS,
        contest_currency_abi_link: POLY_USDC_ABI_LINK,
        contest_currency_decimals: 6,
        ticket_prize: 15,
        total_tickets: 10000,
        pot: 100000,
    },

    {
        contest_name: "Dolphin Competition $1,000",
        contract_address: "0x41F548C8e7a40ea9698DCF7A9E5726730f15C2Af",
        abi_link: BNB_DFL_1,
        chain: "BSC",
        chain_id: 56,
        BSC_BUSD_ADDRESS: BSC_BUSD_ADDRESS,
        BSC_BUSD_ABI_LINK: BSC_BUSD_ABI_LINK,
        contest_currency_decimals: 188,
        ticket_prize: 1.50,
        total_tickets: 1000,
        pot: 1000,
    },

    {
        contest_name: "Dolphin Competition $10,000",
        contract_address: "0xC4628B419c817A899b1BAc2B5610077b22d416Dc",
        abi_link: BNB_DFL_2,
        chain: "BSC",
        chain_id: 56,
        contest_currency_addr: BSC_BUSD_ADDRESS,
        contest_currency_abi_link: BSC_BUSD_ABI_LINK,
        contest_currency_decimals: 18,
        ticket_prize: 1.50,
        total_tickets: 10000,
        pot: 10000,
    },
    {
        contest_name: "Shark Competition $3,500",
        contract_address: "0x5E6801d3E2D038938B5081eF10233698E9D0b683",
        abi_link: BNB_DFL_3,
        chain: "BSC",
        chain_id: 56,
        contest_currency_addr: BSC_BUSD_ADDRESS,
        contest_currency_abi_link: BSC_BUSD_ABI_LINK,
        contest_currency_decimals: 18,
        ticket_prize: 5,
        total_tickets: 1000,
        pot: 3500,
    },
    {
        contest_name: "Shark Competition $35,000",
        contract_address: "0x701F5fEE08bBfe8536cDa705E4e5207AfeB4C878",
        abi_link: BNB_DFL_4,
        chain: "BSC",
        chain_id: 56,
        contest_currency_addr: BSC_BUSD_ADDRESS,
        contest_currency_abi_link: BSC_BUSD_ABI_LINK,
        contest_currency_decimals: 18,
        ticket_prize: 5,
        total_tickets: 10000,
        pot: 35000,
    },
    {
        contest_name: "Whale Competition $1,000",
        contract_address: "0xaAa79958Ae2cE97A653e2E6245327362Ce46Aff5",
        abi_link: BNB_DFL_5,
        chain: "BSC",
        chain_id: 56,
        contest_currency_addr: BSC_BUSD_ADDRESS,
        contest_currency_abi_link: BSC_BUSD_ABI_LINK,
        contest_currency_decimals: 18,
        ticket_prize: 15,
        total_tickets: 1000,
        pot: 10000,
    },
    {
        contest_name: "Whale Competition $100,000",
        contract_address: "0xB61364d97640F1C74324a061CaD88E1391fadA69",
        abi_link: BNB_DFL_6,
        chain: "BSC",
        chain_id: 56,
        contest_currency_addr: BSC_BUSD_ADDRESS,
        contest_currency_abi_link: BSC_BUSD_ABI_LINK,
        contest_currency_decimals: 18,
        ticket_prize: 15,
        total_tickets: 10000,
        pot: 100000,
    },
]