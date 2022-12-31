<template>
    <div class="menu">
    <div v-for="children in props.menuArr" class="menu-children" @click="setUp(children.key, children.children, children.disabled)">
        <div class="menu-children-label" :class="[children.disabled ? 'menu-disabled' : '']">
            <img src="@/assets/imgs/blogs/up.svg" :class="[getUp(children.key) ? 'img-up' : 'img-down']"/>
            {{ children.label }}
        </div>
        <div v-for="item in children.children" class="menu-item" v-show="getUp(children.key)">
            <div class="menu-item-label">{{ item.label }}</div>
        </div>
    </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

type MenuHorizontalItem = {
    label: string,
    key: string,
    disabled?: boolean,
}
type MenuHorizontal = {
    label: string,
    key: string,
    disabled?: boolean,
    children?: MenuHorizontalItem[]
}
const props = defineProps({
    menuArr: {
        type: Array<MenuHorizontal>,
        default: []
    }
})

type IsUpArr = {
    key: string,
    isUp: boolean
}
const isUparr = ref<IsUpArr[]>([])
if (props.menuArr.length > 0) {
    isUparr.value = props.menuArr.map(i => { return { key: i.key, isUp: false } })
}
const getUp = (index: string) => {
    for (let i of isUparr.value) {
        if (i.key === index) {
            return i.isUp
        }
    }
}

const setUp = (index: string, children: MenuHorizontalItem[] | undefined, disabled: boolean | undefined) => {
    if (!children || disabled) return
    isUparr.value.map(i => {
        if (i.key === index) {
            i.isUp = !i.isUp
        }
    })
}

</script>

<style lang='scss' scoped>
.menu {
    display: inline-block;
}

.menu-children-label,
.menu-item-label {
    margin: 0 2px;
    width: 260px;
    border: 1px solid rgb(120, 120, 120);
    border-radius: 1px;
    border-collapse: collapse;
    text-indent: 6px;
    user-select: none;
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.menu-children-label {
    cursor: pointer;
    font-size: 22px;

    img {
        width: 10px;
        user-select: none;
    }
}

.menu-disabled {
    color: rgb(180, 180, 180);
}

.menu-item-label {
    text-indent: 22px;
}

@keyframes img-up {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(180deg);
    }
}

@keyframes img-down {
    from {
        transform: rotate(180deg);
    }

    to {
        transform: rotate(0);
    }
}

.img-up {
    animation: 0.5s forwards img-up;
}

.img-down {
    animation: 0.5s forwards img-down;
}
</style>