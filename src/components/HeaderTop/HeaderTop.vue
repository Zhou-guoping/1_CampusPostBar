<template>
  <header class="header">
    <slot name="left" class="header_left"></slot>
    <span class="header_title">
      <span class="header_title_text">{{title}}</span>
    </span>
    <slot name="right" class="header_right"></slot>
  </header>
</template>

<script>

  export default {
    props: {
      title: String
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .header{
    background-color transparent
    position fixed
    z-index 22
    left 50%
    transform translateX(-50%)
    top 0
    width 10rem
    height 80px
/*    border-bottom: 1px solid #e4e4e4;*/
    display flex
  }
  .go_back{
    position absolute
    left 20px
    top 50%
    transform translateY(-50%)
    font-size 26px
    color #181818
  }
  .header_title{
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 50%
    text-align center
    font-size 28px
  }
  .add_post{
    font-size 26px
    color rgba(11,100,238,.2)
    position absolute
    right 20px
    top 50%
    transform translateY(-50%)
  }
    /*.header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff*/
</style>
