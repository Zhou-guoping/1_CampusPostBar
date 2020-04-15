<template>
  <section>
    <section class="profile">
      <HeaderTop title="我的"/>
      <section class="profile-number">
        <router-link :to= "userInfo.userId?'/home':'/login'" class="profile-link">
          <img class="profile_image" v-if="userInfo.headImgUrl" :src="url+userInfo.headImgUrl">
          <img class="profile_image" v-else src="./../../../static/img/default_headimg.jpg">
          <div class="user-info">
            <p class="user-info-top" >{{ userInfo.userNickname || '点我登录/注册'}}</p>
            <p>
              <span class="icon-mobile-number">点我查看个人主页或编辑资料</span>
            </p>
          </div>
          <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
        </router-link>
      </section>
      <section class="profile_info_data border-1px">
        <ul class="info_data_list">
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">1</span>
            <span class="info_data_bottom">关注</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">0</span>
            <span class="info_data_bottom">粉丝</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">0</span>
            <span class="info_data_bottom">帖子</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">0</span>
            <span class="info_data_bottom">关注的吧</span>
          </a>
        </ul>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 我的收藏 -->
        <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-diqiu"></i>
        </span>
          <div class="my_order_div">
            <span>我的收藏</span>
            <span class="my_order_icon">
            <i class="iconfont icon-bianjiqianbixieshuru"></i>
          </span>
          </div>
        </a>
        <!-- 我的收藏 -->
        <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-diqiu"></i>
        </span>
          <div class="my_order_div">
            <span>我的收藏</span>
            <span class="my_order_icon">
            <i class="iconfont icon-bianjiqianbixieshuru"></i>
          </span>
          </div>
        </a>
        <!-- 我的收藏 -->
        <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-diqiu"></i>
        </span>
          <div class="my_order_div">
            <span>我的收藏</span>
            <span class="my_order_icon">
            <i class="iconfont icon-bianjiqianbixieshuru"></i>
          </span>
          </div>
        </a>
        <!-- 我的收藏 -->
        <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-diqiu"></i>
        </span>
          <div class="my_order_div">
            <span>我的收藏</span>
            <span class="my_order_icon">
            <i class="iconfont icon-bianjiqianbixieshuru"></i>
          </span>
          </div>
        </a>
        <!-- 浏览历史 -->
        <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-diqiu"></i>
        </span>
          <div class="my_order_div">
            <span>浏览历史</span>
            <span class="my_order_icon">
            <i class="iconfont icon-bianjiqianbixieshuru"></i>
          </span>
          </div>
        </a>
        <!-- 服务中心 -->
        <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-diqiu"></i>
            </span>
          <div class="my_order_div">
            <span>服务中心</span>
            <span class="my_order_icon">
                <i class="iconfont icon-bianjiqianbixieshuru"></i>
              </span>
          </div>
        </a>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 设置 -->
        <router-link to="/profile/edit" href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-diqiu"></i>
            </span>
          <div class="my_order_div">
            <span>设置</span>
            <span class="my_order_icon">
                <i class="iconfont icon-bianjiqianbixieshuru"></i>
              </span>
          </div>
        </router-link>
      </section>
      <section class="profile_my_order border-1px">
        <!--退出登录 -->
       <mt-button type="danger" class="mt_btn" v-if="userInfo.userNickname" @click="Logout">退出登录</mt-button>
      </section>
    </section>
  </section>

</template>
<script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import {MessageBox,Toast} from 'mint-ui'
  export default {
    data(){
      return{
         url:'http://192.168.1.133/',
      }
    },
    computed:{
      ...mapState(['token','userInfo']),
    },
    components:{
      HeaderTop,
    },
    mounted() {

    },
    methods: {
      Logout() {
        MessageBox.confirm('不再看看吗？').then(
          action=>{
            this.$store.commit('delToken')
            this.$cookies.remove('CAMPUS_POST_BAR_NAME', null,".campus.com")
            //请求退出
            this.$store.dispatch('logout')
            Toast('退出成功')
          },
          action=>{
            console.log('hhhh')
          }
        )
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .profile //我的
    width 10rem
    margin-bottom 100px
    overflow hidden
    .header
      background-color #FFffff
      position fixed
      z-index 100
      left 50%
      transform translateX(-50%)
      top 0
      width 10rem
      height 70px
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #181818
        text-align center
        .header_title_text
          font-size 28px
          color #181818
          display block
    .profile-number
      margin-top 70px
      .profile-link
        clearFix()
        position relative
        display block
        background #FFffff
        height 100px
        .profile_image
          float left
          width 80px
          height 80px
          border-radius 40px
          margin-top 10px
          margin-left 20px
          background:url("./../../../static/img/default_headimg.jpg");
          background-size: 100% 100%;
        .user-info
          float left
          margin-top 12px
          margin-left 20px
          p
            font-weight: 700
            font-size 24px
            color #00000
            &.user-info-top
              padding-bottom 8px
            .user-icon
              display inline-block
              margin-left -15px
              margin-right 5px
              width 20px
              height 20px
            .icon-mobile-number
              font-size 22px
              color  #00000
        .arrow
          width 12px
          height 12px
          position absolute
          right 15px
          top 40%
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width 97%
      margin-left 3%
      background #fff
      overflow hidden
      .info_data_list
        clearFix()
        .info_data_link
          float left
          width 24%
          text-align center
          border-right 1px solid #f1f1f1
          border-bottom 2px solid #e4e4e4
          .info_data_top
            display block
            width 100%
            font-size 26px
            color #333
            padding 15px 5px 10px
            span
              display inline-block
              font-size 30px
              color #f90
              font-weight 700
              line-height 30px
          .info_data_bottom
            display inline-block
            font-size 24px
            color #666
            font-weight 400
            padding-bottom 10px
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e
        .info_data_link:nth-of-type(3)
          .info_data_top
            span
              color #ff5f3e
        .info_data_link:nth-of-type(4)
          border 0
          border-bottom 2px solid #e4e4e4
          .info_data_top
            span
              color #6ac20b
    .profile_my_order
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .my_order
        width 96%
        display flex
        align-items center
        padding-left 15px
        border-bottom 2px solid #f1f1f1
        >span
          display flex
          align-items center
          width 20px
          height 20px
          >.iconfont
            margin-left 20px
            font-size 30px
          .icon-diqiu
            color #a75765
        .my_order_div
          width 100%
          padding 18px 10px 18px 10px
          font-size 26px
          margin-left 30px
          color #333
          display flex
          justify-content space-between
          span
            display block
            padding-right 30px
          .my_order_icon
            width 30px
            height 30px
            .icon-bianjiqianbixieshuru
              color #bb314b
              font-size 30px
  .mt_btn{
    width 10rem
    height 80px
    font-size 26px
  }
</style>
