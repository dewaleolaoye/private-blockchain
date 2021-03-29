## test using `node` terminal

- type `node` and hit enter
- Paste the `simpleChain.js` in the terminal
- Declare a new variable, hit enter
  `let blockchain = new BlockChain()`
- Add a new block
  `blockchain.addBlock(new Block("a new block"))`
- then, `blockchain.chain`

- The response should be
  `[ Block { hash: '6633904077a001607e3333636047265fb6d525fcda28d93e884080d9ce3c694e', height: 0, body: 'Some data in here', time: '1617008687', previousblockhash: '' }, Block { hash: '7cad8e12328ece5daf79584fd99201a90a1ca8f304a66c8a7e02739b1763a849', height: 1, body: 'a new block 2', time: '1617008730', previousblockhash: '6633904077a001607e3333636047265fb6d525fcda28d93e884080d9ce3c694e' } ] `
