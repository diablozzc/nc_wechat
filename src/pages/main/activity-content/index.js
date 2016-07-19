/**
 * Created by zhangzhichao on 16/7/5.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ActivityContentComponent from './component';
import Services from '../../../services';
// import CommentService from '../../../services/comments';
import './style.less';

const activity_content = angular
  .module('activityContent', [
    uiRouter,
    Services
  ])
  .component('activityContent', ActivityContentComponent)
  // .service('CommentService',CommentService)
  .config(($stateProvider)=> {
    'ngInject';
    $stateProvider
      .state('main.activities.activity_content', {
        url: '/:itemId?s',
        component: 'activityContent',
        data: {
          prev: 'main.activities'
        }
      })
      .state('main.activity_search.news_content', {
        url: '/:itemId?s',
        component: 'activityContent',
        data: {
          prev: 'main.activities'
        }
      })
  })
  .name;

export default activity_content;