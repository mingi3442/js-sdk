import Wallet from "ethereumjs-wallet";

class A {
  constructor() {
    console.log("A");
  }
  con(): void {
    console.log("con");
  }
  create(): void {
    console.log("create");
    const wallet = Wallet.generate();
    console.log("pk : ", wallet.getPrivateKeyString());
    console.log("Address : ", wallet.getPublicKeyString());
  }
}

export default A;
