/**
 * Created by zhangzhichao on 16/7/5.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ActivityContentComponent from './component';
import './style.less';

const activity_content = angular
  .module('activityContent',[
    uiRouter
  ])
  .component('activityContent',ActivityContentComponent)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.activities.activity_content',{
        url:'/:itemId?s',
        component:'activityContent',
        data:{
          prev:'main.activities'
        }
      })
      // .state('main.news_search.news_content',{
      //   url:'/:itemId?s',
      //   component:'newsContent',
      //   data:{
      //     prev:'main.news_search'
      //   }
      // })
  })
  .name;

export default activity_content;