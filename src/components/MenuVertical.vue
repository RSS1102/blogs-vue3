<template>
  <div class="menu">
    <div v-for="menuItem in menuProps.menuArr" :class="[menuItem.isDisabled ? 'is-disabled' : 'menu-item',
    checkMenuItem === menuItem.key ? 'is-check' : '']" @click="menuOnclick(menuItem)">
      <div>{{ menuItem.isDisabled ? "🚧" : "" }} {{ menuItem.title }}</div>
    </div>
    <div class="toggle" @click="toggleDark()">
      <img class="dark" src="@/assets/imgs/global/dark.svg" v-if="isDark" />
      <img class="light" src="@/assets/imgs/global/light.svg" v-if="!isDark" />
    </div>
  </div>
  <MDivider></MDivider>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MDivider } from 'shuimo-ui';
import { useDark, useToggle } from '@vueuse/core';
const router = useRouter();

type MenuVertical = {
  title: string,
  key: string,
  isDisabled: boolean,
}

const menuProps = defineProps({
  menuArr: {
    type: Array<MenuVertical>,
  }
})

const checkMenuItem = ref()

router.afterEach((to, from) => {
  if (to.fullPath.match(/\/(\S*)\?/)) {
    // 截取"/"和"?"之间的字符串
    checkMenuItem.value = to.fullPath.match(/\/(\S*)\?/)![1];
  } else {
    checkMenuItem.value = to.fullPath.substring(1)
  }
})

const menuOnclick = (menuItem: MenuVertical) => {
  if (menuItem.isDisabled) return
  router.push(menuItem.key)
}

/**
 * @desc 暗黑模式切换
 * @doc [useDark](https://vueuse.org/core/useDark/)
 */
const isDark = useDark()

/**
 * @desc 布尔切换
 * @doc [useToggle](https://vueuse.org/shared/useToggle/)
 */
const toggleDark = useToggle(isDark)
</script>
<style lang="scss" scoped>
.menu {
  font-family: 'Open xxk', serif;
  font-size: 18px;
  display: flex;
  justify-content: right;
  padding: 12px 50px;
  border-radius: 4px;
  background: transparent;
}

.menu-item {
  padding: 4px;
  border-radius: 4px;
  margin: 0 24px;
  cursor: pointer;

  &:hover {
    background: #dcf2f8;
    ;
  }

  &:active {
    background: #dcf2f8;
    ;
    color: #97bbc5;
    ;
    user-select: none;
  }
}

.is-disabled {
  padding: 4px;
  border-radius: 4px;
  margin: 0 14px;
  background: #c5ccd2;
  color: #efefef;
  ;
  cursor: no-drop;
}

.is-check {
  border-bottom: 3px solid goldenrod;
}

.toggle {
  img {
    margin-left: 50px;
    border-radius: 28px;
    width: 28px;
  }

  .dark {
    background: rgb(198, 198, 198);
  }
}
</style>
