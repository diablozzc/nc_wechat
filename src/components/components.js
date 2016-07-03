/**
 * Created by zhangzhichao on 16/6/28.
 */
import angular from 'angular';
import actionBar from './action-bar';
import scroller from './scroller';
import list from './list';

const components = angular
  .module('app.components',[
    actionBar,
    scroller,
    list
  ])
  .name;

export default components;