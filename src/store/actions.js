/*
* 通过mutation间接更新state的多个方法的对象
* */
import {RECEIVE_PROVINCE,RECEIVE_CAMPUS} from "./mutation-types";

export default {
  //同步记录信息
  recordUser({commit},{procinceArr}){
    commit(RECEIVE_USER_INFO,{userInfo})
  }
}
