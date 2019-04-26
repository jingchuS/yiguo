<template>
    <div class="shopCar">
        <!-- 头部 -->
        <p class="ptop">
            <span class="logintxt">登录可同步购物车内商品</span>
            <span class="login">登录</span>
        </p>
        <div class="baoyou">
            全场满100元包邮，还差<span>100.00</span>元包邮
        </div>
        <!-- 购物车  无商品时-->
        <div class="shopcar" v-show="istrue">
            <div>
                <img src="../../../assets/img/shopcar.png" alt="">
            </div>
            <p class="shopcartxt">购物车空空的，快去逛逛吧！</p>
            <div>
                <a href="javascript:;" class="goshop" @click="goshop">去逛逛</a>
            </div>
        </div>
        <!-- 购物车  有商品时 -->
        <ul class="ifgoods" :goodsarr="goodsarr">
            <li :item="item" v-for="(item,index) of goodsarr" :key="item.CommodityId" ref="" data-id="">
                <div class="ifgoodsdiv1">
                    <div class="check" :class="checkactive?'checkactive':''" @click="check">
                        <svg t="1555913300283" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5264" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><path d="M416.832 798.08C400.64 798.08 384.512 791.872 372.16 779.52L119.424 525.76C94.784 500.992 94.784 460.8 119.424 436.032 144.128 411.264 184.128 411.264 208.768 436.032L416.832 644.928 814.4 245.76C839.04 220.928 879.04 220.928 903.744 245.76 928.384 270.528 928.384 310.656 903.744 335.424L461.504 779.52C449.152 791.872 432.96 798.08 416.832 798.08Z" p-id="5265" fill="#ffffff"></path></svg>
                    </div>
                </div>
                <div class="ifgoodsdiv2">
                    <img :src="item.SmallPic" alt="">
                </div>
                <div class="ifgoodsdiv3">
                    <p class="p1">{{ item.CommodityName }}</p>
                    <p class="p2">¥ {{ item.SellPrice }}</p>
                </div>
                <div class="ifgoodsdiv4">
                    <p class="p1">
                        <img src="../../../assets/img/delete.png" alt="" @click="removegood(item,index)">
                    </p>
                    <p class="p2">
                        <span class="reduce" @click="reducegood(item,index)">-</span>
                        <span class="num">{{ item.num }}</span>
                        <span class="addd" @click="addgood(item)">+</span>
                    </p>
                </div>
            </li>
        </ul>
        <!-- 猜你喜欢 -->
        <p class="like"> —· 猜你喜欢 ·—</p>
        <!-- 商品 -->
        <ul class="shops" :shops="shops">
            <li :item="item" v-for="item in shops" :key="item.CommodityId">
                <img :src="item.SmallPic" alt="">
                <p class="shopsPtxt">{{ item.CommodityName }}</p>
                <p class="shopsPrice">
                    <span class="price">¥ {{ item.OriginalPrice }} </span>
                    <span class="add" @click="addgoods(item)">+</span>
                </p>
            </li>
        </ul>
        <!-- 固定定位在下面的 合计 -->
        <div class="count">
            <div class="countLeft">
                <div class="select ">
                    <span class="selectImg">
                        <img src="../../../assets/img/ban.png" alt="" v-show="selectBan" @click="select">
                        <img src="../../../assets/img/check.png" alt="" v-show="selectTrue" @click="select">
                    </span>
                    <span class="selectSpan">全选</span>
                </div>
                <div class="countp">
                    <p class="countp1">
                        <span class="span1">合计(不含运费)：</span>
                        <span class="span2">¥ {{ pri }}</span>
                    </p>
                    <p class="countp2">
                        <span>已优惠：</span>
                        <span>¥ 0.00</span>
                    </p>
                </div>
            </div>
            <!-- <router-link to="/login"> -->
                <div class="countRight" :class="selectTrue?'countrightAcitive':''">去结算</div>
            <!-- </router-link> -->
        </div>
        <!-- 固定在下面的留白 -->
        <div class="white"></div>
        <!-- 蒙版 -->
        <div class="mengban" v-show="isyiguo">
            <img src="../../../assets/img/yiguo.gif" alt="">
        </div>
    </div>
</template>

