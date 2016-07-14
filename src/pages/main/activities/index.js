/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ActivitiesComponent from './component';
import Config from '../../../services/config';
import Models from '../../../services/models';
import './style.less';

const activities = angular
  .module('activities',[
    uiRouter
  ])
  .component('activities',ActivitiesComponent)
  .service('Config',Config)
  .service('Models',Models)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.activities',{
        url:'/activities?s',
        component:'activities'
      });
  })
  .name;


export default activities;