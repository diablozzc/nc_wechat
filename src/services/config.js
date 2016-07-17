/**
 * Created by zhangzhichao on 16/7/12.
 */
class Config {
  /*ngInject*/
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
              // {action:'save_ad',method:'POST',params:{action:'save_ad'},isArray:false,requestType:'json'},
              // {action:'link',method:'POST',params:{action:'link'},isArray:false},
              // {action:'coupon',method:'JSONP',params:{action:'coupon',callback:'JSON_CALLBACK'},isArray:false},
              // {action:'recommend',method:'JSONP',params:{action:'recommend',callback:'JSON_CALLBACK'},isArray:false},
              // {action:'receiveCoupon',method:'POST',params:{action:'receiveCoupon'},isArray:false},
              // {action:'session_info',method:'GET',params:{action:'session_info'},isArray:false},

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