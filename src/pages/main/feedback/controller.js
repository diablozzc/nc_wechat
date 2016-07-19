/**
 * Created by zhangzhichao on 16/6/30.
 */

class FeedbackController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,$stateParams) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    // this.itemId = $stateParams.activityId;
    // this.ActivityService = ActivityService;


  }
  $onInit() {
    // this.theSignUp = {
    //   gender:true,
    //   activity:this.itemId
    // };
    // this.gender = [{key: '男', value: true}, {key: '女', value: false}];
  }

  

}

export default FeedbackController;