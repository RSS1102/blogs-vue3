<template>
  <MRicePaper>
    <div class="preload">
      <div class="preload__icon-list">
        <Icon icon="skill-icons:github-dark" tooltip="github" @click="jumpLink('https://github.com/RSS1102')" />
        <Icon icon="skill-icons:twitter" tooltip="twitter" @click="jumpLink('https://twitter.com/Jimmy48375955')" />
        <Icon icon="fa-solid:at" color="#ffc65c" tooltip="email" @click="jumpLink('mailto:jimmyrss1102@gmail.com')" />
        <Icon icon="fa6-brands:bilibili" color="#1769aa" tooltip="bilibili"
          @click="jumpLink('https://space.bilibili.com/278380640')" />
        <Icon icon="ph:discord-logo-bold" color="#5865F2" tooltip="discord"
          @click="jumpLink('https://discord.gg/RhNg85HUMk')" />
      </div>
      <MBorder>
        <div @click="goHome" class="preload__border-text">愿明天会比昨天更好！</div>
      </MBorder>
      <div class="preload__avatar">
        <img :src="avatar" />
      </div>
    </div>
  </MRicePaper>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon/index.vue';
import { MRicePaper, MBorder } from 'shuimo-ui'
import { useRouter } from 'vue-router';
import avatar from "@/assets/imgs/preload/avatar.png";

const router = useRouter();

const goHome = () => router.push({ name: 'home' })

const jumpLink = (link: string) => window.open(link)
</script>

<style lang="scss" scoped>
.preload {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__icon-list {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }

  &__border-text {
    font-size: 24px;
    font-weight: 600;
    padding: 20px 0;
  }


  &__avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: rgba(200, 200, 200, 0.75);
      animation: avatarRotateAnimation 3s cubic-bezier(0.1, 0.79, 0.74, 1) 1;
    }
  }
}

.m-rice-paper {
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: fadeIn 2s ease-in;
  animation-fill-mode: forwards;
}

.m-border {
  width: 420px;
  text-align: center;
  user-select: none;
  animation: scaleDown 2.6s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

}

@keyframes scaleDown {
  0% {
    scale: 1.2;
  }

  100% {
    scale: 1;
  }

}

@keyframes avatarRotateAnimation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1080deg);
  }
}
</style>