<script>
import axios from '../../utils/http.js';
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            shops: [],
            goods: [],
            goodsobj: {},
            goodsarr: [],
            istrue: true,
            isyiguo: false,
            checkactive: false,
            selectBan: true,
            selectTrue: false,
            price: 0.00,
            num: 1,
            pri: 0.00,
        }
    },
    async beforeCreate() {
        let result = await axios({
            method: 'get',
            url: './json/shops.json',
        })
        this.shops = result.data;
    },
    watch: {
        goodsarr: 'selectImg',
    },
    methods:{
        goshop(){
            this.$router.push({
                path: '/home',
            })
        },
        addgoods(item) {
            this.yiguo();
            this.istrue = false;
            this.goods.push(item);
            const objgoods = {};
            const arrgoods = [];
            for (let i = 0; i < this.goods.length; i += 1 ) {
                const id = this.goods[i].CommodityId;
                if(objgoods[id]) {
                    objgoods[id] += 1;
                    this.goods[i].num += 1;
                    this.num = this.goods[i].num;
                } else {
                    this.goods[i].num = 1;
                    arrgoods.push(this.goods[i]);
                    objgoods[id] = 1;
                }
            }
            this.goodsobj = objgoods;
            this.goodsarr = arrgoods;
            var price = item.SellPrice;
            this.price = this.price + price;
            var pri = this.price.toFixed(2);
            this.pri = pri;
        },
        yiguo() {
            this.isyiguo = true;
            var that = this;
            setTimeout(function() {
                that.isyiguo = false;
            },1000)
        },
        removegood(item,index) {
            this.price = this.price - item.num*item.SellPrice;
            this.goodsarr.splice(index,1);
            for(let i=0; i<this.goods.length; i++) {
                if(item == this.goods[i]) {
                    this.goods.splice(i,1);
                }
            }
            if(this.goodsarr.length == 0) {
                this.goods = [];
                this.pri = 0.00;
            }
        },
        addgood(item) {
            item.num += 1;
            this.num = item.num;
        },
        reducegood() {
            
        },
        check() {
            this.checkactive = !this.checkactive;
        },
        select() {
            
        },
        selectImg() {
            if(this.goodsarr.length == 0) {
                this.selectBan = true;
                this.selectTrue = false;
            } else {
                this.selectBan = false;
                this.selectTrue = true;
            }
            this.selectAll();
        },
        selectAll() {
            if(this.selectTrue == true) {
                this.checkactive = true;
            }
        },
    }
}
</script>

<style>
.shopCar {
    width: 100%;
    height: 617px;
    overflow-y: auto;
}
.ptop {
    width: 100%;
    height: 40px;
    text-align: center;
    background: white;
}
.logintxt {
    color: #808080;
    line-height: 40px;
    font-size: 13px;
    margin-left: 65px;
    font-weight: 700;
}
.login {
    display: block;
    color: #808080;
    width: 54px;
    height: 21px;
    text-align: center;
    font-size: 13px;
    float: right;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 65px;
}
.baoyou {
    width: 100%;
    height: 40px;
    padding: 0 0 0 20px;
    box-sizing: border-box;
    background: #fff9eb;
    line-height: 40px;
    font-size: .38rem;
    color: #d3b162;
    z-index: 100;
    font-size: 13px;
    border-top: 1px solid #d3b169; 
    border-bottom: 1px solid #d3b169; 
}
.baoyou span {
    color: red;
}
.shopcar {
    width: 100%;
    height: 315px;
    background: white;
    margin-top: 10px;
    border-bottom: 1px solid #ddd;
}
.shopcar img {
    width: 108px;
    height: 108px;
    margin-top: 50px;
    margin-left: 120px;
}
.shopcartxt {
    width: 100%;
    height: 63px;
    line-height: 63px;
    font-size: 13px;
    text-align: center;
    color: #808080;
}
.goshop {
    position: relative;
    display: inline-block;
    width: 138px;
    height: 38px;
    border: 1px solid #11b57c;
    border-radius: 6px;
    line-height: 38px;
    font-size: 15px;
    color: #11b57c;
    text-align: center;
    margin-left: 116px;
}
.like {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: white;
    margin-top: 10px;
}
.shops {
    width: 100%;
    height: auto;
    overflow: hidden;
    background: white;
    margin-bottom: 10px;
}
.white {
    width: 100%;
    height: 39px;
}
.shops li {
    width: 181px;
    height: 217px;
    float: left;
    margin-left: 5px;
}
.shops li img {
    width: 150px;
    height: 150px;
    margin-left: 15px;
}
.shopsPtxt {
    width: 150px;
    height: 34px;
    line-height: 17px;
    font-size: 12px;
    margin-left: 15px;
    padding-left: 3px;
}
.shopsPrice {
    width: 150px;
    height: 24px;
    margin-left: 15px;
    line-height: 24px;
    font-weight: 700;
    margin-top: 5px;
    padding-left: 3px;
}
.price {
    color: red;
}
.add {
    display: inline-block;
    font-size: 18px;
    width: 24px;
    height: 24px;
    border: 1px solid #11b57c;
    border-radius: 50%;
    color: #11b57c;
    text-align: center;
    line-height: 20px;
    margin-left: 50px;
}
.count {
    width: 100%;
    height: 48px;
    position: fixed;
    bottom: 50px;
}
.countLeft {
    width: 267px;
    height: 48px;
    float: left;
    background: white;
    border-top: 1px solid #ddd;
}
.countRight {
    width: 108px;
    height: 49px;
    background: #ccc;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 48px;
    float: right;
}
.countrightAcitive {
    background: red;
}
.select {
    width: 64px;
    height: 48px;
    margin-left: 10px;
    line-height: 48px;
    float: left;
}
.selectImg img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
}
.selectSpan {
    font-size: 12px;
}
.countp {
    width: 190px;
    height: 48px;
    float: left;
}
.countp1 {
    width: 190px;
    height: 24px;
    line-height: 20px;
    font-size: 13px;
    padding-left: 30px;
    padding-top: 5px;
}
.countp1 .span1 {
    color: #333;
}
.countp1 .span2 {
    color: red;
    font-weight: 700;
}
.countp2 {
    width: 190px;
    height: 24px;
    line-height: 20px;
    font-size: 12px;
    color: #999;
    padding-left: 82px;
    font-weight: 700;
}
.ifgoods {
    width: 100%;
    height: auto;
}
.ifgoods li {
    width: 100%;
    height: 105px;
    margin-top: 10px;
    background: white;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}
