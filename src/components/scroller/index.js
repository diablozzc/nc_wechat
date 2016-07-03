/**
 * Created by zhangzhichao on 16/7/2.
 */

import angular from 'angular';
import ScrollerComponent from './component';
import './style.less';

const scroller = angular
  .module('scroller',[
  ])
  .component('scroller',ScrollerComponent)
  .name;

export default scroller;