import Wallet from "ethereumjs-wallet";

class A {
  constructor() {
    console.log("A");
  }

  create() {
    console.log("create");
    const wallet = Wallet.generate();
    console.log("pk : ", wallet.getPrivateKeyString());
    console.log("Address : ", wallet.getPublicKeyString());
  }
}
function con() {
  console.log("con");
}
function create() {
  console.log("create");
  const wallet = Wallet.generate();
  console.log("pk : ", wallet.getPrivateKeyString());
  console.log("Address : ", wallet.getPublicKeyString());
}

const MyLibrary = {
  A: A,
  con: con,
  create: create,
};

// A 클래스를 MyLibrary 객체의 속성으로 추가합니다.

// MyLibrary 객체를 export합니다.
export default MyLibrary;
