require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind concert grace nature off silk'; 
let testAccounts = [
"0x4dfe22ca38cdc1f78be3e52ef3bfe1f344744a3758027815de7e9809e654f00b",
"0x00cdb30afff47f619a512592032837f013d37cedda44bb2481dff491164b4a06",
"0x3ffd1232ecd6c65147442bf698a0650bfd7c5525b9e00c9734e8fe5bcbbbc2cf",
"0xcbf21698a771bbe6fb0d9b05ea2f4a1aff7bfa26ce39bc7f75691af34f0c080d",
"0xfe16a294054e1b52ff3edf0562a56444d09d1e6c0a24f05d9c97bfafa8d6c4a8",
"0x5be37c8e1b3913af0b0ff4ae18e81428be4c6af3612529734f5081f4e118ec8b",
"0xc8d4599abf549bb125fcd969636a0a3ad50c36bfc9f708a599aa5abdda6e1f0a",
"0xf0d41b5876cc896dc905ba8cb8673855f354556743c6e11296131123e8a8a96a",
"0x9d8e8e47de1d62649f74bf2b9d2bebb9edd8ec4f9475c38be6b0b690066a0688",
"0xd02251c5e0092390999eed64edd835cfc7db18cfc018b21450a22f07078a5ed2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

