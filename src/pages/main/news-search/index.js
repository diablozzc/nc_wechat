/**
 * Created by zhangzhichao on 16/7/8.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import NewsSearchComponent from './component';
import NewsSearchService from './service';
import Config from '../../../services/config';
import Models from '../../../services/models';
import './style.less';

const news_search = angular
  .module('newsSearch',[
    uiRouter,
    ngResource
  ])
  .component('newsSearch',NewsSearchComponent)
  .service('NewsSearchService', NewsSearchService)
  .service('Config',Config)
  .service('Models',Models)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.news_search',{
        url:'/news_search?s',
        component:'newsSearch',
        data:{
          prev:'main.news'
        }
      });

  })
  .name;

export default news_search;