/**
 * Created by zhangzhichao on 16/7/5.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NewsContentComponent from './component';
import './style.less';

const news_content = angular
  .module('newsContent',[
    uiRouter
  ])
  .component('newsContent',NewsContentComponent)
  .config(($stateProvider)=>{
    $stateProvider
      .state('main.news.news_content',{
        url:'/:itemId',
        component:'newsContent',
        data:{
          prev:'main.news'
        }
      });
  })
  .name;

export default news_content;