import angular from 'angular';
import FlexboxComponent from './component';
import FlexboxItem from './flexbox-item'
import './style.less';

const flexbox = angular
  .module('flexbox',[
    FlexboxItem
  ])
  .component('flexbox',FlexboxComponent)
  .name;

export default flexbox;