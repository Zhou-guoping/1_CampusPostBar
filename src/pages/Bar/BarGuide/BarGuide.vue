<template>
  <!--头部：消息、聊天、通知-->
  <div class="bar_guide">
    <a href="javascript:;" class="bar_guide_item" :class="{on:'/bar'===$route.path}" @click="goTo('/bar')">
      <span>关注</span>
      <div :class="{bar_on:'/bar'===$route.path}" @click="goTo('/bar')"> </div>
    </a>
    <a href="javascript:;" class="bar_guide_item" :class="{on:'/bar/recommend'===$route.path}" @click="goTo('/bar/recommend')">
      <span>推荐</span>
      <div :class="{bar_on:'/bar/recommend'===$route.path}" @click="goTo('/bar/recommend')"> </div>
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

<style lang="stylus" rel="stylesheet/stylus">
  .bar_guide{
    border-bottom: 1px solid #e4e4e4;
    position: fixed;
    z-index:100;
    left:0;
    right: 0;
    top:0;
    background-color :#fff;
    width :100%;
    height :60px;
    display :flex;
  }
  .bar_guide_item{
    margin: 18px 20px;
    color: #222222;
  }
  .bar_guide_item.on{
    color:orange;
  }
  .bar_on{
    width: 35px;
    height: 5px;
    border-radius: 5px;
    background-color:orange;
    margin-top: 5px;
  }

  .bar_guide_item span{
    font-size: 18px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
</style>
