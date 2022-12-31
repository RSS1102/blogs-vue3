<template>
 <MenuHorizontal :menuArr="menu"></MenuHorizontal>
</template>

<script setup lang='ts'>
import MenuHorizontal from '@/components/MenuHorizontal.vue'
const menu = [{
    label: '示例11111111111111111',
    key: '示例1',
    disabled: true,
}, {
    label: '示例2',
    key: '示例2',
    children: [
        {
            label: '示例2',
            key: '示例2'
        }]
}]
</script>

<style lang='scss' scoped>

</style>
