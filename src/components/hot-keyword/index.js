/**
 * Created by zhangzhichao on 16/7/11.
 */
import angular from 'angular';
import HotKeywordComponent from './component';
import './style.less';

const hotKeyword = angular
  .module('hotKeyword',[
  ])
  .component('hotKeyword',HotKeywordComponent)
  .name;

export default hotKeyword;