/**
 * Created by zhangzhichao on 16/7/5.
 */
import angular from 'angular';
import ArticleContentComponent from './component';
import './style.less';

const articleContent = angular
  .module('articleContent',[
  ])
  .component('articleContent',ArticleContentComponent)
  .name;

export default articleContent;
