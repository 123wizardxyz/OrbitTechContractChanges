import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'YourNftToken',
  tokenName: 'Particle Accelerator',
  tokenSymbol: 'ORBITTECH',
  hiddenMetadataUri: 'ipfs://QmbnGdBS354HhCBzZV62rg8qgCiqxFofSqd8PAJrmX39BP/1.json',
  maxSupply: 3,333,
  whitelistSale: {
    price: 0.20,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.20,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.20,
    maxMintAmountPerTx: 1,
  },
  contractAddress: 'null',
  openSeaSlug: 'my-nft-token',
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
