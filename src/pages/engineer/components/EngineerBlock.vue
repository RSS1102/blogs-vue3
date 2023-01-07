<template>
    <div class="engineer">
        <div class="engineer-title">
            <div class="engineer-title-text"> {{ props.engineerTitle }}</div>
            <div class="engineer-title-star">
                <img src="@/assets/imgs/engineer/star.png" />
                <span class="star-num">{{ props.engineerStar }}</span>
            </div>
        </div>
        <div class="engineer-content">{{ props.engineerContent }}</div>
        <div class="engineer-footer">
            <MDivider />
            <div class="engineer-footer-item">
                <a :href="props.engineerLink" class="engineer-footer-link" target="_blank">详情>>></a>
                <div class="engineer-footer-time">
                    <div>Last contact : 2023-01-01 12:12</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { MDivider } from "shuimo-ui";
const props = defineProps({
    engineerTitle: String,
    engineerContent: String,
    engineerStar: Number,
    engineerLink: String,
})
</script>

<style lang='scss' scoped>
.engineer {
    min-height: 210px;
    width: 310px;
    border: 3px solid rgb(100, 100, 100);
    border-radius: 5px;
    display: inline-block;
    transition: transform 0.75s;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
    background: rgba(255, 255, 255, 0.5);
    margin: 25px;
    position: relative;

}

.engineer-title {
    font-size: 20px;
    border-bottom: 3px solid rgb(100, 100, 100);
    border-radius: 10%;
    line-height: 42px;
    display: flex;
    align-items: center;

    .engineer-title-text {
        font-weight: bold;
        // 自动换行
        overflow-wrap: break-word;
        // 单行省略
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-indent: 32px;
    }

    .engineer-title-star {
        display: flex;
        align-items: center;
        margin-left: 5px;
        font-size: 18px;

        img {
            width: 30px;
        }

        .star-num {
            width: 45px;
        }
    }
}

.engineer-content {
    text-indent: 32px;
    margin: 10px 0;
    // 自动换行
    overflow-wrap: break-word;
    // 多行省略
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}

.engineer-footer {
    width: 310px;
    padding: 2px 0px;
    position: absolute;
    bottom: 2px;

    .engineer-footer-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .engineer-footer-link {
        padding: 5px;
    }

    .engineer-footer-time {
        font-size: 12px;
        margin: 0 10px;
    }

}

// 子控制父hover
.engineer:has(.engineer-content:hover) {
    transform: rotate3d(0, 1, 0, 45deg);
}
</style>