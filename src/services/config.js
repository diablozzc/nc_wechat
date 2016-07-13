/**
 * Created by zhangzhichao on 16/7/12.
 */
class Config {
  /*ngInject*/
  constructor() {
    this.config_data = {
      global:{
        server:'/index.php/Home/'
      },
      data:{
        resources:{
          'Api':{
            name:'Api',uri:'Api/:action',actions:[
              {action:'news',method:'GET',params:{action:'list_news'},isArray:false}
              // {action:'save_ad',method:'POST',params:{action:'save_ad'},isArray:false,requestType:'json'},
              // {action:'link',method:'POST',params:{action:'link'},isArray:false},
              // {action:'coupon',method:'JSONP',params:{action:'coupon',callback:'JSON_CALLBACK'},isArray:false},
              // {action:'recommend',method:'JSONP',params:{action:'recommend',callback:'JSON_CALLBACK'},isArray:false},
              // {action:'receiveCoupon',method:'POST',params:{action:'receiveCoupon'},isArray:false},
              // {action:'session_info',method:'GET',params:{action:'session_info'},isArray:false},

            ],serverKey:'server'
          },

        }
      }
    };
    return this.config_data;
  }
}


export default Config;