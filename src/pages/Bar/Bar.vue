<template>
  <div>
    <BarGuide/>
    <FooterGuide/>
  </div>
</template>
<script>
  import BarGuide from './BarGuide/BarGuide.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  export default {
    components: {
      BarGuide,
      FooterGuide
    }
  }
</script>

<!--<template>
<div class="form-group" style="display: flex;">
                      <div>
                      <span>验证码：</span>
                       <input type="text" id="code" v-model="code" class="code"  placeholder="请输入您的验证码" />
                 </div>
                <div class="login-code" @click="refreshCode">
            &lt;!&ndash;验证码组件&ndash;&gt;
             <s-identify :identifyCode="identifyCode"></s-identify>
             </div>
                   </div>
</template>
<script>
  import SIdentify  from './sidentify.vue'
export default {
  components: { SIdentify },
  data () {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      code:"",//text框输入的验证码
    }
  },
  mounted(){
       this.identifyCode = "";
       this.makeCode(this.identifyCodes, 4);
  },
  created(){
    this.refreshCode()
  },
  methods:{
    //验证码
    randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
   refreshCode() {
       this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
  makeCode(o, l) {
         for (let i = 0; i < l; i++) {
               this.identifyCode += this.identifyCodes[
                   this.randomNum(0, this.identifyCodes.length)
            ];
       }
      console.log(this.identifyCode);
  },
  }
}

</script>

<style>
.code{
  width:124px;
        height:31px;
   border:1px solid rgba(186,186,186,1);
}
 .login-code{
     cursor: pointer;
 }
</style>-->
