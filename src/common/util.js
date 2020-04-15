import axios from 'axios'
import {reqDelOperation,reqPostOperation,reqPostComment,reqCommentReply} from "../api";
import {min} from "moment";

export default {

  /*点赞*/
  Like(objId, objType) {
    const result = reqPostOperation(objId, objType)
  },
  /*取消点赞*/
  delLike(objId, objType) {
    const result = reqDelOperation(objId, objType)
  },
  /*贴子评论*/
  Comment(commentContent, floorNum, postId) {
    const result = reqPostComment({commentContent, floorNum, postId})
  },
  /*贴子评论的回复*/
  commentReply(commentId,originUserId,originUserNickname,replyContent){
    const result = reqCommentReply({commentId,originUserId,originUserNickname,replyContent})
  },
  /*分享*/
  Share() {

  },

  /*删除贴子*/
  delPost() {

  },
  /*删除评论*/
  delComment() {

  },
  /*获取当前时间*/
  getNowTime(){
    let date=new Date()
    let year=date.getFullYear()
    let month=date.getMonth()+1
    let day=date.getDate()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let seconds=date.getSeconds()
    if(month<10) month='0'+month
    if (day<10) day='0'+day
    if(hour<10) hour='0'+hour
    if(minute<10) minute='0'+minute
    if(seconds<10) seconds='0'+seconds
    let nowDate=year+'-'+month+'-'+day+' '+hour+':'+minute+':'+seconds
    return nowDate
   }
}
