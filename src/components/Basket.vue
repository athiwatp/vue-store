<template>
    <div @click='go'>
        Basket: {{count}}
    </div>
</template>

<script>
    import {getBasketItems} from '../store/getters'
    export default {
        vuex: {
            getters: {
                items: getBasketItems
            }
        },
        computed: {
            count() {
                return this.items.length
            }
        },
        methods: {
            go() {
                this.$router.go({
                    name: 'basket'
                })
            }
        }
    }
</script>

<style scoped>
    div {
        background: linear-gradient(-71deg, #e42e8b -2% , #f33c7a 50%, #ff5f95 73%);
        border-radius: 4px;
        color: #fff;
        box-shadow: 0 0 1px #9c9c9c;
        padding: 10px 15px;
        text-align: center;
    }
    a{
        color: white;
    }
</style>