<template>
    <div>
        <div class="loginwhite"></div>
        <div class="log">
            <input type="text" placeholder="请输入您的用户名" maxlength="30" class="logintxtt">
            <input type="password" placeholder="请输入您的密码" maxlength="30" class="loginpwdd">
            <input type="text" placeholder="请输入验证码" maxlength="30" class="loginverify">
            <div class="verify" @click="yzcode">{{ verify }}</div>
        </div>
        <p class="forgetpwd">忘记密码？</p>
        <div class="loginbot">
            <div class="denglu">登录</div>
            <div class="zhuce">立即注册</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            verify: '3854',
        }
    },
    methods: {
        yzcode() {
            let a = Math.round(Math.random()*10);
            let b = Math.round(Math.random()*10);
            let c = Math.round(Math.random()*10);
            let d = Math.round(Math.random()*10);
            this.verify = '' + a + b + c + d;
        }
    }
}
</script>

<style>
.loginwhite {
    width: 100%;
    height: 30px;
}
.log {
    width: 375px;
    height: 100%;
    background: white;
    position: relative;
}
.logintxtt {
    border: none;
    border-bottom: 1px solid #ccc;
    width: 330px;
    height: 50px;
    margin-left: 22px;
    background: url(//img07.yiguoimg.com/e/web/160104/02423/150313/icon_username.png) no-repeat 5px 9px;
    font-size: 14px;
    padding-left: 50px;
    font-weight: normal;
}
.loginpwdd {
    border: none;
    border-bottom: 1px solid #ccc;
    width: 330px;
    height: 50px;
    margin-left: 22px;
    background: url(//img07.yiguoimg.com/e/web/160104/02423/150313/icon_password.png) no-repeat 5px 9px;
    font-size: 14px;
    padding-left: 50px;
}
.loginverify {
    border: none;
    border-bottom: 1px solid #ccc;
    width: 375px;
    height: 50px;
    margin-left: 22px;
    font-size: 14px;
    padding-left: 50px;
}
.verify {
    position: absolute;
    width: 60px;
    height: 30px;
    top: 110px;
    left: 255px;
    z-index: 1;
    background: url(../../../assets/img/yzcode.png) no-repeat;
    text-align: center;
    line-height: 30px;
    color: white;
}
.forgetpwd {
    color: green;
    width: 100%;
    height: 20px;
    margin-top: 20px;
    line-height: 20px;
    margin-left: 30px;
    margin-bottom: 20px;
}
.loginbot {
    width: 100%;
    height: 380px;
}
.loginbot div {
    float: left;
    width: 141px;
    height: 40px;
    color: #fff;
    border: 1px solid #008842;
    border-radius: 5px;
    margin-left: 30px; 
    text-align: center;
    line-height: 40px;
}
.denglu {
    background: #008842;
}
.zhuce {
    color: #008842 !important;
}
</style>