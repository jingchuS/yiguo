<template>
    <div class="detail"> 
        <div class="detailImg">
            <img v-bind:src="this.$route.query.item.SmallPic" alt="">
        </div>
        <p class="detailTxt">
            {{ this.$route.query.item.CommodityName }}
        </p>
        <div class="detailP">
            <div class="detailbor">{{ this.$route.query.item.PromotionTag }}</div>
            <div class="lihe">&nbsp;&nbsp;&nbsp;&nbsp;礼盒包装 赠礼自用皆宜</div>
        </div>
        <div class="detailPrice">
            <div class="dp1">
                ¥{{ this.$route.query.item.SellPrice }}
            </div>
            <div class="chandi">
                产地：<span class="chandiblack">{{ this.$route.query.item.origin }}</span>
            </div>
        </div>
        <p class="nop">
            不支持七天无理由退货
        </p>
        <div class="detailaddshopcar">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: {},
        }
    },
    computed: {
        // item: this.$route.query.item
    },
    beforeCreate() {
        this.item = this.$route.query.item
    }
}
</script>

<style>
.detail {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: white;
}
.detailImg img {
    width: 375px;
    height: 375px;
}
.detailTxt {
    width: 375px;
    height: 48px;
    font-size: 15px;
    padding-top: 10px;
    padding-left: 20px;
    background: white;
    border-top: 1px solid #ddd; 
}
.detailP {
    width: 375px;
    height: 44px;
    padding-top: 10px;
    padding-left: 5px;
    background: white;
    border-top: 1px solid #ddd; 
}
.detailbor {
    border: 1px solid #1fa44b;
    margin-left: 10px;
    width: 80px;
    height: 20px;
    font-size: 12px;
    color: #1fa44b;
    text-align: center;
    border-radius: 5px;
    float: left;
}
.lihe {
    width: 177px;
    height: 20px;
    float: left;
    margin-left: 100px;
}
.detailPrice {
    width: 100%;
    height: 40px;
    padding-top: 10px;
    line-height: 40px;
    background: white;
    border-top: 1px solid #ddd; 
}
.detailPrice div {
    float: left;
}
.dp1 {
    color: red;
    font-size: 15px;
    width: 280px;
    margin-left: 10px;
}
.chandi {
    color: #ccc;
    font-size: 12px;
    margin-left: -10px;
}
.nop {
    width: 100%;
    height: 30px;
    color: #ccc;
    background: white;
    text-align: center;
    line-height: 30px;
    margin-left: -35px;
    margin-top: 11px;
}
.chandiblack {
    color: black;
}
.detailaddshopcar {
    width: 100%;
    height: 40px;
}
</style>