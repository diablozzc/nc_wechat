/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Services from '../../../services';
import ReplyComponent from './component';
import './style.less';

const reply = angular
  .module('reply',[
    uiRouter,
    Services
  ])
  .component('reply',ReplyComponent)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.reply',{
        url:'/reply?s',
        component:'reply'
      });
  })
  .name;


export default reply;