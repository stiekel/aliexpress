var Promise = require('bluebird');
var cheerio = require('cheerio');
var Spider = require('./Spider');

module.exports = function (url){
  var spider = new Spider(url);
  return new Promise((resolve, reject) => {
    spider.getHTML(url).then((content) => {
      var detail = {};
      var $ = cheerio.load(content);
      // get productId
      detail.productId = spider.getValue('productId');
      // get name
      $('.detail-wrap h1.product-name').each((key, ele) => {
        if (!ele || !ele.children || !ele.children[0] || !ele.children[0].data) return;
        detail.name = ele.children[0].data;
      });
      // get picture
      detail.gallary = [];
      $('ul.image-thumb-list li span.img-thumb-item img').each((key, ele) => {
        if (!ele || !ele.attribs || !ele.attribs.src) return;
        detail.gallary.push({
          alt: ele.attribs.alt || '',
          src: ele.attribs.src || ''
        });
      });

      //get property
      detail.property = [];
      // get property title
      $("ul.product-property-list li.property-item .propery-title").each((key, ele) => {
        if (!detail.property[key]) detail.property[key] = {};
        if (!ele || !ele.children || !ele.children[0] || !ele.children[0].data) {
          detail.property[key].title = "";
        } else {
          detail.property[key].title = ele.children[0].data;
        }
      });
      // get property description
      $("ul.product-property-list li.property-item .propery-des").each((key, ele) => {
        if (!detail.property[key]) detail.property[key] = {};
        if (!ele || !ele.children || !ele.children[0] || !ele.children[0].data) {
          detail.property[key].des = "";
        } else {
          detail.property[key].des = ele.children[0].data;
        }
      });

      return resolve(detail);
    }, reject);
  });
};
