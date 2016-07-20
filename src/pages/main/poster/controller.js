/**
 * Created by zhangzhichao on 16/6/30.
 */

class PosterPageController {
  /*@ngInject*/
  constructor($scope,$state,$stateParams,Config) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.config = Config;
    // this.models = Models;

  }
  $onInit() {
    this.showPoster = false;
    this.columnKey = this.stateParams.key;
  }
  
  goBack(key){
    let index = _.findIndex(this.config.data.kv['columns'],['val',key]);
    let value = this.config.data.kv['columns'][index];
    this.state.go(value.state,value.param,{location:false});
  }
  

}

export default PosterPageController;