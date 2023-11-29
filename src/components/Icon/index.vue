<template>
  <MPopover hover>
    <Icon :color="props.color" :icon="props.icon" :style="{ fontSize: props.size + 'px' }" class="icon" />
    <template #content>
      {{ props.tooltip }}
    </template>
  </MPopover>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { MPopover } from 'shuimo-ui'
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 38
  },
  color: {
    type: String,
    default: '#000'
  },
  tooltip: {
    type: String,
    default: ''
  }
})

</script>

<style scoped lang="scss">
.icon {
  margin: 0 10px;
}

:deep(.m-border-main),
:deep(.m-popover-content) {
  text-align: center;
  width: 100px;
}
</style>