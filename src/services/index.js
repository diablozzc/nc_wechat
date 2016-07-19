/**
 * Created by zhangzhichao on 16/7/18.
 */
import angular from 'angular';
import angularResource from 'angular-resource';
import Config from './config';
import Models from './models';
import ActivityService from './activity_service';
import NewsService from './news_service';
import CommentService from './comments';
import KeywordsService from './keywords';

const services = angular
  .module('Services',[
    angularResource
  ])
  .service('Config',Config)
  .service('Models',Models)
  .service('ActivityService',ActivityService)
  .service('NewsService',NewsService)
  .service('CommentService',CommentService)
  .service('KeywordsService',KeywordsService)
  .name;


export default services;