.ifgoodsdiv1 {
    width: 36px;
    height: 81px;
    float: left;
    margin-top: 10px;
}
.check {
    text-align: center;
    line-height: 0px;
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-top: 31px;
    margin-left: 10px;
    background: white;
}
.checkactive {
    background: #11b57c;
}
.ifgoodsdiv2 {
    width: 81px;
    height: 81px;
    float: left;
}
.ifgoodsdiv2 img {
    width: 81px;
    height: 81px;
    margin-top: 10px;
}
.ifgoodsdiv3 {
    width: 145px;
    height: 100px;
    float: left;
}
.ifgoodsdiv3>.p1 {
    width: 145px;
    height: 34px;
    line-height: 17px;
    margin-top: 10px;
    padding-left: 15px;
}
.ifgoodsdiv3>.p2 {
    color: red;
    font-weight: 700;
    margin-top: 30px;
    border: none;
}
.ifgoodsdiv4 {
    width: 80px;
    height: 81px;
    float: left;
}
.ifgoodsdiv4>.p1 {
    padding-top: 30px;
    padding-right: 0px;
    width: 80px;
    height: 20px;
    line-height: 20px;
    text-align: right;
}
.ifgoodsdiv4>.p1>img {
    width: 21px;
    height: 21px;
    margin-right: -15px;
}
.ifgoodsdiv4>.p2 {
    width: 80px;
    height: 22px;
    border: none;
    color: #333;
    margin-top: 40px;
    margin-left: 20px;
}
.ifgoodsdiv4>.p2 .reduce {
    display: inline-block;
    width: 21px;
    height: 21px;
    text-align: center;
    line-height: 18px;
    border: 1px solid #ddd;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}
.ifgoodsdiv4>.p2 .num {
    display: inline-block;
    width: 35px;
    height: 21px;
    text-align: center;
    line-height: 18px;
    border-top: 1px solid #ddd; 
    border-bottom: 1px solid #ddd; 
}
.ifgoodsdiv4>.p2 .addd {
    display: inline-block;
    width: 21px;
    height: 21px;
    text-align: center;
    line-height: 18px;
    border: 1px solid #ddd;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.mengban {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    z-index: 999;
}
.mengban img {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 40%;
    left: 40%;
    z-index: 1000;
    opacity: 1;
    background: white;
    border-radius: 10px;
}
</style>