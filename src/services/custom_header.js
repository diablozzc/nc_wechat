/**
 * Created by zhangzhichao on 16/7/12.
 */
const CustomHttpHeader = ($q)=>({
  'request': function (config) {
    config.headers = config.headers || {};
    var contentType = '';

    switch (config.requestType) {
      case 'json':
        contentType = 'application/json;charset=utf-8';
        break;
      case 'form':
        contentType = 'application/x-www-form-urlencoded;charset=utf-8';
        break;
      default :
        contentType = '';
    }

    if ((config.method === 'POST' || config.method === 'PUT') && contentType.length > 0) {
      config.headers['Content-Type'] = contentType;

    }
    config.headers.SessionId = window.sessionStorage.getItem('session_id');
    config.headers.UserSys = 'wx';

    return config;
  },
  'response': function (response) {
    return response || $q.when(response);
  },
  'responseError': function (rejection) {
    return $q.reject(rejection);
  }

});
CustomHttpHeader.$inject = ['$q'];

export default CustomHttpHeader;