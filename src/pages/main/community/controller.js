/**
 * Created by zhangzhichao on 16/6/30.
 */

class CommunityController {
  /*@ngInject*/
  constructor($scope,$state,$stateParams,Models) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.models = Models;

  }
  $onInit() {
    this.outlink='';
    this.models.init('Community').actions('get').then((ret)=>{
      location.href = ret.value;
    });
  }
  

}

export default CommunityController;