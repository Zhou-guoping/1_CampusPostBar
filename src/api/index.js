/*
  包含n个接口请求函数的模块
  函数返回值：promise对象
*/
import ajax from './ajax'

const  BASE_URL='http://server.campus.com' //=>在config/index.js中添加代码解决跨域问题
//const BASE_URL='/api'

//获取省份信息
export const reqProvince=()=>ajax(BASE_URL+'/ucs/register/provinceList')

//获取学校信息
export const reqCampus=(regionId)=>ajax(BASE_URL+'/ucs/register/campusList',{regionId})

//发送注册验证码
export const reqRegisterCode=(mobilePhone)=>ajax(BASE_URL+'/ucs/register/registerCode',{mobilePhone})

//校验手机号是否重复
export const reqCheckPhone=(mobilePhone)=>ajax(BASE_URL+'/ucs/register/validatePhone',{mobilePhone})

//校验用户名是否重复
export const reqCheckUsername=(userName)=>ajax(BASE_URL+'/ucs/register/validateUsername',{userName})

//用户注册信息
export const reqRegisterUser=({campusId,campusName,majorName,registerCode,userName,userNickname,userPassword,userPhone,userSex})=>ajax(BASE_URL+'/ucs/register/user',{campusId,campusName,majorName,registerCode,userName,userNickname,userPassword,userPhone,userSex},'POST')

//发送登录验证码
export const reqLoginCode=(mobilePhone)=>ajax(BASE_URL+'/ucs/login/loginCode',{mobilePhone})

//用户名密码登录
export const reqPwdLogin=(loginName,userPassword)=>ajax(BASE_URL+'/ucs/login/userLogin',{loginName,userPassword},'POST')

//用户名验证码登录
export const reqSmsLogin=(code,mobilePhone)=>ajax(BASE_URL+'/ucs/login/codeLogin',{code,mobilePhone},'POST')

/*获取用户信息*/
export const reqUserInfo=()=>ajax(BASE_URL+'/ucs/login/user')

/*用户退出登录*/
export const reqLogout = () => ajax(BASE_URL+'/ucs/user-center/logout',{},"POST")

//(贴子 评论 回复）点赞
export const reqPostOperation=(objId,objType)=>ajax(BASE_URL+'/pcs/post/like/'+objId+'?objType='+objType,{objId,objType},'POST')

//（贴子 评论 回复）取消点赞
export const reqDelOperation=(objId,objType)=>ajax(BASE_URL+'/pcs/post/like/'+objId+'?objType='+objType,{objId,objType},'PUT')

/*贴子评论*/
export const reqPostComment=({commentContent,floorNum,postId})=>ajax(BASE_URL+'/pcs/post/comment',{commentContent,floorNum,postId},'POST')

/*贴子评论的回复*/
export const reqCommentReply=({commentId,originUserId,originUserNickname,replyContent})=>ajax(BASE_URL+'/pcs/post/reply',{commentId,originUserId,originUserNickname,replyContent},'POST')


/*
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})
// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode', {phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
// 10、用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')

/**
 * 获取商家信息
 */
/*
export const reqShopInfo = () => ajax('/info')


 //获取商家评价数组

export const reqShopRatings = () => ajax('/ratings')
 获取商家商品数组

export const reqShopGoods = () => ajax('/goods')


*/
