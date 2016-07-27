/**
 * Created by zhangzhichao on 16/7/18.
 */

class MainController {
  /*@ngInject*/
  constructor($scope,$element,$state,$stateParams,Models) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.models = Models;
    // document.body.addEventListener('touchmove', function(e) {e.preventDefault();}, false)

    function isScroller(el) {

      // 判断元素是否为 scroller
      return el.classList.contains('scroller')
    }

    document.body.addEventListener('touchmove', function (ev) {
      var target = ev.target;

      // 在 scroller 上滑动，阻止事件冒泡，启用浏览器默认行为。
      if (isScroller(target)) {
        ev.stopPropagation()
      }
    }, false);

    var u = navigator.userAgent;
    window.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    window.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

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