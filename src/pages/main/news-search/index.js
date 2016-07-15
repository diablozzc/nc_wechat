/**
 * Created by zhangzhichao on 16/7/8.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import NewsSearchComponent from './component';
import Config from '../../../services/config';
import Models from '../../../services/models';
import KeyValue from '../../../filters/key_value';
import NewsService from '../news/service';
import KeywordsService from '../../../services/keywords'; 

import './style.less';

const news_search = angular
  .module('newsSearch',[
    uiRouter,
    ngResource
  ])
  .component('newsSearch',NewsSearchComponent)
  .service('Config',Config)
  .service('Models',Models)
  .service('NewsService', NewsService)
  .service('KeywordsService', KeywordsService)
  .filter('kv',KeyValue)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.news_search',{
        url:'/{column:news|notices|service_guide|convenience}/search?s',
        component:'newsSearch',
        data:{
          prev:'main.news'
        }
      });

  })
  .name;

export default news_search;