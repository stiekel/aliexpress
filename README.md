# Ali Express Spider

This is a spider for [AliExpress](https://www.aliexpress.com/) written in Node.

## Install

```sh
npm install aliexpress --save
```

## Usage

### Get [Best Selling](http://bestselling.aliexpress.com/en) List

```javascript
var AliExpressSpider = require('aliexpress');

AliExpressSpider.BestSelling.get().then(function(goods){
  console.log('Best Selling items:', goods);
});
```

Result sample:

```json
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
var Promise = require('bluebird');

var AliExpressSpider = require('aliexpress');

AliExpressSpider.Detail(url).then(function(detail){
  console.log('good detail', detail);
}, function(reason){
  // error handler
});
```

Result sample:

```json
good Detail { productId: '32470659404',
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
