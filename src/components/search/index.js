/**
 * Created by zhangzhichao on 16/7/8.
 */
import angular from 'angular';
import SearchComponent from './component';
import './style.less';

const search = angular
  .module('search',[
  ])
  .component('search',SearchComponent)
  .name;

export default search;