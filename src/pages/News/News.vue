<template>
  <div>
    <NewsGuide/>
    <FooterGuide/>
    <div class="message_container">
      <ul class="message_list">
        <li class="message_li">
          <a>
            <!--包含头像，昵称，消息展示-->
            <div class="messageImg"></div>
            <div class="message_head">
              <section class="meaaage_deatil">
                <span>皮皮虾</span>
                <span>西华大学</span>
              </section>
              <p class="message_content">你好，我是Xxxx大学的Xxx,很高兴认识你！！！</p>
            </div>
          </a>
        </li>
        <li class="message_li">
          <a>
            <!--包含头像，昵称，消息展示-->
            <div class="messageImg"></div>
            <div class="message_head">
              <section class="meaaage_deatil">
                <span>嘻嘻嘻</span>
                <span>清华大学</span>
              </section>
              <p class="message_content">你好，我是Xxxx大学的Xxx,很高兴认识你！！！</p>
            </div>
          </a>
        </li>
        <li class="message_li">
          <a>
            <!--包含头像，昵称，消息展示-->
            <div class="messageImg"></div>
            <div class="message_head">
              <section class="meaaage_deatil">
                <span>哈哈哈</span>
                <span>西华师范大学</span>
              </section>
              <p class="message_content">你好，我是Xxxx大学的Xxx,很高兴认识你！！！</p>
            </div>
          </a>
        </li>
        <li class="message_li">
          <a>
            <!--包含头像，昵称，消息展示-->
            <div class="messageImg"></div>
            <div class="message_head">
              <section class="meaaage_deatil">
                <span>咕咕咕</span>
                <span>电子科技大学</span>
              </section>
              <p class="message_content">你好，我是Xxxx大学的Xxx,很高兴认识你！！！</p>
            </div>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  import NewsGuide from './NewsGuide/NewsGuide.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  export default {
    components: {
      NewsGuide,
      FooterGuide
    }
  }
</script>
<style>
  .message_container{
    margin-top: 65px;
  }
  .message_list li{
    border-bottom: 1px solid #e4e4e4;
  }
  .messageImg{
    width: 60px;
    height: 60px;
    background: url("../../components/BarList/images/head5.jpg");
    border-radius: 30px;
    background-size:100% 100%;
  }
  .message_li{
    width: 100%;
    height: 65px;
    position: relative;
    margin: 5px 10px;
  }
  .message_head{
    position: absolute;
    top: 0px;
    left: 60px;
  }
  .message_content{
    margin: 5px 10px;
    font-size: 16px;
  }
  .meaaage_deatil{
    margin: 5px 10px;
    font-size: 18px;
    color: #222222;
  }
</style>
