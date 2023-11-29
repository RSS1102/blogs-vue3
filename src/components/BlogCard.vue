<template>
  <div class="blogs-card">
    <img class="blogs-card__head-img" :src="props.headImg" />
    <div>
      <div class="blogs-card__tag"></div>
      <div class="blogs-card__title"></div>
      <div class="blogs-card--footer">
        <div class="blogs-card__time"></div>
        <div class="blogs-car__time"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "标题",
  },
  tag: {
    type: String,
  },
  time: {
    type: String,
  },
  headImg: {
    type: String,
  },
});

</script>

<style scoped lang="scss">
.blogs-card {
  &__head-img {
    width: 100%;
    height: 200px;
  }

  &__tag {}

  &__title {}

  &--footer {
    &__time {}

  }

}
</style>