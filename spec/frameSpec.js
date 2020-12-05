'use strict';

describe("Frame", function() {
  var frame;
  beforeEach(function(){
    frame = new Frame();
  });

  it('has a starting score of zero', function() {
    expect(frame.getScore()).toEqual(0);
  });
});
