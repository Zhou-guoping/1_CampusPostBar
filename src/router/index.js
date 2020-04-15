import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Bar from '../pages/Bar/Bar.vue'
import postDetails from "../pages/Bar/postDetails";
import barDetails from "../pages/Bar/barDetails";
import userDetails from '../pages/Bar/userDetails'
import Recommend from '../pages/Bar/Recommend.vue'
import Search from '../pages/Search/Search.vue'
import News from '../pages/News/Message.vue'
import Message from '../pages/News/News.vue'
import Profile from '../pages/Profile/Profile.vue'
import Edit from '../pages/Profile/ProfileEdit.vue'
import Login from '../pages/Login/Login.vue'
import Sign from '../pages/Sign/Sign.vue'
import Attention from '../pages/Home/Attention/Attention.vue'
import Materials from '../pages/Home/Materials/Material.vue'
import Topic from '../pages/Home/Topic/Topic.vue'
import addFriendNewsPic from '../pages/Home/addFriendNews/addFriendNewsPic'
import addFriendNewsVideo from '../pages/Home/addFriendNews/addFriendNewsVideo'
import addFriendNewsFile from '../pages/Home/addFriendNews/addFriendNewsFile'
import addFilePost from "../pages/Bar/addPost/addFilePost";
import addPicPost from "../pages/Bar/addPost/addPicPost";
import addVideoPost from "../pages/Bar/addPost/addVideoPost";
import el from "element-ui/src/locale/lang/el";

//声明使用插件
Vue.use(VueRouter)

const router=new VueRouter({
  mode:'history',
  //所有路由
  routes: [
    {
      path: '/home',/*主页*/
      component: Home,
      meta:{
        showFooter:true
      }
    },


    {
      path: '/bar',/*进吧*/
      component: Bar,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/bar/postDetails/:postId',/*帖子详情*/
      component: postDetails,
      props:true
    },
    {
      path: '/bar/barDetails/:postBarId',/*贴吧详情*/
      component: barDetails,
      props:true
    },
    {
      path: '/bar/userDetails/:userId',/*个人详情*/
      component: userDetails,
      props:true
    },
    {
      path: '/bar/BarDetail/pictures',/*贴吧内上传图片*/
      component: addPicPost,
    },
    {
      path: '/bar/BarDetail/video',/*贴吧内上传视频*/
      component: addVideoPost,
    },{
      path: '/bar/BarDetail/file',/*贴吧内上文件*/
      component: addFilePost,
    },

    {
      path: '/bar/recommend',/*贴吧推荐*/
      component: Recommend,
      meta: {
        showFooter: true
      }
    },

    {
      path: '/search',/*搜索*/
      component: Search
    },
    {
      path: '/news',/*消息*/
      component: News,
      meta:{
        showFooter:true,//是否显示底部导航
        requireLogin:true // 当前路由需要校验，不需要就不用写

      }
    },
    {
      path: '/news/message',/*信息*/
      component: Message,
      meta: {
        showFooter: true,
        requireLogin:true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path: '/profile',/*我的*/
      component: Profile,
      meta:{
        showFooter:true,
        //requireLogin:true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path: '/profile/edit',/*编辑资料*/
      component: Edit,
    },
    {
      path: '/login',/*登录*/
      component: Login
    },
    {
      path: '/sign',/*注册*/
      component: Sign
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home/attention',/*我的关注*/
      component: Attention,
      meta:{
        showFooter:true,
        requireLogin:true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path:'/home/topic',/*主题*/
      component: Topic,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/home/materials',/*资料*/
      component: Materials,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/home/addFriendNewsPic',/*上传图片到个人主页*/
      component: addFriendNewsPic,
      meta:{
        requireLogin:true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path:'/home/addFriendNewsVideo',/*上传视频到个人主页*/
      component: addFriendNewsVideo,
      meta:{
        requireLogin:true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path:'/home/addFriendNewsFile',/*上传文件到个人主页*/
      component: addFriendNewsFile,
      meta:{
        requireLogin:true // 当前路由需要校验，不需要就不用写
      }
    },
  ]
});

export default router;
