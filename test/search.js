var AliExpress = require('../');
var Spider = require('../lib/Spider');
var assert = require('assert');
var should = require('should');

describe('Search', function () {
  it('should return search "iPad" results', function(){
    return AliExpress.Search('iPad').then(function(d){
      d.should.be.an.instanceOf(Object);
      d.list.should.be.an.instanceOf(Array);
      // d.list.ddd.should.be.string();
      // d.list.length.isNot(0);
    })
  })
})
