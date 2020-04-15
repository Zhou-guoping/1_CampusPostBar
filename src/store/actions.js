/*
* 通过mutation间接更新state的多个方法的对象
* */
import {RECEIVE_PROVINCE,RECEIVE_USERINFO,RESET_USERINFO} from "./mutation-types";
import {reqProvince,reqCampus,reqUserInfo,reqLogout} from "../api";

export default {
  //异步获取省份列表
  async getProvince({commit}) {
    //发送异步ajax请求
    const  result=await reqProvince()
    //提交一个mutation
    const provinceArr=result
    commit(RECEIVE_PROVINCE,{provinceArr})
    console.log(result)

  },
  //异步获取学校列表
  async getCampus({commit,state}) {
    //发送异步ajax请求
    const regionId=state.regionId
    const result = await reqCampus(regionId)
    //提交一个mutation
   /* if (result.status === 200) {
      const campusArr = result.data
      commit(RECEIVE_CAMPUS, {campusArr})
    }*/
  },

  //异步获取用户信息
  async getUserInfo({commit}){
    const result=await reqUserInfo()
    const userInfo=result
    commit(RECEIVE_USERINFO,{userInfo})
  },

  //异步登出
  async logout({commit}) {
    const result = await reqLogout()
    commit(RESET_USERINFO)
  }

}
