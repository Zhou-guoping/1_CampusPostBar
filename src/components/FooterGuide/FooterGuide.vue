<template>
    <div class="footer_guide">
      <a href="javascript:;" class="guide_item" :class="{on:'/home'===$route.path||'/home/attention'===$route.path||'/home/topic'===$route.path||'/home/materials'===$route.path}" @click="goTo('/home')">
        <span class="item_icon">
          <i class="iconfont icon-shouye"></i>
        </span>
        <span>首页</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on:'/bar'===$route.path||'/bar/recommend'===$route.path}" @click="goTo('/bar')">
        <span class="item_icon">
          <i class="iconfont icon-diqiu"></i>
        </span>
        <span>进吧</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on:'/news'===$route.path||'/news/message'===$route.path}" @click="goTo('/news/message')">
        <span class="item_icon">
          <i class="iconfont icon-communicate"></i>
        </span>
        <span>消息</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
        <span class="item_icon">
          <i class="iconfont icon-mine"></i>
        </span>
        <span>我的</span>
      </a>
    </div>
</template>

<script>
    export default {
      methods:{
        goTo(path){
          this.$router.replace(path)
        }
      }
    }
</script>


<style rel="stylesheet">
  .footer_guide{
    border-top: 1px  solid #e4e4e4;
    position: fixed;
    z-index:100;
    left:0;
    right: 0;
    bottom :0;
    background-color :#fff;
    width :100%;
    height :50px;
    display :flex;
  }
  .guide_item{
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: dimgray;
  }
  .guide_item.on{
    color: #0078D7;
  }
  .guide_item span{
    font-size: 13px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .guide_item .iconfont{
    font-size:22px;
  }
</style>
