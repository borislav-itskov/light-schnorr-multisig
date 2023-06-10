const { ethers } = require("hardhat")

async function main() {
  const [signer] = await ethers.getSigners()
  const factory = await ethers.deployContract('AmbireAccountFactory', [signer.address])
  await factory.deployed()

  const ambire = await ethers.deployContract('AmbireAccount')
  await ambire.deployed()

  console.log(
    `Deployed factory to ${factory.address}`,
    `Deployed ambire to ${ambire.address}`,
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
});