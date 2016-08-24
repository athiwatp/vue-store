<template>
    <div class="product">
        <Center>
            <h2 @click='go'>{{product.name}}</h2>
            <background-image :src='product.image'></background-image>
            <center-row>
                <add-button :product='product'></add-button>
                <info-button :id='product.id'></info-button>
            </center-row>
        </Center>
        <hr />
    </div>
</template>

<script>
    import AddButton from './AddButton'
    import InfoButton from './InfoButton'
    import BackgroundImage from './BackgroundImage'
    import CenterRow from './CenterRow'

    export default {
        props: ['product'],
        components: {
            BackgroundImage,
            CenterRow,
            AddButton,
            InfoButton
        },
        methods: {
            go() {
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .product {
        width: 100%;
        margin-bottom: 15px;
    }
</style>