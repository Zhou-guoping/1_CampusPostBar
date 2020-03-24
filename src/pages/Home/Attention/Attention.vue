<template>
  <div class="">
    <TopGuide/>
    <AttentionList/>
  </div>
</template>
<script>
  import TopGuide from '../TopGuide/TopGuide.vue'
  import AttentionList from '../../../components/AttentionList/AttentionList.vue'
  export default {
    components: {
      TopGuide,
      AttentionList
    }
  }
</script>
