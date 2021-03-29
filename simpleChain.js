const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(data) {
    (this.hash = ''),
      (this.height = 0),
      (this.body = data),
      (this.time = 0),
      (this.previousblockhash = '');
  }
}

/*  ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/

class BlockChain {
  constructor() {
    // new chain Array
    this.chain = [];
    // add first genesis block
    this.addBlock(new Block('Some data in here'));
  }

  addBlock(newBlock) {
    newBlock.height = this.chain.length;

    newBlock.time = new Date().getTime().toString().slice(0, -3);

    if (this.chain.length > 0) {
      newBlock.previousblockhash = this.chain[this.chain.length - 1].hash;
    }

    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();

    this.chain.push(newBlock);
  }
}
