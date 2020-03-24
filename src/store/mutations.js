/*
* 直接更新state的多个方法的对象
* */
import {RECEIVE_PROVINCE,RECEIVE_CAMPUS} from "./mutation-types";

export default {
  [RECEIVE_PROVINCE](state,{provinceArr}){
    state.provinceArr=provinceArr
  },
  [RECEIVE_CAMPUS](state,{campusArr}){
    state.campusArr=campusArr
  }
}
