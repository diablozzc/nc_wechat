/**
 * Created by zhangzhichao on 16/7/7.
 */

import angular from 'angular';
import PopupComponent from './component';
import './style.less';

const popup = angular
  .module('popup',[
  ])
  .component('popup',PopupComponent)
  .name;

export default popup;