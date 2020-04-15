/*
* 直接更新state的多个方法的对象
* */
import {RECEIVE_PROVINCE,RECEIVE_CAMPUS,RECEIVE_USERINFO,RESET_USERINFO} from "./mutation-types";

export default {
  [RECEIVE_PROVINCE](state,{provinceArr}){
    state.provinceArr=provinceArr
  },
  [RECEIVE_CAMPUS](state,{campusArr}){
    state.campusArr=campusArr
  },
  [RECEIVE_USERINFO](state,{userInfo}){
    state.userInfo=userInfo
  },

  //存储token方法
  setToken(state,token){
    state.token=token
    localStorage.token=token//同步存储token到localStorage
  },
  //清除token
  delToken(state){
    localStorage.removeItem('token')
    state.token=undefined
  },

  [RESET_USERINFO](state){
    state.userInfo={}
  },
}
