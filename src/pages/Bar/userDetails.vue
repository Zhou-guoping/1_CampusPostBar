<template>
    <div class="user_detail_container">
      <section class="user_head">
          <!--头部-->
          <HeaderTop>
            <router-link class="go_back" slot="left" to="/home">
              <i class="iconfont icon-jiaguanzhuhuati" style="color: #ffffff;"></i>
            </router-link>
            <div class="user_more" slot="right">
              <i class="iconfont icon-diqiu" style="color: #ffffff;"></i>
              <i class="iconfont icon-diqiu" style="color: #ffffff;"></i>
            </div>
          </HeaderTop>
          <!--个人信息头部-->
          <section class="user_header">
            <img class="user_img circleImg" :src="url+userDetails.headImgUrl">
            <div class="user_campus">{{userDetails.majorName}}&nbsp;&nbsp;{{userDetails.campusName}}</div>
            <div class="user_attBtn" @click.prevent="attBtn">{{isAttention==0?'关注':'已关注'}}</div>
          </section>
          <section class="user_info">
            <div class="user_nickname">{{userDetails.userNickname}}
              <i  class="iconfont icon-tupian" v-if="userDetails.userSex=1"></i>
              <i  class="iconfont icon-wenjian " v-else></i>
            </div>
            <div class="user_introduce" v-if="userDetails.userIntroduction===null">简介:&nbsp;该用户很懒，什么也没有留下</div>
            <div class="user_introduce" v-else>简介：{{userDetails.userIntroduction}}</div>
          </section>
          <!--粉丝数，关注的吧，关注数-->
          <section class="user_join">
            <ul class="join_list">
              <li class="join_li">
                <i class="iconfont icon-tupian"></i>
                {{userDetails.fansNum}}粉丝
              </li>
              <li class="join_li">
                <i class="iconfont icon-tupian"></i>
              {{userDetails.attentionBarNum}}吧
              </li>

              <li class="join_li">
                <i class="iconfont icon-tupian"></i>
                {{userDetails.attentionUserNum}}关注
              </li>
            </ul>
          </section>
        </section>
      <!--用户贴子动态-->
      <section class="user_dynamic">
        <div class="user_dynamic_guide">
          <a href="javascript:;" class="user_guide_item" :class="{active:Index===1}" @click="showResult(1)">贴子</a>
          <a href="javascript:;" class="user_guide_item" :class="{active:Index===2}" @click="showResult(2)">动态</a>
          <a href="javascript:;" class="user_guide_item" :class="{active:Index===3}" @click="showResult(3)">资料</a>
        </div>
        <section class="dynamic_container">
          <!--贴子-->
          <ul class="post_list" v-if="Index===1" v-for="(item,i) in userPosts" :key="i">
            <li class="post_li">
              <a href="javascript:;">
                <div class="user_top">
                  <img class="user_img2" :src="url+item.userHeadImgUrl">
                  <div class="user_topRight">
                    <div class="user_nickname2">{{item.userNickname}}</div>
                    <div class="user_postTime">{{item.createTime}}</div>
                  </div>
                </div>
                <div class="user_text">{{item.postContent}}</div>
                <div class="user_picture">{{item.postContentImg}}</div><!--图片  {{item.postContentImg}} -->
                <!--底部评论分享点赞-->
                <div class="user_discuss">
                  <ul class="discuss_list">
                    <!--分享-->
                    <li class="discuss_li">
                      <i class="iconfont icon-tupian"></i>
                      11
                    </li>
                    <!--评论-->
                    <li class="discuss_li">
                      <i class="iconfont icon-tupian"></i>
                      {{item.commentNum}}
                    </li>
                    <!--点赞-->
                    <li class="discuss_li">
                      <i class="iconfont icon-tupian"></i>
                      {{item.likeNum}}
                    </li>
                    <!--踩-->
                    <li class="discuss_li">
                      <i class="iconfont icon-tupian"></i>
                      1
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <!--<li class="post_li">
              <a href="javascript:;">
                <div class="user_top">
                  <div class="user_img2"></div>
                  <div class="user_topRight">
                    <div class="user_nickname2">周周周盖盖</div>
                    <div class="user_postTime">2020-01-01</div>
                  </div>

                </div>
                <div class="user_text">数据的凤凰都华府数飞得更高积分的地方地方high小是费父女倒过来看他会突然发工资时底盘的课程是吗是采购处 从GV奋斗我考过我开心祝福你吃过饭fkgjmc.sp[的高考加分Vic高空车v从是减肥的根本</div>
                <div class="user_picture"></div>
                &lt;!&ndash;底部评论分享点赞&ndash;&gt;
                <div class="user_discuss">
                  <ul class="discuss_list">
                    &lt;!&ndash;分享&ndash;&gt;
                    <li class="discuss_li">
                      <i class="iconfont icon-tupian"></i>
                      11
                    </li>
                    &lt;!&ndash;评论&ndash;&gt;
                    <li class="discuss_li">
                      <i class="iconfont icon-tupian"></i>
                      13
                    </li>
                    &lt;!&ndash;点赞&ndash;&gt;
                    <li class="discuss_li">
                      <i class="iconfont icon-tupian"></i>
                      1
                    </li>
                    &lt;!&ndash;踩&ndash;&gt;
                    <li class="discuss_li">
                      <i class="iconfont icon-tupian"></i>
                      1
                    </li>
                  </ul>
                </div>
              </a>
            </li>-->
          </ul>
          <!--动态-->
          <ul class="post_list" v-if="Index===2" v-for="(item,i) in userDynamic" :key="i">
            <li class="post_li">
             <a href="javascript:;">
               <div class="user_top">
                 <img class="user_img2" :src="url+item.userHeadImgUrl">
                 <div class="user_topRight">
                   <div class="user_nickname2">{{item.userNickname}}</div>
                   <div class="user_postTime">{{item.createTime}}</div>
                 </div>

               </div>
               <div class="user_text">{{item.friendNewsContent}}</div>
               <img class="user_picture" :src="item.friendNewsImg">
               <!--底部评论分享点赞-->
               <div class="user_discuss">
                 <ul class="discuss_list">
                   <!--分享-->
                   <li class="discuss_li">
                     <i class="iconfont icon-tupian"></i>
                     11
                   </li>
                   <!--评论-->
                   <li class="discuss_li">
                     <i class="iconfont icon-tupian"></i>
                     {{item.commentNum}}
                   </li>
                   <!--点赞-->
                   <li class="discuss_li">
                     <i class="iconfont icon-tupian"></i>
                     {{item.likeNum}}
                   </li>
                   <!--踩-->
                   <li class="discuss_li">
                     <i class="iconfont icon-tupian"></i>
                     1
                   </li>
                 </ul>
               </div>
             </a>
           </li>
          </ul>
          <!--资料-->
          <ul class="post_list" v-if="Index===3">
            <li></li>
          </ul>
        </section>
      </section>
      </div>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop";
  import axios from "axios";
    export default {
      data(){
        return{
          Index:1,
          isAttention:0,//是否关注
          userDetails:{},//个人信息
          url:'http://192.168.1.133/',
          userPosts:[],//用户贴子
          userDynamic:[],//用户动态
        }
      },
      components:{
        HeaderTop
      },
      props:{
        "userId":String
      },
      mounted() {
        let that=this
        /*获取用户信息*/
        axios.get('http://server.campus.com/ucs/user-friend/user/'+this.userId).then((result)=>{
          if(result.status===200){
            that.userDetails=result.data
            that.isAttention=that.userDetails.isAttention
          }
          else{
            console.log('数据加载失败')
          }
        })
        /*获取用户贴子*/
        axios.get('http://server.campus.com/ucs/user-friend/posts/'+this.userId).then((result)=>{
          if(result.status===200){
            that.userPosts=result.data
          }
        })
        /*获取用户动态*/
        axios.get('http://server.campus.com/ucs/user-friend/friendNews/'+this.userId).then((result)=>{
          if(result.status===200){
            console.log(result.data)
            that.userDynamic=result.data
          }
        })
        /*获取用户的好友目录*/


      },
      methods:{
        //关注用户  取消关注用户
        /*attBtn(){
          let that=this
          if(that.isAttention===0){ /!*未关注*!/
            axios.post('http://server.campus.com/pcs/post-bar/attention/'+this.postBarId,{"postBarId":this.postBarId}).then((result)=>{
              if(result.status===200){
                that.isAttention=that.isAttention+1
              }
            })
          }else if(that.isAttention===1){ /!*已经关注*!/
            axios.put('http://server.campus.com/pcs/post-bar/attention/'+this.postBarId,{"postBarId":this.postBarId}).then((result)=> {
              if (result.status === 200) {
                that.isAttention = that.isAttention - 1
              }
            })
          }
        },*/
        //点赞、取消点赞

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
  .user_detail_container{
    width 10rem
  }
  .user_more{
    font-size 26px
    color #eed60a
    position absolute
    right 20px
    top 50%
    transform translateY(-50%)
    border 1px #ee9900
  }
  .user_head{
    width 10rem
    height 480px
    background: url("../../components/BarList/images/bg7.jpg");
    background-size: 100% 100%;
  }
  .user_header{
    display flex
    position: relative;
    padding-top 120px
  }
  .user_img{
    width 150px
    height 150px
    border-radius 50%
/*    background url("../../components/BarList/images/bg3.jpg")*/
    background-size: 100% 100%;
    margin-left 30px
  }
  .user_campus{
    color #ffffff
    font-size 26px
    position: absolute;
    top 150px
    right 45px
  }
  .user_attBtn{
    width: 120px;
    height: 50px;
    border-radius:20px;
    background-color: #ffffff;
    color: #1d1d1d;
    font-size: 24px;
    text-align: center;
    line-height:53px;
    position: absolute;
    top 50%
    transform translateY(120%)
    right: 40px;
  }
  .user_info {
    margin-top 10px
    margin-left 30px
  }
  .user_nickname{
    color white
    font-weight bold
    font-size 30px
  }
  .user_nickname .icon-wenjian,.user_nickname .icon-tupian{
    font-size 28px
    color #ffffff
  }
  .user_introduce{
    margin-top 5px
    color #ffffff
    font-size 22px
  }
  .join_list{
    display flex
  }
  .join_li{
    font-size 26px
    color #ffffff
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-top 40px

  }
  .join_li>.icon-tupian{
      font-size 26px
  }
  .user_dynamic{
    width 10rem
    background-color: #ffffff;
    margin-top -20px
    border-radius 25px 25px 0 0
  }
  .active{
    font-weight bold
    color #000000
  }
  .user_dynamic_guide {
    padding-top 20px
    margin: 0px 30px;
    color: #222222;
    font-size 28px
  }
  .user_guide_item{
    margin-right 50px
  }
  .post_list{
    margin-top 20px
    padding-left 30px
    padd-right 30px
  }
  .post_li{
    margin-top 15px
  }
  .user_top{
    display flex
  }
  .user_img2{
    width 80px
    height 80px
    border-radius 50%
    /*background: url("../../components/BarList/images/bg3.jpg");*/
    background-size: 100% 100%;
  }
  .user_topRight{
    margin-left 20px
  }
  .user_nickname2{
    color: #000;
    font-weight bold
    font-size 26px
    margin-top 5px
  }
  .user_postTime{
    color #919191
    font-size 24px
    margin-top 5px
  }
  .user_text{
    margin-right 30px
    color #000000
    font-size 24px
    margin-top 10px
  }
  .user_picture{
    width 96%
    height 300px
    margin-top 10px
    /*background:url("../../components/BarList/images/bg8.jpg");*/
    /*background-size: 100% 100%;*/
  }
  .user_discuss{

  }
  .discuss_list{
    width 96%
    display flex
    border-bottom: 1px  solid #e4e4e4;
    padding-bottom 20px
  }
  .discuss_li{
    font-size 26px
    color #000000
    margin-right 50px
    margin-top 10px

  }
  .discuss_li>.icon-tupian{
    font-size 26px
  }
</style>
