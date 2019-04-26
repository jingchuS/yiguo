<template>
    <div class="header">
        <div class="city">
            <router-link to="/city" class="citylist">
                {{ cityitem }}
            </router-link>
            <span>
                <svg t="1553989489884" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                    p-id="1101" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" fill="white">
                <path d="M882.9 277.2c-15.2-12.7-38-10.7-50.7 4.4L512 663.2 191.8 281.6c-12.7-15.2-35.6-17.2-50.7-4.4-15.2 12.7-17.2 35.6-4.4 
                50.7l347.7 414.4 0.3 0.3 0.6 0.6c0.2 0.2 0.4 0.5 0.7 0.7l0.6 0.6 0.7 0.7c0.2 0.2 0.4 0.4 0.6 0.5 0.3 0.2 0.5 0.5 0.8 0.7 0.1 0.1 
                0.2 0.2 0.3 0.2 0.1 0.1 0.2 0.2 0.4 0.3 0.2 0.2 0.5 0.4 0.7 0.6 0.3 0.2 0.5 0.4 0.8 0.6 0.2 0.1 0.4 0.3 0.6 0.4 0.3 0.2 0.7 0.5 1 
                0.7 0.1 0.1 0.3 0.2 0.4 0.2 0.4 0.3 0.8 0.5 1.3 0.8l0.1 0.1c4.6 2.6 9.6 4.1 14.7 4.6h0.2c0.5 0 0.9 0.1 1.4 0.1h3.2c0.5 0 0.9-0.1 
                1.4-0.1h0.2c5.1-0.4 10.1-2 14.7-4.6l0.1-0.1c0.4-0.2 0.8-0.5 1.3-0.8 0.1-0.1 0.3-0.2 0.4-0.2 0.3-0.2 0.7-0.4 1-0.7 0.2-0.1 0.4-0.3 
                0.6-0.4 0.3-0.2 0.5-0.4 0.8-0.6 0.2-0.2 0.5-0.4 0.7-0.6 0.1-0.1 0.2-0.2 0.4-0.3 0.1-0.1 0.2-0.2 0.3-0.2 0.3-0.2 0.5-0.4 0.8-0.7 
                0.2-0.2 0.4-0.4 0.6-0.5l0.7-0.7 0.6-0.6c0.2-0.2 0.4-0.5 0.7-0.7l0.6-0.6 0.3-0.3 347.7-414.4c12.4-15.1 10.4-38-4.8-50.7z" p-id="1102">
                </path></svg>
            </span>
        </div>
        <div class="search">
            <span>
                <svg t="1553990441417" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                p-id="1858" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" fill="white">
                <path d="M774.8 751.4l-95.2-95.2c-12.1-12.1-27.9-18.1-43.7-18.2l-18.4-18.4c36.1-48.2 56-106.3 56-167.6 0-74.9-29.2-145.2-82.1-198.2-52.9-52.9-123.3-82.1-198.2-82.1S248 
                201 195 254C85.8 363.2 85.8 541 195 650.3c54.6 54.6 126.4 82 198.2 82 59.1 0 118-18.8 167.6-55.9l13.9 13.9c-3 18.9 2.6 39 17.2 53.6l95.2 
                95.2c24.2 24.2 63.5 24.2 87.7 0 24.2-24.2 24.2-63.5 0-87.7zM238.9 606.5c-85.1-85.1-85.1-223.6 0-308.7 41.2-41.2 96-63.9 154.3-63.9s113.1 
                22.7 154.3 63.9c41.2 41.2 63.9 96 63.9 154.3 0 58.3-22.7 113.1-63.9 154.3-85.1 85.2-223.5 85.2-308.6 0.1z" p-id="1859"></path></svg>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: '',
        }
    },
    computed: {
        cityitem() {
            return this.$store.state.cityitem;
        }
    }
}
</script>

<style>
.header {
    width: 100%;
    height: 40px;
    background: #50ab7d;
    font-size: 16px;
    color: white;
    text-align: center;
    line-height: 40px;
}

.city {
    width: 80px; 
    height: 40px;
    float: left;
}

.citylist {
    color: white !important;
}

.search {
    float: left;
    width: 270px;
    background: #77c499;
    height: 25px;
    margin-top: 7px;
    font-size: 13px;
    line-height: 25px;
    text-align: left;
    padding-left: 10px;
}
</style>

