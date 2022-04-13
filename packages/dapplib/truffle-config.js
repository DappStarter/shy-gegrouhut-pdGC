require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure solution filter rice saddle public install pave army gasp'; 
let testAccounts = [
"0xd18e9467230395387e89d49f71727c36eccb00a6078431eac305c6df2ec32b34",
"0xc2c7b27dd88e8df12866c6a7dec1a1a1105ec324673fd07748817c769684e588",
"0x4d422eeead31c1a1c1e444487497d31d71812537e9c7782f47723a9091f4f312",
"0x498896a8374c4073205af29df1849c1afb01b3325c1cd4a51a680eba908691cf",
"0xa1843f149f4474ed89e4c84a06056b451553f4cf5a6c019d6d2082abd3004686",
"0xe39d190000dabdc91e9540d22f90f50f1137ceea0000e91fed501adc8208144f",
"0xc28b7a4b96629505d10a361c731afd6e711b6ba8f8575c14551b57618150b66c",
"0x5bbc460b20ccb8bdc5cdbd3b91f8ada131c87b3a370597f0c0c12707eaadcfc9",
"0xed0a9433a369c5864a451877dcd258ace5b8f6da83ae0d02ff9adf9bc1171850",
"0x2e52621fb49b53e6193713cde8ff576cbeb4d1f9f2d2ef1358796a789c6bcdec"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


