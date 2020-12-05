'use strict';

class Frame{

  constructor() {
    this.score = 0
    this._rolls = []
  }

  getScore() {
    return this.score;
  };

  rolls() {
    return this._rolls;
  };

  knock(pins) {
    this._rolls.push(pins);
    this.score += pins;
  };
};
