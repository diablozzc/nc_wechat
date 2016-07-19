/**
 * Created by zhangzhichao on 16/7/8.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ActivitySearchComponent from './component';
import Services from '../../../services';
import KeyValue from '../../../filters/key_value';
import './style.less';

const activity_search = angular
  .module('activitySearch',[
    uiRouter,
    Services
  ])
  .component('activitySearch',ActivitySearchComponent)
  .filter('kv',KeyValue)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.activity_search',{
        url:'/activity/search?s',
        component:'activitySearch',
        data:{
          prev:'main.activities'
        }
      });

  })
  .name;

export default activity_search;