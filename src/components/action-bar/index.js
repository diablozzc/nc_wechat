/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import ActionBarComponent from './component';
import './style.less';

const actionBar = angular
  .module('actionBar',[
  ])
  .component('actionBar',ActionBarComponent)
  .name;

export default actionBar;