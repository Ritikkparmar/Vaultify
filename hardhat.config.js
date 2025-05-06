require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9", // Adjust to your required Solidity version
  networks: {
    hardhat: {
      chainId: 31337, // Local Hardhat network chain ID
    },
    localhost: {
      url: "http://127.0.0.1:8545", // Local Hardhat node URL
      // No need for accounts, as Hardhat will automatically generate accounts for you
    },
  },
  paths: {
    artifacts: "./client/src/artifacts", // Path to store compiled contracts
  },
};


//By sir

// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//   },
//   paths: {
//     artifacts: "./client/src/artifacts",
//   },
// };
