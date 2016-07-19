/**
 * Created by zhangzhichao on 16/7/8.
 */
import angular from 'angular';
import angularAnimate from 'angular-animate';
import ToastComponent from './component';
import './style.less';

const toast = angular
  .module('toast',[
    angularAnimate
  ])
  .component('toast',ToastComponent)
  .name;

export default toast;