<template>
  <section class="addPostBar">
    <!--头部-->
    <HeaderTop title="添加个人动态">
      <router-link class="go_back" slot="left" to="/home">
        取消
      </router-link>
      <div class="add_post" slot="right" :class="{hasContent:content!==''}"  @click.prevent.once='put'>发布</div>
    </HeaderTop>
    <form id="myForm">
      <div class="postText">
        <textarea class="text-textarea"  v-model='content' placeholder="请编辑你的文本" rows="3" @keyup.enter="showAlert(content)"></textarea>
      </div>
      <div class="img-file">
       <!-- <input @change="changeVideo($event)" id="imgFile" class="upload_input" type="file" accept="image/*"/>-->
        <input type="file" accept="video/*" single @change="changeVideo($event)"
               ref="uploadImages">
      </div>
    </form>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
  </section>

</template>

<script>
  import axios from 'axios'
  import AlertTip from "../../../components/AlertTip/AlertTip";
  import HeaderTop from "../../../components/HeaderTop/HeaderTop";
  export default {
    name: "addFriendNewsVideo",
    data(){
      return{
        content:'',
        alertText:'',
        alertShow:false,
        videoUrl:[],
      }
    },
    components:{
      HeaderTop,
      AlertTip
    },
    methods: {
      showAlert(alertText) {
        this.alertShow = true;
        this.alertText = alertText;
      },
      // 关闭警告框
      closeTip() {
        this.alertShow = false
        this.alertText = ''
      },
      changeVideo(e) {
        this.file = e.target.files[0]
        e.preventDefault()
        let formData = new FormData();
        formData.append('file', this.file)
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        axios.post('http://server.campus.com/fcs/file/upload', formData, config).then((result) => {

          this.returnUrl = result.data
          this.videoUrl[0]='video_' + this.returnUrl
          console.log(this.videoUrl)

        }).catch((error)=>
        {
          this.showAlert('出错了')
        })


      },
      put() {
        let param = new FormData();
        param.append('friendNewsContent', this.content);
        //param.append('username', this.userInfo._id);
        param.append('friendNewsImg', this.videoUrl)
        axios.post('http://server.campus.com/pcs/friend/friend-news', {
          'friendNewsContent': param.get('friendNewsContent'),
          'friendNewsImg': param.get('friendNewsImg')
        }, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((result) => {
          console.log(param.get('friendNewsImg'));
          this.$router.replace('/home');
        }).catch((error) => {

        })

      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .addPostBar{
    width 10rem
  }
  .hasContent{
    color #fff
  }
  .text-textarea{
    width 96%
    height 120px
    margin 85px  1.5% 0
    border #ffffff
    font-size 26px
  }

</style>
