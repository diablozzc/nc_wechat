/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Services from '../../../services';
import AllReplyComponent from './component';
import './style.less';

const allReply = angular
  .module('allReply',[
    uiRouter,
    Services
  ])
  .component('allReply',AllReplyComponent)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.all_reply',{
        url:'/all-reply?s',
        component:'allReply'
      });
  })
  .name;


export default allReply;