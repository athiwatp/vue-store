<template>
    <div>
        <h1>Products</h1>
        <product v-for='product of products' :product='product'></product>
    </div>
</template>

<script>
    import Products from '../fetch/index'
    import Product from '../components/ProductPreview'
    import Center from '../components/Center'
    export default {
        components: {
            Product,
            Center
        },
        data() {
            return {
                products: []
            }
        },
        route: {
            data(transition) {
                Products.getAll((res) => {
                    transition.next({
                        products: res
                    })
                })
            }
        }
    }
</script>

<style>
.products {
    display: flex
}
.product {
    flex: 1
}
a {

}
</style>