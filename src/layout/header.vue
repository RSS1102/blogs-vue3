<template>
    <Menu :menuArr=menu></Menu>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Menu from '@/components/Menu.vue';
const menu = ref([
    { title: "首页", key: 'index', isDisabled: false },
    { title: "博客", key: 'blog', isDisabled: true }
])
</script>
