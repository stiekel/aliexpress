var Promise = require('bluebird');
var Spider = require('./Spider');
var cheerio = require('cheerio');

var Image = require('./common/image');
var Strings = require('./common/strings')
/**
url sample: https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20170201171227&SearchText=ipad
referer:https://www.aliexpress.com/

 */
module.exports = function (opt) {
  return new Promise((resolve, reject) => {
    let keyword = ''
    if (typeof opt === 'string') {
      keyword = opt
    } else {
      keyword = opt.keyword
    }
    if (!keyword) return reject(new Error('require keyword'))
    let url = 'https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20170201171227&SearchText=' + encodeURIComponent(keyword)
    if (opt && opt.page)
      url += '$page=' + opt.page
    let spider = new Spider(url)
    spider.getHTML().then(content => {
      let result = {
        url: url,
        list: [],
        pages: 0
      }

      let $ = cheerio.load(content)
      // console.log('$("ul#hs-list-items li h3 a").attr(href)', $("ul#hs-list-items li h3 a").attr('href'))
      // get search result
      $('li.list-item').each((key, ele) => {
        let tmp = {}
        tmp.title = $(ele).find('h3 a').attr('title');
        tmp.url = $(ele).find('h3 a').attr('href');
        tmp.id = Strings.getIdFromUrl(tmp.url);
        tmp.price = $(ele).find('.price .value').text();
        tmp.img = $(ele).find('a img').attr('src');
        if (tmp.img) {
          tmp.img = Image.getOriginalUrl(tmp.img);
        }
        tmp.store = {
          // name: $(ele).find('.address-chat .address a.store').text(),
          name: $(ele).find('.store').attr('title'),
          url: $(ele).find('.store').attr('href')
        }
        result.list.push(tmp)
      })
      result.pages = $(".ui-pagination-navi a").length
      console.log('result[0]', result.list[0]);
      return resolve(result)
    })
  })
};
