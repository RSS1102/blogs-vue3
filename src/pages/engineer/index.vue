<template>
    <div id="engineer-list">
        <EngineeringBlock v-for="item in engineerList" :engineer-title="item.title" :engineer-content="item.content"
            :engineer-star="item.star" :engineer-link="item.link" />
    </div>
</template>

<script setup lang='ts'>
import { nextTick } from 'vue';
import EngineeringBlock from './components/EngineerBlock.vue';
const engineerList = [
    {
        title: '示例1示例1示例1示例1示例1示例1示例1示例1',
        content: `示例1示例1示例1示例1示
        例1示例1示例1示例1示例1示例11示
        例1示例1示例1示例1示
        例1示例1示例1示例1示
        例1示例1示例1示例1示1示例示例1
        例1示例1示例1示例示例1示例1示例1示
        例1示例1示例1示例232`,
        star: 23,
        link: 'https://github.com/RSS1102',
    }
]
// 自动计算页面高度
nextTick(() => {
    const header = document.querySelector('header')
    const engineerList = document.getElementById('engineer-list')
    engineerList!.style.minHeight = `${window.innerHeight - header!.clientHeight - 1}px`
})
</script>

<style lang='scss' scoped>

</style>