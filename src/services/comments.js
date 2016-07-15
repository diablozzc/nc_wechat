/**
 * Created by zhangzhichao on 16/7/15.
 */
import _ from 'lodash';
import Moment from 'moment';
import 'moment/locale/zh-cn';

class CommentsService {
  /*ngInject*/
  constructor(Models) {
    this.Models = Models;
  }
  getComments(param={}) {
    let p = Object.assign({},param);

    return this.Models.init('Comments').actions('get',{},p).then((response)=>{
      Moment.locale('zh_cn');
      _.forEach(response,(item)=>{
        item.commentTimeText = Moment(item.commentTime).fromNow();
        item.commentTimestamp = Moment(item.commentTime).valueOf();

        if(item.replies.length>0){
          _.forEach(item.replies,(reply)=>{
            reply.replyTimeText = Moment(reply.replyTime).fromNow();
          })
        }

      });
      return response;
    });
  }
  submit(column,itemId,content){

    return this.Models.init('Comments').actions('submit',{columnKey:column,itemId:itemId,content:content}).then((response)=>{

      return response;
    });
  }
}


export default CommentsService;