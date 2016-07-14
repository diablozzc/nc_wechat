/**
 * Created by zhangzhichao on 16/7/6.
 */
import angular from 'angular';
import SignupListComponent from './component';

import './style.less';

const signupList = angular
  .module('signupList',[
  ])
  .component('signupList',SignupListComponent)
  .name;

export default signupList;