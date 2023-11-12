<template>
    <MRicePaper>
        <div class="lay-out">
            <header>
                <Header></Header>
            </header>
            <router-view />
        </div>
    </MRicePaper>
</template>

<script setup lang="ts">
import { MRicePaper } from 'shuimo-ui'
import Header from '@/layout/header.vue'
</script>
<style lang="scss" scoped>
.m-rice-paper {
    height: 100%;
}

.lay-out {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
}
</style>