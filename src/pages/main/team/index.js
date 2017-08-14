/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import TeamComponent from './component';
import Services from '../../../services';
import KeyValue from '../../../filters/key_value';
import './style.less';

const team = angular
  .module('team',[
    uiRouter,
    Services
  ])
  .component('team',TeamComponent)
  .filter('kv',KeyValue)
  .config(['$stateProvider',($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.team',{
        url:'/team?s',
        component:'team',
        resolve:{
          // poster: (PosterService,$stateParams) => {
          //   return PosterService.goPoster('column_'+$stateParams.column);
          // }
        }
      });
  }])
  .name;


export default team;