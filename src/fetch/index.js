import Vue from 'vue'
export default class Products {
    static getAll(cb) {
        Vue.http.get('products.json')
        .then(res => res.data)
        .then(res => {
            cb(res)
        })
    }
    static getById(id, cb) {
        Vue.http.get('products.json')
        .then(res => res.data)
        .then(res => {
            cb(res[id])
        })
    }
}