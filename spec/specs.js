describe('getWordOrder', function() {
  it("returns single word given", function() {
    expect(getWordOrder('bob')).to.deep.equal(['bob']);
  });

  it("returns two different words given", function() {
    expect(getWordOrder('bob dog')).to.deep.equal(['bob', 'dog']);
  });

  it("returns single word when given 2 of the same word", function() {
    expect(getWordOrder('bob bob')).to.deep.equal(['bob']);
  });

  it("returns proper sorted word order", function() {
    expect(getWordOrder('rug bob sog bob')).to.deep.equal(['bob',
 'rug', 'sog']);
  });
});
