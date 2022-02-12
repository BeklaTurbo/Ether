const wallet = '0x06a71DAF0361D41d3d0ce746210D3Deaf44FDb0b';
//вывод баланса кошелька в Eth
web3_obj.eth.getBalance(wallet, (err, value) =>
{console.log("Balance of holders wallet is " + web3_obj.utils.fromWei(value,'ether') + " eth")});
//ПОДКЛЮЧЕНИЕ К СМАРТ КОНТРАКТУ
let abi = [{"inputs":[{"internalType":"address payable[2]","name":"addrs","type":"address[2]"},{"internalType":"uint256[2]","name":"values","type":"uint256[2]"}],"name":"multyTx","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let contract = new web3_obj.eth.Contract(abi, adr_contr);
// Взаимодействие с функциями контракта
const txObject = {
    to: adr_contr,
    value: web3.utils.toWei('10','qwei'),
    gasLimit: 21000,
    gasPrice: web3.utils.toWei('10','gwei'),
    data: contract.methods.multyTx(addrs, values)
}
