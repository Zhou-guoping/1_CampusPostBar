/*包含多个基于state的getter计算属性的对象*/


export default {
  //获取token方法，判断是否有token，如果没有，重新赋值，返回给state的token
  getToken(state){
    if(!state.token){
      state.token=localStorage.getItem('token')
    }
    return state.token
  }
}
