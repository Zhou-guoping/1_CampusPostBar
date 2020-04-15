<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import axios from 'axios'
  export default {
    mounted() {
    /*  axios.get('http://server.campus.com/ucs/login/user').then((result)=>{
        if(result.status===200){
          const userInfo=result.data
          console.log(userInfo);
        }
      })*/
      this.getUserInfo()
    },
    methods:{
      ...mapActions(['getUserInfo'])
    },
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
