<template>
    <div id="main">
        <div class="left">
            <img class="avatar" src="@/assets/imgs/home/avatar.jpg" />
            <div class="describe">偶尔卷一卷~🔥</div>
            <MDivider />
            <div class="contact-information">
                <a href="https://github.com/RSS1102" target="_blank">
                    <img src="@/assets/imgs/home/github.png" />
                </a>
                <a href="mailto:`jimmyrss1102@gmail.com`" target="_blank">
                    <img src="@/assets/imgs/home/gmail.png" />
                </a>
            </div>
            <div class="self-introduction">
                是一个只会点前端技术的小书童，
                如果您想了解我更多，
                可以点击头像查看我的github获得更多的信息。
            </div>
        </div>
        <MDivider vertical />
        <div class="center">
            <MBorder>
                <div class="m-border-text">愿明天会比昨天更好！</div>
            </MBorder>
        </div>
        <MDivider vertical />
        <div class="right">...</div>
    </div>
    <Footer></Footer>
</template>
<script setup lang="ts">
import Footer from '@/layout/footer.vue'
import { MDivider, MBorder } from 'shuimo-ui'
import { nextTick } from 'vue';

// 自动计算页面高度
nextTick(() => {
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    const main = document.getElementById('main')

    main!.style.height = `${window.innerHeight - header!.clientHeight -
        footer!.clientHeight - 1}px`
})
</script>
<style lang="scss" scoped>
#main {
    display: flex;
}

.left,
.right {
    width: 400px;
}

.center {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes avatar-move {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(3turn);
        }
    }

    .m-border {
        width: 420px;
        margin-bottom: 120px;
        text-align: center;
        box-shadow: 12px 12px 2px 1px rgba(113, 30, 30, 0.2);
        user-select: none;
    }

    .m-border-text {
        font-family: 'Open Yr-Xk', serif;
        font-size: 42px;
        padding: 20px;
    }

}

.left {
    display: flex;
    align-items: center;
    flex-direction: column;

    .avatar {
        width: 180px;
        border-radius: 50%;

        &:hover {
            animation: 1s forwards avatar-move;
        }
    }

    .describe {
        margin: 5px;
        font-weight: bold;

    }

    .self-introduction {
        margin-top: 12px;
        text-indent: 18px;
    }

    .contact-information img {
        width: 36px;
        margin: 10px;
    }
}
</style>
