/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CommunityComponent from './component';
import Services from '../../../services';

import './style.less';

const community = angular
  .module('community',[
    uiRouter,
    Services
  ])
  .component('community',CommunityComponent)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.community',{
        url:'/community?s',
        component:'community',
        resolve:{
          poster: PosterService => PosterService.goPoster('column_community')
        }
      });
  })
  .name;


export default community;