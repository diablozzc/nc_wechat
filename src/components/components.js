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
import radio from './radio';
import uploaderWechat from './uploader-wechat';
import toast from './toast';
import poster from './poster';
import loading from './loading';
import flexbox from './flexbox';
import teamItem from './team-item';
import dialog from './dialog';
import confirm from './confirm';

const components = angular
  .module('app.components', [
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
    signupList,
    radio,
    uploaderWechat,
    toast,
    poster,
    loading,
    flexbox,
    teamItem,
    dialog,
    confirm
  ])
  .name;

export default components;