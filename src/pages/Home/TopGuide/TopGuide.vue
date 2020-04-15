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

      <div class="top_guide_add" @click="showAddList?showAddList=false:showAddList=true">
        <span class="item_icon" >
          <i class="iconfont icon-icon-"></i>
        </span>
        <ul class="add_li" v-show="showAddList">
          <li class="add_choose" style="color: red"> <router-link to="/home/addFriendNewsPic"><i class="iconfont icon-tupian" style="color: #ee9900"></i> <span>图片</span></router-link></li>
          <li class="add_choose"> <router-link to="/home/addFriendNewsVideo"><i class="iconfont icon-shipin" style="color: aquamarine"></i> <span>视频</span></router-link></li>
          <li class="add_choose"> <router-link to="/home/addFriendNewsFile"><i class="iconfont icon-wenjian" style="color: #DD4A68"></i> <span>资料</span></router-link></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        showAddList:false
      }
    },
    mounted() {

    },
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style rel="stylesheet" scoped="scoped">
  .top{
    position: fixed;
    z-index:100;
    left:50%;
    transform: translateX(-50%);
    top:0;
    background-color :#fff;
    width :10rem;
    box-sizing: border-box;
    border-bottom: 2px solid #e4e4e4;
  }
  .search_link_text{
    width:90%;
    height: 50px;
    border-radius: 25px 25px;
    border: solid #ffffff;
    margin: 4px 4% 0;
    text-align: center;
    background-color: #eeeeee;
    font-size: 18px;
  }
  .top_guide{
    width :100%;
    height :60px;
    display :flex;
  }
  .top_guide_item,.top_guide_add{

    /*text-align: center;*//* display: flex;
    flex: 1;*/
    flex-direction: column;
    /*    align-items: center;*/
    margin: 10px 40px;
    color: #222222;

  }

  .bar_on{
    width: 55px;
    height: 6px;
    border-radius: 10px;
    background-color:orange;
    margin-top: 6px;
  }

  .top_guide_item span{
    font-size: 28px;
    font-weight: bold;
    margin-top: 4px;
    margin-bottom: 4px;
  }

  .top_guide_add{
    position: absolute;
    right: -20px;
    bottom: -10px;
    color: orange;
  }
  .add_li{
    width: 200px;
    margin-top: 4px;
    position: absolute;
    left: -165px;
    font-size: 26px;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 10px;
  }
  .add_choose:last-child{
    border-bottom: transparent;
  }
  .add_choose{
    border-bottom: 2px solid rgba(51, 38, 38, 0.85);
    height: 80px;
    color: orange;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
  }
  .iconfont{
    font-size: 40px;
  }
  .add_choose span{
    color: rgba(255, 255, 255, 0.7);
  }
</style>
