var AliExpress = require('../');
var Spider = require('../lib/Spider');
var assert = require('assert');
var should = require('should');

describe('AliExpress', function(){
  let good;
  describe('Spider', function(){
    var url = 'http://qq.com';
    it(['request', url, 'show return a web page'].join(' '), function(){
      var spider = new Spider('http://qq.com/');
      return spider.getHTML().then(function(d){
        d.should.be.an.String();
      });
    });
  });
  describe('Best Selling', function() {
    it('should return a list of itesm', function(){
      return AliExpress.BestSelling.get().then(function(data){
        data.should.be.an.instanceOf(Array);
        good = data[0] || null;
        good.should.be.an.instanceOf(Object)
        good.url.should.be.an.String();
      });
    })
  });

  describe('Detail', function () {
    it('showuld return Good Detail', function(){
      return AliExpress.Detail(good.url).then(function(d){
        d.should.be.an.instanceOf(Object);
      });
    })
  });
});
