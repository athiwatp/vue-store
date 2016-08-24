<template>
    <span class='remove' @click='handleClick(id)'>remove</span>
</template>

<script>
    import {removeItemFromBasket} from '../store/actions'
    export default {
        props: ['id'],
        vuex: {
            actions: {
                removeItemFromBasket
            }
        },
        methods: {
            handleClick(id) {
                this.removeItemFromBasket(id)
            }
        }
    }
</script>

<style>
    .remove {
        color: #e42e8b
    }
</style>