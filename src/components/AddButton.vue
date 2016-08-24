<template>
    <a @click='handleClick' :class='{"added": itemInBasket}' v-waves>
        <div>
            <template v-if='!itemInBasket'>Add</template>
            <template v-else>Added</template>
        </div>
    </a>
</template>

<script>
    import {addItemToBasket} from '../store/actions'
    import {getBasketItems} from '../store/getters'
    export default {
        props: ['product'],
        vuex: {
            actions: {
                addItemToBasket
            },
            getters: {
                basketItems: getBasketItems
            }
        },
        computed: {
            itemInBasket() {
                return this.basketItems.filter(item => {
                    if(item.id === this.product.id) return item
                }).length > 0
            }
        },
        methods: {
            handleClick() {
                if(!this.itemInBasket) this.addItemToBasket(this.product)
            }
        }
    }
</script>

<style scoped>
    a {
        padding: 10px 15px;
        text-align: center;
        max-width: 100px;
        flex: 1;
        background: linear-gradient(-71deg, #e42e8b -2% , #f33c7a 50%, #ff5f95 73%);
        border-radius: 4px;
        color: #fff;
        box-shadow: 0 0 1px #9c9c9c;
    }
</style>