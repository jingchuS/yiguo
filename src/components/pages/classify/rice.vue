<template>
    <div class="rice">
        <!-- top -->
        <ul class="rice-top">
            <li>
                <img src="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png" alt="">
                <p>做美食</p>
            </li>
            <li>
                <img src="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119693140_120x96.png" alt="">
                <p>涨知识</p>
            </li>
            <li>
                <img src="http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png" alt="">
                <p>生活家</p>
            </li>
            <li>
                <img src="http://img09.yiguoimg.com/e/ad/2017/170117/586030927703745073_120x96.png" alt="">
                <p>爱试吃</p>
            </li>
        </ul>
        <!-- content -->
        <div class="contentrice" :ricelists="ricelists">
            <div class="contentItem" :item="item" v-for="item of ricelists" :key="item.id">
                <div class="item-img">
                    <div class="p-position">
                        <p class="p-left">{{ item.OtherCategoryName }}</p>
                        <p class="p-right">
                            <svg t="1555481640676" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2311" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M515.2 224c-307.2 0-492.8 313.6-492.8 313.6s214.4 304 492.8 304 492.8-304 492.8-304S822.4 224 515.2 224zM832 652.8c-102.4 86.4-211.2 140.8-320 140.8s-217.6-51.2-320-140.8c-35.2-32-70.4-64-99.2-99.2-6.4-6.4-9.6-12.8-16-19.2 3.2-6.4 9.6-12.8 12.8-19.2 25.6-35.2 57.6-70.4 92.8-102.4 99.2-89.6 208-144 329.6-144s230.4 54.4 329.6 144c35.2 32 64 67.2 92.8 102.4 3.2 6.4 9.6 12.8 12.8 19.2-3.2 6.4-9.6 12.8-16 19.2C902.4 585.6 870.4 620.8 832 652.8z" p-id="2312"></path><path d="M512 345.6c-96 0-169.6 76.8-169.6 169.6 0 96 76.8 169.6 169.6 169.6 96 0 169.6-76.8 169.6-169.6C681.6 422.4 604.8 345.6 512 345.6zM512 640c-67.2 0-121.6-54.4-121.6-121.6 0-67.2 54.4-121.6 121.6-121.6 67.2 0 121.6 54.4 121.6 121.6C633.6 582.4 579.2 640 512 640z" p-id="2313"></path></svg>
                            {{ item.Hint }}
                        </p>
                    </div>
                    <img :src="item.PictureUrl" alt="">
                </div>
                <p class="p-text">{{ item.EfruitArticleTitle }}</p>
                <div class="item-bottom">
                    <p>
                        <img src="http://img12.yiguoimg.com/d/albums/2019/190404/153403925804623492_640.jpg" alt="">
                    </p>
                    <p class="bottom-text">
                        <span>{{ item.PublishedTimed }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../utils/http';

export default {
    data() {
        return {
            ricelists: [],
        }
    },
    async beforeCreate() {
        let result = await axios({
            method: 'get',
            url: './json/rice.json'
        })
        this.ricelists = result.data;
    },
}
</script>

<style>
/* top */
.rice-top {
    width: 100%;
    height: 93px;
    background: white;
    border-bottom: 1px solid #f4f4f4; 
}
.rice-top li {
    float: left;
    margin-top: 20px;
    width: 70px;
    margin-left: 10px;
}
.rice-top li img {
    width: 40px;
    height: 32px;
    margin-left: 15px;
}
.rice-top li p {
    font-size: 14px;
    color: #808080;
    line-height: 20px;
    text-align: center;
    margin-top: 5px;
}
/* contentrice */
.contentrice {
    width: 100%;
    height: 530px !important;
    margin-top: 5px;
    border-top: 1px solid #f4f4f4;
    overflow-y: auto;
}
.contentrice .contentItem {
    background: white;
    width: 100%;
    height: 296px;
    margin-bottom: 10px;
    border-bottom: 1px solid #f6f6f6; 
    border-top: 1px solid #f6f6f6; 
}
.item-img {
    position: relative;
}
.item-img img {
    width: 355px;
    height: 151px;
    margin-left: 10px;
}
.p-position {
    position: absolute;
    z-index: 99;
}
.p-position .p-left {
    float: left;
    width: 52px;
    height: 23px;
    margin-left: 10px;
    margin-top: 10px;
    background: #ff6b22;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    line-height: 23px;
    color: white;
    padding-left: 2px;
}
.p-position .p-right {
    float: left;
    width: 62px;
    height: 17px;
    margin-left: 230px;
    margin-top: 10px;
    background: white;
    opacity: 0.85;
    border-radius: 20px;
    text-align: center;
    line-height: 17px;
    font-size: 12px;
    color: #656565;
}
.p-text {
    width: 355px;
    height: 58px;
    font-size: 18px;
    padding-left: 10px;
    margin-top: 5px;
}
.item-bottom {
    margin-top: 20px;
    border-top: 1px solid #f3f3f3;
}
.item-bottom p {
    width: 120px;
    height: 57px;
    float: left;
}
.item-bottom img {
    width: 34px;
    height: 34px;
    margin-top: 10px;
    margin-left: 10px;
}
.bottom-text {
    font-size: 13px;
    color: #8d8a8a;
    line-height: 57px;
    margin-left: 128px;
}
</style>
