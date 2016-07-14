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
            name:'Keywords',uri:'article/:columnKey/keywords',actions:[
              {action:'get',method:'GET',isArray:false}
              // {action:'save_ad',method:'POST',params:{action:'save_ad'},isArray:false,requestType:'json'},
              // {action:'link',method:'POST',params:{action:'link'},isArray:false},
              // {action:'coupon',method:'JSONP',params:{action:'coupon',callback:'JSON_CALLBACK'},isArray:false},
              // {action:'recommend',method:'JSONP',params:{action:'recommend',callback:'JSON_CALLBACK'},isArray:false},
              // {action:'receiveCoupon',method:'POST',params:{action:'receiveCoupon'},isArray:false},
              // {action:'session_info',method:'GET',params:{action:'session_info'},isArray:false},

            ],serverKey:'server'
          },
          'Article':{
            name:'Article',uri:'article',actions:[
              {action:'list',method:'GET',isArray:false}
            ],serverKey:'server'
            /*
             map.put("num", "5");
             map.put("upOrDown", "up");
             map.put("time", String.valueOf(new Date("2017/01/01").getTime()));  //时间戳
             map.put("columnKey", "column_news");
             map.put("title", "");
             map.put("keyword", "");
             map.put("source", "");
             map.put("status", "0");
            */
          },
          'Article/id':{
            name:'Article/id',uri:'article/:id',actions:[
              {action:'get',method:'GET',isArray:false}
            ],serverKey:'server'
          },
        }
      }
    };
    return this.config_data;
  }
}


export default Config;