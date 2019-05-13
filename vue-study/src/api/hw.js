const _products = [
    {"id": 1, "process": "1+1", "result": 2},
    {"id": 2, "process": "1+2", "result": 3},
    {"id": 3, "process": "1+3", "result": 4}
]
export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },
    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
          ? cb()
          : errorCb()
      }, 100)
    }
}