/**
 * Created by zhangzhichao on 16/7/15.
 */
import _ from 'lodash';
import Moment from 'moment';
import 'moment/locale/zh-cn';

class ActivityService {
  /*@ngInject*/
  constructor(Models,Config,$sce,$http) {
    this.Models = Models;
    this.config = Config;
    this.sce = $sce;
    this.http = $http;
    Moment.locale('zh_cn');
  }
  getList(param={}) {
    let p = Object.assign({},param);

    return this.Models.init('Activities').actions('wxlist',{},p).then((response)=>{
      _.forEach(response,(item)=>{
        item.publishTimestamp = Moment(item.publishTime).valueOf();
        item.startTimeText = Moment(item.startTime).format('YYYY年MM月DD日');
        item.endTimeText = Moment(item.endTime).format('MM月DD日');
        item.signupStartTimeText = Moment(item.signupStartTime).format('YYYY年MM月DD日');
        item.signupEndTimeText = Moment(item.signupEndTime).format('MM月DD日');
      });

      return response;
    });
  }
  myActivity(param={}){
    let p = Object.assign({},param);
    
    return this.Models.init('MyActivities').actions('list',p).then((response)=>{
      _.forEach(response,(item)=>{
        item.publishTimestamp = Moment(item.publishTime).valueOf();
        item.startTimeText = Moment(item.startTime).format('YYYY年MM月DD日');
      });
      return response;
    });

  }
  getActivity(id){
    return this.Models.init('Activities/id').actions('get',{},{id:id}).then((response)=>{
      response.publishTimeText = Moment(response.publishTime).format('M月D日');
      response.startTimeText = `${Moment(response.startTime).format('M月D日')}（${Moment.weekdaysShort(Moment(response.startTime).day())}）${Moment(response.startTime).format('HH:mm')}`;
      response.endTimeText = `${Moment(response.endTime).format('M月D日')}（${Moment.weekdaysShort(Moment(response.endTime).day())}）${Moment(response.endTime).format('HH:mm')}`;
      response.signupStartTimeText = Moment(response.signupStartTime).format('M月D号');
      response.signupEndTimeText = Moment(response.signupEndTime).format('M月D号');
      return response;
    });
  }
  
  getState(id){
    return this.Models.init('ActivityState').actions('get',{},{id:id}).then((response)=>{
      return response;
    });
  }
  
  cancelSignUp(id){
    return this.Models.init('SignupList').actions('cancel',{id:id}).then((response)=>{

      return response;
    });
  }

  signupList(param={}){
    let p = Object.assign({},param);

    return this.Models.init('SignupList').actions('list',{},p).then((response)=>{
      _.forEach(response,(item)=>{
        item.signupTimeText = Moment(item.signupTime).fromNow();
        item.signupTimestamp = Moment(item.signupTime).valueOf();
      });
      // console.log(response);
    
      return response;
    });
  }
  signupNum(id){
    return this.http.get(this.config.global.server+'activities/wx/'+id).then(response => response.data);
  }
  isSigned(id){
    return this.Models.init('IsSigned').actions('get',{id:id}).then((response)=>{
      return response;
    });
  }
  
  signUp(id,param={}){
    let p = Object.assign({},param);

    return this.Models.init('SignupList').actions('signup',p,{id:id}).then((response)=>{
      return response;
    });
  }
}


export default ActivityService;