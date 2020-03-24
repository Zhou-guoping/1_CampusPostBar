<template>
    <div class="search_container">
      <!--搜索头部-->
      <div class="search_head">
        <a href="javascript:" class="go_back" @click="$router.go(-1)">
          <i class="iconfont icon-">back</i>
        </a>
        <input  class="search_text" type="text " placeholder="大家都在搜:">
        <button class="search_btn">搜索</button>
      </div>
      <!--热搜-->
      <div class="top_search">
        <h5>校园热搜</h5>
        <ul class="top_search_list">
          <li class="top_search_li">
            <a>
              <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
              </span>
              <span>今天你学习了吗</span>
            </a>
          </li>
          <li class="top_search_li">
            <a>
              <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
              </span>
              <span>今天你学习了吗</span>
            </a>
          </li>
          <li class="top_search_li">
            <a>
              <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
              </span>
              <span>今天你学习了吗</span>
            </a>
          </li>
          <li class="top_search_li">
            <a>
              <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
              </span>
              <span>今天你学习了吗</span>
            </a>
          </li>
          <li class="top_search_li">
            <a>
              <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
              </span>
              <span>今天你学习了吗</span>
            </a>
          </li>
          <li class="top_search_li">
            <a>
              <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
              </span>
              <span>今天你学习了吗</span>
            </a>
          </li>
          <li class="top_search_li">
            <a>
              <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
              </span>
              <span>今天你学习了吗</span>
            </a>
          </li>
          <li class="top_search_li">
            <a>
              <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
              </span>
              <span>今天你学习了吗</span>
            </a>
          </li>
          <li class="top_search_li">
            <a>
              <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
              </span>
              <span>今天你学习了吗</span>
            </a>
          </li>
          <li class="top_search_li">
          <a>
              <span class="item_icon">
                <i class="iconfont icon-icon-"></i>
              </span>
            <span>今天你学习了吗</span>
          </a>
        </li>
        </ul>
      </div>
      <!--历史搜索-->
      <div class="history_search">
        <h5>历史搜索</h5>
        <ul class="history_search_list">
          <li class="history_search_li"><a>好好</a></li>
          <li class="history_search_li"><a>好好学习</a></li>
          <li class="history_search_li"><a>好好学习</a></li>
          <li class="history_search_li"><a>学习</a></li>
          <li class="history_search_li"><a>好好学习</a></li>
          <li class="history_search_li"><a>好好学习</a></li>
        </ul>
        <h4 history_delete>
           <span class="item_icon">
                <i class="iconfont icon-shouye"></i>
           </span>
          <span>清空历史记录</span>
        </h4>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search_text{
    width:70%;
    height: 30px;
    border-radius: 20px 20px;
    border-color: #0086b3;
    border: solid #ffffff;
    margin: 5px 12% 0;
    text-align: center;
    background-color: #eeeeee;
  }
  .go_back{
    position: absolute;
    top: 5px;
    left:5px;
    width: 30px;
    height:30px;
    margin-top: 5px;
  }
  .go_back>.iconfont{
    font-size:20px;
    color :#999;
  }
.search_btn{
  position: absolute;
  top: 5px;
  right:10px;
  width: 50px;
  height:30px;
  margin-top: 5px;
}
  .top_search_list{
    width:100%;
    height:auto;
  }
  .top_search_li{
    width:45%;
    height:20px;
    float: left;
    margin:10px 10px;
  }
  .history_search_li{
    float left;
    height: 20px;
    margin:10px 10px;
  }
  .history_delete{
    position :relative;
    top: 50px;
  }
</style>
