/**
 * Created by zhangzhichao on 16/6/30.
 */

class SignUpController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,$stateParams,ActivityService) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.itemId = $stateParams.activityId;
    this.activityService = ActivityService;
    this.timeout = $timeout;


  }
  $onInit() {
    this.showHits = false;
    this.theSignUp = {
      gender:true,
      activity:this.itemId
    };
    this.gender = [{key: '男', value: true}, {key: '女', value: false}];
    this.mobileRegex =  /^1(?:3[0-9]|4[0-9]|5[012356789]|8[0123456789]|7[0678])\d{4}\d{4}$/;
  }

  
  signUp(){

    this.activityService.signUp(this.itemId,this.theSignUp).then((ret)=>{
      // 提示成功
      this.showHits = true;
      this.timeout(()=>{
        history.back();
      },2000)
    });
  }

  

}

export default SignUpController;