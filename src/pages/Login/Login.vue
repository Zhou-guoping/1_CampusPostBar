<template>
  <section class="loginContainer" >
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">校园贴吧</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="mobilePhone">
              <button :disabled="!rightPhone" class="get_verification" :class="{right_phone:rightPhone}" v-model='mobilePhone' @click.prevent="getCode">
                {{computerTime>0?`已发送(${computerTime}s)`:'获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <router-link to= '/sign' class="sign-link">
              <section class="login_hint">
                <a href="javascript:;">没有账号？点这里注册</a>
              </section>
            </router-link>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="loginName">
              </section>
              <section class="login_verification">
                <input type="text " maxlength="11" placeholder="密码" v-if="showPwd" v-model="userPassword">
                <input type="password" maxlength="11" placeholder="密码" v-else v-model="userPassword">
                <div class="switch_button" :class="showPwd ? 'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle":class="{right:showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc':''}}</span>
                </div>
              </section>
              <section class="login_message"  style="display: flex;">
                <input type="text" maxlength="11" placeholder="验证码"  id="captcha" autocomplete="off" v-model="captcha">
                <!--<img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha" ref="captcha">-->
                <div class="get_verification"  @click="refreshCode">
                  <!--验证码组件-->
                  <s-identify :identifyCode="identifyCode"></s-identify>
                </div>
              </section>
            </section>
            <router-link to= '/sign' class="sign-link">
              <section class="login_hint">
                <a href="javascript:;">没有账号？点这里注册</a>
              </section>
            </router-link>
          </div>
          <button class="login_submit" >登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-communicate"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
  </section>
</template>
<script>
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import axios from 'axios'
  import SIdentify  from './sidentify.vue'
  import {reqPwdLogin, reqSmsLogin, reqLoginCode, reqUserInfo} from '../../api'
  import {mapState ,mapActions} from 'vuex'

  export default {
    data(){
      return{
        loginWay: false, // true代表短信登陆, false代表密码
        computerTime: 0, // 计时的时间
        showPwd: false, // 是否显示密码
        mobilePhone: '', // 手机号
        code:'', // 短信验证码
        loginName: '', // 用户名
        userPassword: '', // 密码
        alertText: '', // 提示文本
        alertShow: false, // 是否显示警告框
        identifyCodes: "1234567890",
        identifyCode: "",
        captcha:"",//text框输入的验证码
        returnValue:''//登陸成功後的返回值
      }
    },
    computed:{

      rightPhone(){
        return /^1\d{10}$/.test(this.mobilePhone)
      }
    },
    mounted(){
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    created(){
      this.refreshCode()
    },
    methods:{
      //验证码
      randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
          ];
      }
      //console.log(this.identifyCode);
      },
      //异步获取短信验证码
      async getCode(){
        //如果当前没有计时
        if(!this.computerTime){
          //启动倒计时
          this.computerTime=120
           this.intervalId=setInterval(()=>{
            this.computerTime--
            if(this.computerTime<=0){
              //停止计时
              clearInterval(this.intervalId)
            }
          },1000)
          //向指定手机号发送验证码信息
          const result=await reqLoginCode(this.mobilePhone)
          if (result.status===220000) {
            //显示提示
            this.showAlert(result.message)
            //停止倒计时
            if (this.computerTime) {
              this.computerTime = 0
              clearInterval(this.intervalId)
              this.intervalId = undefined
            }
          }
        }
      },
      showAlert(alertText) {
      this.alertShow = true;
      this.alertText = alertText;
      },
      //异步登录
      async login(){

        // 前台表单验证
        if(this.loginWay) {  // 短信登陆
          const {rightPhone, mobilePhone, code} = this
          if(!this.rightPhone) {
            // 手机号不正确
            this.showAlert('手机号不正确')
            return
          } else if(!/^\d{6}$/.test(code)) {
            // 验证必须是6位数字
            this.showAlert('验证码必须是6位数字')
            return
          }
          //发送ajax请求短信登录
          const result=await reqSmsLogin(code,mobilePhone)
          //停止倒计时
          if(this.computerTime){
            this.computerTime=0
            clearInterval(this.intervalId)
            this.intervalId=undefined
          }
          if (result===""){
            this.showAlert('账号或验证码错误')
          }else {
            this.$router.replace('/profile')
            this.returnValue = result
            this.$cookies.set('CAMPUS_POST_BAR_NAME', this.returnValue, "30D", null, ".campus.com")
            localStorage.setItem('token',this.returnValue)
            this.$store.commit('setToken',this.returnValue)
           /* axios.get('http://server.campus.com/ucs/login/user').then((result)=>{
              if(result.status===200){
                const userInfo=result.data
                //将user保存到vuex的state中
                this.$store.dispatch('recordUser',userInfo)
              }
            })*/
          }
        } else if(!this.loginWay) {// 密码登陆
          const {loginName, userPassword, captcha} = this
          if (!this.loginName) {
            // 用户名必须指定
            this.showAlert('用户名不正确！')
            return
          } else if (!this.userPassword) {
            // 密码必须指定
            this.showAlert('密码不正确！')
            return
          } else if (!this.captcha) {
            // 验证码必须指定
            this.showAlert('验证码不正确！')
            return
          }
         //发送请求密码登录
          const result=await reqPwdLogin(loginName,this.$md5(userPassword))
          //停止倒计时
          if(this.computerTime){
            this.computerTime=0
            clearInterval(this.intervalId)
            this.intervalId=undefined
          }
          //console.log(result)
          if (result===""){
            this.showAlert('登陆失败')
            this.refreshCode()
          }else {
            this.$router.replace('/profile')
            this.returnValue = result
            this.$cookies.set('CAMPUS_POST_BAR_NAME', this.returnValue, "30D", null, ".campus.com")
            localStorage.setItem('token',this.returnValue)
            //将token保存到vuex
            this.$store.commit('setToken',this.returnValue)
            /* axios.get('http://server.campus.com/ucs/login/user').then((result)=>{
               if(result.status===200){
                 const userInfo=result.data
                 //将user保存到vuex的state中
                 this.$store.dispatch('recordUser',userInfo)
               }
             })*/
          }
        }

      },
      // 关闭警告框
      closeTip () {
        this.alertShow = false
        this.alertText = ''
      },
    },
    components: {
      AlertTip,
      SIdentify
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    width 10rem
    height 100%
    position relative
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color darkorange
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 28px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color darkorange
              font-weight 700
              border-bottom 4px solid darkorange
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 80px
              padding-left 10px
              box-sizing border-box
              border 1px solid #e4e4e4
              border-radius 16px
              outline 0
              font 400 26px Arial
              &:focus
                border 1px solid darkorange
            .login_message
              position relative
              margin-top 30px
              height 80px
              font-size 24px
              background #fff
              .get_verification
                width 150px
                position absolute
                top 50%
                right 20px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 20px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 40px
              height 80px
              font-size 22px
              background #fff
              .switch_button
                font-size 22px
                border 1px solid #ddd
                border-radius 15px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 60px
                height 30px
                line-height 30px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background darkorange
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 30px
                  height 30px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(45px)
            .login_hint
              margin-top 22px
              color #999
              font-size 24px
              line-height 24px
              >a
                color darkorange
          .login_submit
            display block
            width 100%
            height 65px
            margin-top 30px
            border-radius 16px
            background darkorange
            color #fff
            text-align center
            font-size 24px
            line-height 65px
            border 0
        .about_us
          display block
          font-size 22px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 10px
        left 30px
        text-decoration none
        width 50px
        height 50px
        line-height 50px
        text-align center
        margin 3px 5px 0
        color #ee9900
        >.iconfont
          font-size 36px
          color darkorange
  .get_verification{
    cursor: pointer;
    width:120px;
    height:70px;
    border:1px solid rgba(186,186,186,1);
    position absolute
    top 10px
  }
</style>
