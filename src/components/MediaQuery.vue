<template>
    <template v-if='show'>
        <slot></slot>
    </template>
</template>

<script>
    import debounce from 'lodash.debounce'
    export default {
        props: ['query'],
        data() {
            return {
                show: false
            }
        },
        methods: {
            testQuery() {
                this.show = window.matchMedia(this.query).matches
            }
        },
        created() {
            this.testQuery()
            const debounced = debounce(this.testQuery, 30)
            this.eventListener = window.addEventListener('resize', debounced)
        },
        destroy() {
            window.removeEventListener(this.eventListener)
        }
    }
</script>