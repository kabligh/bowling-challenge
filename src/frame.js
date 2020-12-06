'use strict';

class Frame{

  constructor() {
    this.STARTING_PINS = 10;
    this.score = 0;
    this._rolls = [];
  }

  getScore() {
    return this.score;
  };

  rolls() {
    return this._rolls;
  };

  knock(pins) {
    if (this.isMaximumPins()) {
      throw Error('Max pins is 10');
    }
    this._rolls.push(pins);
    this.score += pins;
  };

  isMaximumPins() {
    return this.score === this.STARTING_PINS;
  }
};
