<template>
    <header>
        <Header></Header>
    </header>
    <main>
        <router-view></router-view>
    </main>
</template>

<script setup lang="ts">
import Header from '@/layout/header.vue'
</script>
