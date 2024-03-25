import Wallet from "ethereumjs-wallet";

class A {
  constructor() {
    console.log("A");
  }
  con() {
    console.log("con");
  }
  create() {
    console.log("create");
    const wallet = Wallet.generate();
    console.log("pk : ", wallet.getPrivateKeyString());
    console.log("Address : ", wallet.getPublicKeyString());
  }
}
