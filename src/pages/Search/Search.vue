<template>
    <section class="search_container">
      <!--搜索头部-->
      <div class="search_head">
        <a href="javascript:" class="go_back" @click="$router.go(-1)">
          <i class="iconfont icon-communicate"></i>
        </a>
        <input  class="search_text" type="text " placeholder="大家都在搜:" v-model="searchText" @keyup.enter="searchTo">
        <a href="javascript:;" class="search_btn" @click="searchTo">
          <i class="iconfont icon-sousuo"></i>
        </a>
      </div>
      <!--搜索之前显示-->
      <section class="search_common" v-if="search">
        <!--历史搜索-->
        <div class="history_search">
          <ul class="history_search_list">
            <li class="history_search_li"><a><span class="iconfont icon-diqiu"></span> 好好</a><span class="delete_icon iconfont el-icon-delete"></span></li>
            <li class="history_search_li"><a><span class="iconfont icon-diqiu"></span> 好好</a><span class="delete_icon iconfont el-icon-delete"></span></li>
            <li class="history_search_li"><a><span class="iconfont icon-diqiu"></span> 好好</a><span class="delete_icon iconfont el-icon-delete"></span></li>
          </ul>
          <div class="history_delete" >
           <span class="iconfont icon-bianjiqianbixieshuru"></span>
            <span>清空历史记录</span>
          </div>
        </div>
        <!--热搜-->
        <div class="top_search">
          <p><span class="iconfont el-icon-help" style="color: #DD4A68;"></span>校园热搜</p>
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
      </section>

      <!--搜索之后显示-->
      <section class="search_result" v-else="searchBefore">
        <div class="search_list">
          <div class="search_guide">
            <a href="javascript:;" class="search_guide_item" :class="{active:Index==1}" @click="showResult(1)">
              <span>综合</span>
            </a>
            <a href="javascript:;" class="search_guide_item" :class="{active:Index==2}" @click="showResult(2)">
              <span>帖</span>
            </a>
            <a href="javascript:;" class="search_guide_item" :class="{active:Index==3}" @click="showResult(3)">
              <span>吧</span>
            </a>
            <a href="javascript:;" class="search_guide_item" :class="{active:Index==4}" @click="showResult(4)">
              <span>人</span>
            </a>
            <a href="javascript:;" class="search_guide_item" :class="{active:Index==5}"  @click="showResult(5)">
              <span>资料</span>
            </a>
          </div>
          <div class="results">
            <!--综合-->
            <div class="total_result" v-if="Index===1">
              hahaahhahahah
            </div>
            <!--帖-->
            <div class="post_result" v-if="Index===2">
              <ul class="bar_list">
                <li class="bar_li" v-for='(item,i) in postList' :key="i">
                  <a>
                    <!--头像，昵称，学校，贴吧名，时间-->
                    <div class="bar_head">
                      <img class="bar_head_left circleImg1" :src="url+item.userHeadImgUrl">
                      <div class="bar_head_right">
                        <section class="bar_detail_header">
                          <span v-html="item.userNickname">{{item.userNickname}}</span>
                          <span v-html="item.campusName">{{item.campusName}}</span>
                          <span>关注</span>
                        </section>
                        <section class="bar_detail_footer" >
                          <span v-html="item.postBarName"> {{item.postBarName}}</span>
                          <span v-html="item.createTime"> {{item.createTime}}</span>
                        </section>
                      </div>
                    </div>
                    <!--文本-->
                    <div class="text">
                      <div class="bar_text" v-html="item.postContent"></div>
                    </div>

                    <!--图片或者视频-->
                    <div class="bar_show">

                    </div>
                    <!--尾部，转发数、评论、点赞数-->
                    <section class="bar_footer">
                      <ul class="bar_list_discuss">
                        <a href="javascript:" class="list_discuss_link">
                          <span class="list_discuss_num">点赞 {{item.likeNum}}</span>
                        </a>
                        <a href="javascript:" class="list_discuss_link">
                          <span class="list_discuss_num">评论 {{item.commentNum}}</span>
                        </a>
                        <a href="javascript:" class="list_discuss_link">
                          <span class="list_discuss_num">转发 500</span>
                        </a>
                      </ul>
                    </section>
                  </a>
                </li>
              </ul>
            </div>
            <!--吧-->
            <div class="bar_result" v-if="Index===3">
              <ul class="bar_list">
                <li class="bar_li" style="height: 70px" v-for='(item,i) in postBarList' :key="i">
                  <a>
                    <!--头像,简介，关注，帖子-->
                    <div class="bar_head">
                      <img class="bar_head_left circleImg1" :src="url+item.postBarImg">
                      <div class="bar_head_right">
                        <section class="bar_deatil_header">
                          <span v-html="item.postBarName"></span>
                          <span>关注</span>
                        </section>
                        <section>{{item.postBarIntroduction}}</section>
                        <section class="bar_detail_footer" >
                          <span> {{item.attentionNum}}关注</span>
                          <span> {{item.postNum}}帖子</span>
                        </section>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <!--人-->
            <div class="people_result" v-if="Index===4">
              peopeoepepeo
            </div>
            <!--资料-->
            <div class="material_result" v-if="Index===5">
              matermatmatmat
            </div>

          </div>
        </div>

      </section>
      <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
    </section>

