'use strict';

describe("Frame", function() {
  var frame;
  beforeEach(function(){
    frame = new Frame();
  });
  it('has a score of zero', function() {
    expect(frame.score()).toEqual(0);
  });
});
