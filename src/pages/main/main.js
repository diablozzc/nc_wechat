/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MainComponent from './main.component';
import News from './news';

const main = angular
  .module('main',[
    uiRouter,
    News
  ])
  .component('main',MainComponent)
  .config(($stateProvider,$urlRouterProvider)=>{
    $stateProvider
      .state('main',{
        abstract:true,
        url:'/main',
        component:'main'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default main;