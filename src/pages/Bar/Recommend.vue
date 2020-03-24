<template>
  <div>
    <BarGuide/>
    <FooterGuide/>
    <div class="recommend">
      <span style="font: 20px bold;margin: 4px 10px;">猜你喜欢</span>
      <span class="recommend_change">换一批</span>
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
    </div>
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
<style>
  .recommend{
    margin-top: 75px;
  }
  .recommend_change{
    margin-top: 4px;
    position: absolute;
    right:10px;
  }
  .recommend_list{
    margin-top: 6px;
  }
  .recommend_li{
    border-bottom: 2px solid #e4e4e4;
    width: 45%;
    float: left;
    text-align: center;
    margin-right: 20px;
  }
  .recommend_img{
    width:60px;
    height: 60px;
    background:url("../../components/BarList/images/head2.jpg");
    background-size: 100% 100%;
    border-radius: 20px;
    margin: 6px auto;
  }
  .recommend_title{
    color: #000;
    font-size: 16px;
    margin-top: 6px;
  }
  .recommend_num{
    margin-top: 6px;
  }
  .recommend_num span{
    margin-top: 6px;
    font-size: 14px;
    line-height: 14px;
  }
  .recommend_describle{
    color: #000;
    font-size: 14px;
    margin-top: 6px;
    line-height: 16px;
  }
  .recommend_to{
    width:55px;
    height: 20px;
    background-color: skyblue;
    margin: 8px auto;
    font-size: 16px;
    line-height: 16px;
    padding-top: 5px;
    border-radius: 15px;
  }
</style>
