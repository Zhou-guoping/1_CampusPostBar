<template>
    <div class="topic-container">
      <ul class="topic_list">
        <li class="topic_li">
          <a>
            <div class="topic_head">
              <span class="topic_num" style="color: red">1</span>
              <span class="topic_title">关注疫情</span>
              <span class="topic_heat">262.6万热度</span>
            </div>
            <div class="topic_text">
              <p>至2月17日，全国累计确诊新冠肺炎xxxxx例，疑似xxxx例，治愈xxxx例子，死亡xxxx例。<span>#查看详情#</span></p>
            </div>
            <div class="topicImg"></div>
          </a>
        </li>
        <li class="topic_li">
          <a>
            <div class="topic_head">
              <span class="topic_num" style="color:#DD4A68">2</span>
              <span class="topic_title">医用口罩</span>
              <span class="topic_heat">222.2万热度</span>
            </div>
            <div class="topic_text">
              <p>由于新冠肺炎，全国各地都需要口罩<span>#查看详情#</span></p>
            </div>
            <div class="topicImg"></div>
          </a>
        </li>
        <li class="topic_li">
          <a>
            <div class="topic_head">
              <span class="topic_num" style="color:orange">3</span>
              <span class="topic_title">高校开学时间</span>
              <span class="topic_heat">145.6万热度</span>
            </div>
            <div class="topic_text">
              <p>开学时间待定。<span>#查看详情#</span></p>
            </div>
            <div class="topicImg"></div>
          </a>
        </li>
        <div class="list_footer">已经到底啦</div>
      </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .topic-container{
    margin-top:100px;
  }
  .topicImg{
    width: 96%;
    height:300px;
    background: url("../BarList/images/head2.jpg");
    background-size: 100% 100%;
    margin: 0 2% 2px;
  }

  .topic_li{
    margin-top:10px;
    border-bottom: 1px solid #e4e4e4;
  }
  .topic_num{
  /*  display :inline-block;
    width:25px;
    height:25px;
    border-radius :5px;*/
  }
  .topic_head{
    margin: 10px 10px;
    font-size :18px;
    color: #000
  }
  .topic_title{
    font-weight bold
    margin-left 15px
  }
  .topic_heat{
    font-size 15px
    color #7e8c8d
    position: absolute;
    right: 10px;
  }
  .topic_text{
    margin: 8px 5px;
    font-size: 16px;
    color: #222222;
    line-height: 18px;
  }
  .topic_text span{
    color #0086b3
  }
  .list_footer{
    width:100%;
    height: 30px;
    background: #e4e4e4;
    color: #7e8c8d;
    margin-bottom: 50px;
    text-align: center;
    padding-top: 15px;
  }
</style>
