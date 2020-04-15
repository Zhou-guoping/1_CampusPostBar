<template>
    <div class="bar_detail_container">
      <section class="detail_head">
        <!--头部-->
        <HeaderTop ><!--style="background:transparent;border-bottom: none"-->
          <router-link class="go_back" slot="left" to="/home">
            <i class="iconfont icon-jiaguanzhuhuati" style="color: #ffffff;"></i>
          </router-link>
          <div class="bar_search" slot="right"><i class="iconfont icon-sousuo" style="color: #ffffff;"></i></div>
        </HeaderTop>
        <!--头像，贴吧名，关注按钮，关注数，贴子数-->
        <section class="bar_info">
          <img class="bar_img circleImg":src="url+BarDetails.postBarImg">
          <div class="bar_infos">
            <div class="bar_name">{{BarDetails.postBarName}}</div>
            <div class="bar_num">
              <span class="attention_num" >关注 &nbsp;{{BarDetails.attentionNum}}</span>
              <span class="post_num">贴子 &nbsp;{{BarDetails.postNum}}</span>
            </div>
          </div>
          <div class="bar_attBtn" @click.prevent="attBtn">{{BarDetails.isAttention==0?'关注':'已关注'}}</div><!--{{BarDetails.isAttention=='0'?'关注':'已关注'}}-->
        </section>
        <!--公告栏-->
        <section class="bar_notice">
          <div class="notice_content" style="border-bottom: 1px solid #e4e4e4;"><span style="color: rgba(29,29,29,0.79);">公告：</span>期待开学</div>
          <div class="notice_content"><span style="color:rgba(29,29,29,0.79);">公告：</span>西华大学欢迎你！！！</div>
        </section>
      </section>
      <section class="bar_detail">
        <div class="bar_detail_guide">
          <a href="javascript:;" class="bar_guide_item" :class="{active:Index===1}" @click="showResult(1)">最新</a>
          <a href="javascript:;" class="bar_guide_item" :class="{active:Index===2}" @click="showResult(2)">精华</a>
          <a href="javascript:;" class="bar_guide_item" :class="{active:Index===3}" @click="showResult(3)">资料</a>
        </div>
        <section class="post_container">
          <ul class="bar_list" v-if="Index===1">
            <li class="bar_li">
              <a>
                <!--吧头部，包含头像，昵称，学校，关注数，帖子数-->
                <section class="bar_head" >
                  <div class="bar_head_left circleImg1" @click="$router.replace('/bar/BarDetail')"></div>
                  <div class="bar_head_right">
                    <section class="bar_detail_header">
                      <span>皮皮虾</span>
                      <span>西华大学</span>
                    </section>
                    <section class="bar_detail_footer" >
                      2020-2-6 13:32
                    </section>
                  </div>

                </section>
                <!--文本-->
                <div class="bar_text"  @click="$router.replace('/bar/postDetails')">欢迎来到校园贴吧</div>
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
            <div class="list_footer">已经到底啦</div>
          </ul>
          <ul class="bar_list" v-if="Index===2">
            <li class="bar_li">
              <a>
                <!--吧头部，包含头像，昵称，学校，关注数，帖子数-->
                <section class="bar_head" >
                  <div class="bar_head_left circleImg1" @click="$router.replace('/bar/BarDetail')"></div>
                  <div class="bar_head_right">
                    <section class="bar_detail_header">
                      <span>皮皮虾</span>
                      <span>西华大学</span>
                    </section>
                    <section class="bar_detail_footer" >
                      2020-2-6 13:32
                    </section>
                  </div>

                </section>
                <!--文本-->
                <div class="bar_text"  @click="$router.replace('/bar/postDetails')">欢迎来到校园贴吧</div>
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
            <div class="list_footer">已经到底啦</div>
          </ul>
          <ul class="material_list" v-if="Index===3" v-for="(item,i) in filesList" :key="i">
            <li class="material_li">
              <a>
                <!--文件头像、文件名称、时间、上传者-->
                <div class="material_head">
                  <div class="material_head_left"></div>
                  <div class="material_head_center">
                    <section class="material_detail">
                      <div class="material_name">{{item.fileName}}</div>
                      <div class="material_footer">
                        <div class="material_upload" style="color: #0086b3">{{item.uploadUserName}}</div>
                        <div class="material_time">{{item.createTime}}</div>
                        <div class="material_size">{{item.fileSize}}k</div>
                        <div class="material_downTime">{{item.downloadTimes}}</div>
                      </div>

                    </section>

                  </div>
                  <div class="material_head_right">
                    <i class="iconfont icon-wenjian" style="color: #0086b3"></i>
                  </div>
                </div>
              </a>
            </li>

            <div class="list_footer">已经到底啦</div>
          </ul>
        </section>
      </section>
      <section class="addPostBtn" :class="{'addPostBtn1':showAddList,'addPostBtn2':!showAddList}" @click="showAddList?showAddList=false:showAddList=true"><!-- <div class="top_guide_add" @click="showAddList?showAddList=false:showAddList=true">-->
          <i class="iconfont icon-icon-" style="color: #ffffff"></i>
      </section>
      <section class="btnShow" v-show="showAddList">
        <div class="postBtn">
          <a href="javascript:;" class="postBtn_item" @click="$router.replace('/bar/BarDetail/pictures')">
            <div class="itemIcon">
              <i class="iconfont icon-tupian"></i>
            </div>
            <span>图片</span>
          </a>
          <a href="javascript:;" class="postBtn_item" @click="$router.replace('/bar/BarDetail/video')">
            <div class="itemIcon">
              <i class="iconfont icon-shipin"></i>
            </div>
            <span>视频</span>
          </a>
          <a href="javascript:;" class="postBtn_item" @click="$router.replace('/bar/BarDetail/file')">
            <div class="itemIcon">
              <i class="iconfont icon-wenjian"></i>
            </div>
            <span>文件</span>
          </a>
        </div>
      </section>
    </div>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop";
  import axios from "axios";
  import {Toast,MessageBox} from 'mint-ui'
    export default {
      data() {
        return {
          url:'http://192.168.1.133/',
          Index:1,
          showAddList:false,
          BarDetails:{},//贴吧详情
          isAttention:0,//是否关注
          filesList:[], //文件列表
          newestList:[],//最新贴子列表
          simpleList:[],//精华贴子列表
        }
      },
      components:{
        HeaderTop
      },
      props:{
        'postBarId':String
      },
      mounted() {
        let that=this
        /*获取贴吧信息*/
        axios.get('http://server.campus.com/pcs/post-bar/noLogin/postBar/'+this.postBarId).then((result)=>{
          if(result.status===200){
            that.BarDetails=result.data
          }
          else{
            console.log('数据加载失败')
          }
        })

        /*获取贴吧内的文件*/
        axios.get('http://server.campus.com/pcs/post-bar/noLogin/files/'+this.postBarId+'?page=1&pageSize=20').then((result)=>{
          if (result.status===200){
            that.filesList=result.data.data
            //console.log(that.filesList)
          }
        })

        /*获取贴吧内的贴子*/
        axios.get('http://server.campus.com/pcs/post-bar/noLogin/posts/'+this.postBarId+'?page=1&pagesSize=20').then((result)=>{
          if(result.status===200){
            that.newestList=result.data.data
            console.log(that.newestList)
          }
        })
      },
      methods:{
        //关注贴吧  取消关注贴吧
        attBtn(){
          if(!this.userInfo) {
            return MessageBox.confirm('你还未登录，是否前往登录？').then(
              action=>{
                this.$router.replace('/login')
              }
            ).catch(()=>{})
          }
          let that=this
          if(that.BarDetails.isAttention===0){ /*未关注*/
            axios.post('http://server.campus.com/pcs/post-bar/attention/'+this.postBarId,{"postBarId":this.postBarId}).then((result)=>{
              if(result.status===200){
                that.BarDetails.isAttention=that.BarDetails.isAttention+1
                that.isAttention=that.BarDetails.isAttention
              }
            })
          }else if(that.BarDetails.isAttention===1){ /*已经关注*/
            axios.put('http://server.campus.com/pcs/post-bar/attention/'+this.postBarId,{"postBarId":this.postBarId}).then((result)=> {
              if (result.status === 200) {
                that.BarDetails.isAttention = that.BarDetails.isAttention - 1
                that.BarDetails=that.BarDetails.isAttention
              }
            })
          }
          /*let that=this
          if(that.isAttention===0){ /!*未关注*!/
            axios.post('http://server.campus.com/pcs/post-bar/attention/'+this.postBarId,{"postBarId":this.postBarId}).then((result)=>{
              if(result.status===200){
                that.isAttention=that.isAttention+1
                console.log(that.isAttention)
              }
            })
          }else if(that.isAttention===1){ /!*已经关注*!/
            axios.put('http://server.campus.com/pcs/post-bar/attention/'+this.postBarId,{"postBarId":this.postBarId}).then((result)=> {
              if (result.status === 200) {
                that.isAttention = that.isAttention - 1
                console.log(that.isAttention)
              }
            })
          }*/
        },
        showResult(index) {
          if (index === 1) {
            this.Index = 1
          } else if (index === 2) {
            this.Index = 2
          } else if (index === 3) {
            this.Index = 3
          }
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bar_detail_container{
    width 10rem
    position relative
  }
  .detail_head{
    width 10rem
    height 350px
    background: url("../../components/BarList/images/bg6.jpg");
    background-size: 100% 100%;
  }
/*  .header{
    background-color transparent !important
  }
  .iconfont{
    color white !important
    font-size 40px !important
  }*/
  .bar_search{
    font-size 26px
    color #eed60a
    position absolute
    right 20px
    top 50%
    transform translateY(-50%)
    border 1px #ee9900
  }
  .bar_info{
    display flex
    padding-top 200px
  }
  .bar_img{
    width 80px
    height 80px
    border-radius 30px
   /* background: url("../../components/BarList/images/bg1.jpg");*/
    background-size: 100% 100%;
    margin-left 20px

  }
  .bar_name{
    margin-left 20px
    font-size 28px
    font-weight bold
    color #ffffff

  }
  .bar_num{
    font-size 22px
    color #ffffff
    position relative
    left 20px
    top 5px
  }
  .post_num{
    margin-left 15px
  }
  .bar_attBtn{
    width: 80px;
    height: 40px;
    border-radius:18px;
    background-color: #ffffff;
    color: #1d1d1d;
    font-size: 20px;
    text-align: center;
    line-height: 43px;
    position: relative;
    right: -340px;
  }

  .bar_notice{
    width 90%
    height 100px
    margin 20px 5% 10px
    border-radius 10px
    background: white;
    box-shadow 2px 4px 6px #4f4f4f
  }
  .notice_content{
    font-size 24px
    height 50px
    padding-left 20px
    box-sizing border-box
    line-height 50px
    margin-right 20px
    overflow hidden
  }
  .bar_detail{
    margin-top 65px
    border-top 3px dashed #e4e4e4
  }
  .bar_detail_guide{
    margin: 20px 30px;
    color: #222222;
    font-size 26px
  }
  .bar_guide_item{
    margin-right 50px
  }
  .active{
    color black
    font-weight bold
  }
  .bar_on{
    width: 52px;
    height: 5px;
    border-radius: 5px;
    background-color:orange;
    margin-top: 15px;
  }

  /*帖子列表*/
  .post_container {
    width: 10rem;
   /* margin-top:20px !important;*/
  }
  .bar_head{
    display: -webkit-flex;
    display: flex;
    width: 96%;
    height: 70px;
    margin:8px 2%;
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

  .bar_detail_footer{
    font-size: 20px;
    margin-top: 0px;

  }

  .bar_li{
    border-bottom: 5px solid #e4e4e4;
  }
  .bar_list_discuss li{
    float: left;
    list-style: none;
  }

  .bar_text{
    width: 96%;
    margin: 5px 2%;
    font-size: 24px;
    color: #222222;
    line-height:  24px;
    padding-top: 5px;
  }

  .bar_list_discuss{
    width:100%;
    height: 20px;
  }
  .bar_show{
    width: 96%;
    height:400px;
    background: url("../../components/BarList/images/head2.jpg");
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
    background: #e4e4e4;
    color: #7e8c8d;
    margin-bottom: 80px;
    text-align: center;
    padding-top: 15px;
    font-size: 20px;
  }

  /*添加帖子按钮*/
  .addPostBtn{
    position fixed
    width 80px
    height 80px
    border-radius 50%
    background-color: #181818;
    right 50%
    bottom 70px
    z-index 100
  }
  .addPostBtn1{
    transform translateX(50%) rotate(45deg)
    transition transform .4s
  }
  .addPostBtn2{
    transform translateX(420%)
    transition transform .4s
  }
  .addPostBtn .iconfont{
    line-height 80px
    position absolute
    left 50%
    transform translateX(-50%)
  }
  .btnShow{
    border-top: 1px  solid #e4e4e4;
    position: fixed;
    z-index:99;
    left:50%;
    transform: translateX(-50%);
    bottom :0;
    width 10rem
    height 500px
    border-radius 20px 20px 0 0
    background-color: #f1f1f1;
  }
  .postBtn{
    margin-top 20%
    display flex
  }

  .postBtn_item{
    font-size 26px
    margin-top: 3px;
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    color: #4e4e4e;
  }
  .postBtn_item .iconfont{
    font-size 36px
  }
  .itemIcon{
    width 80px
    height 80px
    background-color: #ffffff;
    border-radius  20px
    line-height 80px
    margin-bottom 10px
  }
  .postBtn_item .item_icon .iconfont{
    /*color #000000 !important*/
  }
</style>
