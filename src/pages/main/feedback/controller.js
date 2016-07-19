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

  test(){
    this.showHits = true;
  }

  

}

export default FeedbackController;