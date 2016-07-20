/**
 * Created by zhangzhichao on 16/7/8.
 */
import angular from 'angular';
// import angularAnimate from 'angular-animate';
import PosterComponent from './component';
import Services from '../../services';
import './style.less';

const poster = angular
  .module('poster',[
    // angularAnimate
    Services
  ])
  .component('poster',PosterComponent)
  .name;

export default poster;