/**
 * Created by zhangzhichao on 16/7/8.
 */
import angular from 'angular';
import RadioComponent from './component';
import './style.less';

const radio = angular
  .module('radio',[
  ])
  .component('radio',RadioComponent)
  .name;

export default radio;