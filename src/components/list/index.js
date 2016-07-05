/**
 * Created by zhangzhichao on 16/7/1.
 */
import angular from 'angular';
import ListComponent from './component';
import ListItemComponent from './list-item/component';
import ListItemTpl from './list-item/tpl.directive';
import LinkAction from './list-item/linkAction.directive';
import './style.less';

const list = angular
  .module('list',[
  ])
  .component('list',ListComponent)
  .component('listItem',ListItemComponent)
  .directive('listItemTpl',ListItemTpl)
  .directive('linkAction',LinkAction)
  .name;

export default list;