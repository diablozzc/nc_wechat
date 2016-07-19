/**
 * Created by zhangzhichao on 16/7/8.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NewsSearchComponent from './component';
import Services from '../../../services';
import KeyValue from '../../../filters/key_value';
import './style.less';

const news_search = angular
  .module('newsSearch',[
    uiRouter,
    Services
  ])
  .component('newsSearch',NewsSearchComponent)
  .filter('kv',KeyValue)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.news_search',{
        url:'/{column:news|notices|service_guide|convenience}/search?s',
        component:'newsSearch',
        data:{
          prev:'main.news'
        }
      });

  })
  .name;

export default news_search;