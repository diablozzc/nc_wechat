/**
 * Created by zhangzhichao on 16/7/7.
 */
import angular from 'angular';
import XTextarea from './component';

import './style.less';

const xTextarea = angular
  .module('xTextarea',[
  ])
  .component('xtextarea',XTextarea)
  .name;

export default xTextarea;