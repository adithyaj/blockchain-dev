import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


var pfABI = [{"inputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[],"name":"newFund","type":"event"},{"anonymous":false,"inputs":[],"name":"fundingDone","type":"event"},{"anonymous":false,"inputs":[],"name":"fundEnd","type":"event"},{"constant":false,"inputs":[],"name":"sendFund","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_n","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getTotalAmt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"incTest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

var pfAddr = '0x759cfe04db06ede21081acff18f5b7cc55b1fe95';


const pfContract = web3.eth.contract(pfABI).at(pfAddr);


export {pfContract};
