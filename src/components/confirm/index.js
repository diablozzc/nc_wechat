import angular from 'angular';
import angularAnimate from 'angular-animate';
import DialogComponent from '../dialog';
import ConfirmComponent from './component';
import './style.less';

const confirm = angular
  .module('confirm',[
    angularAnimate
    ,DialogComponent
  ])
  .component('confirm',ConfirmComponent)
  .name;

export default confirm;