const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('45ad42e18808f7eec1390299f84ca2700f3c1f85f7356aa0e6878e46c87cac07');
const myWalletAddress = myKey.getPublic('hex');

let nurgjanCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
nurgjanCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
nurgjanCoin.minePendingTransactions('myWalletAddress');

console.log('\nBalance of nurxhan is', nurgjanCoin.getBalanceOfAddress('myWalletAddress'));

nurgjanCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', nurgjanCoin.isChainValid());


