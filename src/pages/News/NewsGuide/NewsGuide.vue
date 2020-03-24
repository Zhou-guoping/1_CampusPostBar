<template>
    <!--头部：消息、聊天、通知-->
    <div class="news_guide">
      <a href="javascript:;" class="news_guide_item" :class="{on:'/news'===$route.path}" @click="goTo('/news')">
        <span>动态</span>
        <div :class="{bar_on:'/news'===$route.path}" @click="goTo('/news')"> </div>
      </a>
      <a href="javascript:;" class="news_guide_item" :class="{on:'/news/message'===$route.path}" @click="goTo('/news/message')">
        <span>聊天</span>
        <div :class="{bar_on:'/news/message'===$route.path}" @click="goTo('/news/message')"> </div>
      </a>

      <div class="news_add" :class="{on:'/home/materials'===$route.path}" @click="goTo('/home/materials')">
        <span class="item_icon">
            <i class="iconfont icon-icon-"></i>
        </span>
      </div>
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
  .news_guide{
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
  .news_guide_item{
    margin: 18px 20px;
    color: #222222;
  }
  .news_guide_item.on{
    color:orange;
  }
  .bar_on{
    width: 35px;
    height: 5px;
    border-radius: 5px;
    background-color:orange;
    margin-top: 5px;
  }

  .news_guide_item span{
    font-size: 18px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .news_add{
    margin: 18px 10px;
    position: absolute;
    right: 5px;
    color: orange;
  }
  .icon-icon-{
    font-size: 20px;
  }
</style>
