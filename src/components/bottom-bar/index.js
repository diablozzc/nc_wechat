/**
 * Created by zhangzhichao on 16/7/6.
 */

import angular from 'angular';
import BottomBarComponent from './component';

import './style.less';

const bottomBar = angular
  .module('bottomBar',[
  ])
  .component('bottomBar',BottomBarComponent)
  .name;

export default bottomBar;