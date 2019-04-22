export const blogcastConfig = new class Config {
    constructor() {
        return new Proxy(this, {
            get: function (config, field) {
                return new Promise(function (resolve, reject) {
                    chrome.storage.sync.get(field, function (result) {
                        resolve(result[field])
                    })
                })
            },
            set: function (config, field, value) {
                return new Promise(function (resolve, reject) {
                    let obj = {}
                    obj[field] = value
                    chrome.storage.sync.set(obj, function () {
                        resolve()
                    })
                })
            },
        })
    }
}