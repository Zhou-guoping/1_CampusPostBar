<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    components:{
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
<!--<template>
  <div class="hello">
    <pre>{{content}}</pre>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        content:''
      }
    },
    mounted(){
      this.axios.post("http://api.komavideo.com/news/list").then(body=>{
        this.content=body.data;
      });
    }
  }
</script>-->

<!--
&lt;!&ndash;<template>
  <div>
    <select v-model="formValidate.city" @on-change="selectCity" placeholder="请选择省份">
      <Option v-for="(item,index) in area" :value="item.city" :key="index">{{item.city}}</Option>
    </select>
    <Select v-model="formValidate.campus"  placeholder="请选择学校">
      <Option v-for="(item,index) in campus" :value="item" :key="index">{{item}}</Option>
    </Select>
  </div>

</template>
<script>
  var url="http://192.168.1.13:9100/register/campusList/110000";
  export default {
    data : {
      formValidate: {
        city: '',
        campus: '',
      },
      area: [],
      campus: []
    },
    mounted:function(){
      this.$http.get(url).then(response => {
        this.area = response.body;

      }, response => {

      });
    },
    methods:{
      selectCity:function(value) {
        const _this = this;
        this.area.forEach(function (item, index) {
          if (item.city == value) {
            _this.campus = item.campus;
            _this.formValidate.campus = _this.campus[0];
          }
        })
      }
    }
  }
</script>&ndash;&gt;


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->
<!--<template>
  <div id="app">
    <form action="http://192.168.1.13:9101/file/upload/common" id="editUserInfo" method="post" enctype="multipart/form-data">
      <input type="file" name="file"/>
      <input type="submit" value="上传" id="send">
    </form>

  </div>
</template>
<script src="src/jquery-3.3.1.min.js"></script>
<script>
  function editUserInfo() {
    var formData = new FormData(document.getElementById('editUserInfo'));
    $.ajax({
      url: 'http://192.168.1.13:9101/file/upload/common',
      type: Post,
      data: formData,
      processData: false,
      contentType: false,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success: function (obj) {
        console.log(obj);
      },
      error: function (obj) {
        alert('服务器请求失败');
      }
    })
  }

  export default {
    name: 'App'

  }
</script>-->
