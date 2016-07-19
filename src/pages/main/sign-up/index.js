/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SignUpComponent from './component';
import Services from '../../../services';
import KeyValue from '../../../filters/key_value';
import './style.less';

const signUp = angular
  .module('signUp',[
    uiRouter,
    Services
  ])
  .component('signUp',SignUpComponent)
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