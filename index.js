const { ethers } = require("ethers");
const ABI = require('./abi');
const ERC20ABI = require('./erc20abi');

const contractAddress = "0x00000000000000000000000000000000001a89ac";
const privateKey = "6d3ecf59765d194ca6da047d605d6a1062b0a00e190b83cecb2158d5a510b8dd";

const provider = new ethers.providers.JsonRpcProvider("https://testnet.hashio.io/api");
const signer = new ethers.Wallet(privateKey, provider)
const contract = new ethers.Contract(contractAddress, ABI, signer);

const main = async () => {
    // const erc20_addr = '0x00000000000000000000000000000000002fa0e6'
    // let iface = new ethers.utils.Interface(ERC20ABI);
    // const callData = iface.encodeFunctionData("totalSupply", []);
    const data = [
        {
            "address": "0x00000000000000000000000000000000001A94C0",
            "callData": "0x18160ddd"
        },
        {
            "address": "0x00000000000000000000000000000000001A94Ce",
            "callData": "0x18160ddd"
        },
        {
            "address": "0x00000000000000000000000000000000001a88cC",
            "callData": "0x18160ddd"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0x2716ae66"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0x6bc9f7030000000000000000000000000000000000000000000000000000000000000000"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0x6bc9f7030000000000000000000000000000000000000000000000000000000000000002"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0x6bc9f7030000000000000000000000000000000000000000000000000000000000000003"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0x6bc9f7030000000000000000000000000000000000000000000000000000000000000004"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0x6bc9f7030000000000000000000000000000000000000000000000000000000000000005"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xac4afa380000000000000000000000000000000000000000000000000000000000000000"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xac4afa380000000000000000000000000000000000000000000000000000000000000001"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xac4afa380000000000000000000000000000000000000000000000000000000000000002"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xac4afa380000000000000000000000000000000000000000000000000000000000000003"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xac4afa380000000000000000000000000000000000000000000000000000000000000004"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xac4afa380000000000000000000000000000000000000000000000000000000000000005"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xf2d1e1cd0000000000000000000000000000000000000000000000000000000000000000"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xf2d1e1cd0000000000000000000000000000000000000000000000000000000000000002"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xf2d1e1cd0000000000000000000000000000000000000000000000000000000000000003"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xf2d1e1cd0000000000000000000000000000000000000000000000000000000000000004"
        },
        {
            "address": "0x00000000000000000000000000000000001a88db",
            "callData": "0xf2d1e1cd0000000000000000000000000000000000000000000000000000000000000005"
        },
        {
            "address": "0x00000000000000000000000000000000001a8a06",
            "callData": "0x18160ddd"
        },
        {
            "address": "0x00000000000000000000000000000000001a94C3",
            "callData": "0x18160ddd"
        },
        {
            "address": "0x471330d0B64e68418799DB0Fb9e3038f1d779011",
            "callData": "0x0902f1ac"
        },
        {
            "address": "0x471330d0b64e68418799db0fb9e3038f1d779011",
            "callData": "0x0dfe1681"
        },
        {
            "address": "0x471330d0b64e68418799db0fb9e3038f1d779011",
            "callData": "0xd21220a7"
        },
        {
            "address": "0x6bE7327E59eB80C3e282b423A5203070Dc1CB745",
            "callData": "0x0902f1ac"
        },
        {
            "address": "0x6be7327e59eb80c3e282b423a5203070dc1cb745",
            "callData": "0x0dfe1681"
        },
        {
            "address": "0x6be7327e59eb80c3e282b423a5203070dc1cb745",
            "callData": "0xd21220a7"
        },
        {
            "address": "0x7CF5854C73E0AE210143D65c8a5B52f47668C092",
            "callData": "0x0902f1ac"
        },
        {
            "address": "0x7b9449C33b6aDF82FA24202572271A32EdE9e0CA",
            "callData": "0x0902f1ac"
        },
        {
            "address": "0x7b9449c33b6adf82fa24202572271a32ede9e0ca",
            "callData": "0x0dfe1681"
        },
        {
            "address": "0x7b9449c33b6adf82fa24202572271a32ede9e0ca",
            "callData": "0xd21220a7"
        },
        {
            "address": "0x7cf5854c73e0ae210143d65c8a5b52f47668c092",
            "callData": "0x0dfe1681"
        },
        {
            "address": "0x7cf5854c73e0ae210143d65c8a5b52f47668c092",
            "callData": "0xd21220a7"
        },
        {
            "address": "0xe34C472180a1252e2B837f82E48B6A19E6f29Ffa",
            "callData": "0x0902f1ac"
        },
        {
            "address": "0xe34c472180a1252e2b837f82e48b6a19e6f29ffa",
            "callData": "0x0dfe1681"
        },
        {
            "address": "0xe34c472180a1252e2b837f82e48b6a19e6f29ffa",
            "callData": "0xd21220a7"
        }
    ];
    const tx = await contract.aggregate(
        data.map((item) => ([item.address, item.callData]))
    );
    console.log('tx', tx);
    // const receipt = await tx.wait();
    // console.log('receipt', receipt);
}
main();
