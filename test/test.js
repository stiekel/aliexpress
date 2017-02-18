var AliExpress = require('../');
var Spider = require('../lib/Spider');
var assert = require('assert');
var should = require('should');

var good;
describe('Spider', function(){
  var url = 'https://www.aliexpress.com/';
  it(['request', url, 'show return a web page'].join(' '), function(){
    var spider = new Spider(url);
    return spider.getHTML(url).then(function(d){
      d.should.be.an.String();
    });
  });
});
describe('Best Selling', function() {
  it('should return a list of items', function(){
    return AliExpress.BestSelling.get().then(function(data){
      data.should.be.an.instanceOf(Array);
      good = data[0] || null;
      good.should.be.an.instanceOf(Object)
      good.url.should.be.an.String();
    });
  });
});

describe('Detail', function () {
  it('showuld return Good Detail', function(){
    return AliExpress.Detail(good.url).then(function(d){
      d.should.be.an.instanceOf(Object);
      d.productId.should.be.an.String();
      d.orderCount.should.be.an.Number();
    });
  });
});
