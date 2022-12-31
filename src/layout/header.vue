<template>
    <MenuVertical :menuArr=menu></MenuVertical>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import MenuVertical from '@/components/MenuVertical.vue';
const menu = ref([
    { title: "首页", key: 'index', isDisabled: false },
    { title: "博客", key: 'blog', isDisabled: false },
    { title: "工程", key: 'progress', isDisabled: true }
])
</script>
