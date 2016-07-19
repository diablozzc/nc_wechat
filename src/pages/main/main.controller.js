/**
 * Created by zhangzhichao on 16/7/18.
 */

class MainController {
  /*@ngInject*/
  constructor($scope,$state,$stateParams,Models) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.models = Models;

  }
  $onInit() {

    window.ref = encodeURIComponent(location.href.split('#')[0]);

    let data = {url:window.ref};
    this.models.init('Oauth2').actions('getConfig',data).then((ret)=>{
      let wxConf = {};

      wxConf.appId = ret.appId;
      wxConf.debug = false;
      wxConf.jsApiList = ret.jsApiList;
      wxConf.nonceStr = ret.noncestr;
      wxConf.signature = ret.signature;
      wxConf.timestamp = ret.timestamp;

      wx.config(wxConf);
    })
  }

}


export default MainController;