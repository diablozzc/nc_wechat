/**
 * Created by zhangzhichao on 16/6/28.
 */
import angular from 'angular';
import actionBar from './action-bar';
import scroller from './scroller';
import list from './list';
import articleContent from './article-content';
import comment from './comment';
import bottomBar from './bottom-bar';
import Popup from './popup';
import xTextarea from './x-textarea';
import commentForm from './comment-form';

const components = angular
  .module('app.components',[
    actionBar,
    scroller,
    list,
    articleContent,
    comment, 
    bottomBar,
    Popup,
    xTextarea,
    commentForm
  ])
  .name;

export default components;