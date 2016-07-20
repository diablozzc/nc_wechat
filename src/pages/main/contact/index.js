/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ContactComponent from './component';
// import Services from '../../../services';

import './style.less';

const contact = angular
  .module('contact',[
    uiRouter,
    // Services
  ])
  .component('contact',ContactComponent)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.contact',{
        url:'/contact?s',
        component:'contact',
        resolve:{
          poster: PosterService => PosterService.goPoster('column_contact')
        }
      });
  })
  .name;


export default contact;