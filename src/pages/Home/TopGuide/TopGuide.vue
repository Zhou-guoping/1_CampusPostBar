<template>
  <div class="top">
    <div class="search">
      <router-link to= '/search' class="search_link">
        <input  class="search_link_text" type="text " placeholder="大家都在搜：">
      </router-link>
    </div>
    <div class="top_guide">
      <a href="javascript:;" class="top_guide_item" :class="{on:'/home/attention'===$route.path}" @click="goTo('/home/attention')">
        <span>关注</span>
        <div :class="{bar_on:'/home/attention'===$route.path}" @click="goTo('/home/attention')"> </div>
      </a>
      <a href="javascript:;" class="top_guide_item" :class="{on:'/home'===$route.path}" @click="goTo('/home')">
        <span>首页</span>
        <div :class="{bar_on:'/home'===$route.path}" @click="goTo('/home')"> </div>
      </a>
      <a href="javascript:;" class="top_guide_item" :class="{on:'/home/topic'===$route.path}" @click="goTo('/home/topic')">
        <span>话题</span>
        <div :class="{bar_on:'/home/topic'===$route.path}" @click="goTo('/home/topic')"> </div>
      </a>
      <a href="javascript:;" class="top_guide_item" :class="{on:'/home/materials'===$route.path}" @click="goTo('/home/materials')">
        <span>资料</span>
        <div :class="{bar_on:'/home/materials'===$route.path}" @click="goTo('/home/materials')"> </div>
      </a>
      <div class="top_guide_add" :class="{on:'/home/materials'===$route.path}" @click="goTo('/home/materials')">
      <span class="item_icon">
          <i class="iconfont icon-icon-"></i>
      </span>
      </div>
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

<style rel="stylesheet">
  .top{
    position: fixed;
    z-index:100;
    left:0;
    right: 0;
    top:0;
    background-color :#fff;
    width :100%;
    height :80px;
  }
  .search_link_text{
    width:90%;
    height: 30px;
    border-radius: 20px 20px;
    border-color: #0086b3;
    border: solid #ffffff;
    margin: 5px 4% 0;
    text-align: center;
    background-color: #eeeeee;
  }
  .top_guide{
    border-bottom: 1px solid #e4e4e4;
    background-color :#fff;
    width :100%;
    height :50px;
    display :flex;
  }
  .top_guide_item,.top_guide_add{

    /*text-align: center;*//* display: flex;
    flex: 1;*/
    flex-direction: column;
    /*    align-items: center;*/
    margin: 10px 20px;
    color: #222222;
  }
  .top_guide_item.on{
    color:orange;
  }
  .bar_on{
    width: 40px;
    height: 5px;
    border-radius: 5px;
    background-color:orange;
    margin-top: 5px;
  }

  .top_guide_item span{
    font-size: 18px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .top_guide_add{
    position: absolute;
    right: 5px;
    color: orange;
  }
  .icon-icon-{
    font-size: 20px;
  }
</style>
