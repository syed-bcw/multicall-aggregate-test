const { ethers } = require("ethers");
const ABI = require('./abi');
const ERC20ABI = require('./erc20abi');

const contractAddress = "0x00000000000000000000000000000000001a89ac";
const privateKey = "6d3ecf59765d194ca6da047d605d6a1062b0a00e190b83cecb2158d5a510b8dd";

const provider = new ethers.providers.JsonRpcProvider("https://testnet.hashio.io/api");
const signer = new ethers.Wallet(privateKey, provider)
const contract = new ethers.Contract(contractAddress, ABI, signer);

const main = async () => {
    const erc20_addr = '0x00000000000000000000000000000000002fa0e6'
    let iface = new ethers.utils.Interface(ERC20ABI);
    const callData = iface.encodeFunctionData("totalSupply", []);
    console.log('callData', callData);
    const tx = await contract.aggregate([
        [erc20_addr, callData]
    ]);
    console.log('tx', tx);
    // const receipt = await tx.wait();
    // console.log('receipt', receipt);
}
main();
