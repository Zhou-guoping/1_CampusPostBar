<template>
    <section class="topic-container">
      <ul class="top_list">
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
            <!--图片-->
            <div class="topicImg">

            </div>
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
    </section>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .topic_container{
    width: 10rem;
  }
  .topicImg{
    width: 96%;
    height:300px;
    background: url("../BarList/images/head2.jpg");
    background-size: 100% 100%;
    margin: 0 2% 2px;
  }
  .top_list{
    margin-top 135px
  }
  .topic_li{
    margin-top:10px;
    border-bottom: 1px solid #e4e4e4;
  }
  .topic_num{
    font-size:28px;
  }
  .topic_head{
    width 96%
    margin: 10px 2%;
    font-size :24px;
    color: #000
    position: relative;
  }
  .topic_title{
    font-weight bold
    margin-left 15px
  }
  .topic_heat{
    font-size 20px
    color #7e8c8d
    position: absolute;
    margin-top: 5px;
    right: 10px;
  }
  .topic_text{
    width 96%
    margin: 8px 2%;
    font-size: 24px;
    line-height:26px;
    color: #222222;
  }
  .topic_text span{
    color #0086b3
  }
  .list_footer{
    width:100%;
    height: 50px;
    background: #e4e4e4;
    color: #7e8c8d;
    margin-bottom: 80px;
    text-align: center;
    padding-top: 15px;
    font-size: 20px;
  }
</style>
