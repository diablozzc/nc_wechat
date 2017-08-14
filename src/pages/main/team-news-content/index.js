/**
 * Created by zhangzhichao on 16/6/30.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import teamNewsContentComponent from './component';
import Services from '../../../services';
import KeyValue from '../../../filters/key_value';
import './style.less';

const teamNewsContent = angular
  .module('teamNewsContent',[
    uiRouter,
    Services
  ])
  .component('teamNewsContent',teamNewsContentComponent)
  .filter('kv',KeyValue)
  .config(['$stateProvider',($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('main.teamNews.teamNewsContent',{
        url:'/{itemId:[0-9]{1,8}}?s',
        component:'teamNewsContent',
        resolve:{
          // poster: (PosterService,$stateParams) => {
          //   return PosterService.goPoster('column_'+$stateParams.column);
          // }
        }
      });
  }])
  .name;


export default teamNewsContent;