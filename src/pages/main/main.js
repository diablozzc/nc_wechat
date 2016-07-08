/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MainComponent from './main.component';
import News from './news';
import NewsContent from './news-content';

const main = angular
  .module('main',[
    uiRouter,
    News,
    NewsContent
  ])
  .component('main',MainComponent)
  .config(($stateProvider,$urlRouterProvider,$locationProvider)=>{
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');

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