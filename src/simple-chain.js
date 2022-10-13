const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
      this.chain.push(`( ${value} )`);
      return this;
  },
  removeLink(position) {
      if (!Number.isInteger(position)) {
          this.chain = [];
          return new Error('Error! Not an integer!');
      }
      if (position < 1 || position > this.chain.length){
          this.chain = [];
          return new Error('Error! Enter another number!');
      }
          this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
      let endChain = this.chain.join('~~');
      this.chain = [];
      return endChain;
  }
};

module.exports = {
  chainMaker
};
