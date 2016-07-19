/**
 * Created by zhangzhichao on 16/7/12.
 */
class Config {
  /*@ngInject*/
  constructor() {
    this.config_data = {
      global:{
        server:'http://nc.mrshare.cn/api/'
      },
      data:{
        resources:{
          'Keywords':{
            name:'Keywords',uri:'keywords/:columnKey',actions:[
              {action:'get',method:'GET',isArray:true}
            ],serverKey:'server'
          },
          'Article':{
            name:'Article',uri:'articles',actions:[
              {action:'list',method:'GET',isArray:true}
            ],serverKey:'server'
          },
          'Article/id':{
            name:'Article/id',uri:'articles/:id',actions:[
              {action:'get',method:'GET',isArray:false}
            ],serverKey:'server'
          },
          'Comments':{
            name:'Comments',uri:'comments',actions:[
              {action:'get',method:'GET',isArray:true},
              {action:'submit',method:'POST',isArray:false,requestType:'json'}
            ],serverKey:'server'
          },
          'Activities':{
            name:'Activities',uri:'activities/wxlist',actions:[
              {action:'wxlist',method:'GET',isArray:true}
            ],serverKey:'server'
          },
          'Activities/id':{
            name:'Activities/id',uri:'activities/:id',actions:[
              {action:'get',method:'GET',isArray:false}
            ],serverKey:'server'
          },
          'SignupList':{
            name:'SignupList',uri:'activities/:id/wx/signupinfo',actions:[
              {action:'list',method:'GET',isArray:true},
              {action:'signup',method:'POST',isArray:false,requestType:'json'}
            ],serverKey:'server'
          },
          'Oauth2':{
            name:'Oauth2',uri:'oauth2/:action/:mediaId',actions:[
              {action:'getConfig',method:'GET', params:{action:'wxconfig'},isArray:false},
              {action:'downloadMedia',method:'GET',params:{action:'wxmedia'},isArray:false}
            ],serverKey:'server'
          },
          'Feedbacks':{
            name:'Feedbacks',uri:'feedbacks',actions:[
              {action:'submit',method:'POST',isArray:false,requestType:'json'}
            ],serverKey:'server'
          }
        },
        kv:{
          columns:[
            {val:'column_news',name:'小区新闻'},
            {val:'column_notices',name:'各类通知'},
            {val:'column_activities',name:'活动报名'},
            {val:'column_service_guide',name:'办事指南'},
            {val:'column_convenience',name:'便民服务'}
          ]
        }

      }
    };
    return this.config_data;
  }
}


export default Config;