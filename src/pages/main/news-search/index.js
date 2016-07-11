/**
 * Created by zhangzhichao on 16/7/8.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NewsSearchComponent from './component';
import './style.less';

const news_search = angular
  .module('newsSearch',[
    uiRouter
  ])
  .component('newsSearch',NewsSearchComponent)
  .config(($stateProvider)=>{
    $stateProvider
      .state('main.news_search',{
        url:'/news_search',
        component:'newsSearch',
        data:{
          prev:'main.news'
        }
      });
  })
  .name;

export default news_search;