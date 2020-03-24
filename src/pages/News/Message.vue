<template>
  <div>
    <NewsGuide/>
    <FooterGuide/>
    <span>学校信息:</span>
   <!-- <select class="campusProvince"  @change="getCampus">
      <option>-请选择省份-</option>
      <option  v-for="(item,i) in provinceArr" :key="i" :value="item.regionId">{{item.regionName}}</option>
    </select>-
    <select class="campusName"  >
      <option>-请选择学校-</option>
      <option v-for="(item,i) in campusArr" :key="i" :value="item.regionId">{{item.campusName}}</option>
    </select>-->
    <div class="sel">
      <!-- 省份选择 -->
      <select v-model="selectedProv">
        <option v-for="item in listProv" v-bind:value="item.id" :key="item.id">{{item.name}}</option>
      </select>

      <!-- 城市选择 -->
      <select v-model="selectedCampus">
        <option v-for="item in listCampus" v-bind:value="item.id" :key="item.id">{{item.name}}</option>
      </select>
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
    },
    data: function () {
      return {
        selectedProv: null,
        selectedCampus: null,
        listProv: [],
        listCampus: [],
        cityAll: [
          { "pid": "1", "id": "1", "name": "淄博" },
          { "pid": "1", "id": "2", "name": "青岛" },
          { "pid": "2", "id": "3", "name": "东1城" },
          { "pid": "2", "id": "4", "name": "天2上" }],
      }
    },
    created: function () {
      this.getProvList();
    },
    watch: {
      selectedProv: 'getCityList'
    },
    methods: {
      //获取省份列表
      getProvList: function () {
        this.listProv = [{ "id": "1", "name": "山东" }, { "id": "2", "name": "北京" }]
      },
      // 获取当前选择省份下的城市列表
      getCityList: function () {
        let vm = this;
        this.listCity = this.cityAll.filter(function (city) {
          return city.pid == vm.selectedProv
        })
      }
    }
  }
</script>
<style>
.sel{
  margin-top: 100px;
}
</style>
