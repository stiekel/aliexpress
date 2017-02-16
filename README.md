# Ali Express Spider

This is a spider for [AliExpress](https://www.aliexpress.com/) written in Node.

[![npm](https://img.shields.io/npm/v/aliexpress.svg?style=flat-square)](https://www.npmjs.com/package/aliexpress)
[![Travis](https://img.shields.io/travis/stiekel/aliexpress/master.svg?label=linux&style=flat-square)](https://travis-ci.org/stiekel/aliexpress)

## Install

```sh
npm install aliexpress --save
```

## Features

*   Get Best Selling List
*   Get Item Detail
*   Get Search Result

## Usage

### Get [Best Selling](http://bestselling.aliexpress.com/en) List

```javascript
var AliExpressSpider = require('aliexpress');

AliExpressSpider.BestSelling.get().then(function(goods){
  console.log('Best Selling items:', goods);
});
```

Result sample:

```javascript
[
  {
    url: 'http://www.aliexpress.com/item/2015-Original-Micro-USB-Cable-with-Colorful-Nylon-Line-Metal-plug-for-iPhone-6-Plus-5s/32470659404.html?scm=1007.13442.37932.0&pvid=6092a253-929e-42ba-b75b-64fba51eed52&tpp=1',
    name: 'Bastec USB Data Charger Cable Nylon Braided Wire Met...',
    price: 'US $2.49'
  }
]
```

### Get Good Detail

```javascript
var AliExpressSpider = require('aliexpress');

AliExpressSpider.Detail(url).then(function(detail){
  console.log('good detail', detail);
}, function(reason){
  // error handler
});
```

Result sample:

```javascript
{ productId: '32470659404',
  name: 'Bastec USB Data Charger Cable Nylon Braided Wire Metal Plug Micro USB Cable for iPhone 6 6s Plus 5s 5 iPad mini Samsung Sony HTC',
  gallary:
   [ { alt: 'Bastec USB Data Charger Cable Nylon Braided Wire Metal Plug Micro USB Cable for iPhone 6 6s Plus 5s 5 iPad mini Samsung Sony HTC',
       src: 'http://g03.a.alicdn.com/kf/HTB1yK1RMVXXXXcDXXXXq6xXFXXXr/Bastec-USB-Data-Charger-Cable-Nylon-Braided-Wire-Metal-Plug-Micro-USB-Cable-for-iPhone-6.jpg_50x50.jpg' },
     { alt: 'Bastec USB Data Charger Cable Nylon Braided Wire Metal Plug Micro USB Cable for iPhone 6 6s Plus 5s 5 iPad mini Samsung Sony HTC',
       src: 'http://g04.a.alicdn.com/kf/HTB19ttPLVXXXXa_XFXXq6xXFXXXa/Bastec-USB-Data-Charger-Cable-Nylon-Braided-Wire-Metal-Plug-Micro-USB-Cable-for-iPhone-6.jpg_50x50.jpg' },
      ...
    ],
  property:
   [ { title: 'Brand Name:', des: 'bastec' },
     { title: 'Compatible Brand:',
       des: 'SONY,LG,Toshiba,Apple iPhones,Samsung,Panasonic,HTC' }
       ...
     ] }
```

### Get Search Result

```javascript
var AliExpressSpider = require('aliexpress');

AliExpressSpider.Search({
  keyword: 'iPad',
  page: 2
}).then(function(d){
  console.log('d', d)
})
```

Result sample:

```javascript
{
  url: 'https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20170201171227&SearchText=iPad$page=2',
  list: [
    {
      title: '330Pcs/page Cute Cartoon Rubber Home Button Sticker for iPhone 4 4s 5G 5S ipad 2 3 4 5 Practical 4Z338',
      url: '//www.aliexpress.com/item/330Pcs-lot-Cute-Cartoon-Rubber-Home-Button-Sticker-for-iPhone-4-4s-5G-5S-ipad-2/32247854668.html?ws_ab_test=searchweb0_0,searchweb201602_2_10066_10065_10000073_10068_10000077_10000074_10000032_119_10000030_10000026_10000023_431_10000069_10000068_10060_10062_10056_10055_10000062_10054_10000063_10059_10099_10000020_10000013_10103_10102_10000016_10096_10000056_10000059_10052_10053_10107_10050_10106_10051_10000097_10000094_10000091_10000007_10000050_10084_10083_10000100_10080_10000047_10082_10081_10110_10111_10112_10113_10114_10115_10000089_10000086_10000083_10000041_10000044_10000080_10078_10079_10000038_10073_10000035_10070_10122_10123_10121_10124,searchweb201603_1,afswitch_4,ppcSwitch_5,single_sort_1_default&btsid=e7d779b1-077c-429f-885d-101f9852fb1c&algo_expid=b26690be-6119-4b09-a0e6-95657992ae47-0&algo_pvid=b26690be-6119-4b09-a0e6-95657992ae47',
      id: '32247854668',
      price: 'US $1.89',
      img: 'https://ae01.alicdn.com/kf/HTB1qfmMKFXXXXaFaXXXq6xXFXXXC/330Pcs-lot-Cute-Cartoon-Rubber-Home-Button-Sticker-for-iPhone-4-4s-5G-5S-ipad-2.jpg',
      store: {
        name: 'Craft World',
        url: '//www.aliexpress.com/store/1200888'
      }
    },
    ...
  ]
}
```
