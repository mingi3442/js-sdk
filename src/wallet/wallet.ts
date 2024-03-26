import * as EWallet from "ethereumjs-wallet";

export class Wallet {
  private address: string;
  private encrypted: string;

  constructor(password: string) {
    const wallet = EWallet.default.generate();
    console.log("pk : ", wallet.getPrivateKeyString());
    console.log("Address : ", wallet.getPublicKeyString());
    this.address = wallet.getPublicKeyString();
    this.encrypted = this.encrypt(wallet.getPrivateKeyString(), password);
  }

  private encrypt(privatekey: string, password: string): string {
    return CryptoJS.AES.encrypt(privatekey, password).toString();
  }

  static decrypt(encrypted: string, password: string): string {
    const bytes = CryptoJS.AES.decrypt(encrypted, password);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  }
  get getAddress(): string {
    return this.address;
  }
  get getEncrypted(): string {
    return this.encrypted;
  }
}

// class WalletUtil {
//   constructor(_web3) {
//     const _addr = localStorage.getItem("walletAddress");
//     const _encrypted = localStorage.getItem("walletEncrypt");
//     if (!_addr || !_encrypted) {
//       throw new Error("localStorageItemNotFound");
//     }

//     this.address = _addr;
//     this.encrypted = _encrypted;
//     this.web3 = _web3;
//   }

//   // typescript 변환시 private 적용
//   static encrypt(privatekey, pw) {
//     const encrypted = CryptoJS.AES.encrypt(privatekey, pw).toString();
//     return encrypted;
//   }

//   // typescript 변환시 private 적용
//   decrypt(encrypted, pw) {
//     const bytes = CryptoJS.AES.decrypt(encrypted, pw);
//     const decrypted = bytes.toString(CryptoJS.enc.Utf8);
//     return decrypted;
//   }

//   static getWeb3() {
//     if (typeof Web3 !== "undefined") {
//       const _web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//       return _web3;
//     } else {
//       return null;
//     }
//   }

//   static createdWallet(password) {
//     const _web3 = this.getWeb3();
//     if (!_web3) {
//       throw new Error("web3ProviderNotFound");
//     }
//     const newWallet = _web3.eth.accounts.create();
//     const address = newWallet.address.toLowerCase();
//     // const hexString = newWallet.publicKey.toLowerCase();
//     // const modifiedString = hexString.slice(0, 2) + hexString.slice(4);
//     const encrypted = this.encrypt(newWallet.privateKey, password);

//     this.address = address;
//     this.encrypted = encrypted;

//     // localstorage 저장
//     localStorage.setItem("walletAddress", address);
//     localStorage.setItem("walletEncrypt", encrypted);

//     return {
//       address,
//       // publicKey: modifiedString,
//       encrypt: encrypted,
//     };
//   }
