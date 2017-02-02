var Promise = require('bluebird');
var Spider = require('./Spider');
var cheerio = require('cheerio');

/**
url sample: https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20170201171227&SearchText=ipad
referer:https://www.aliexpress.com/

 */
module.exports = function (keyword) {
  let url = 'https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20170201171227&SearchText=' + encodeURIComponent(keyword)

  let spider = new Spider(url)
  return new Promise((resolve, reject) => {
    spider.getHTML(url).then(content => {
      let result = {
        url: url,
        list: []
      }

      let $ = cheerio.load(content)
      // console.log('$("ul#hs-list-items li h3 a").attr(href)', $("ul#hs-list-items li h3 a").attr('href'))
      // get search result
      $('li.list-item').each((key, ele) => {
        let tmp = {}
        tmp.title = $(ele).find('h3 a').attr('title');
        tmp.url = $(ele).find('h3 a').attr('href');
        tmp.price = $(ele).find('.price .value').text();
        tmp.img = $(ele).find('.img a img')[0].attribs['image-src'];
        // tmp.img = $(ele).find('.img a img').attr('src');
        tmp.store = {
          name: $(ele).find('.address-chat .address a.store').text(),
          url: $(ele).find('.address-chat .address a.store').attr('href')
        }
        result.list.push(tmp)
      })

      return resolve(result)
    })
  })
};
