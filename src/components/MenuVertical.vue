<template>
  <div class="menu">
    <div v-for="menuItem in menuProps.menuArr" :class="[menuItem.isDisabled ? 'is-disabled' : 'menu-item',
checkMenuItem === menuItem.key ? 'is-check' : '']"
      @click="menuOnclick(menuItem)">
      <div>{{ menuItem.isDisabled ? "🚧" : "" }} {{ menuItem.title }}</div>
    </div>
  </div>
  <MDivider></MDivider>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MDivider } from 'shuimo-ui';
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
  checkMenuItem.value = to.fullPath.substring(1)
})

const menuOnclick = (menuItem: MenuVertical) => {
  if (menuItem.isDisabled) return
  router.push(menuItem.key)
  checkMenuItem.value = menuItem.key
}

</script>
<style lang="scss" scoped>
.menu {
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
</style>
