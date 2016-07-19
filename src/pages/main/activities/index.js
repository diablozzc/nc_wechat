/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Services from '../../../services';
import ActivitiesComponent from './component';
import './style.less';

const activities = angular
  .module('activities',[
    uiRouter,
    Services
  ])
  .component('activities',ActivitiesComponent)
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