<template>
    <div class="main">
        <div class="left">
            <img src="@/assets/avatar.png" />
            <div class="describe">偶尔卷一卷~🔥</div>
            <div class="self-introduction">
                目前只是一个只会点前端技术的小书童.如果您想了解我,可以查看我的
                <a href="https://github.com/RSS1102" target="_blank">github</a>,获得更多的信息。
            </div>
        </div>
        <div class="center">2</div>
        <div class="right">3</div>
    </div>
    <Footer></Footer>
</template>
<script setup lang="ts">
import Footer from '@/layout/footer.vue'

</script>
<style lang="scss" scoped>
.main {
    height: calc(100vh - 130px);
    display: flex;
}

.left,
.right {
    width: 20vw;
}

.center {
    width: 80vw;
}

.left {
    border-right: 1px solid #000;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        width: 180px;
        border-radius: 45px;
    }

    .describe {
        margin: 5px;
        font-weight: bold;

    }

    .self-introduction {
        margin-top: 18px;
        text-indent: 18px;
    }
}
.right{
    border-left: 1px solid #000;
}
</style>
