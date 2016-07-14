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
import search from './search';
import hotKeyword from './hot-keyword';
import signupList from './signup-list';

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
    commentForm,
    search,
    hotKeyword, 
    signupList
  ])
  .name;

export default components;