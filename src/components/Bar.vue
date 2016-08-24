<template>
    <div class="bar">
        <a v-link='{path: "/"}' class='title'>Cool company</a>
        <slot></slot>
    </div>
</template>

<style>
    .bar {
        display: flex;
        padding: 10px 25px;
        background: #ddd;
        align-items: center;
        justify-content: space-between;
    }
    .title {
        text-decoration: none;
        color: inherit;
    }
</style>