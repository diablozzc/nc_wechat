/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import TeamFeedbackComponent from './component';
import Services from '../../../services';

import './style.less';

const teamFeedback = angular
  .module('teamFeedback',[
    uiRouter,
    Services
  ])
  .component('teamFeedback',TeamFeedbackComponent)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.teamFeedback',{
        url:'/team-feedback/:teamId?s',
        component:'teamFeedback',
        resolve:{
        }
      });
  })
  .name;


export default teamFeedback;