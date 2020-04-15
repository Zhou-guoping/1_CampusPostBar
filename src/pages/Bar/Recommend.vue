<template>
  <section>
    <BarGuide/>

    <FooterGuide/>
    <section class="recommend">
      <span class="guess_like" >猜你喜欢</span>
      <span class="recommend_change">换一批</span>
      <p v-time="timeNow"></p>
      <ul class="recommend_list">
        <li class="recommend_li">
          <a>
            <div class="recommend_img"></div>
            <p class="recommend_title">火影忍者ol手游</p>
            <section class="recommend_num">
              <span>关注 12.7w</span>
              <span>帖子 7.8</span>
            </section>
            <div class="recommend_describle">好看的帖子千千万，有趣的灵魂就差你~</div>
            <div class="recommend_to">关注</div>
          </a>
        </li>
        <li class="recommend_li">
          <a>
            <div class="recommend_img"></div>
            <p class="recommend_title">火影忍者ol手游</p>
            <section class="recommend_num">
              <span>关注 12.7w</span>
              <span>帖子 7.8</span>
            </section>
            <div class="recommend_describle">好看的帖子千千万，有趣的灵魂就差你~</div>
            <div class="recommend_to">关注</div>
          </a>
        </li>
        <li class="recommend_li">
          <a>
            <div class="recommend_img"></div>
            <p class="recommend_title">火影忍者ol手游</p>
            <section class="recommend_num">
              <span>关注 12.7w</span>
              <span>帖子 7.8</span>
            </section>
            <div class="recommend_describle">好看的帖子千千万，有趣的灵魂就差你~</div>
            <div class="recommend_to">关注</div>
          </a>
        </li>
        <li class="recommend_li">
          <a>
            <div class="recommend_img"></div>
            <p class="recommend_title">火影忍者ol手游</p>
            <section class="recommend_num">
              <span>关注 12.7w</span>
              <span>帖子 7.8</span>
            </section>
            <div class="recommend_describle">好看的帖子千千万，有趣的灵魂就差你~</div>
            <div class="recommend_to">关注</div>
          </a>
        </li>
        <li class="recommend_li">
          <a>
            <div class="recommend_img"></div>
            <p class="recommend_title">火影忍者ol手游</p>
            <section class="recommend_num">
              <span>关注 12.7w</span>
              <span>帖子 7.8</span>
            </section>
            <div class="recommend_describle">好看的帖子千千万，有趣的灵魂就差你~</div>
            <div class="recommend_to">关注</div>
          </a>
        </li>
        <li class="recommend_li">
          <a>
            <div class="recommend_img"></div>
            <p class="recommend_title">火影忍者ol手游</p>
            <section class="recommend_num">
              <span>关注 12.7w</span>
              <span>帖子 7.8</span>
            </section>
            <div class="recommend_describle">好看的帖子千千万，有趣的灵魂就差你~</div>
            <div class="recommend_to">关注</div>
          </a>
        </li>
      </ul>
    </section>

  </section>

</template>
<script>
  import BarGuide from './BarGuide/BarGuide.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  import '../../common/time'
  export default {
    data(){
      return{
        timeNow:'2020-04-14 14:35:11'  // 1586837994339 刚刚
      }
    },
    mounted() {
      console.log(new Date('2020-04-14 14:35:11')+'1')
      console.log(Date.now()+'2')
      console.log(Date.parse('2020-04-14 14:35:11')+'3')
    },
    components: {
      BarGuide,
      FooterGuide
    }
  }
</script>
<style>
  .recommend{
    width: 10rem;
    margin-top: 80px;
    position: relative;
  }
  .guess_like{
    font-size: 26px;
    margin-left: 15px;
  }
  .recommend_change{
    margin-top: 8px;
    position: absolute;
    right:20px;
    font-size: 20px;
    color: #0086b3;
  }
  .recommend_list{
    text-align: center;
    margin-top: 20px;
  }
  .recommend_li{
    border-bottom: 2px solid #e4e4e4;
    width: 45%;
    float: left;
    text-align: center;
    margin-left: 3%;
    margin-top: 16px;
  }
  .recommend_li:nth-child(2n-1){
    border-right: 2px solid #e4e4e4;
  }
  .recommend_li:nth-child(2n){
    border-left: 2px solid #e4e4e4;
  }
  .recommend_img{
    width:80px;
    height: 80px;
    background:url("../../components/BarList/images/head2.jpg");
    background-size: 100% 100%;
    border-radius: 25px;
    margin: 20px auto;
  }
  .recommend_title{
    color: #000;
    font-size: 24px;
    margin-top: 12px;
  }
  .recommend_num{
    margin-top: 10px;
  }
  .recommend_num span{
    font-size: 20px;
    line-height: 22px;
  }
  .recommend_describle{
    color: #000;
    font-size: 20px;
    margin-top: 16px;
    line-height: 24px;
  }
  .recommend_to{
    display: inline-block;
    width:80px;
    height: 30px;
    background-color: skyblue;
    margin: 20px auto;
    font-size: 22px;
    line-height: 22px;
    padding-top: 5px;
    text-align: center;
    border-radius: 15px;
    color: #e4e4e4;
  }
</style>
