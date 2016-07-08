/**
 * Created by zhangzhichao on 16/6/28.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Main from './pages/main/main';
import Components from './components/components';

import './styles/weui/weui.less';
import './styles/main.less';
import 'font-awesome/css/font-awesome.css';


const root = angular
  .module('app',[
    Main,
    Components,
    uiRouter
  ])
  .component('app',AppComponent);

export default root;