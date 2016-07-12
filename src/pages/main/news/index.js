/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NewsComponent from './component';
import './style.less';

const news = angular
  .module('news',[
    uiRouter
  ])
  .component('news',NewsComponent)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.news',{
        url:'/news?s',
        component:'news'
      });
  })
  .name;


export default news;