</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip'
  import axios from 'axios'
    export default {
      data(){
        return{
          url:'http://192.168.1.133/',
          search: true, // 代表搜索之前,true 为显示,false代表搜索之后
          searchText:'',//搜索内容
          alertText: '', // 提示文本
          alertShow: false, // 是否显示警告框
          Index:1,
          postList:[],
          postBarList:[],
          userList:[],
        }
      },
      mounted() {

      },
      methods:{
        goTo(path){
          this.$router.replace(path)
        },
        searchTo(){
          if(this.searchText===''){
            this.showAlert('请输入搜索内容')
          }else{
            axios.get('http://server.campus.com/pcs/post/noLogin/posts/search?searchKey='+this.searchText).then((result)=>{
              this.search=false
              if (result.status===200){
                console.log(result.data)
                this.postList=result.data.postList
                this.postBarList=result.data.postBarList
                this.userList=result.data.userList
              }else{
                console.log('没有搜索到结果')
              }
            }).catch()
          }

        },
        //显示搜索结果
        showResult(index){
          if (index===1){
            this.Index=1
          }else if (index===2){
            this.Index=2
          }else if (index===3){
            this.Index=3
          }else if (index===4){
            this.Index=4
          }else if (index===5){
            this.Index=5
          }
        },

        //错误提示弹框
        showAlert(alertText) {
          this.alertShow = true;
          this.alertText = alertText;
        },
        // 关闭警告框
        closeTip () {
          this.alertShow = false
          this.alertText = ''
        }
      },
      components:{
        AlertTip,
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search_container{
    width 10rem
    top 0
    left 50%
    transform translateX(-50%)
    position: fixed;
    z-index:100;
  }
  .search_head{
    margin 8px
    display flex
  }
  .go_back,.search_btn{
    text-decoration none
    width 50px
    height 50px
    line-height 50px
    text-align center
    margin 3px 5px 0
    color #ee9900
  }
  .search_text{
    flex 1
    height 50px
    border-radius 20px 20px
    background-color #eeeeee;
    outline none
    border 0
    text-align center;
    font-size 18px
  }
  .history_search{
    width 10rem
    border-top 3px solid #e4e4e4
  }
  .top_search_list{
    width:10rem;
    height:auto;
  }

  .history_search_li{
    text-decoration none
    height 60px
    width 10rem
    border-bottom 1px solid #e4e4e4
    line-height 60px
    position relative
  }
  .history_search_li a{
    text-decoration none
    font-size 24px
    color black
    margin-left 20px
  }
  .history_search_li .iconfont{
    font-size 24px
    margin-left 5px
    margin-right 20px
    color gray
  }
  .delete_icon{
    font-size 24px
    position: absolute;
    line-height 60px
    right: 10px;
    margin-left 20px
  }
  .history_delete{
    width 100%
    height 60px
    margin 0 auto
    line-height 60px
    text-align center
    font-size 22px
    border-bottom: 5px solid #e4e4e4;
  }
  .history_delete .iconfont{
    font-size 24px
    color gray
  }
  .top_search{
    padding-top 10px

  }
  .top_search .iconfont{
    display inline-block
    font-size 24px
    padding-right 5px
    text-align center
  }
  .top_search p{
    font-size 24px
    margin-left: 10px;
  }

  .top_search_list{
    margin-top 10px
  }
  .top_search_li{
    float left
    text-decoration none
    font-size 22px
    line-height 60px
    width 45%
    height 60px
    margin:0px 10px;
    padding-left 5px
    text-align center
  }

  .search_guide{
    border-bottom: 1px solid #e4e4e4;
    background-color :#fff;
    width :100%;
    height :50px;
    display :flex;
  }
  .search_guide_item{
    text-align: center;
    flex: 1;
    flex-direction: column;
    margin: 10px;
    color: #222222;
  }

  .search_guide_item span{
    font-size: 24px;
    margin-top: 2px;
    font-weight: bold;
  }
  .active{
    color:orange
  }
 /* .bar_head{
    margin-top: 8px;
  }
  .bar_head_left{
    width: 50px;
    height: 50px;
    !*background: url("../BarList/images/head2.jpg");*!
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
  .bar_text{
    color: #7e8c8d;
    overflow: hidden;
  }
  .bar_list_discuss li{
    float: left;
    list-style: none;
  }
  .bar_detail_header{
    padding-top: 5px;
    font-size: 18px;
  }
  .bar_detail_header span{
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

    background: url("../../components/BarList/images/head1.jpg");
    background-size: 100% 100%;
    margin: 0 2%;
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
  .list_footer{
    width:100%;
    height: 30px;
    background: #e4e4e4;
    color: #7e8c8d;
    margin-bottom: 50px;
    text-align: center;
    padding-top: 15px;
  }*/
</style>
