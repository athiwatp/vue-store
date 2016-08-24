import Products from './handlers/Products'
import Product from './handlers/Product'
import Basket from './handlers/Basket'

export default {
    '/': {
        component: Products,
        name: 'products'
    },
    '/product/:id': {
        component: Product,
        name: 'product'
    },
    'basket': {
        component: Basket,
        name: 'basket'
    }
}