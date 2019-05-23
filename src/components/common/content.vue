<template>
<div class="content">
    <Header></Header>
    <!-- swiper -->
    <div class="swiper">
        <mt-swipe :auto="2000" :defaultIndex="0" class="mod-swipe">
            <mt-swipe-item class="mt-swipe-item"><a href="javascript:;"><img src="https://img13.yiguoimg.com/d/items/2019/190404/9288737728439940_1125x652.jpg?w=1125&h=652" alt="" @click="todetailHome"></a></mt-swipe-item>
            <!-- <mt-swipe-item><img src="//cdn.doumistatic.com/25,3b8fb1cd8cae0f.jpg" alt=""></mt-swipe-item> -->
        </mt-swipe>
    </div>
    <!-- tu -->
    <div class="contwo">
        <img src="https://img09.yiguoimg.com/d/items/2019/190408/9710950205400712_1125x344.gif?w=1125&h=344" alt="">
    </div>
    <!-- 8图 -->
    <div class="conthree">
        <ul>
            <li class="li1">
                <div> 
                    <a href=""><img src="https://img11.yiguoimg.com/d/items/2019/190220/9570212330186324_144.png?w=144&h=144" alt=""></a>
                </div>
                <div><span>买二付一</span></div>
            </li>
            <li>
                <div> 
                    <a href=""><img src="https://img12.yiguoimg.com/d/items/2019/190220/9570212329956948_144.png?w=144&h=144" alt=""></a>
                </div>
                <div><span>原箱礼盒</span></div>
            </li>
            <li>
                <div> 
                    <a href=""><img src="https://img13.yiguoimg.com/d/items/2019/190220/9570212329989716_144.png?w=144&h=144" alt=""></a>
                </div>
                <div><span>会员福利</span></div>
            </li>
            <li>
                <div> 
                    <a href=""><img src="https://img11.yiguoimg.com/d/items/2019/190220/9570212330022484_144.png?w=144&h=144" alt=""></a>
                </div>
                <div><span>银行活动</span></div>
            </li>
            <li class="li2">
                <div> 
                    <a href=""><img src="https://img13.yiguoimg.com/d/items/2019/190220/9570212330055252_144.png?w=144&h=144" alt=""></a>
                </div>
                <div><span>新鲜水果</span></div>
            </li>
            <li>
                <div> 
                    <a href=""><img src="https://img09.yiguoimg.com/d/items/2019/190220/9570212330088020_144.png?w=144&h=144" alt=""></a>
                </div>
                <div><span>精选肉类</span></div>
            </li>
            <li>
                <div> 
                    <a href=""><img src="https://img11.yiguoimg.com/d/items/2019/190220/9570212330120788_144.png?w=144&h=144" alt=""></a>
                </div>
                <div><span>海鲜水产</span></div>
            </li>
            <li>
                <div> 
                    <a href=""><img src="https://img09.yiguoimg.com/d/items/2019/190220/9570212330153556_144.png?w=144&h=144" alt=""></a>
                </div>
                <div><span>食品饮料</span></div>
            </li>
        </ul>
    </div>
    <!-- 易果快报 -->
    <div class="news">
        <div class="newsgreen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;易果快报</div>
        <div>&nbsp;| 营业资质公示，详情点击查询</div>
    </div>
    <!-- confour 1-->
    <div class="confour">
        <a href="">
            <img src="https://img09.yiguoimg.com/d/items/2019/190408/9288737742497416_1125x652.jpg?w=1125&h=652" alt="">
        </a>
    </div>
    <!-- confive -->
    <div class="confive">
        <ul>
            <li>
                <div><a href=""><img src="https://img14.yiguoimg.com/d/items/2019/190329/9288737697048189_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">泰国山竹</p>
                    <p class="p2">直降60元</p>
                    <p class="p3"><span>¥69</span>/kg</p>
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img11.yiguoimg.com/d/items/2019/190401/9288737708713601_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">糖心苹果</p>
                    <p class="p2">直降60元</p>
                    <p class="p3"><span>¥39.9</span>/1.5kg</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img10.yiguoimg.com/d/items/2019/190329/9288737684203133_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">智利西梅</p>
                    <p class="p2">跳春秒杀</p>
                    <p class="p3"><span>¥29.9</span>/kg</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img09.yiguoimg.com/d/items/2019/190109/9288736592471593_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">四川不知火丑橘</p>
                    <p class="p2">直降26元</p>
                    <p class="p3"><span>¥69</span>/箱</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img11.yiguoimg.com/d/items/2019/190329/9288737695639165_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">越南火龙果</p>
                    <p class="p2">特惠直降</p>
                    <p class="p3"><span>¥39</span>/盒</p>
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img13.yiguoimg.com/d/items/2019/190329/9288737686169213_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">新奇士美国柠檬</p>
                    <p class="p2">直降20元</p>
                    <p class="p3"><span>¥39.9</span>/4个</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img10.yiguoimg.com/d/items/2019/190329/9288737675486845_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">四川耙耙柑</p>
                    <p class="p2">跳春秒杀</p>
                    <p class="p3"><span>¥49</span>/2kg</p>                    
                </div>
            </li>
        </ul>
    </div>
    <!-- confour 2-->
    <div class="confour">
        <a href="">
            <img src="https://img14.yiguoimg.com/d/items/2019/190404/9288737728407172_1125x652.jpg?w=1125&h=652" alt="">
        </a>
    </div>
    <!-- confive -->
    <div class="confive">
        <ul>
            <li>
                <div><a href=""><img src="https://img09.yiguoimg.com/d/items/2018/180807/9288727890208007_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">新西兰鳕鱼</p>
                    <p class="p2">满2件减30元</p>
                    <p class="p3"><span>¥128</span>/200g</p>
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img10.yiguoimg.com/d/items/2018/180716/9288726238700784_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">阿根廷红虾</p>
                    <p class="p2">直降60元</p>
                    <p class="p3"><span>¥148</span>/2kg</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img13.yiguoimg.com/d/items/2018/180905/9288730651436325_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">月亮湾即食乌爪参</p>
                    <p class="p2">满2件减5元</p>
                    <p class="p3"><span>¥19.9</span>/30g</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img09.yiguoimg.com/d/items/2019/190109/9288736592471593_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">四川不知火丑橘</p>
                    <p class="p2">直降26元</p>
                    <p class="p3"><span>¥69</span>/箱</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img07.yiguoimg.com/e/web/170224/101109/170224101109787_1234878_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">原膳北海墨鱼仔</p>
                    <p class="p2">满2件减10元</p>
                    <p class="p3"><span>¥23.9</span>/250g</p>
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img09.yiguoimg.com/d/items/2018/180713/9288726084658413_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">东海鲳鱼</p>
                    <p class="p2">第二件19.9元</p>
                    <p class="p3"><span>¥49.9</span>/250g</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img07.yiguoimg.com/e/web/170414/140118/170414140118062_1240086_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">象山深海黄花鱼</p>
                    <p class="p2">第2件半价</p>
                    <p class="p3"><span>¥49</span>/400g</p>                    
                </div>
            </li>
        </ul>
    </div>
    <!-- confour 3-->
    <div class="confour">
        <a href="">
            <img src="https://img09.yiguoimg.com/d/items/2019/190404/9288737728505476_1125x652.jpg?w=1125&h=652" alt="">
        </a>
    </div>
    <!-- confive -->
    <div class="confive">
        <ul>
            <li>
                <div><a href=""><img src="https://img05.yiguoimg.com/e/web/170302/212659/170302212659192_1233565_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">小公牛杜厉牛排</p>
                    <p class="p2">第二件9.9元</p>
                    <p class="p3"><span>¥35</span>/200g</p>
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img13.yiguoimg.com/d/items/2019/190116/9288736791701040_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">澳洲精修牛腱子</p>
                    <p class="p2">2件减20元</p>
                    <p class="p3"><span>¥79.9</span>/1kg</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img05.yiguoimg.com/e/web/170508/094949/170508094949569_1205891_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">千百合金冠鸡</p>
                    <p class="p2">直降50元</p>
                    <p class="p3"><span>¥148</span>/2kg</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img07.yiguoimg.com/e/web/170508/095120/170508095120808_154370_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">崇明生态鸽</p>
                    <p class="p2">第二件9.9元</p>
                    <p class="p3"><span>¥49.9</span>/300g</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img07.yiguoimg.com/e/web/170118/150234/170118150234302_1233566_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">澳洲雪花牛肉</p>
                    <p class="p2">第2件0元</p>
                    <p class="p3"><span>¥58</span>/盒</p>
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img09.yiguoimg.com/d/items/2018/180327/9288720828015739_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">正大老母鸡</p>
                    <p class="p2">秒杀价仅49.9</p>
                    <p class="p3"><span>¥49.9</span>/1.5kg</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img14.yiguoimg.com/d/items/2018/180929/9288731968382269_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">澳洲牛腱子</p>
                    <p class="p2">第2件减10元</p>
                    <p class="p3"><span>¥59</span>/500g</p>                    
                </div>
            </li>
        </ul>
    </div>
    <!-- confour 4-->
    <div class="confour">
        <a href="">
            <img src="https://img09.yiguoimg.com/d/items/2019/190402/9288737719789186_1125x652.jpg?w=1125&h=652" alt="">
        </a>
    </div>
    <!-- confive -->
    <div class="confive">
        <ul>
            <li>
                <div><a href=""><img src="https://img10.yiguoimg.com/d/items/2018/180807/9288727893517575_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">多洛米天然水</p>
                    <p class="p2">第二件0元</p>
                    <p class="p3"><span>¥138</span>/1.5L</p>
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img09.yiguoimg.com/d/items/2018/181219/9288735739848083_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">润浓缩酸奶</p>
                    <p class="p2">特惠直降</p>
                    <p class="p3"><span>¥39.9</span>/1箱</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img14.yiguoimg.com/d/items/2018/180713/9288726084101357_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">金龙鱼贡米</p>
                    <p class="p2">第二件0元</p>
                    <p class="p3"><span>¥99</span>/5kg</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img10.yiguoimg.com/d/items/2018/180411/9288721512932491_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">新西兰矿泉水</p>
                    <p class="p2">直降26元</p>
                    <p class="p3"><span>¥69</span>/10L</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img12.yiguoimg.com/d/items/2018/180905/9288730637378853_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">大成黄焖鸡</p>
                    <p class="p2">特惠直降</p>
                    <p class="p3"><span>¥26.8</span>/400g</p>
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img11.yiguoimg.com/d/items/2018/180309/9288720080970857_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">延世牧场牛奶</p>
                    <p class="p2">下单仅39.9</p>
                    <p class="p3"><span>¥39.9</span>/1L</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img11.yiguoimg.com/d/items/2018/180807/9288727891027207_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">避风堂肉粽</p>
                    <p class="p2">跳春秒杀</p>
                    <p class="p3"><span>¥15.9</span>/240g</p>                    
                </div>
            </li>
        </ul>
    </div>
    <!-- confour 5-->
    <div class="confour">
        <a href="">
            <img src="https://img12.yiguoimg.com/d/items/2019/190304/9288737491297892_1125x652.jpg?w=1125&h=652" alt="">
        </a>
    </div>
    <!-- confive -->
    <div class="confive">
        <ul>
            <li>
                <div><a href=""><img src="https://img10.yiguoimg.com/d/items/2018/180828/9288730122757404_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">东北黑糯玉米穗</p>
                    <p class="p2">2件9.9元</p>
                    <p class="p3"><span>¥6.8</span>/200g</p>
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img14.yiguoimg.com/d/items/2018/180928/9288731949671740_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">东北糯玉米穗</p>
                    <p class="p2">限时优惠</p>
                    <p class="p3"><span>¥5.9</span>/200g</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img13.yiguoimg.com/d/items/2018/181203/9288734964786563_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">速冻混合蔬菜</p>
                    <p class="p2">跳春秒杀</p>
                    <p class="p3"><span>¥11.9</span>/300g</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img06.yiguoimg.com/e/web/170302/212804/170302212804500_21206_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">大昌美国玉米粒</p>
                    <p class="p2">直降6元</p>
                    <p class="p3"><span>¥13.8</span>/400g</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img14.yiguoimg.com/d/items/2018/181206/9288735118304646_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">云南新鲜猴头菇</p>
                    <p class="p2">单品包邮</p>
                    <p class="p3"><span>¥67.8</span>/500g</p>
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img09.yiguoimg.com/d/items/2018/181203/9288734941521283_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">马家沟精品芹菜</p>
                    <p class="p2">单品包邮</p>
                    <p class="p3"><span>¥39.9</span>/1kg</p>                    
                </div>
            </li>
            <li>
                <div><a href=""><img src="https://img05.yiguoimg.com/e/web/170418/092630/170418092630489_1269400_300.jpg" alt=""></a></div>
                <div>
                    <p class="p1">老杜崇明草鸭</p>
                    <p class="p2">限时特惠</p>
                    <p class="p3"><span>¥49</span>/900g</p>                    
                </div>
            </li>
        </ul>
    </div>
    <!-- 新品荟萃 -->
    <div class="new">
        <div class="new1">
            <img src="https://img13.yiguoimg.com/d/items/2019/190329/9288737670440573_658x819.jpg?w=658&h=819" alt="">
        </div>
        <div class="new2">
            <img src="https://img09.yiguoimg.com/d/items/2019/190304/9288737491789412_658x819.jpg?w=658&h=819" alt="">
        </div>
    </div>
    <!-- 巨无霸 -->
    <ul class="jvlist">
        <li>
            <div class="jvlistImg">
                <img src="https://img10.yiguoimg.com/d/items/2018/181206/9288735117256070_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>巨无霸金果原箱</h1>
                <p class="jvlistp1">苹果中134-175g/个</p>
                <p class="jvlistp2">直降50元</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥248</span>
                    <span class="jvlistspan2">/3.3kg</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img14.yiguoimg.com/d/items/2018/180807/9288727914489095_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>泰国金枕头冷冻榴莲果肉</h1>
                <p class="jvlistp1">就像现剥的榴莲肉一样绵糯香甜</p>
                <p class="jvlistp2">第2份9.9元</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥49.9</span>
                    <span class="jvlistspan2">/300g</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img09.yiguoimg.com/d/items/2019/190329/9288737690560125_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>Moon Drop’s无籽黑提</h1>
                <p class="jvlistp1">月亮之泪，皮薄肉厚</p>
                <p class="jvlistp2">2份立减10元</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥49.9</span>
                    <span class="jvlistspan2">/1盒</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img14.yiguoimg.com/d/items/2018/180807/9288727914489095_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>SunMoon泰国金枕头冷冻榴莲果肉</h1>
                <p class="jvlistp1">就像现剥的榴莲肉一样绵糯香甜</p>
                <p class="jvlistp2">直降50元</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥49.9</span>
                    <span class="jvlistspan2">/300g</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img14.yiguoimg.com/d/items/2017/171130/9288715872871294_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>南美白虾仁（中）</h1>
                <p class="jvlistp1">饱满弹嫩，营养低脂</p>
                <p class="jvlistp2">第2件19.9元</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥32.9</span>
                    <span class="jvlistspan2">/0.25kg</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img09.yiguoimg.com/d/items/2018/181214/9288735514862990_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>禧莱安纯金线鱼滑</h1>
                <p class="jvlistp1">口感纯正鲜味足，鱼糜含量＞50%</p>
                <p class="jvlistp2">第2件半价</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥34.9</span>
                    <span class="jvlistspan2">/400g</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img09.yiguoimg.com/d/items/2019/190325/9288737634788985_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>越南冷冻巴沙鱼片*4	</h1>
                <p class="jvlistp1">无骨无刺，嫩滑不老</p>
                <p class="jvlistp2">直降10原</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥52.9</span>
                    <span class="jvlistspan2">/280g</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img13.yiguoimg.com/d/items/2019/190116/9288736791701040_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>澳洲精修牛腱子</h1>
                <p class="jvlistp1">肉富含蛋白质，氨基酸</p>
                <p class="jvlistp2">第2件39.9元</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥69.9</span>
                    <span class="jvlistspan2">/1kg</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img14.yiguoimg.com/d/items/2018/180206/9288719156028486_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>圣迪乐村鸡蛋(20枚)</h1>
                <p class="jvlistp1">饱满弹嫩，营养低脂</p>
                <p class="jvlistp2">第2件19.9元</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥32.9</span>
                    <span class="jvlistspan2">/20枚</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img10.yiguoimg.com/d/items/2018/180807/9288727893517575_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>多洛米亚天然饮用水经典款</h1>
                <p class="jvlistp1">享受高品质生活</p>
                <p class="jvlistp2">第2件0元</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥138</span>
                    <span class="jvlistspan2">/1.5L</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img13.yiguoimg.com/d/items/2019/190115/9288736748774959_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>北海道牛奶芝士工厂牌双层夹心蛋糕</h1>
                <p class="jvlistp1">饱满弹嫩，营养低脂</p>
                <p class="jvlistp2">下单立减60</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥108</span>
                    <span class="jvlistspan2">/0.25kg</span>
                </p>
            </div>
        </li>
        <li>
            <div class="jvlistImg">
                <img src="https://img10.yiguoimg.com/d/items/2019/190327/9288737647896187_300.jpg" alt="">
            </div>
            <div class="jvlistTxt">
                <h1>Haubis施瓦本扭结面包</h1>
                <p class="jvlistp1">朴实麦香天然黄油</p>
                <p class="jvlistp2">3件仅需49元</p>
                <p class="jvlistp3">
                    <span class="jvlistspan1">¥18</span>
                    <span class="jvlistspan2">/80g</span>
                </p>
            </div>
        </li>
    </ul>
