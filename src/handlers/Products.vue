<template>
    <div>
        <h1>Pokettomonsutā</h1>
        <div class="products">
            <product v-for='product of products' :product='product'></product>
        </div>
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
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
a {

}
</style>