<template>
  <div class="menu-border">
    <div class="menu">
      <div v-for="menuItem in menuProps.menuArr" :class="[menuItem.isDisabled ? 'is-disabled' : 'menu-item']"
        @click="menuOnclick(menuItem)">
        <div>{{ menuItem.title }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
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
.menu-border {
  display: flex;
  justify-content: center;
  margin: 14px 0;
}

.menu {
  display: flex;
  padding: 6px 24px;
  border-radius: 4px;
  background: rgb(129, 124, 124);
}

.menu-item {
  padding: 4px;
  border-radius: 4px;
  margin: 0 14px;
  background: rgb(149, 216, 247);
  cursor: pointer;

  &:hover {
    background: rgb(95, 157, 255);
  }

  &:active {
    background: rgb(95, 157, 255);
    color: white;
    user-select: none;
  }
}

.is-disabled {
  padding: 4px;
  border-radius: 4px;
  margin: 0 14px;
  background: rgb(255, 255, 255);
  color: rgb(93, 93, 93);
  cursor: no-drop;
}
</style>
