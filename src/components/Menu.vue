<template>
  <div class="menu">
    <div v-for="menuItem in menuProps.menuArr" :class="[menuItem.isDisabled ? 'is-disabled' : 'menu-item']"
      @click="menuOnclick(menuItem)">
      <div>{{ menuItem.title }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
interface MenuItem {
  title: string;
  key: string;
  isDisabled: boolean;
}

const menuProps = defineProps({
  menuArr: {
    type: Array<MenuItem>,
  }
})
const menuOnclick = (menuItem: MenuItem) => {
  if (menuItem.isDisabled) return
  router.push(menuItem.key)
}

</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 4px;
  background: #23b7e5;
}

.menu-item {
  padding: 4px;
  border-radius: 4px;
  margin: 0 24px;
  background: rgb(149, 216, 247);
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
  background: rgb(255, 255, 255);
  color: #e2e2e2;
  ;
  cursor: no-drop;
}
</style>
