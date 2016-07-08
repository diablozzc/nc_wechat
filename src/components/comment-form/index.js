/**
 * Created by zhangzhichao on 16/7/8.
 */
import angular from 'angular';
import CommentFormComponent from './component';

import './style.less';

const commentForm = angular
  .module('commentForm',[
  ])
  .component('commentForm',CommentFormComponent)
  .name;

export default commentForm;