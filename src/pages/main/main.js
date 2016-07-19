/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MainComponent from './main.component';
import News from './news';
import NewsContent from './news-content';
import NewsSearch from './news-search';
import Activities from './activities';
import ActivityContent from './activity-content';
import ActivitySearch from './activity-search';
import SignUp from './sign-up';
import Feedback from './feedback';

import Services from '../../services';
import CustomHttpHeader from '../../services/custom_header';
import Auth from '../../services/auth';

const main = angular
  .module('main',[
    uiRouter
    ,News
    ,NewsContent
    ,NewsSearch
    ,Activities
    ,ActivityContent
    ,ActivitySearch
    ,SignUp
    ,Feedback
    ,Services
  ])
  .component('main',MainComponent)
  .service('Auth',Auth)
  .factory('CustomHttpHeader',CustomHttpHeader)
  .config(($stateProvider,$urlRouterProvider,$locationProvider,$httpProvider)=>{
    "ngInject";
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');

    $stateProvider
      .state('main',{
        abstract:true,
        url:'/wx',
        component:'main',
        resolve:{
          auth: Auth => Auth.getSession()
        },

      });
    $urlRouterProvider.otherwise('/');
    $httpProvider.interceptors.push('CustomHttpHeader');
    
  })
  .name;

wx.ready(()=>{
  window.weixin_ready = true;
});


export default main;