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
          'SignupNum':{
            name:'SignupNum',uri:'activities/wx/:id',actions:[
              {action:'get',method:'GET',isArray:false,responseType:'text'}
            ],serverKey:'server'
          },
          'MyActivities':{
            name:'MyActivities',uri:'activities/wx/signupinfo',actions:[
              {action:'list',method:'GET',isArray:true}
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
              {action:'get',method:'GET',isArray:true},
              {action:'submit',method:'POST',isArray:false,requestType:'json'}
            ],serverKey:'server'
          },
          'Poster':{
            name:'Poster',uri:'columns/:columnKey/posters',actions:[
              {action:'get',method:'GET',isArray:false}
            ],serverKey:'server'
          },
          'Community':{
            name:'Community',uri:'columns/communities',actions:[
              {action:'get',method:'GET',isArray:false}
            ],serverKey:'server'
          }
        },
        kv:{
          columns:[
            {val:'column_news',name:'小区新闻',state:'main.news',param:{column:'news'}},
            {val:'column_notices',name:'各类通知',state:'main.news',param:{column:'notices'}},
            {val:'column_service_guide',name:'办事指南',state:'main.news',param:{column:'service_guide'}},
            {val:'column_convenience',name:'便民服务',state:'main.news',param:{column:'convenience'}},
            {val:'column_activities',name:'活动报名',state:'main.activities',param:{}},
            {val:'column_community',name:'小区概况',state:'main.community',param:{}},
            {val:'column_feedback',name:'我有话说',state:'main.feedback',param:{}},
            {val:'column_contact',name:'联系居委',state:'main.contact',param:{}}
          ]
        }

      }
    };
    return this.config_data;
  }
}


export default Config;