<template>
  <MRicePaper>
    <div class="preload">
      <MBorder>
        <div @click="goHome" class="m-border-text">愿明天会比昨天更好！</div>
      </MBorder>
    </div>
  </MRicePaper>
</template>

<script setup lang="ts">
import { MRicePaper, MBorder } from 'shuimo-ui'
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => router.push({ name: 'home' })
</script>

<style lang="scss" scoped>
.m-rice-paper {
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: fadeIn 2.1s ease-in;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

}

.preload {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.m-border {
  width: 420px;
  margin-bottom: 120px;
  text-align: center;

  .m-border-text {
    font-size: 24px;
    font-weight: 600;
    padding: 20px 0;
  }
}
</style>
