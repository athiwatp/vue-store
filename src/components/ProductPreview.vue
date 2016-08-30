<template>
    <div class="product">
        <Center>
            <h2>{{product.name}}</h2>
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
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .product {
        flex: 0 0 100%;
        margin-bottom: 15px;
    }
    @media (min-width: 660px) {
        .product {
            flex: 0 0 50%;
        }
    }
    @media (min-width: 920px) {
        .product {
            flex: 0 0 33%;
        }
    }
</style>