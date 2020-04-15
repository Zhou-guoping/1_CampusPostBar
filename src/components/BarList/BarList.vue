<template>
  <div class="bar_container">
    <ul class="bar_list">
      <li class="bar_li" v-for='(item,i) in postData' :key="i">
        <a>
          <!--吧头部，包含头像，昵称，学校，关注数，帖子数-->
          <div class="bar_head" @click="toBarDetail(item.postBarId)">
            <img class="bar_head_left circleImg1" :src="url+item.postBarImg" alt="头像" ><!--吧头像-->
            <div class="bar_head_right">
              <section class="bar_detail_header">
                <span v-model="item.postBarName">{{item.postBarName}}</span>
                <span>{{item.campusName}}</span>
              </section>
              <section class="bar_detail_footer" >
                <span>帖子 {{item.postNum}}</span>
                <span>关注 {{item.attentionNum}}</span>
              </section>
            </div>
          </div>
          <!--文本-->
          <div class="text">
            <span class="userName"  @click="toUserDetail(item.userId)">{{item.userNickname}}:</span>
            <span class="bar_text"  @click="toPostDetail(item.postId)">{{item.postContent}}</span>
            <span style="color: #0086b3">#展开##收齐#</span>
            <!--<div class="bar_text" v-model="content"><em style="color: #ee9900">
              <em style="color: #0086b3">#</em>{{item.userNickname}}<em style="color: #0086b3">#</em></em>:{{item.postContent}}
              <span style="color: #0086b3">#展开##收齐#</span>
            </div>-->
          </div>

          <!--图片或者视频-->
          <div class="bar_show">

          </div>
          <!--尾部，转发数、评论、点赞数-->
          <section class="bar_footer">
            <ul class="bar_list_discuss">
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">分享 500</span>
              </a>

              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">评论 {{item.commentNum}}</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num" :class="{isActive:item.isLike===1}" @click="postLike(i)">点赞 {{item.likeNum}}</span>
              </a>
            </ul>
          </section>
        </a>
      </li>
      <li class="bar_li">
        <a>
          <!--吧头部，包含头像，昵称，学校，关注数，帖子数-->
          <section class="bar_head" >
            <div class="bar_head_left circleImg1" @click="$router.replace('/bar/barDetails')"></div>
            <div class="bar_head_right">
              <section class="bar_detail_header">
                <span>皮皮吧</span>
                <span>西华大学</span>
                <!--<span class="attBtn">关注</span>-->
              </section>
              <section class="bar_detail_footer" >
                2020-2-6 13:32
              </section>
            </div>

          </section>
          <!--文本-->
          <div class="text"  @click="$router.replace('/bar/postDetails')">
            <span style="color: #0086b3">皮皮虾：</span>欢迎来到校园贴吧</div>
          <!--图片或者视频-->
          <div class="bar_show">

          </div>
          <!--尾部，转发数、评论、点赞数-->
          <section class="bar_footer">
            <ul class="bar_list_discuss">
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">点赞 11.1w</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">评论 2.2w</span>
              </a>
              <a href="javascript:" class="list_discuss_link">
                <span class="list_discuss_num">转发 2000</span>
              </a>
            </ul>
          </section>
        </a>
      </li>
      <div class="list_footer" @click="getMorePosts">{{footerText}}</div>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import {MessageBox,Toast} from 'mint-ui'
  import {mapActions,mapState} from 'vuex'
  import '../../common/time'
  export default {
    data(){
      return{
        attentionNum:0,//关注数
        campusId:0,//学校id
        campusName:'',//学校名称
        postData:[],//吧数组
        url:'http://192.168.1.133/',
        commentNum:0,//评论数
        content:'',
        loadState: true, // 是否显示底部加载状态，默认true
        finish: false, // 是否加载完成
        loading: false, // 是否正在加载中
        domHeight: 0, // 内容可视区的高度
        container: null ,// 绑定能被监听滚动的元素
        pageIndex:1, //默认加载页数
        footerText:'',
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    created() {
      this.getPostList()
    },
    mounted(){

    },
    methods:{
      getPostList(){
        //首页帖子列表显示
        axios.get('http://server.campus.com/pcs/post/noLogin/posts?page='+this.pageIndex+'&pageSize=20').then((result) => {
          this.postData = this.postData.concat(result.data.data)
          if(result.data.data.length===0||result.data.data.length<20){
            this.footerText='暂无更多内容'
          }else{
            this.footerText='加载更多'
          }
        }).catch(error=>{
          console.log(error);
        })
      },
      toPostDetail(postId) {
        this.$router.push({path: `/bar/postDetails/${postId}`})
      },
      toBarDetail(postBarId){
        this.$router.push({path:`/bar/barDetails/${postBarId}`})
      },
      toUserDetail(userId){
        this.$router.push({path:`/bar/userDetails/${userId}`})
      },
      //贴子点赞与取消点赞
      postLike(index){
        if(!this.userInfo) {
          return MessageBox.confirm('你还未登录，是否前往登录？').then(
            action=>{
              this.$router.replace('/login')
            }
          ).catch(()=>{})
        }
        if(this.postData[index].isLike===0){
          this.postData[index].likeNum=this.postData[index].likeNum+1
          this.util.Like(this.postData[index].postId,1)
          this.postData[index].isLike=1
          return
        }else if(this.postData[index].isLike===1){
          this.postData[index].likeNum=this.postData[index].likeNum-1
          this.util.delLike(this.postData[index].postId,1)
          this.postData[index].isLike=0
          return;
        }
      },
      //加载更多评论 正序
      getMorePosts(){
        this.pageIndex++;
        this.getPostList()
        if(this.footerText='暂无更多内容')
          return false
      },
  },
  }
</script>

<style rel="stylesheet">
  .bar_container {
    width: 10rem;
    margin-top:135px;
  }
  .bar_head{
    display: -webkit-flex;
    display: flex;
    width: 90%;
    height: 70px;
    margin:8px 5%;
    font-size: 26px;
    position: relative;
  }
  .bar_head_left{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-size:100% 100%;
  }
  .bar_head_right{
    width: 90%;
    height: 70px;
    padding-left: 15px;
    flex: 1;
  }
  .bar_detail_header{
    color: black;
  }
  .attBtn{
    width: 100px;
    height: 40px;
    border-radius:18px;
    background-color: rgba(70, 212, 241, 0.3);
    color: #2e86f1;
    font-size: 18px;
    text-align: center;
    line-height: 43px;
    position: absolute;
    margin-top: 5px;
    right: 10px;
  }
  .bar_detail_footer{
    font-size: 20px;
    margin-top: 0px;

  }

  .bar_li{
    border-bottom: 1px solid #e4e4e4;
  }
  .bar_list_discuss li{
    float: left;
    list-style: none;
  }

  .text{
    width: 90%;
    margin: 5px 5%;
    font-size: 24px;
    color: #222222;
    line-height:  26px;
    padding-top: 5px;
  }
  .userName{
    color: #0872b3;
  }
  .bar_list_discuss{
    width:100%;
    height: 20px;
  }
  .bar_show{
    width: 90%;
    height:400px;
    background: url("../BarList/images/head2.jpg");
    background-size: 100% 100%;
    margin: 0 5%;
  }

  .bar_footer{
    bottom-border:1px solid #e4e4e4;
    width:100%;
    background :#fff;
    overflow :hidden;
  }

  .list_discuss_link{
    margin-left: 30px;
    margin-right: 30px;
    float: left;

  }
  .list_discuss_link:last-child{
    border-right: transparent;
  }
  .list_discuss_num{
    display :inline-block;
    font-size: 22px;
    color :#666;
    font-weight: 400;
    padding-bottom:20px;
    line-height: 22px;
    margin-top: 20px;
  }
  .list_footer{
    width:100%;
    height: 50px;
    margin-bottom: 80px;
    text-align: center;
    padding-top: 15px;
    font-size: 20px;
    color: #727272;
  }
  .isActive{
    color: skyblue;
  }
</style>
