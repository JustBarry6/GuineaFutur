import Web3 from 'web3';
import ProposalContract from './ProposalContract.json';

let web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.enable().then(() => {
      // User has allowed account access to DApp...
    });
  } catch (e) {
    console.log(e);
  }
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  // If no injected web3 instance is detected, fall back to Ganache
  const provider = new Web3.providers.HttpProvider('http://localhost:8545');
  web3 = new Web3(provider);
}

const address = '0x7B2048C9c56E9564e65Ca2C7ea30A1c95C264bf4'; // Nouvelle adresse du contrat déployé
const abi = ProposalContract.abi;

const contract = new web3.eth.Contract(abi, address);

export { web3, contract };
