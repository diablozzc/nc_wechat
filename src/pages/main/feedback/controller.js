/**
 * Created by zhangzhichao on 16/6/30.
 */

class FeedbackController {
  /*@ngInject*/
  constructor($scope,$state,$stateParams,FeedbackService) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.feedbackService = FeedbackService;


  }
  $onInit() {
    this.theFeedback = {};
    this.showHits = false;
    this.mobileRegex =  /^1(?:3[0-9]|4[0-9]|5[012356789]|8[0123456789]|7[0678])\d{4}\d{4}$/;
  }

  feedback(){

    const data = Object.assign({},this.theFeedback);
    this.reset();

    this.feedbackService.feedback(data).then((ret)=>{
      this.showHits = true;
    });
  }

  reset() {
    this.theFeedback = {};
  }
  

}

export default FeedbackController;