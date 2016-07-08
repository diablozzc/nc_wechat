/**
 * Created by zhangzhichao on 16/7/6.
 */
import angular from 'angular';
import CommentComponent from './component';

import './style.less';

const comment = angular
  .module('comment',[
  ])
  .component('comment',CommentComponent)
  .name;

export default comment;