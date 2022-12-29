<template>
    <MRicePaper>
        <div class="main">
            <div class="left">
                <img src="@/assets/imgs/home/avatar.jpg" @click="goGithub" />
                <div class="describe">偶尔卷一卷~🔥</div>
                <MDivider />
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
    </MRicePaper>
    <Footer></Footer>
</template>
<script setup lang="ts">
import Footer from '@/layout/footer.vue'
import { MRicePaper, MDivider, MBorder } from 'shuimo-ui'
const goGithub = () => {
    window.open("https://github.com/RSS1102", "_blank");
}

</script>
<style lang="scss" scoped>
.main {
    height: calc(100vh - 130px);
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

    img {
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
        margin: 18px 0 0 12px;
        text-indent: 18px;
    }
}
</style>
