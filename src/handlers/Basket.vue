<template>
    <div>
        <h1>Basket</h1>
        <template v-if='items.length === 0'>
            <p>Empty oh no!</p>
            <a v-link='{name:"products"}'>Back to products</a>
        </template>
        <ul v-else>
            <li v-for='item of items'>
                {{item.name}} 
                <Remove-Button :id='item.id'></Remove-Button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getBasketItems} from '../store/getters'
    import {removeItemFromBasket} from '../store/actions'
    import RemoveButton from '../components/RemoveButton'
    export default {
        components: {
            RemoveButton
        },
        vuex: {
            actions: {
                removeItemFromBasket
            },
            getters: {
                items: getBasketItems
            }
        },
        methods: {
            handleRemoveClick(id) {
                console.log(id)
                this.removeItemFromBasket(id)
            }
        }
    }
</script>

<style scoped>
    ul {
        padding-left: 0;
        list-style-position: inside;
    }
    li {
        padding: 10px 0;
    }
</style>