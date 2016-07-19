/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NewsComponent from './component';
import Services from '../../../services';
import KeyValue from '../../../filters/key_value';
import './style.less';

const news = angular
  .module('news',[
    uiRouter,
    Services
  ])
  .component('news',NewsComponent)
  .filter('kv',KeyValue)
  .config(['$stateProvider',($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.news',{
        url:'/{column:news|notices|service_guide|convenience}?s',
        component:'news'
      });
  }])
  .name;


export default news;