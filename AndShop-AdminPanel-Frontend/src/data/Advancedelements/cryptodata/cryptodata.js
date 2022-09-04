import bitcoin from "../../../assets/images/crypto-currencies/bitcoin.svg";
import ethereum from "../../../assets/images/crypto-currencies/ethereum.svg";
import ripple from "../../../assets/images/crypto-currencies/ripple.svg";
import bitcoincash from "../../../assets/images/crypto-currencies/bitcoincash.svg";
import cardano from "../../../assets/images/crypto-currencies/cardano.svg";
import litecoin from "../../../assets/images/crypto-currencies/litecoin.svg";
import eos from "../../../assets/images/crypto-currencies/eos.svg";
import bitcoinglod from "../../../assets/images/crypto-currencies/bitcoinglod.svg";
import tron from "../../../assets/images/crypto-currencies/tron.svg";
import monero from "../../../assets/images/crypto-currencies/monero.svg";
import nem from "../../../assets/images/crypto-currencies/nem.svg";
import stellar from "../../../assets/images/crypto-currencies/stellar.svg";
import neo from "../../../assets/images/crypto-currencies/neo.svg";
import iota from "../../../assets/images/crypto-currencies/iota.svg";
import dash from "../../../assets/images/crypto-currencies/dash.svg";
import {Table} from "react-bootstrap"


