<template>
    <div class="choose-city">
        <p class="hot">热门城市</p>
        <ul :hotcity="hotcity" class="hotcity">
            <li class="itemCity" :item="item" v-for="item of hotcity" :key="item.AreaId" @click="switchCity(item)">{{ item.AreaName }}</li>
        </ul>
        <div :citylists="citylists">
            <div class="citylists" :item="item" v-for="item of citylists" :key="item.FirstLetter">
                <p class="list-p">
                    {{ item.FirstLetter }}
                </p>
                <ul class="list-city">
                    <li class="list-city-item" 
                        :item1="item1" 
                        v-for="item1 of item.citylist" 
                        :key="item1.AreaId"
                        @click="switchCityList(item1)"
                    >
                        {{ item1.AreaName }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../utils/http';
export default {
    data() {
        return {
            hotcity: [],
            citylists: [],
            citylistfor: [],
            cityitem: '',
        }
    },
    async beforeCreate() {
        let result = await axios({
            method: 'get',
            url: './json/hostcity.json',
        })
        this.hotcity = result.data;

        let result1 = await axios({
            method: 'get',
            url: './json/citylist.json',
        })
        this.citylists = result1.data;
    },
    methods:{
        switchCity(item) {
            this.cityitem = item.AreaName;
            this.commitSwitchCity();
            this.$router.push({
                path: '/home',
            })
        },
        commitSwitchCity() {
            this.$store.commit('switchCity', {
                cityitem: this.cityitem,
            })
        },
        switchCityList(item1) {
            this.cityitem = item1.AreaName;
            this.commitSwitchCity();
            this.$router.push({
                path: '/home',
            })
        }
    }
}
</script>

<style>
.choose-city {
    background: #f4f4f4;
    overflow-y: auto;
    height: 617px;
}
.hot {
    width: 100%;
    height: 40px;
    background: #f4f4f4;
    color: #333;
    font-size: 13px;
    line-height: 40px;
    padding-left: 20px;
}  
.hotcity {
    width: 100%;
    height: 230px;
    background: #f4f4f4;
}
.itemCity {
    width: 72px;
    height: 28px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 5px;
    text-align: center;
    line-height: 28px;
    margin-left: 25px;
    margin-top: 10px;
    margin-right: 25px;
    float: left;
}
.list-p {
    background: #f4f4f4;
    width: 100%;
    height: 40px;
    color: #385c9a;
    font-size: 14px;
    font-weight: 700;
    padding-left: 20px;
    padding-top: 10px;
}
.list-city {
    width: 100%;
    height: 100%;
    background: white;
    overflow: hidden;
}
.list-city-item {
    color: #333;
    width: 125px;
    height: 48px;
    font-size: 13px;
    padding-left: 35px;
    line-height: 28px;
    text-align: center;
    padding-top: 10px;
    padding-right: 20px;
    background: white;
    float: left;
}
</style>