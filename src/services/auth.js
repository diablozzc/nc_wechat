/**
 * Created by zhangzhichao on 16/7/12.
 */
import angular from 'angular';
import queryString from 'query-string';

class AuthService {
  /*@ngInject*/
  constructor($state,$stateParams,$q) {
    this.$q = $q;
    this.$state = $state;
    this.$stateParams = $stateParams;
  }
  goOauth(uri){
    this.oauth_link = `http://nc.mrshare.cn/api/oauth2?uri=/${uri}&type=router`;
    window.location.href = this.oauth_link;

  }

  getSession() {
    let deferred = this.$q.defer();

    let link_hash = location.hash;
    let link_uri = /#!\/((.*)\?.*|(.*)\??.*)/.exec(link_hash);
    link_uri = angular.isUndefined(link_uri[2])?link_uri[3]:link_uri[2];
    console.log(link_uri);
    let the_hash = /.*\?(.*)/.exec(link_hash);

    if(!the_hash){
      this.goOauth(link_uri);
      deferred.reject({auth:false});
    }else{
      let query_string = the_hash[1];
      let parsedHash = queryString.parse(query_string);

      if(angular.isDefined(parsedHash.s) && parsedHash.s.length>0){
        window.sessionStorage.setItem('session_id',parsedHash.s);
        deferred.resolve({auth:true});
      }else{
        this.goOauth(link_uri);
        deferred.reject({auth:false});
      }
    }

    
    return deferred.promise;
  }

}

export default AuthService;