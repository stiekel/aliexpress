module.exports = {
  getIdFromUrl: function(url) {
    if ('string' !== typeof url) return ''
    return url.split('?').shift().split('/').pop().split('.').shift()
  }
}
