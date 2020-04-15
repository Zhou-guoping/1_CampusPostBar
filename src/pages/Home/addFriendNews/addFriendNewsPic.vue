<template>
    <section class="addPostBar">
      <!--头部-->
      <HeaderTop title="添加个人动态">
        <div class="go_back" slot="left" @click="$router.back()">
          取消
        </div>
        <div class="add_post" slot="right" @click.prevent.once="put" :class="{hasContent:content!==''}" >发布</div>
      </HeaderTop>
      <!--添加个人动态-->
      <form>
        <div><!--此处判断是否是登陆状态-->
         <!-- <div v-if="user._id">-->
          <div  class="upload">
            <div class="postContent">
              <!--文本-->
              <div class="postText">
                <textarea class="text-textarea"  v-model='content' placeholder="请编辑你的文本" rows="3" @keyup.enter="showAlert(content)"></textarea>
              </div>
              <!--图片-->
              <div>
                <div class="upload-img">
                  <ul class="load-list">
                    <li  v-for="(item,index) in imgArr" :key="index">
                      <div class="load-container">
                        <img :src="item">
                        <span @click="delImg(index)"><i class="iconfont icon-diqiu"></i></span>
                      </div>
                    </li>
                    <li class="img-upload" v-if="allowAddImg">
                      <div class="only-add">
                        <div class="load-add" @click="upload()">
                          <i class="iconfont icon-icon-"></i>
                          <input type="file" accept="image/*" multiple="multiple" style="display: none" @change="changeImg($event)"
                                 ref="uploadImages">
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <!--<unlogin v-else> </unlogin>-->
        </div>
      </form>
      <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
    </section>
</template>

<script>
  import axios from 'axios'
  import AlertTip from '../../../components/AlertTip/AlertTip'
  import HeaderTop from '../../../components/HeaderTop/HeaderTop'
  export default {
    name: "addFriendNewsPic",
    data() {
      return {
        alertText: '', // 提示文本
        alertShow: false, // 是否显示警告框
        content: '',//分享动态的文字内容,
        imgArr: [],        // 存放临时图片的数组
        imgArrUrl:[],    /// 存放临时图片放回路径的数组
        allowAddImg: true,   // 上传达到限制后隐藏上传按钮
        imgData: '',
        imgSrc: '',
        returnUrl:''
      }
    },
    components: {
      HeaderTop,
      AlertTip
    },
    methods: {
      showAlert(alertText) {
        this.alertShow = true;
        this.alertText = alertText;
      },
      // 关闭警告框
      closeTip () {
        this.alertShow = false
        this.alertText = ''
      },
      upload () {
        // 调起input选择框
        this.$refs.uploadImages.click()
      },
      //获取文件
      changeImg(e) {
        this.file=e.target.files[0]
        e.preventDefault()
        let formData = new FormData();
        formData.append('file',this.file)
        let config={
          headers:{
            'Content-Type':'multipart/form-data'
          }
        }
        axios.post('http://server.campus.com/fcs/file/upload',formData,config).then((result)=>{

          this.returnUrl=result.data
          this.imgArrUrl.push('pic_'+this.returnUrl)
          //console.log(this.imgArrUrl)

        })
        let _this = this;
        let imgLimit = 1024;
        let files = e.target.files;
        let image = new Image();
        if (files.length > 0) {
          let dd = 0;
          let timer = setInterval(function () {
            if (files.item(dd).type != 'image/png' && files.item(dd).type != 'image/jpeg' && files.item(dd).type != 'image/gif') {
              return false;
            }
            if (files.item(dd).size > imgLimit * 102400) {
              //to do sth
            } else {
              image.src = window.URL.createObjectURL(files.item(dd));
              image.onload = function () {
                // 默认按比例压缩
                let w = image.width,
                  h = image.height,
                  scale = w / h;
                w = 200;
                h = w / scale;
                // 默认图片质量为0.7，quality值越小，所绘制出的图像越模糊
                let quality = 0.7;
                //生成canvas
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');
                // 创建属性节点
                let anw = document.createAttribute("width");
                anw.nodeValue = w;
                let anh = document.createAttribute("height");
                anh.nodeValue = h;
                canvas.setAttributeNode(anw);
                canvas.setAttributeNode(anh);
                ctx.drawImage(image, 0, 0, w, h);
                let ext = image.src.substring(image.src.lastIndexOf(".") + 1).toLowerCase();//图片格式
                let base64 = canvas.toDataURL("image/" + ext, quality);
                // 回调函数返回base64的值
                if (_this.imgArr.length <= 9) {
                  _this.imgArr.push('');
                  _this.imgArr.splice(-1, 1, base64);//替换数组数据的方法，此处不能使用：this.imgArr[index] = url;
                  if (_this.imgArr.length >= 9) {
                    _this.allowAddImg = false;
                  }
                }
              }
            }

            if (dd < files.length - 1) {
              dd++;
            } else {
              clearInterval(timer);
            }
          }, 1000)
        }
      },
      // 删除图片
      delImg (n) {
        this.imgArr.splice(n,1);
        if(this.imgArr.length<9){
          this.allowAddImg = true;
        }
      },
      put() {
        let param = new FormData();
        param.append('friendNewsContent', this.content);
        //param.append('username', this.userInfo._id);
        param.append('friendNewsImg',this.imgArrUrl)
       /* this.imgArr.every(() => {
          param.append('friendNewsImg', 'pic_'+this.returnUrl);
        });*/
        axios.post('http://server.campus.com/pcs/friend/friend-news', {'friendNewsContent':param.get('friendNewsContent'),'friendNewsImg':param.get('friendNewsImg')},{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then( (result)=> {
          //console.log(param.get('friendNewsImg'));
          this.$router.replace( '/home');
        }).catch((error)=>{

        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .addPostBar{
    width 10rem
  }
  .header_title{
      color #fff
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

  .upload-img{
    margin-top 5px
  }

  .load-list {
    display flex
    flex-flow row wrap
    padding 0 15px
  }
  .load-list li{
    height 250px
    flex 0 0 33.3%
    margin-top 15px
    position relative
    display flex
    align-items center
  }

  .load-list span{
    display block
    width 40px
    height 40px
    background transparent
    border-radius 50%
    font-size 40px
    text-align center
    line-height 40px
    position absolute
    right 2px
    top 2px
  }

  .load-list img{
    width 100%
    height 100%
  }

  .img-upload{
    flex 0 0 31%
    margin-right auto
    margin-top 15px
  }

  .load-add{
    width 50%
    height 60%
    background #ffffff
    border-radius 50px
    margin 45px auto 0
    text-align center
    line-height 125px
    font-size 30px
  }
  .iconfont{
    font-size 40px
    color #ee9900
  }
  .load-container,.only-add{
    width 90%
    height 90%
    margin auto
    background #f7f7f7
  }

</style>
