<template>
    <div class="layout">
        <header>
            <Header></Header>
        </header>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import Header from '@/layout/header.vue'
</script>
<style lang="scss" scoped>
.layout {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
}
</style>