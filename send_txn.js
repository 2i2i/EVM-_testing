// node send_txn.js

// const { JsonRpcProvider } = require('ethers');
const ethers = require("ethers");
const provider = new ethers.JsonRpcProvider("http://35.209.100.125:8545");
console.log("provider", provider)

const wallet = new ethers.Wallet('115409ee5cbf15ae3a470ac4aa954c1ad8ed94901069ee593507ec444f7fe1c9', provider); // Keep the private key secure!

const tx = {
  from: "0xb316c8ca80e0dce73f3a81338ed97f31fe0a31eb",
  to: null,
  value: 0,
  data: "0x6105386100106000396105386000f3fe610007610037565b6395ba71af811461001757600080fd5b6101806004600037610027610375565b8160005580600155505050610537565b60007c010000000000000000000000000000000000000000000000000000000060003504905090565b6101405160c05160e05161007583828461051b565b6100848560006002848661046e565b60805160a05161009789828486886103c6565b61010051610120516100ac8d828486886103ee565b8161018052806101a052505050505050505050505050505050565b61014051610160516000516020516040516060516100e8868284868861046e565b6100f48789838561042d565b816101c052806101e05250505050505050505050565b610140516101605160c05160e051610100516101205161012c858783856104da565b610139888284888a6103ee565b8161018052806101a05250505050505050505050565b610140516101605161015f610060565b610180516101a05161016f6100c7565b6101c0516101e05161018486848684866103c6565b61018c61010a565b610180516101a0516101a18a8284868861046e565b816101c052806101e052505050505050505050505050565b610140516101c0516101e051610180516101a0516101da8582848688610442565b8161018052806101a05250505050505050565b60008061014051610160517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd79b57ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb61024784898984866103ee565b61025385878385610418565b610262886000600184866103c6565b61026d8a8284610405565b9b509b50505050505050505050509250929050565b610140516101c0516101e05161029881836101ed565b6000516020516102ab87848684866103ee565b816101c052806101e052505050505050505050565b610140516101605160805160a0516102d881836103dd565b61010051610120516102ed88828486886103ee565b6102f9898b8385610418565b60405160605161030c8e848684866103ee565b8161018052806101a05250505050505050505050505050505050565b6101405161016051610180516101a0516103406102c0565b610180516101a05161035283856101ed565b61035f88848684866103ee565b8161018052806101a05250505050505050505050565b6000806101405161038461014f565b61038c6101b9565b610394610282565b61039c610328565b610180516101a0516101c0516101e0516103b98584868486610442565b9650965050505050509091565b6000808686868686d0915091509550959350505050565b6000808383d1915091509250929050565b6000808686868686d2915091509550959350505050565b600080848484d391509150935093915050565b60008085858585d49150915094509492505050565b60008085858585d59150915094509492505050565b60008061044f86866103dd565b9150915061046087828487876103c6565b915091509550959350505050565b60008061047c878787610405565b9150915061048d87828487876103ee565b915091509550959350505050565b6000806104aa8888868661042d565b915091506104bb87828489896103ee565b915091506104cb88888385610418565b91509150965096945050505050565b6000807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61050d8787836005898961049b565b925092505094509492505050565b60008061052b85858587876103ee565b91509150935093915050565b",
  gas: "1000000",
};

wallet.sendTransaction(tx).then(transaction => {
  console.log('Transaction hash:', transaction.hash);
  transaction.wait().then(receipt => {
    console.log('Transaction was mined in block:', receipt.blockNumber);
  });
});