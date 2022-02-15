const Tx = require('ethereumjs-tx');
const Web3 = require('web3');
const web3_obj = new Web3('https://ropsten.infura.io/v3/12e4d3834c564fada387d6c1dde70334');

web3_obj.eth.net.isListening()
.then(() => console.log('web3 is connected'))
.catch(e => console.log('Wow, something went wrong'));

const contract_addr = '0x52c146b3a40734A15e411CED0BC62bC00Af10F31';
const abi = [{"inputs":[{"internalType":"string","name":"_greteeng","type":"string"}],"name":"setGreteeng","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"showGreeting","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];
const contract = new web3_obj.eth.Contract(abi, contract_addr);

contract.methods.showGreeting().call().then(console.log);

const acc_1 = '0x860e2C981e3b2AB7b9F729Bc88cC7b8DbAe94cBE';
//const privateKey_1 = Buffer.from(process.env.PRIVATE_KEY_1)
//закрытый ключ для аккаунта 1 добавлен в переменную среды
const pr_key1 = '0x96f146f55a04e81229101d74a3f7640f50527c29373eb3786c1e9a009f2b98ec';
const acc_2 = '0xb73489Eec252067F927f2D8868c46d5c64867baa';
const privateKey_2 = '0xe5332979fbfe3a3e8dba798e06dbfdb2986066f05f49517fcecc01e330067b41';
web3_obj.eth.defaultAccount = acc_1;
//записываем в переменную наши данные для функции смарт_контракта
const my_data = contract.methods.setGreteeng('hello motherfucker`s').encodeABI();
//описываем транзакцию
    const txObject = {
        to:contract_addr,
        value: web3_obj.utils.toWei('0.1','ether'),
        gasLimit: 22000,
        gasPrice: web3_obj.utils.toWei('10','gwei'),
        data: my_data
    }
    //подписываем транзакцию
    const signTx = web3_obj.eth.accounts.signTransaction(txObject, pr_key1);
    const res = web3_obj.eth.sendSignedTransaction(signTx.rawTransaction, function (err, hash) {
    console.log(hash);
        
    
});
НЕФИГА НЕ ПРОИСХОДИТ. ТЕРМИНАЛ ВЫДАЕТ "undefined". ПАМАГИ(((
САМ СМАРТ(СТЫДНО ДАЖЕ ЕГО ТАК НАЗЫВАТЬ) КОНТРАКТ В КОРНЕВОЙ ВЕТКЕ, НАЗЫВАЕТСЯ test

