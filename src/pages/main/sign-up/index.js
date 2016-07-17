/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SignUpComponent from './component';
import Config from '../../../services/config';
import Models from '../../../services/models';
import KeyValue from '../../../filters/key_value';
import ActivityService from '../activities/service';
import './style.less';

const signUp = angular
  .module('signUp',[
    uiRouter
  ])
  .component('signUp',SignUpComponent)
  .service('Config',Config)
  .service('Models',Models)
  .service('ActivityService',ActivityService)
  .filter('kv',KeyValue)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.signup',{
        url:'/signup/:activityId',
        component:'signUp'
      });
  })
  .name;


export default signUp;