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
    left:50%;
    transform: translateX(-50%);
    bottom :0;
    height: 90px;
    background-color :#fff;
    width :10rem;
    display :flex;
  }
  .guide_item{
    margin-top: 3px;
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    color: dimgray;
  }
  .guide_item.on{
    color: #0078D7;
  }
  .guide_item :nth-child(2){
    margin-top: 1px;
    font-size: 22px;
  }
  .iconfont{
    font-size:40px;
  }
</style>
