<template>
  <div class="bar_container">
    <ul class="bar_list">
      <li class="bar_li">
        <a>
          <!--吧头部，包含头像，昵称，学校，关注数，帖子数-->
          <div class="bar_head">
            <div class="bar_head_left circleImg1"></div>
            <div class="bar_head_right">
              <section class="bar_deatil_header">
                <span>小朋友</span>
                <span>西华大学</span>
                <span>关注</span>
              </section>
              <section class="bar_detail_footer" >
                <span>关注11.8w</span>
                <span>帖子15.3w</span>
              </section>
            </div>
          </div>
          <!--文本-->
          <div class="bar_text">小朋友，你是否有很多问号？？？</div>
          <!--图片或者视频-->
          <div class="bar_show">

          </div>
          <!--尾部，转发数、评论、点赞数-->
          <section class="bar_footer">
            <ul class="bar_list_discuss">
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">点赞 5.1w</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">评论 1.1w</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">转发 500</span>
              </a>
            </ul>
          </section>
        </a>
      </li>
      <li class="bar_li">
        <a>
          <!--吧头部，包含头像，昵称，学校，关注数，帖子数-->
          <div class="bar_head">
            <div class="bar_head_left circleImg1"></div>
            <div class="bar_head_right">
              <section class="bar_deatil_header">
                <span>小朋友</span>
                <span>西华大学</span>
                <span>关注</span>
              </section>
              <section class="bar_detail_footer" >
                <span>关注11.8w</span>
                <span>帖子15.3w</span>
              </section>
            </div>
          </div>
          <!--文本-->
          <div class="bar_text">小朋友，你是否有很多问号？？？</div>
          <!--图片或者视频-->
          <div class="bar_show">

          </div>
          <!--尾部，转发数、评论、点赞数-->
          <section class="bar_footer">
            <ul class="bar_list_discuss">
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">点赞 5.1w</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">评论 1.1w</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">转发 500</span>
              </a>
            </ul>
          </section>
        </a>
      </li>
      <li class="bar_li">
        <a>
          <!--吧头部，包含头像，昵称，学校，关注数，帖子数-->
          <div class="bar_head">
            <div class="bar_head_left circleImg1"></div>
            <div class="bar_head_right">
              <section class="bar_deatil_header">
                <span>小朋友</span>
                <span>西华大学</span>
                <span>关注</span>
              </section>
              <section class="bar_detail_footer" >
                <span>关注11.8w</span>
                <span>帖子15.3w</span>
              </section>
            </div>
          </div>
          <!--文本-->
          <div class="bar_text">小朋友，你是否有很多问号？？？</div>
          <!--图片或者视频-->
          <div class="bar_show">

          </div>
          <!--尾部，转发数、评论、点赞数-->
          <section class="bar_footer">
            <ul class="bar_list_discuss">
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">点赞 5.1w</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">评论 1.1w</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">转发 500</span>
              </a>
            </ul>
          </section>
        </a>
      </li>
      <li class="bar_li">
        <a>
          <!--吧头部，包含头像，昵称，学校，关注数，帖子数-->
          <div class="bar_head">
            <div class="bar_head_left circleImg1"></div>
            <div class="bar_head_right">
              <section class="bar_deatil_header">
                <span>小朋友</span>
                <span>西华大学</span>
                <span>关注</span>
              </section>
              <section class="bar_detail_footer" >
                <span>关注11.8w</span>
                <span>帖子15.3w</span>
              </section>
            </div>
          </div>
          <!--文本-->
          <div class="bar_text">小朋友，你是否有很多问号？？？</div>
          <!--图片或者视频-->
          <div class="bar_show">

          </div>
          <!--尾部，转发数、评论、点赞数-->
          <section class="bar_footer">
            <ul class="bar_list_discuss">
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">点赞 5.1w</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">评论 1.1w</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">转发 500</span>
              </a>
            </ul>
          </section>
        </a>
      </li>
      <div class="list_footer">已经到底啦</div>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import Login from "../../pages/Login/Login";
  export default {
    data(){
      return{
        attentionNum:0,//关注数
        campusId:0,//学校id
        campusName:'',//学校名称
        commentNum:0,//
        returnValue:Login.returnValue
      }
    },
    mounted(){
      this.getBarList()
    },
    methods:{
      //首页帖子列表显示
     getBarList(){
        axios.get('http://server.campus.com/pcs/post/posts?page=1&pageSize=9').then((result)=>{
          console.log(result)

        })
      }
    }
  }
</script>

<style rel="stylesheet">
  .bar_container {
    margin-top:100px;
  }
  .bar_head{
    margin-top: 8px;
  }
  .bar_head_left{
    width: 50px;
    height: 50px;
    background: url("../BarList/images/head2.jpg");
    border-radius: 25px;
    background-size:100% 100%;
  }

  .bar_li{
    border-bottom: 5px solid #e4e4e4;
  }
  .bar_head{
    width: 100%;
    height: 50px;
    position: relative;
  }
  .bar_head_right{
    position: absolute;
    top: 0px;
    left: 60px;
  }

  .bar_list_discuss li{
    float: left;
    list-style: none;
  }
  .bar_deatil_header{
    padding-top: 5px;
    font-size: 18px;
  }
  .bar_deatil_header span{
    margin-right: 10px;
    color: black;
  }
  .bar_text{
    margin: 8px 5px;
    font-size: 16px;
    color: #222222;
    line-height: 18px;
  }
  .bar_detail_footer{
    margin-top:10px;
  }
  .bar_list_discuss{
    width:100%;
    height: 20px;
  }
  .bar_show{
    width: 96%;
    height:300px;
    background: url("../BarList/images/head1.jpg");
    background-size: 100% 100%;
    margin: 0 2%;
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
  .bar_footer{
    bottom-border:1px solid #e4e4e4;
    width:100%;
    background :#fff;
    overflow :hidden;
  }

  .list_discuss_link{
    float: left;
    width :33%;
    text-align :center;
    border-right :1px solid #e4e4e4;
  }
  .list_discuss_num{
    display :inline-block;
    font-size: 14px;
    color :#666;
    font-weight: 400;
    padding-bottom:10px;
    line-height: 14px;
    margin-top: 14px;
  }
</style>

