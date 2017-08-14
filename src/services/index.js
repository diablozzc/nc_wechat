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
import FeedbackService from './feedback_service';
import PosterService from './poster_service';
import TeamService from './team_service'

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
  .service('FeedbackService',FeedbackService)
  .service('PosterService',PosterService)
  .service('TeamService',TeamService)
  .name;


export default services;