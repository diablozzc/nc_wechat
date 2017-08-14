/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import TeamNewsComponent from './component';
import Services from '../../../services';
import KeyValue from '../../../filters/key_value';
import './style.less';

const teamNews = angular
  .module('teamNews',[
    uiRouter,
    Services
  ])
  .component('teamNews', TeamNewsComponent)
  .filter('kv',KeyValue)
  .config(['$stateProvider',($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.teamNews',{
        url:'/team-news/:teamId?s',
        component:'teamNews',
        resolve: {
        }
      });
  }])
  .name;


export default teamNews;