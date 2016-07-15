/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NewsComponent from './component';
import Config from '../../../services/config';
import Models from '../../../services/models';
import KeyValue from '../../../filters/key_value';
import NewsService from './service';
import './style.less';

const news = angular
  .module('news',[
    uiRouter
  ])
  .component('news',NewsComponent)
  .service('Config',Config)
  .service('Models',Models)
  .service('NewsService',NewsService)
  .filter('kv',KeyValue)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.news',{
        url:'/{column:news|notices|service_guide|convenience}?s',
        component:'news'
      });
  })
  .name;


export default news;