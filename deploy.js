const HDWalletProvider = require('truffle-hdwallet=provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'process write wage donate clutch barely oxygen sock olympic word buffalo warrior',
    'https://rinkeby.infura.io/v3/2406b3c192a0410cad2db3f5c92b6140'
);

const web3 = new Web3(provider);