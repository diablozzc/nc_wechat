/**
 * Created by zhangzhichao on 16/7/8.
 */
import angular from 'angular';
import angularAnimate from 'angular-animate';
import LoadingComponent from './component';
import './style.less';

const loading = angular
  .module('loading',[
    angularAnimate
  ])
  .component('loading',LoadingComponent)
  .name;

export default loading;