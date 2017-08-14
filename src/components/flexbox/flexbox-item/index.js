import angular from 'angular';
import FlexboxItemComponent from './component';
import './style.less';

const flexboxItem = angular
  .module('flexboxItem',[])
  .component('flexboxItem',FlexboxItemComponent)
  .name;

export default flexboxItem;