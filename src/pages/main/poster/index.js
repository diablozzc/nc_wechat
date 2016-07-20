/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PosterPageComponent from './component';
import Services from '../../../services';

import './style.less';

const posterPage = angular
  .module('posterPage',[
    uiRouter,
    Services
  ])
  .component('posterPage',PosterPageComponent)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.poster',{
        url:'/poster?key',
        component:'posterPage'
      });
  })
  .name;


export default posterPage;