/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import JoinTeamComponent from './component';
import Services from '../../../services';
import KeyValue from '../../../filters/key_value';
import './style.less';

const joinTeam = angular
  .module('joinTeam',[
    uiRouter,
    Services
  ])
  .component('joinTeam',JoinTeamComponent)
  .filter('kv',KeyValue)
  .config(['$stateProvider',($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.joinTeam',{
        url:'/join-team/:teamId?s',
        component:'joinTeam',
        resolve:{
          // poster: (PosterService,$stateParams) => {
          //   return PosterService.goPoster('column_'+$stateParams.column);
          // }
        }
      });
  }])
  .name;


export default joinTeam;