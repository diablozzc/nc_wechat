/**
 * Created by zhangzhichao on 16/7/8.
 */
import angular from 'angular';
import angularAnimate from 'angular-animate';
import DialogComponent from './component';
import './style.less';

const dialog = angular
  .module('dialog',[
    angularAnimate
  ])
  .component('popDialog',DialogComponent)
  .name;

export default dialog;