export function Cryptodata(){
const Datacrypto=[
    {NAME:"Bitcoin",ICON:bitcoin,PRICE:"$10513.00",HOUR:"-7%",Color:"danger",MARKETCAP:"$179,470,305,923",CIRCULATINGSUPPLY:"16,819,612 BTC",VOLUME24H:"$9,578,830,000",CMGR:"8.11% / 57",INFLATION:"0.36%",},
    {NAME:"Ethereum",ICON:ethereum,PRICE:"$966.61",HOUR:"-6%",Color:"danger",MARKETCAP:"$179,470,305,923",CIRCULATINGSUPPLY:"97,145,024 ETH",VOLUME24H:"$3,466,060,000",CMGR:"22.62% / 29",INFLATION:"0.64%",},
    {NAME:"Ripple",ICON:ripple,PRICE:"$1.2029",HOUR:"-11%",Color:"danger",MARKETCAP:"$47,649,145,657",CIRCULATINGSUPPLY:"38,739,144,704 XRP",VOLUME24H:"$2,081,450,000",CMGR:"10.85% / 53",INFLATION:"0.06%",},
    {NAME:"Bitcoin Cash",ICON:bitcoincash,PRICE:"$1547.00",HOUR:"-11%",Color:"danger",MARKETCAP:"$26,720,210,956",CIRCULATINGSUPPLY:"16,925,988 BCH",VOLUME24H:"$598,337,000",CMGR:"21.30% / 6",INFLATION:"0.32%",},
    {NAME:"Cardano",ICON:cardano,PRICE:"	$0.550768",HOUR:"-9%",Color:"danger",MARKETCAP:"	$14,279,800,786",CIRCULATINGSUPPLY:"25,927,069,696 ADA",VOLUME24H:"$466,381,000",CMGR:"205.35% / 3",INFLATION:"0.00%",},
    {NAME:"Litecoin",ICON:litecoin,PRICE:"$173.86",HOUR:"-7%",Color:"danger",MARKETCAP:"$9,670,920,267",CIRCULATINGSUPPLY:"54,873,584 LTC",VOLUME24H:"$430,524,000",CMGR:"	6.87% / 57",INFLATION:"0.80%",},
    {NAME:"EOS",ICON:eos,PRICE:"$13.394",HOUR:"5%",Color:"success",MARKETCAP:"$8,420,143,033",CIRCULATINGSUPPLY:"621,412,800 EOS",VOLUME24H:"$2,864,780,000",CMGR:"53.25% / 6",INFLATION:"11.56%",},
    {NAME:"NEM",ICON:nem,PRICE:"$0.935049",HOUR:"-11%",Color:"danger",MARKETCAP:"	$8,415,440,999",CIRCULATINGSUPPLY:"8,999,999,488 XEM",VOLUME24H:"$66,061,000",CMGR:"26.99% / 33",INFLATION:"0.24%",},
    {NAME:"Stellar",ICON:stellar,PRICE:"$0.467813",HOUR:"2%",Color:"success",MARKETCAP:"	$8,358,735,080",CIRCULATINGSUPPLY:"17,867,683,840 XLM",VOLUME24H:"$370,297,000",CMGR:"13.12% / 41",INFLATION:"0.19%",},
    {NAME:"NEO",ICON:neo,PRICE:"$118.61",HOUR:"-9%",Color:"danger",MARKETCAP:"	$7,693,400,000",CIRCULATINGSUPPLY:"65,000,000 NEO",VOLUME24H:"$318,308,000",CMGR:"62.68% / 15",INFLATION:"0.00%",},
    {NAME:"IOTA",ICON:iota,PRICE:"$2.34",HOUR:"-14%",Color:"danger",MARKETCAP:"	$6,504,100,862",CIRCULATINGSUPPLY:"2,779,530,240 MIOTA",VOLUME24H:"$103,132,000",CMGR:"23.27% / 7",INFLATION:"-0.02%",},
    {NAME:"Dash",ICON:dash,PRICE:"$747.222",HOUR:"-8%",Color:"danger",MARKETCAP:"	$5,881,413,815",CIRCULATINGSUPPLY:"7,833,738 DASH",VOLUME24H:"$96,147,900",CMGR:"19.19% / 47",INFLATION:"0.81%",},
    {NAME:"Monero",ICON:monero,PRICE:"$305.16",HOUR:"-11%",Color:"danger",MARKETCAP:"$4,778,157,533",CIRCULATINGSUPPLY:"15,633,286 XMR",VOLUME24H:"$100,788,000",CMGR:"11.88% / 44",INFLATION:"0.78%",},
    {NAME:"TRON",ICON:tron,PRICE:"$0.067691",HOUR:"-5%",Color:"danger",MARKETCAP:"$4,450,560,896",CIRCULATINGSUPPLY:"65,748,193,280 TRX",VOLUME24H:"$581,651,000",CMGR:"142.69% / 4",INFLATION:"0.00%",},
    {NAME:"Bitcoin Gold",ICON:bitcoinglod,PRICE:"$181.39",HOUR:"-7%",Color:"danger",MARKETCAP:"$3,084,108,676",CIRCULATINGSUPPLY:"16,779,700 BTG",VOLUME24H:"$199,652,000",CMGR:"-25.44% / 3",INFLATION:"0.34%",},
  
  ]
return(
    <Table className="table table-bordered  card-table">
                  <tbody>
                  <tr className="border-bottom">
                    <th >Name</th>
                    <th >Icon</th>
                    <th >Price</th>
                    <th className="text-center">% 24h</th>
                    <th>Market Cap</th>
                    <th>Circulating Supply</th>
                    <th>Volume 24H</th>
                    <th>CMGR/Month</th>
                    <th>Inflation</th>
                    </tr>
                    {Datacrypto.map((list, index) => (
                      <tr
                        key={index}
                        className="border-bottom"
                      >
                        <td>{list.NAME}</td>
                        <td className="text-center"><img src={list.ICON} className="w-4 h-4" alt=""/></td>
                        <td>{list.PRICE}</td>
                        <td className={`text-center text-${list.Color}`}>{list.HOUR} </td>
                        <td>{list.MARKETCAP}</td>
                        <td>{list.CIRCULATINGSUPPLY}</td>
                        <td className="ight">{list.VOLUME24H}</td>
                        <td>{list.CMGR}</td>
                        <td className="text-center">{list.INFLATION}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
)
}