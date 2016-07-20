/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Services from '../../../services';
import MySignUpComponent from './component';
import './style.less';

const mySignUp = angular
  .module('mySignUp',[
    uiRouter,
    Services
  ])
  .component('mySignUp',MySignUpComponent)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.mysignup',{
        url:'/mysignup?s',
        component:'mySignUp'
      });
  })
  .name;


export default mySignUp;