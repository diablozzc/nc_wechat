/**
 * Created by zhangzhichao on 16/7/6.
 */
import angular from 'angular';
import TeamItemComponent from './component';
import Services from '../../services';

import './style.less';

const teamItem = angular
  .module('teamItem',[
    Services
  ])
  .component('teamItem', TeamItemComponent)
  .name;

export default teamItem;