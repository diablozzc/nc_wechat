/**
 * Created by zhangzhichao on 16/7/8.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ActivitySearchComponent from './component';
import Config from '../../../services/config';
import Models from '../../../services/models';
import KeyValue from '../../../filters/key_value';
import ActivityService from '../activities/service';
import KeywordsService from '../../../services/keywords'; 

import './style.less';

const activity_search = angular
  .module('newsSearch',[
    uiRouter,
    ngResource
  ])
  .component('activitySearch',ActivitySearchComponent)
  .service('Config',Config)
  .service('Models',Models)
  .service('ActivityService', ActivityService)
  .service('KeywordsService', KeywordsService)
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