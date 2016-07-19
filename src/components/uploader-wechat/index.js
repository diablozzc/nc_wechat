/**
 * Created by zhangzhichao on 16/7/8.
 */
import angular from 'angular';
import UploaderWechatComponent from './component';
import './style.less';

const uploaderWechat = angular
  .module('uploaderWechat',[
  ])
  .component('uploaderWechat',UploaderWechatComponent)
  .name;

export default uploaderWechat;