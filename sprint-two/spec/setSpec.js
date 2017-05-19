describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should add and remove numbers to a set', function() {
    set.add(7);
    set.add(9);
    set.add(12);
    set.remove(12);
    expect(set.contains(9)).to.equal(true);
    expect(set.contains(12)).to.equal(false);
  });

  it('should add and remove objects to a set', function() {
    set.add({name : 'Danny Glover'});
    set.add({name : 'Sharon Stone'});
    set.remove({name : 'Danny Glover'});
    expect(set.contains({name : 'Sharon Stone'})).to.equal(true);
    expect(set.contains({name : 'Danny Glover'})).to.equal(false);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

});
