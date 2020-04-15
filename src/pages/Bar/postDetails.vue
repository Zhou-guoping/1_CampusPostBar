<template>
    <div class="bar_detail" id="bar_detail" :class="{noScroll: isShowPopup}">
      <HeaderTop :title="postDetails.postBarName" style="color:#181818;background:#ffffff;"><!--贴吧名称-->
        <router-link class="go_back" slot="left" to="/home">
           <i class="iconfont icon-jiaguanzhuhuati"></i>
        </router-link>
        <div class="more" slot="right">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </HeaderTop>
      <section class="detail_content">
        <!--帖子内容-->
        <a :class="{noScroll: isShowPopup}">
          <!--吧头部，包含头像，昵称，学校，关注数，帖子数-->
          <section class="bar_head">
            <img class="bar_head_left circleImg1" :src="url+postDetails.userHeadImgUrl" @click="$router.push({path:`/bar/userDetails/${postDetails.userId}`})">
            <div class="bar_head_right">
              <section class="bar_detail_header">
                <span @click="$router.push({path:`/bar/userDetails/${postDetails.userId}`})">{{postDetails.userNickname}}</span>
                <span>{{postDetails.campusName}}</span>
                <span class="attBtn" @click.prevent="attBtn">{{isAttention==0?'关注':'已关注'}}</span>
              </section>
              <section class="bar_detail_footer" v-time="time1">

              </section>
            </div>

          </section>
          <!--文本-->
          <div class="text">{{postDetails.postContent}}</div>
          <!--图片或者视频-->
          <div class="bar_show">

          </div>
        </a>
        <!--评论内容-->
        <!--尾部，转发数、评论、点赞数-->
        <section class="bar_footer">
          <ul class="bar_list_discuss">
            <a href="javascript:" class="list_discuss_link">
              <span class="list_discuss_num">分享</span>
            </a>
            <a href="javascript:" class="list_discuss_link">
              <span class="list_discuss_num">评论 {{postDetails.commentNum}}</span>
            </a>
            <a href="javascript:" class="list_discuss_link">
              <span class="list_discuss_num" :class="{isActive:postDetails.isLike===1}" @click="postLike">点赞 {{postDetails.likeNum}}</span>
            </a>
          </ul>
        </section>
        <section class="detail_comment"  id="discuss_guide" :class="{noScroll: isShowPopup}">
          <!--评论列表-->
          <section class="list comment_list">
            <div class="comment_classify" :class="searchBarFixed === true ? 'isFixed' :''">
              <a href="javascript:;"  class="comment_classify_item" style="color: black" >
                {{postDetails.commentNum}}条评论
              </a>
              <a href="javascript:;" class="comment_classify_item" :class="{active:Index2===1}" @click="showComment(1)" >
                正序
              </a>
              <a href="javascript:;" class="comment_classify_item" :class="{active:Index2===2}" @click="showComment(2)">
                倒序
              </a>
            </div>
            <ul v-if="Index2===1">
              <li class="share_li" v-for="(item,i) in commentsList" :key="i" @click="getCommentIndex(i)">
                <img class="shareImg" :src="url+item.userHeadImgUrl" @click="$router.push({path:`/bar/userDetails/${item.userId}`})">
                <div class="share_right">
                  <div class="right_head">
                    <div class="share_name" @click="$router.push({path:`/bar/userDetails/${item.userId}`})">{{item.userNickname}}</div>
                    <div class="comment_do">
                      <i class="iconfont icon-jiaguanzhuhuati" :class="{isActive:item.isLike===1}" @click="commentLike(i)"></i><span class="comment_likeNum" :class="{isActive:item.isLike===1}" >{{item.likeNum}}</span> &nbsp;&nbsp;
                    </div>
                  </div>
                  <div class="share_time">第{{item.floorNum}}楼&nbsp;&nbsp;{{item.createTime}}</div>
                  <div class="share_reason" v-model='commentId'  @click="showFooter(2,2)">{{item.commentContent}}</div>
                  <div class="comment_more"  v-if="item.replyNum===0" @click="showFooter(2,2)">回复</div>
                  <div class="comment_more"  @click="getCommentReply(i)" v-else >查看{{item.replyNum}}条回复></div>
                </div>
              </li>
              <div class="footer_hint" @click="getMoreComments">{{footerText}}</div>
              <!--评论框-->
              <section class="footer_comment" v-if="Index===1">
                <input class="comment_content" :placeholder="placeholder"  @click="showFooter(2,1)"></input>
                <div class="commentNum"><i class="iconfont icon-diqiu"></i>11</div>
                <div class="post_collect"><i class="iconfont icon-shouye"></i> </div>
                <div class="post_share"><i class="iconfont icon-shouye"></i> </div>
              </section>
              <section  v-if="Index===2">
                <!--评论帖子-->
                <section v-if="Index3===1">
                  <div class="comment2"   @click="showFooter(1)"></div>
                  <section class="footer_comment2">
                    <textarea class="comment_content2"  :placeholder=placeholder2 maxlength="120" rows="3" v-model="comment_content" ></textarea>
                    <div class="comment_operation">
                      <div class="clear_content"><i class="iconfont icon-icon-" @click="comment_content=''"></i></div>
                      <div class="comment_post" :class="{comment_post2:comment_content!==''}" @click="addPostComment">帖子发表</div>
                    </div>
                  </section>
                </section>
                <!--评论回复-->
                <section v-if="Index3===2">
                  <div class="comment2"   @click="showFooter(1)"></div>
                  <section class="footer_comment2">
                    <textarea class="comment_content2"  :placeholder=placeholder2 maxlength="120" rows="3" v-model="reply_content"></textarea>
                    <div class="comment_operation">
                      <div class="clear_content"><i class="iconfont icon-icon-" @click="reply_content=''"></i></div>
                      <div class="comment_post"  :class="{comment_post2:reply_content!==''}" @click="addCommentReply()">评论发表</div>
                    </div>
                  </section>
                </section>
              </section>
            </ul>
            <ul v-if="Index2===2">
              <li class="share_li" v-for="(item,j) in commentsList2" :key="j"  @click="getCommentIndex(j)">
                <img class="shareImg" :src="url+item.userHeadImgUrl" @click="$router.push({path:`/bar/userDetails/${item.userId}`})">
                <div class="share_right">
                  <div class="right_head">
                    <div class="share_name" @click="$router.push({path:`/bar/userDetails/${item.userId}`})">{{item.userNickname}}</div>
                    <div class="comment_do">
                      <i class="iconfont icon-jiaguanzhuhuati" :class="{isActive:item.isLike===1}" @click="commentLike2(j)"></i><span class="comment_likeNum" :class="{isActive:item.isLike===1}" >{{item.likeNum}}</span>
                    </div>
                  </div>
                  <div class="share_time">第{{item.floorNum}}楼&nbsp;&nbsp;{{item.createTime}}</div>
                  <div class="share_reason"  @click="showFooter(2,2)">{{item.commentContent}}</div>
                  <div class="comment_more"  @click="showFooter(2,2)" v-if="item.replyNum===0">回复</div>
                  <div class="comment_more"  @click="getCommentReply(j)" v-else>查看{{item.replyNum}}条回复></div>
                </div>
              </li>
              <div class="footer_hint" @click="getMoreComments2">{{footerText2}}</div>
              <!--评论框-->
              <section class="footer_comment" v-if="Index===1">
                <input class="comment_content" :placeholder="placeholder"  @click="showFooter(2,1)"></input>
                <div class="commentNum"><i class="iconfont icon-diqiu"></i>11</div>
                <div class="post_collect"><i class="iconfont icon-shouye"></i> </div>
                <div class="post_share"><i class="iconfont icon-shouye"></i> </div>
              </section>
              <section  v-if="Index===2">
                <!--评论帖子-->
                <section v-if="Index3===1">
                  <div class="comment2"   @click="showFooter(1)"></div>
                  <section class="footer_comment2">
                    <textarea class="comment_content2"  :placeholder=placeholder2 maxlength="120" rows="3" v-model="comment_content" ></textarea>
                    <div class="comment_operation">
                      <div class="clear_content"><i class="iconfont icon-icon-" @click="comment_content=''"></i></div>
                      <div class="comment_post" :class="{comment_post2:comment_content!==''}" @click="addPostComment">帖子发表</div>
                    </div>
                  </section>
                </section>
                <!--评论回复-->
                <section v-if="Index3===2">
                  <div class="comment2"   @click="showFooter(1)"></div>
                  <section class="footer_comment2">
                    <textarea class="comment_content2"  :placeholder=placeholder2 maxlength="120" rows="3" v-model="reply_content"></textarea>
                    <div class="comment_operation">
                      <div class="clear_content"><i class="iconfont icon-icon-" @click="reply_content=''"></i></div>
                      <div class="comment_post"  :class="{comment_post2:reply_content!==''}" @click="addCommentReply()">评论发表</div>
                    </div>
                  </section>
                </section>
              </section>
            </ul>
          </section>
        </section>
        <!--查看更多评论回复列表-->
        <div class="more_content" v-if='isShowPopup' >
          <div class="content_bg" @click="popUpEmptyClick" @scroll.prevent></div>
          <div class="comment_other" id="more_content">
            <div class="comment_header">
              <div class="back" @click="popUpEmptyClick" @scroll.prevent><i class="iconfont icon-tupian"></i></div>
              <div class="comment_title">{{comment.floorNum}}楼的回复</div>
            </div>
            <div class="comment_host">
              <li class="share_li share_li2">
                <img class="shareImg" :src="url+comment.userHeadImgUrl" @click="$router.push({path:`/bar/userDetails/${comment.userId}`})">
                <div class="share_right" style="border: none">
                  <div class="right_head">
                    <div class="share_name" @click="$router.push({path:`/bar/userDetails/${comment.userId}`})">{{comment.userNickname}}</div>
                    <div class="comment_do">
                      <i class="iconfont icon-jiaguanzhuhuati" :class="{isActive:comment.isLike===1}" @click="commentLike(index)"></i><span class="comment_likeNum" :class="{isActive:comment.isLike===1}" >{{comment.likeNum}}</span>
                    </div>
                  </div>
                  <div class="share_time">{{comment.createTime}}</div>
                  <div class="share_reason" @click="showFooter(2,2)">{{comment.commentContent}}</div>
                </div>
              </li>
            </div>
            <div class="comment_others">
              <p class="other_commentNum">{{comment.replyNum}}条回复</p>
              <ul >
                <li class="share_li" v-for="(item,x) in replyList" :key="x" @click="getReplyIndex(x)">
                  <img class="shareImg" :src="url+item.userHeadImgUrl" @click="$router.push({path:`/bar/userDetails/${item.userId}`})">
                  <div class="share_right">
                    <div class="right_head">
                      <div class="share_name" @click="$router.push({path:`/bar/userDetails/${item.userId}`})">{{item.userNickname}}</div>
                      <div class="comment_do">
                        <i class="iconfont icon-jiaguanzhuhuati" :class="{isActive:item.isLike===1}" @click="replyLike(x)"></i><span class="comment_likeNum" :class="{isActive:item.isLike===1}" >{{item.likeNum}}</span>
                      </div>
                    </div>
                    <div class="share_time">{{item.createTime}}</div>
                    <div class="share_reason" @click="showFooter(2,3)"><span style="color: #0000cc">{{replyName}}</span>{{item.replyContent}}</div>
                  </div>
                </li>
              </ul>
              <div class="footer_hint" @click="getMoreCommentReply">{{footerText3}}</div>
            </div>
          </div>
          <section>
            <!--评论框-->
            <section class="footer_comment" v-if="Index===1">
              <input class="comment_content" :placeholder=placeholder2 @click="showFooter(2,2)"></input>
              <div class="commentNum"><i class="iconfont icon-diqiu"></i>11</div>
              <div class="post_collect"><i class="iconfont icon-shouye"></i> </div>
              <div class="post_share"><i class="iconfont icon-shouye"></i> </div>
            </section>
            <section  v-if="Index===2">
              <!--评论回复-->
              <section v-if="Index3===2">
                <div class="comment2"   @click="showFooter(1)"></div>
                <section class="footer_comment2" >
                  <textarea class="comment_content2"  :placeholder=placeholder2 maxlength="120" rows="3" v-model="reply"></textarea>
                  <div class="comment_operation">
                    <div class="clear_content"><i class="iconfont icon-icon-" @click="reply=''"></i></div>
                    <div class="comment_post"  :class="{comment_post2:reply!==''}" @click="addCommentReply()">pinglun</div>
                  </div>
                </section>
              </section>
              <!--评论其他回复-->
              <section v-if="Index3===3">
                <div class="comment2"   @click="showFooter(1)"></div>
                <section class="footer_comment2" v-if="Index3===3">
                  <textarea class="comment_content2"  :placeholder=placeholder3 maxlength="120" rows="3" v-model="reply"></textarea>
                  <div class="comment_operation">
                    <div class="clear_content"><i class="iconfont icon-icon-" @click="reply=''"></i></div>
                    <div class="comment_post" :class="{comment_post2:reply!==''}" @click="addMoreReply">发表hui</div>
                  </div>
                </section>
              </section>
            </section>
          </section>
        </div>
      </section>
    </div>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop";
  import axios from 'axios'
  import {lock,unlock} from 'tua-body-scroll-lock'
  import { Toast ,MessageBox} from 'mint-ui'
  import {mapState} from "vuex";
  export default {
    data(){
      return {
        url: 'http://192.168.1.133/',
        postDetails: {},
        isAttention: 0,
        Index: 1,
        Index2: 1,
        Index3: 1,
        time1:'',//帖子时间
        time2:'',//评论时间
        time3:'',//回复时间
        comment_content: '',//评论输入内容
        placeholder: '',
        placeholder2: '',
        placeholder3: '',
        commentNum: '',
        searchBarFixed: false,
        isShowPopup: false,
        pageScrollYoffset: 0,// 保存滚动条位置
        pageIndex: 1,//默认展示第一页数据
        pageIndex2: 1,//默认展示第一页数据
        pageIndex3: 1,//默认展示第一页数据
        commentsList: [],
        commentsList2: [],
        footerText: '',
        footerText2: '',
        footerText3: '',
        commentId: 0,
        index: 0,//评论列表的下标
        index2: 0,//回复列表的下标
        replyList: [],
        reply_content: '',
        reply:'',
        comment: {},
        replyName:'',
        originUserId:0
      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    components:{
      HeaderTop
    },
    props:{
      "postId":String
    },
    created() {
      this.getComments();
      this.getComments2();

    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
      let that=this
      /*获取贴子详情*/
      axios.get('http://server.campus.com/pcs/post/noLogin/post/'+this.postId).then((result)=>{
        if(result.status===200){
          that.postDetails=result.data
          that.time1=Date.parse(that.postDetails.createTime)
          console.log(that.time1)
          if(that.postDetails.commentNum===0){
            that.placeholder='暂无评论，快来抢占先机！'
          }else{
            that.placeholder='下一个热评就是你'
          }
          //that.isAttention=that.postDetails.isAttention
        }
        else{
          console.log('数据加载失败')
        }
      })

    },
    methods:{
      getScrollTop(){ // 获取滚动条位置
        let scrollTop=0;
        if(document.documentElement&&document.documentElement.scrollTop){
          scrollTop=document.documentElement.scrollTop;
        }else if(document.body){
          scrollTop=document.body.scrollTop;
        }
        return scrollTop;
      },
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.getElementById('discuss_guide').offsetTop-160
        //console.log(offsetTop, scrollTop)
        if (scrollTop > offsetTop) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
      },
      //关注 取消关注用户
      attBtn(){
        if(!this.userInfo) {
          return MessageBox.confirm('你还未登录，是否前往登录？').then(
            action=>{
              this.$router.replace('/login')
            }
          ).catch(()=>{})
        }
        let that=this
        if(that.postDetails.isAttention===0){ /*未关注*/
          axios.post('http://server.campus.com/pcs/post-bar/attention/'+this.postBarId,{"postBarId":this.postBarId}).then((result)=>{
            if(result.status===200){
              that.postDetails.isAttention=that.postDetails.isAttention+1
              that.isAttention=that.postDetails.isAttention
            }
          })
        }else if(that.postDetails.isAttention===1){ /*已经关注*/
          axios.put('http://server.campus.com/pcs/post-bar/attention/'+this.postBarId,{"postBarId":this.postBarId}).then((result)=> {
            if (result.status === 200) {
              that.postDetails.isAttention = that.postDetails.isAttention - 1
              that.isAttention=that.postDetails.isAttention
            }
          })
        }
      },
      showFooter(index,index3) {
        if(!this.userInfo) {
          return MessageBox.confirm('你还未登录，是否前往登录？').then(
            action=>{
              this.$router.replace('/login')
            }
          ).catch(()=>{})
        }
        if (index === 1) {/*显示input*/
          this.Index = 1
        } else if (index === 2) {/*显示textarea*/
          this.Index = 2
          if (index3 === 1) {/*评论帖子*/
            this.Index3 = 1
            this.placeholder2='发表你的看法(最多可评论120个字）'
          } else if (index3 === 2) {/*评论回复*/
            this.Index3 = 2
            if(this.Index2===1){/*正序*/
              this.placeholder2='回复'+this.commentsList[this.index].userNickname
            }else if(this.Index2===2){/*倒序*/
              this.placeholder2='回复'+this.commentsList2[this.index].userNickname
            }
          }else if(index3===3){
            this.Index3 = 3
            this.placeholder3='我有一个大胆的想法'
          }
        }
      },
      showComment(index2) {
        if (index2 === 1) {
          this.Index2 = 1
        } else if (index2 === 2) {
          this.Index2 = 2
        }
      },
      showMoreComment() {
        //this.getReplyIndex(this.replyList);
        this.pageScrollYoffset = this.getScrollTop();
        this.isShowPopup = true;
        const  targetElement=document.querySelector("#more_content");
        lock(targetElement)
       /* this.originUserId=this.replyList[this.index2].originUserId
        if(this.originUserId===this.comment.userId){
          this.replyName=this.replyList[this.index2].userNickname
        }
        console.log(this.originUserId);
        console.log(this.replyName)*/
      },
      // 点击弹窗空白处
      popUpEmptyClick() {
        this.isShowPopup = false;
        const  targetElement=document.querySelector("#more_content");
        unlock(targetElement)

      },
      /*获取评论列表  正序*/
      getComments(){
        axios.get('http://server.campus.com/pcs/post/noLogin/comments/'+this.postId+'?order=0&page='+this.pageIndex+'&pageSize=20').then((result)=>{
          if(result.status===200){
            //console.log(result.data.data)
            this.commentsList=this.commentsList.concat(result.data.data)
            if(result.data.data.length===0 ||result.data.data.length<20){
              this.footerText='暂无更多内容'
            }else{
              this.footerText='加载更多'
            }
          }
        })
      },
      /*获取评论列表  倒序*/
      getComments2(){
        axios.get('http://server.campus.com/pcs/post/noLogin/comments/'+this.postId+'?order=1&page='+this.pageIndex2+'&pageSize=20').then((result)=>{
          if(result.status===200){
            this.commentsList2=this.commentsList2.concat(result.data.data)
            if(result.data.data.length===0||result.data.data.length<20){
              this.footerText2='暂无更多内容'
            }else{
              this.footerText2='加载更多'
            }
          }
        })
      },
      getReplyIndex(index){
        this.index2=index
        console.log(index)
        if(this.replyList[this.index2].originUserId===this.comment.userId){
          this.replyName=this.replyList[this.index2].userNickname
        }
      },
      //获取评论的回复列表
      getCommentReply(index){
        this.showMoreComment()
        if(this.Index2===1){
          this.comment=this.commentsList[index]
          //console.log(this.comment)
          axios.get('http://server.campus.com/pcs/post/noLogin/reply/'+this.commentsList[index].commentId+'?page='+this.pageIndex3+'&pageSize=20').then((result)=>{
            if(result.status===200){
              this.replyList=result.data.data
              if(result.data.data.length===0||result.data.data.length<20){
                this.footerText3='暂无更多内容'
              }else{
                this.footerText3='加载更多'
              }
            }
          })
        }else if(this.Index2===2){
          this.comment=this.commentsList2[index]
          //console.log(this.comment)
          axios.get('http://server.campus.com/pcs/post/noLogin/reply/'+this.commentsList2[index].commentId+'?page='+this.pageIndex3+'&pageSize=20').then((result)=>{
            if(result.status===200){
              this.replyList=result.data.data
              if(result.data.data.length===0||result.data.data.length<20){
                this.footerText3='暂无更多内容'
              }else{
                this.footerText3='加载更多'
              }
            }
          })
        }
      },
      //加载更多回复列表
      getMoreCommentReply(){
        this.replyList=this.replyList.concat(this.replyList)
        this.pageIndex3++;
        this.getCommentReply()
      },
      //加载更多评论 正序
      getMoreComments(){
        this.pageIndex++;
        this.getComments()
      },
      //加载更多评论 倒序
      getMoreComments2(){
        this.pageIndex2++;
        this.getComments2()
      },
      //新增评论
      addPostComment(){
        //校验内容是否为空
        if(this.comment_content.trim().length===0) {
          return Toast('评论内容不能为空')
        }
        //参数：1.内容 2.楼数 3.贴子Id
        this.util.Comment(this.comment_content.trim(),this.postDetails.commentNum+2,this.postId)
        let myComment={
          commentId: this.postDetails.commentNum+1,
          commentContent:this.comment_content.trim(),
          userId: this.userInfo.userId,
          userNickname:  this.userInfo.userNickname,
          userHeadImgUrl: this.userInfo.headImgUrl,
          floorNum: this.postDetails.commentNum+2,
          replyNum: 0,
          likeNum: 0,
          createTime: this.util.getNowTime(),
          isLike: 0
        }
        this.commentsList.push(myComment)
        this.commentsList2.unshift(myComment)
        this.postDetails.commentNum=this.postDetails.commentNum+1
        Toast('评论成功')
        this.comment_content=''
        this.Index=1
      },
      //获取点击的评论的下标
      getCommentIndex(index){
        this.index=index
      },
      //对评论回复
      addCommentReply(){ //index为点击的评论下标
        //判断是否登录
        if(!this.userInfo) {
          return MessageBox.confirm('你还未登录，是否前往登录？').then(
            action=>{
              this.$router.replace('/login')
            }
          ).catch(()=>{})
        }
        //校验内容是否为空
        if(this.reply_content.trim().length===0) {
          return Toast('评论内容不能为空')
        }
        if (this.Index2===1){
          //发表   参数： 1.评论id 2.回复谁id 3.回复谁 4.回复内容
          this.util.commentReply(this.commentsList[this.index].commentId,this.commentsList[this.index].userId,this.commentsList[this.index].userNickname,this.reply_content)
          let myReply={
            replyId: this.commentsList[this.index].replyNum,
            replyContent: this.reply_content,
            userId: this.userInfo.userId,
            userNickname: this.userInfo.userNickname,
            userHeadImgUrl:  this.userInfo.userHeadImgUrl,
            originUserId:  this.commentsList[this.index].userId,
            originUserNickname: this.commentsList[this.index].userNickname,
            likeNum: 0,
            createTime:this.util.getNowTime(),
            isLike: 0
          }
          this.replyList.unshift(myReply)
          //回复数加1
          this.commentsList[this.index].replyNum=this.commentsList[this.index].replyNum+1
          let index2=this.commentsList.length-1-this.index
          this.commentsList2[index2].replyNum=this.commentsList2[index2].replyNum+1
          Toast('回复成功')
          this.reply_content=''
          this.Index=1
        }
        if (this.Index2===2){
          //发表   参数： 1.评论id 2.操作者id 3.操作者昵称 4.回复内容
          this.util.commentReply(this.commentsList2[this.index].commentId,this.commentsList2[this.index].userId,this.commentsList2[this.index].userNickname,this.reply_content)
          let myReply={
            replyId: this.commentsList2[this.index].replyNum,
            replyContent: this.reply_content,
            userId: this.userInfo.userId,
            userNickname: this.userInfo.userNickname,
            userHeadImgUrl:  this.userInfo.userHeadImgUrl,
            originUserId:  this.commentsList2[this.index].userId,
            originUserNickname: this.commentsList2[this.index].userNickname,
            likeNum: 0,
            createTime:this.util.getNowTime(),
            isLike: 0
          }
          this.replyList.unshift(myReply)
          //回复数加1
          this.commentsList2[this.index].replyNum=this.commentsList2[this.index].replyNum+1
          let index2=this.commentsList2.length-1-this.index
          this.commentsList[index2].replyNum=this.commentsList[index2].replyNum+1
          Toast('回复成功')
          this.reply_content=''
          this.Index=1
        }
      },
      addMoreReply(){
        //判断是否登录
        if(!this.userInfo) {
          return MessageBox.confirm('你还未登录，是否前往登录？').then(
            action=>{
              this.$router.replace('/login')
            }
          ).catch(()=>{})
        }
        //校验内容是否为空
        if(this.reply.trim().length===0) {
          return Toast('评论内容不能为空')
        }
        this.util.commentReply(this.comment.commentId,this.replyList[this.index2].userId,this.replyList[this.index2].userNickname,this.reply)
        let myReply={
          replyId: this.comment.replyNum,
          replyContent:this.reply,
          userId: this.userInfo.userId,
          userNickname: this.userInfo.userNickname,
          userHeadImgUrl:  this.userInfo.userHeadImgUrl,
          originUserId:  this.replyList[this.index2].userId,
          originUserNickname: this.replyList[this.index2].userNickname,
          likeNum: 0,
          createTime:this.util.getNowTime(),
          isLike: 0
        }
        this.replyList.unshift(myReply)
        this.comment.replyNum=this.comment.replyNum+1
        //回复数加1
        Toast('回复成功')
        this.reply=''
        this.Index=1
      },
      //贴子点赞与取消点赞
      postLike(){
        if(this.postDetails.isLike===0){
          this.postDetails.likeNum = this.postDetails.likeNum+1
          this.util.Like(this.postDetails.postId,1)
          this.postDetails.isLike = 1
          return
        }else if(this.postDetails.isLike===1){
          this.postDetails.likeNum = this.postDetails.likeNum-1
          this.util.delLike(this.postDetails.postId,1)
          this.postDetails.isLike = 0
          return
        }
      },
      //评论列表的点赞与取消点赞
      commentLike(index) {
        if(!this.userInfo) {
          return MessageBox.confirm('你还未登录，是否前往登录？').then(
            action=>{
              this.$router.replace('/login')
            }
          ).catch(()=>{})
        }
        let index2=this.commentsList.length-1-index
        if (this.commentsList[index].isLike === 0) {
          /*index2为倒序中commentId相同的评论的下表*/
          this.commentsList[index].likeNum = this.commentsList[index].likeNum + 1
          this.util.Like(this.commentsList[index].commentId, 2)
          this.commentsList[index].isLike = 1
          /*倒序列表改变*/
          this.commentsList2[index2].likeNum = this.commentsList2[index2].likeNum + 1
          this.commentsList2[index2].isLike = 1
          return
        } else if (this.commentsList[index].isLike === 1) {
          this.commentsList[index].likeNum = this.commentsList[index].likeNum - 1
          this.util.delLike(this.commentsList[index].commentId, 2)
          this.commentsList[index].isLike = 0
          /*倒序列表改变*/
          this.commentsList2[index2].likeNum = this.commentsList2[index2].likeNum -1
          this.commentsList2[index2].isLike = 0
          return
        }
      },
      commentLike2(index){
        if(!this.userInfo) {
          return MessageBox.confirm('你还未登录，是否前往登录？').then(
            action=>{
              this.$router.replace('/login')
            }
          ).catch(()=>{})
        }
        let index2=this.commentsList2.length-1-index
        if(this.commentsList2[index].isLike===0){
          this.commentsList2[index].likeNum=this.commentsList2[index].likeNum+1
          this.util.Like(this.commentsList2[index].commentId,2)
          this.commentsList2[index].isLike=1
          /*正序列表改变*/
          this.commentsList[index2].likeNum = this.commentsList[index2].likeNum + 1
          this.commentsList[index2].isLike = 1
          return
        }else if(this.commentsList2[index].isLike===1){
          this.commentsList2[index].likeNum=this.commentsList2[index].likeNum-1
          this.util.delLike(this.commentsList2[index].commentId,2)
          this.commentsList2[index].isLike=0
          /*正序列表改变*/
          this.commentsList[index2].likeNum = this.commentsList[index2].likeNum -1
          this.commentsList[index2].isLike = 0
          return
        }
      },
      //回复的点赞与取消点赞
      replyLike(index){
        if(!this.userInfo) {
          return MessageBox.confirm('你还未登录，是否前往登录？').then(
            action=>{
              this.$router.replace('/login')
            }
          ).catch(()=>{})
        }
        if(this.replyList[index].isLike===0){
          this.replyList[index].likeNum=this.replyList[index].likeNum+1
          this.util.Like(this.replyList[index].replyId,3)
          this.replyList[index].isLike=1
          return
        }else if(this.replyList[index].isLike===1){
          this.replyList[index].likeNum=this.replyList[index].likeNum-1
          this.util.delLike(this.replyList[index].replyId,3)
          this.replyList[index].isLike=0
          return;
        }
      },
    },
    watch: {
      isShowPopup() {
        // 下面需要这两行代码，兼容不同浏览器
        document.body.scrollTop = this.pageScrollYoffset;
        window.scroll(0, this.pageScrollYoffset);
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped="scoped">
  .bar_detail{
    width 10rem
    margin-top 85px
    height 100%
  }
  .header{
    background-color: transparent;
  }
  .more{
    font-size 26px
    color #eed60a
    position absolute
    right 15px
    top 50%
    transform translateY(-50%)
    border 1px #ee9900
  }
  .iconfont{
    font-size 36px
    color orange
  }
  .detail_comment{
    position relative
    margin-top 20px
    padding-top: 5px;
  }
  .discuss_guide{
    width 10rem
    border-bottom 2px solid #e4e4e4

  }
  .isFixed{
    position:fixed;
    background-color:#Fff;
    top:80px;
    z-index:11;
  }
  .discuss_guide_item{
    text-align: center;
    flex: 1;
    margin: 0px 50px;
    color: #777777;
  }
  .discuss_guide_item span{
    font-size: 26px;
    margin-top: 4px;
    line-height 50px
  }
  .discuss_guide_item:first-child{
    margin-left 30px
  }
  .comment_classify{

    font-size 24px
    height 50px
    width 10rem
    border-bottom 2px solid #e4e4e4
  }
  .comment_classify_item{
    margin: 0px 30px;
    color: #777777;

  }
  .comment_classify_item:nth-child(2){
    position: absolute;
    right: 90px;
  }
  .comment_classify_item:nth-child(3){
    position: absolute;
    right: 0px;
  }
  .active{
    color black
    font-weight normal
  }
    /*转发*/
  .list{
    margin-top 10px
  }
  .share_li{
     display flex
     margin-top 10px
     padding-bottom 20px
   }
    .share_li2{
      border-bottom: 10px solid #e4e4e4;
      padding-bottom 20px
    }
  .shareImg{
    margin-left 30px
    width 80px
    height 70px
    border-radius 50%
    background:url("../../components/BarList/images/head5.jpg");
    background-size: 100% 100%;
  }
  .share_right{
    width 100%
   /* border-bottom 2px solid #e4e4e4*/
    padding-left 20px
  }
  .share_name{
    font-size 26px
    font-weight bold
  }
  .share_reason{
    padding-right 20px
  }
  .share_time{
    color #989898
    font-size 22px
  }
  /*评论*/
  .right_head{
    display flex
  }
  .iconfont{
    font-size 30px
    color black
    margin-right 10px

  }
  .share_reason{
    font-size:24px;
  }
  .comment_do{
    position absolute
    right 10px
    font-size 24px
    color #434343
  }
  .comment_more{
    color #595959
    font-size 24px
  }
  /*查看更多评论回复列表*/
/*  .noScroll {
    overflow-y: hidden;
    width 10rem
    height 100%
    position fixed
  }*/
  /*.noScroll {
    overflow-y: hidden;
  }*/
  .content_bg{
    position fixed
    top 0
    width 10rem
    height 100%
    margin-top 0
    background: #0b0309;
    opacity 0.2;
    z-index 88
  }
  .comment_other{
    border-radius 30px 30px 0 0
    position: fixed;
    height 80%
    z-index:99;
    left:50%;
    transform: translateX(-50%);
    bottom :0;
    width 10rem
    background-color: #ffffff;
    overflow-y: scroll;
    /* ios需要下面这个属性 */
    -webkit-overflow-scrolling: touch;
  }
  .comment_header{
    display flex
    position: relative;
    height 80px
    border-bottom: 1px solid #e4e4e4;
  }
  .back{
    font-size 28px
    position absolute
    top 50%
    left 30px
    transform translateY(-50%)
  }
  .comment_title{
    font-size 28px
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 50%
    text-align center
  }
  .other_commentNum{
    margin 10px 30px
    font-size 24px
    color black
  }
  /*底部评论框*/
  .footer_comment{
    display flex
    box-shadow 0px -3px 0px 0px #f9f9f9
    position: fixed;
    height 80px
    z-index:99;
    left:50%;
    transform: translateX(-50%);
    bottom :0;
    width 10rem
    background-color: #ffffff;
  }
  .comment_content{
    height 58px
    width 50%
    border-radius 29px 29px
    border none
    background-color: rgba(186,186,186,0.2);
    margin-left 30px
    padding-left: 20px;
    margin-top 11px
    line-height 58px
  }
  .comment2{
    position fixed
    top 0
    width 10rem
    height 100%
    margin-top 0
    background: #0b0b0b;
    opacity 0.1;
    z-index 99
  }
  .footer_comment2{
    display flex
    box-shadow 0px -3px 0px 0px #dbdbdb
    position: fixed;
    height 180px
    z-index:99;
    left:50%;
    transform: translateX(-50%);
    bottom :0;
    width 10rem
    background-color: #ffffff;
  }

  .comment_content2{
    width 70%
    height 120px
    margin-left 30px
    margin-top:15px ;
    padding 20px 20px 10px
    font-size 24px
    color #03041b
    border-radius: 20px 20px;
    border none
    background-color: #ededed
    z-index 99
  }
  .comment_operation{
    margin 15px 50px
  }
  .footer_comment2 .clear_content .iconfont{
    font-size 55px
    color #888888
  }
  .comment_post{
    margin-top 30px
    font-size 26px
    color rgba(13,106,255,0.2);
  }
  .comment_post2{
    color rgba(13,106,255,1);
  }
  .commentNum,.post_collect,.post_share{
    margin-left 50px
    margin-top 20px
  }
  .footer_hint{
    width:100%;
    height: 50px;
    color: #7e8c8d;
    margin-bottom: 90px;
    text-align: center;
    padding-top: 15px;
    font-size: 20px;
  }
  .isActive{
    color skyblue
  }
</style>