</div>
    
</template>

<script>
import Header from '@/components/common/Header.vue';
import { Swipe, SwipeItem } from 'mint-ui';

export default {
    components:{
        "mt-swipe":Swipe,
        "mt-swipe-item":SwipeItem,
        Header,
    },
    methods: {
        todetailHome() {
            this.$router.push({
                path: '/detailHome',
            })
        }
    }
}
</script>

<style>
.content {
    width: 100%;
    height: 625px;
    overflow-y: auto;
}
.swiper {
    width: 100%;
    height: 200px;
}   
.mod-swipe {
    width: 100%;
    height: 200px;
}
.mt-swipe-item a img {
    width: 100%;
    height: 200px; 
}
.contwo {
    width: 100%;
    height: 115px;
}
.contwo img {
    width: 100%;
    height: 115px;
}
.conthree ul {
    width: 375px;
    height: 160px;
    background: white;
}
.li1 {
    margin-left: 10px;
}
.li2 {
    margin-left: 10px;
}
.conthree ul li {
    float: left;
    width: 90px;
    height: 76px;
    text-align: center;
}
.conthree ul li div a img {
    width: 48px;
    height: 48px;
}
.news {
    width: 100%;
    height: 33px;
    line-height: 33px;
    text-align: center;
    background: white;
    margin-top: 1px;
}
.news div {
    float: left;
}
.newsgreen {
    color: green;
    margin-left: 20px;
}
.confour {
    width: 100%;
    height: 217px;
    margin-top: 5px;
}
.confour a img {
    width: 100%;
    height: 217px;
}
.confive {
    width: 100%;
    height: 190px;
    background: white;
    overflow-x: auto; 
}
.confive ul {
    width: 850px;
    height: 190px;
    overflow: hidden;
}
.confive ul li {
    width: 105px;
    height: 211px;
    margin-left: 10px;
    text-align: center;
    float: left;
    overflow: hidden;
}
.confive ul li div a img {
    width: 105px;
    height: 105px;
}
.p1 {
    font-size: 12px;
}
.p2 {
    width: 75px;
    height: 16px;
    font-size: 12px;
    color: green;
    border: 1px solid green;
    border-radius: 10px;
    line-height: 16px;
    margin-left: 16px; 
    margin-top: 2px;
}
.p3 {
    margin-top: 2px;
    font-size: 12px;
}
.p3 span {
    color: red;
}
/* news */
.new {
    width: 100%;
    height: 234px;
}
.new1 {
    float: left;
}
.new2 {
    float: left;
}
.new1 img{
    width: 187px;
    height: 233px;
}
.new2 img{
    width: 187px;
    height: 233px;
}
.jvlist {
    width: 100%;
    height: auto;
}
.jvlist li {
    margin-top: 10px;
    background: white;
    width: 100%;
    height: 150px;
}
.jvlist li div {
    float: left;
}
.jvlistImg img {
    width: 135px;
    height: 135px;
}
.jvlistImg {
    width: 135px;
    height: 135px;
    margin-left: 10px;
}
.jvlistTxt {
    width: 185px;
    height: 135px;
    margin-left: 20px;
    margin-top: 20px;
}
.jvlistp1 {
    color: #8d8a8a;
    font-size: 12px;
    margin-top: 5px;
    text-overflow: ellipsis
}
.jvlistp2 {
    color: #45b575;
    border: 1px solid #45b575;
    font-size: 13px;
    width: 80px;
    border-radius: 15px;
    text-align: center;
    line-height: 20px;
    margin-top: 5px;
}
.jvlistp3 {
    margin-top: 10px;
}
.jvlistspan1 {
    color: red;
    font-size: 18px;
    font-weight: 700;
}
.jvlistspan2 {
    font-size: 12px;
    color: #8d8a8a;
}
</style>
