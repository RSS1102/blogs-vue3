<template>
<div class="blogs">
    <div><MMenu :menu="menuList" @click="setMenu"></MMenu></div>
    <div><MDivider vertical></MDivider></div>
    <div>{{ content }}</div>
</div>
</template>

<script setup lang='ts'>
import { MMenu, MDivider } from 'shuimo-ui'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const menuList = ref([{
    title: '示例111111111111111111111111111111',
    key: '示例111111111111111111111111111111',
    isActive: false,
    children: [{
        title: '示例111111111111111111111111111111',
        key: '示例111111111111111111111111111111',
        isActive: false
    }]
}, {
    title: '示例22222222222222222222222222222222',
    key: '示例22222222222222222222222222222222',
    isActive: false,
    children: [{
        title: '示例22222222222222222222222222222222',
        key: '示例22222222222222222222222222222222',
        isActive: false
    }]
}])
const content = ref('')
const setMenu = (index: number[]) => {
    index.forEach(i => {
        if (index.length > 1) {
            let m = menuList.value![index[0]]!.children![index[1]];
            router.push({
                query: {
                    blogs: m.key
                }
            })
            content.value = m.title
        }
    })
}
</script>
<style lang='scss' scoped>
.blogs {
    display: flex;
    min-height: calc(100vh - 60px);
}

:deep(.m-menu-left-line) {
    display: none
}

:deep(.m-menu-items) {
    margin-top: 0;
}

:deep(.m-cursor-pointer) {
    width: 260px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
