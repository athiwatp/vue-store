<template>
    <div class="product">
        <Media-Query query='(max-width: 700px)'>
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
        </Media-Query>
        <Media-Query query='(min-width: 701px)'>
            <div class="col">
                <h1>{{product.name}}</h1>
                <background-image :src='product.image'></background-image>    
            </div>
            <div class="col">
                 <h2>${{product.price}}</h2> 
                <add-button :product='product'>Add</add-button>
                <p>{{product.description}}</p>
            </div>         
        </Media-Query>  
    </div>
</template>

<script>
    import Products from '../fetch/index'
    import AddButton from '../components/AddButton'
    import Center from '../components/Center'
    import BackgroundImage from '../components/BackgroundImage'
    import MediaQuery from '../components/MediaQuery'
 
    export default {
        components: {
            AddButton,
            Center,
            BackgroundImage,
            MediaQuery
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


<style scoped>
    .product {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .col {
        flex: 0 0 50%
    }
</style>