<template>
    <div :style='{backgroundImage: `url(${src})`}'></div>
</template>

<script>
    export default {
        props: ['src']
    }
</script>

<style scoped>
div {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 200px;
    width: 100%;
}
</style>