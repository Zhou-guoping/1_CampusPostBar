
/*状态对象*/
export default {
  regionId:110000,
  provinceArr:[],//省份数组
  campusArr:[],//学校数组
  userInfo:{}, //用户信息
  token:localStorage.getItem('token')||'',//初始化token
}
