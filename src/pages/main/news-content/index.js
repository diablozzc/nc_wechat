/**
 * Created by zhangzhichao on 16/7/5.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NewsContentComponent from './component';
import Services from '../../../services';
// import CommentService from '../../../services/comments';

import './style.less';

const news_content = angular
  .module('newsContent',[
    uiRouter,
    Services
  ])
  .component('newsContent',NewsContentComponent)
  // .service('CommentService',CommentService)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.news.news_content',{
        url:'/{itemId:[0-9]{1,8}}?s',
        component:'newsContent',
        data:{
          prev:'main.news'
        }
      })
      .state('main.news_search.news_content',{
        url:'/{itemId:[0-9]{1,8}}?s',
        component:'newsContent',
        data:{
          prev:'main.news_search'
        }
      })
  })
  .name;

export default news_content;