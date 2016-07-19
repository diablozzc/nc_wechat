/**
 * Created by zhangzhichao on 16/7/12.
 */
import angular from 'angular';

class Models {
  /*@ngInject*/
  constructor($q,$resource,Config) {
    this.conf = {};
    this.res = {};

    this.model_key = '';
    this.serverKey = '';
    this.$q = $q;
    this.Config = Config;
    this.$resource = $resource;
  }


  init(model_key, serverKey) {
    this.model_key = model_key;
    this.serverKey = serverKey ? serverKey : '';
    return this;
  }

  actions(action, data, params) {
    let deferred = this.$q.defer();
    let obj = {};

    if (this.serverKey == '') {
      obj = this.create(this.model_key);
    } else {
      obj = this.setServer(this.serverKey).create(this.model_key);
    }

    obj.action(action, data, params).then(function (ret) {
      deferred.resolve(ret);
    }, function (error) {
      deferred.reject(error);
    });
    return deferred.promise;

  }

  setServer(serverKey) {
    this.serverKey = serverKey;
    return this;
  }

  create(key) {
    let that = this;
    // 根据Key获取资源配置
    this.conf = this.Config.data.resources[key];
    // console.log(this.conf);

    //初始化操作
    // if (angular.isDefined(this.serverKey)) {
    //   this.conf.serverKey = this.serverKey;
    // }

    let actions = {};

    let jsonRequestor = (data)=> {
      return JSON.stringify(data);
    };


    angular.forEach(this.conf.actions, (m, val)=> {

      var resType = angular.isUndefined(m.responseType) ? "json" : m.responseType;
      var requestor = this.formData;
      m.requestType = angular.isUndefined(m.requestType) ? 'form' : m.requestType;

      if (m.requestType == 'json') {
        requestor = jsonRequestor;
      }
      let opt = {
        method: m.method
        , isArray: m.isArray
        , responseType: resType
        , transformRequest: requestor
        , requestType: m.requestType
      };
      if (m.params) {
        opt.params = m.params;
      }
      actions[m.action] = opt;
    });

    // console.log(this.Config,this.conf);
    let url = this.Config.global[this.conf.serverKey] + this.conf.uri;
    var param = {};
    this.res = this.$resource(url, param, actions);
    return this;
  }


  action(action_str, data, params) {
    // var that = this;
    //
    params = params ? params : {};

    let deferred = this.$q.defer();

    let handle;

    if (arguments[2]) {
      handle = this.res[action_str](params, data)
    } else {
      handle = this.res[action_str](data);
    }

    handle.$promise.then((ret)=> {
      deferred.resolve(ret);
    }, (error)=> {
      deferred.reject(error);
    });
    this.serverKey = undefined;

    return deferred.promise;
  }


  formData(obj, encode) {
    encode = angular.isUndefined(arguments[1]) ? true : arguments[1];
    var str = [];
    var tmp = [];
    angular.forEach(obj, function (val, key) {
      tmp[tmp.length] = key;
    });
    //按Key排序
    tmp.sort();
    var obj2 = {};
    angular.forEach(tmp, function (key) {
      obj2[key] = obj[key];
    });
    for (var p in obj2) {
      if (encode) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      } else {
        str.push((p) + "=" + (obj[p]));
      }
    }

    str = str.join("&");
    return str;
  }
}

// Models.$inject = ['$q','$resource','Config'];
export default Models;