<template>
    <a @click='handleClick' v-waves>
        Info
    </a>
</template>

<script>
    export default {
        props: ['id'],
        methods: {
            handleClick() {
                this.$router.go({name: "product", params: {id : this.id}})
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
        background: linear-gradient(-71deg, #8d2ee4 -2% , #554df9 50%, #695fff 73%);
        border-radius: 4px;
        color: #fff;
        box-shadow: 0 0 1px #9c9c9c;
    }
</style>