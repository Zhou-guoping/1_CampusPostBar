<template>
  <section class="signContainer">
    <div class="signInner">
      <div class="sign_header">
        <h2 class="sign_logo">贴吧注册</h2>
      </div>
      <div class="sign_content">
        <form  @submit.prevent="sign">
          <div>
            <section>
              <section class="sign_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="userPhone">
                <button :disabled="!rightPhone" class="get_verification" :class="{right_phone:rightPhone}" v-model='userPhone' @click.prevent="getCode">
                  {{computerTime>0?`已发送(${computerTime}s)`:'获取验证码'}}
                </button>
              </section>
              <section class="sign_verification">
                <input type="tel" maxlength="8" placeholder="验证码" v-model="registerCode">
              </section>
              <section class="sign_message">
                <input type="text" maxlength="11" placeholder="用户名" v-model="userName" @keyup.enter="checkUserName">
              </section>
              <section class="sign_message">
                <span>学校信息:</span>
                <select class="campusProvince" @change="getCampus()" id="provinceId" v-model="regionId">
                  <option value="" disabled selected>-请选择省份-</option>
                  <option  v-for="(item,i) in provinceArr" :key="i" :value="item.regionId" >{{item.regionName}}</option>
                </select>&nbsp;&nbsp;-
                <select class="campusName" @change="getCampusInfo()" id="campusId" >
                  <option value="" disabled selected>-请选择学校-</option>
                  <option v-for="(item,i) in campusArr" :key="i" :value="item.campusId"  v-model="campusId">{{item.campusName}}</option>
                </select>
              </section>
              <section class="sign_message">
                <input type="text" maxlength="11" placeholder="专业" v-model="majorName">
              </section>
              <section class="sign_message">
                <input type="password" maxlength="11" placeholder="密码" v-model="userPassword">
              </section>
             <!-- <section class="sign_message">
                <input type="password" maxlength="11" placeholder="确认密码">
              </section>-->
              <section class="sign_hint" >
                温馨提示：注册校园贴吧帐号时，代表已同意我们的服务协议
                <a href="service.html" >《用户服务协议》</a>
              </section>
            </section>
          </div>
          <button class="sign_submit" >注册</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiaguanzhuhuati"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
  </section>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip'
  import axios from 'axios'
  import {mapActions, mapState} from 'vuex'
  import {reqProvince,reqCampus,reqCheckPhone,reqCheckUsername,reqRegisterCode,reqRegisterUser} from "../../api";

  export default {

    data(){
      return{
        //provinceArr: [],
        campusArr: [],
        regionId:'',//省份id
        campusId:'',//学校id
        campusName:'',//学校名称
        userPhone:'',//注册手机号
        registerCode:'', // 短信验证码
        userName:'',//用户名
        userNickname:'',//昵称
        majorName:'',//专业
        userPassword:'',//密码
        userSex:'0' ,//性别，默认为男
        alertText: '', // 提示文本
        computerTime: 0, // 计时的时间
        alertShow: false, // 是否显示警告框
      }
    },
    computed:{
      ...mapState(['provinceArr']),
      rightPhone(){
        return /^1\d{10}$/.test(this.userPhone)
      },
    },
    mounted() {
      //this.$store.dispatch('getProvince')
      this.getProvince()
      //this.getCampus()
    },
    methods: {
      ...mapActions(['getProvince','getCampus']),
      //验证手机号是否重复 如果不重复则异步获取短信验证码
      async getCode(){
        const result=await reqCheckPhone(this.userPhone)
        if (result===false){
          //显示提示
          this.showAlert('该手机号已注册')
        }else{
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
            const result=await reqRegisterCode(this.userPhone)
            console.log(result)
            if(result.status===500){
              //显示提示
              this.showAlert(result.message)
              //停止倒计时
              if(this.computerTime) {
                this.computerTime = 0
                clearInterval(this.intervalId)
                this.intervalId = undefined
              }
            }
          }
        }
       /* axios.get(BASE_URL+'/ucs/register/validatePhone?mobilePhone='+this.userPhone).then((result)=>{
          if (result.data===false){
            //显示提示
            this.showAlert('该手机号已注册')
          }else{
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
              axios.get('http://server.campus.com/ucs/register/registerCode?mobilePhone='+this.userPhone).then((result) => {
                if (result.status===500){
                  //显示提示
                  this.showAlert(result.message)
                  //停止倒计时
                  if(this.computerTime) {
                    this.computerTime = 0
                    clearInterval(this.intervalId)
                    this.intervalId = undefined
                  }
                }
              })
            }
          }
        })*/
      },
      //检验用户名是否重复
      async checkUserName() {
        if (this.userName==''){
          this.showAlert('用户名不能为空')
        }else{
          const result=await reqCheckUsername(this.userName)
          if (result.data===false){
            //显示提示
            this.showAlert('该用户名已存在')
          }
          /*axios.get('http://server.campus.com/ucs/register/validateUsername?userName='+this.userName).then((result)=>{
            if (result.data===false){
              //显示提示
              this.showAlert('该用户名已存在')
            }
          })*/
        }
      },
      //得到省份数据
    /*  getProvince() {
        axios.get(BASE_URL + "/ucs/register/provinceList")
          .then((result) => {
            let len=result.data.length
            this.provinceArr = result.data
          })
          .catch((error) => {
            console.log(error)
        });

      },*/
      //得到学校数据
      getCampus: function () {
/*        let regions = document.getElementById("provinceId")
        let selectedIndex = regions.selectedIndex;
        let regionId = regions.options[selectedIndex].value;*/
        let len = this.provinceArr.length
        axios.get("http://server.campus.com/ucs/register/campusList/" + this.regionId)
          .then((res) => {
            this.campusArr = res.data
          })
          .catch((error) => {
            console.log(error)
          });
      },
      //选择学校，得到学校campusId和campusName
      getCampusInfo:function(){
        let regions = document.getElementById("campusId")
        let selectedIndex = regions.selectedIndex;
        this.campusId= regions.options[selectedIndex].value;
        this.campusName = regions.options[selectedIndex].innerHTML;

        console.log(this.campusId,this.campusName)
      },

      //保存用户注册信息  localhost:server.campus.com/ucs/register/user
      async sign(){
        // 前台表单验证
        const {rightPhone, userPhone, registerCode,userPassword} = this
        if(!this.rightPhone) {
          // 手机号不正确
          this.showAlert('手机号不正确')
          return
        } else if(!/^\d{6}$/.test(registerCode)) {
          // 验证必须是6位数字
          this.showAlert('验证必须是6位数字')
          return
        } else if(this.userPassword.length<6||this.userPassword.length>18) {
          // 密码长度限制
          this.showAlert('密码格式不正确！')
          return
        }
        //发送请求短信登录
        axios.post('http://server.campus.com/ucs/register/user',
          {
            "campusId":this.campusId,
            "campusName":this.campusName,
            "majorName":this.majorName,
            "registerCode":this.registerCode,
            "userName":this.userName,
            "userNickname":this.userName,
            "userPassword":this.$md5(this.userPassword),
            "userPhone":this.userPhone,
            "userSex":this.userSex
          }).then((result)=>{
          //停止倒计时
          if(this.computerTime){
            this.computerTime=0
            clearInterval(this.intervalId)
            this.intervalId=undefined
          }
          //根据结果数据处理
          if(result.status===200){
            //跳转路由去首页
            this.$router.replace('/home')
          }else {
            this.showAlert('注册失败，请重试！')
          }
        })
      },
      //错误提示弹框
      showAlert(alertText) {
        this.alertShow = true;
        this.alertText = alertText;
      },
      // 关闭警告框
      closeTip () {
        this.alertShow = false
        this.alertText = ''
      }
    },
    components:{
      AlertTip
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .signContainer
    width 10rem
    height 100%
    background #fff
    position relative
    .signInner
      padding-top 60px
      width 80%
      margin 0 auto
      .sign_header
        .sign_logo
          font-size 40px
          font-weight bold
          color darkorange
          text-align center
        .sign_header_title
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
      .sign_content
        >form
          >div
            input
              width 100%
              height 80px
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 16px
              outline 0
              font 400 26px Arial
              &:focus
                border 1px solid darkorange
            .sign_message
              position relative
              margin-top 30px
              height 80px
              font 400 26px Arial
              background #fff
              .get_verification
                width: 150px;
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
            .sign_verification
              position relative
              margin-top 40px
              height 80px
              font-size 22px
              background #fff
            .sign_hint
              margin-top 22px
              color #999
              font-size 24px
              line-height 28px
              >a
                color darkorange
          .sign_submit
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
  span,select{
    margin  10px auto
    padding-left 10px
    color #7e8c8d
  }
  select{
    border-radius 5px
    margin-left 10px
    width 35%
    height 60px
    font-size 24px
  }

</style>
