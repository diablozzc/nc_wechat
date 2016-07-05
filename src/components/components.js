/**
 * Created by zhangzhichao on 16/6/28.
 */
import angular from 'angular';
import actionBar from './action-bar';
import scroller from './scroller';
import list from './list';
import articleContent from './article-content';

const components = angular
  .module('app.components',[
    actionBar,
    scroller,
    list,
    articleContent
  ])
  .name;

export default components;