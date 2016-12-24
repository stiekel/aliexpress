var Promise = require('bluebird');
var Phantom = require("phantom");
module.exports = class Spider {
  constructor (url, config) {
    this.url = url;
    this._ph = undefined;
    this._page = undefined;
    this._outObj = undefined;

    // get HTML
    this.getHTML = () => {
      return new Promise((resolve, reject) => {
        new Promise((rslv, rjt) => {
          if (!this._ph || !this._page) {
            Phantom.create(['--load-images=no']).then(ph => {
              this._ph = ph;
              return this._ph.createPage();
            }).then(page => {
              this._page = page;
              return rslv(this._page.open(this.url));
            });
          } else {
            return rslv(this._page.open(this.url));
          }
        }).then(status =>{
          return this._page.property('content');
        }).then(content => {
          return resolve(content);
        }).catch(e => {
          return reject(e);
        });
      });
    }

    // get variables in javascript
    this.getValue = (name) => {
      this._page.evaluate(function () {
        console.log('document', document);
        return document[name];
      });
    }
  }
};
