/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import FeedbackComponent from './component';
import Services from '../../../services';

// import Config from '../../../services/config';
// import Models from '../../../services/models';
import './style.less';

const feedback = angular
  .module('feedback',[
    uiRouter,
    Services
  ])
  .component('feedback',FeedbackComponent)
  // .service('Config',Config)
  // .service('Models',Models)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.feedback',{
        url:'/feedback',
        component:'feedback'
      });
  })
  .name;


export default feedback;