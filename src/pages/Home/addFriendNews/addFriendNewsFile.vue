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
        <textarea class="text-textarea"  v-model='content' placeholder="请编辑你的文本" rows="3"></textarea>
      </div>
      <div class="img-file">
        <!-- <input @change="changeVideo($event)" id="imgFile" class="upload_input" type="file" accept="image/*"/>-->
        <input type="file" accept="application/*,text/*" single @change="changeFile($event)"
               ref="file">
      </div>
    </form>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
  </section>

</template>

<script>
  import axios from 'axios'
  import AlertTip from "../../../components/AlertTip/AlertTip";
  import HeaderTop from "../../../components/HeaderTop/HeaderTop";
  import { Toast } from 'mint-ui'
  export default {
    name: "addFriendNewsFile",
    data(){
      return{
        content:'',
        alertText:'',
        alertShow:false,
        fileUrl:[],
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
      changeFile(e) {
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
          this.fileUrl[0]='file_' + this.returnUrl
          console.log(this.fileUrl)
        }).catch((error)=>
        {
          this.showAlert('出错了')
        })



      },
      put() {
        if(this.content.trim().length===0){
          Toast('内容不能为空')
        }else{
          let param = new FormData();
          param.append('friendNewsContent', this.content);
          //param.append('username', this.userInfo._id);

          param.append('friendNewsImg', this.fileUrl)
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
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .addPostBar{
    width 10rem
  }

  .hasContent{
    color rgba(11,100,235,.8)
  }
  .text-textarea{
    width 96%
    height 120px
    margin 85px  1.5% 0
    border #ffffff
    font-size 26px
  }

</style>
