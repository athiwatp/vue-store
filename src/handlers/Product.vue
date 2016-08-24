<template>
    <div class="product">
        <center>
            <h1>{{product.name}}</h1>
        </center>
        <center>
            <background-image :src='product.image'></background-image>
        </center>
        <Center>
          <h2>${{product.price}}</h2> 
          <add-button :product='product'>Add</add-button>
        </Center>
        <Center>
            <p>{{product.description}}</p>
        </Center>
    </div>
</template>

<script>
    import Products from '../fetch/index'
    import AddButton from '../components/AddButton'
    import Center from '../components/Center'
    import BackgroundImage from '../components/BackgroundImage'

    export default {
        components: {
            AddButton,
            Center,
            BackgroundImage
        },
        data() {
            return {
                product: {}
            }
        },
        route: {
            data(transition) {
                Products.getById(this.$route.params.id, res => {
                    transition.next({
                        product: res
                    })
                })
            }
        }
    }
</script>
