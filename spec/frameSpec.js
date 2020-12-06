'use strict';

describe("Frame", function() {
  var frame;
  beforeEach(function(){
    frame = new Frame();
  });

  it('has a starting score of zero', function() {
    expect(frame.getScore()).toEqual(0);
  });

  it('starts with an empty array of rolls', function() {
    expect(frame.rolls()).toEqual([]);
  });

  it('lets the user knock 10 or less pins per roll', function() {
    frame.knock(10);
    expect(frame.rolls()).toEqual([10]);
  });

  it('does not let the user knock more than 10 pins', function() {
    frame.knock(10);
    expect(function(){ frame.knock(1); } ).toThrow(new Error('Max pins is 10'));
  })

  it('adds the pins knocked over to the score', function() {
    frame.knock(10);
    expect(frame.getScore()).toEqual(10);
  });
});
