
module.exports = {
  getOriginalUrl: function (url) {
    if ('string' !== typeof url) return '';
    // remove the postfix of url like: https://ae01.alicdn.com/kf/HTB1uZ45KVXXXXcdXpXXq6xXFXXXH/New-i-Flash-Driver-HD-U-disk-Lightning-data-for-iPhone-iPad-iPod-micro-usb-interface.jpg_220x220.jpg
    if (!isNaN( url.split('_').pop().split('x').shift() )) {
      return url.split('_').shift();
    } else {
      return url;
    }
  }
};
