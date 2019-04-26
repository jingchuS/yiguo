<template>
    <div>
        <div class="classify-search">
            <input type="search" name="search" id="search" placeholder="请输入商品名称" maxlength="30" class="name">
            <p>搜索</p>
        </div>
        <div class="leftlistdiv">
            <!-- 左侧列表栏 -->
            <ul class="leftList" :lists="lists">
                <li :item="item" v-for="(item,index) of lists" :key="item.id">
                    <p class="a-txt" @click="clickTrue(item,index)" :class="(isTrue && item==prev)?'active':''">{{ item.name }}</p>
                </li>
            </ul>
            <!-- 右侧列表栏 -->
            <ul class="rightlist" :lists="lists">
                <li :item="item" v-for="item of fruitLists" :key="item.type_id">
                    <img v-bind:src="item.url" alt="">
                    <p>{{ item.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from '../../utils/http';
import { Indicator } from 'mint-ui';

export default {
    data() {
        return {
            lists: [],
            isTrue: false,
            prev: 100,
            fruitLists: [],
        }
    },
    async beforeCreate() {
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })
        setTimeout(function() {

        },1000);
        let result = await axios({
            method: 'get',
            url: './json/listfruit.json'
        })
        // let result1 = await axios({
        //     method: 'post',
        //     url: 'api/user/Area/GetCityList'
        // })
        // console.log(result1);
        this.lists = result.data;
        let item = 1;
        let index = 0;
        this.prev = 1;
        this.isTrue = true;
        this.clickTrue(item,index);
        Indicator.close();
    },
    methods: {
        clickTrue(item,index) {
            if (this.prev != item) {
                this.isTrue = true
            }
            if (this.prev == item) {
                this.isTrue = !this.isTrue
            }
            this.prev = item;
            this.fruitLists = this.lists[index].type;
        },
    },
}
</script>

<style>
.classify-search {
    background: white;
    width: 100%;
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
}
.classify-search input {
    float: left;
    width: 300px;
    height: 24px;
    margin-top: 8px;
    margin-left: 15px;
    background: #f4f4f4;
    border-radius: 20px;
    box-sizing: border-box;
    border: none;
    padding-left: 20px;
}
.classify-search p {
    float: left;
    font-size: 14px;
    color: #11B57C;
    margin-left: 10px;
}
.leftlistdiv {
    width: 375px;
    height: 576px;
}
.leftList {
    width: 83px;
    height: 576px;
    overflow-y: auto;
    background: #f4f4f4;
    float: left;
}
.leftList li{
    width: 83px;
    height: 53px;
    line-height: 53px;
    text-align: center;
}
.a-txt {
    color: black;
    font-size: 12px;
    display: block;
    width: 83px;
    height: 53px;
}
.active {
    border-left: 2px solid  #11b57c;
    color: #11B57C;
    background: white;
}
.rightlist {
    width: 292px;
    height: 576px;
    float: right;
    background: white;
    overflow-y: auto;
}
.rightlist li {
    width: 83px;
    height: 96px;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
}
.rightlist li img {
    width: 57px;
    height: 57px;
    margin-left: 10px;
}
.rightlist li p {
    font-size: 12px;
    text-align: center;
    line-height: 25px;
}
</style>
