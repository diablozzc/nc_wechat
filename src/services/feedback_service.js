/**
 * Created by zhangzhichao on 16/7/19.
 */
import _ from 'lodash';
import Moment from 'moment';
import 'moment/locale/zh-cn';

class FeedbackService {
  /*@ngInject*/
  constructor(Models) {
    this.Models = Models;
    Moment.locale('zh_cn');
  }
  getFeedbacks(param={}) {
    let p = Object.assign({},param);

    return this.Models.init('Feedbacks').actions('get',{},p).then((response)=>{

      _.forEach(response,(item)=>{
        item.sayTimeText = Moment(item.sayTime).fromNow();
        item.sayTimestamp = Moment(item.sayTime).valueOf();

        if(item.replies.length>0){
          _.forEach(item.replies,(reply)=>{
            reply.replyTimeText = Moment(reply.replyTime).fromNow();
          })
        }
      
      });
      return response;
    });
  }

  getAllFeedbacks(param={}) {
    let p = Object.assign({},param);

    return this.Models.init('Feedbacks/audit').actions('get',{},p).then((response)=>{

      _.forEach(response,(item)=>{
        item.sayTimeText = Moment(item.sayTime).fromNow();
        item.sayTimestamp = Moment(item.sayTime).valueOf();

        if(item.replies.length>0){
          _.forEach(item.replies,(reply)=>{
            reply.replyTimeText = Moment(reply.replyTime).fromNow();
          })
        }

      });
      return response;
    });
  }

  

  feedback(param={}){
    let p = Object.assign({},param);

    return this.Models.init('Feedbacks').actions('submit',p).then((response)=>{

      return response;
    });
  }
}


export default FeedbackService;