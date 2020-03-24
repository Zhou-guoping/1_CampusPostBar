<template>
  <div class="">
    <TopGuide/>
    <Topic/>
  </div>
</template>
<script>
  import TopGuide from '../TopGuide/TopGuide.vue'
  import Topic from '../../../components/TopicList/TopicList.vue'
  export default {
    components: {
      TopGuide,
      Topic
    }
  }
</script>
