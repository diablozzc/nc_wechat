/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NewsComponent from './component';

const news = angular
  .module('news',[
    uiRouter
  ])
  .component('news',NewsComponent)
  .config(($stateProvider)=>{
    $stateProvider
      .state('main.news',{
        url:'/news',
        component:'news'
      });
  })
  .name;

export default news;