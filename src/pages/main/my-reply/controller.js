/**
 * Created by zhangzhichao on 16/6/30.
 */
  
class ReplyController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,FeedbackService) {
    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;
    this.feedbackService = FeedbackService;
  }
  $onInit() {
    this.scrollerHeight = document.documentElement.clientHeight - 46;
    this.title = '我的回复';
    this.listOfReply = [];
    // this.pullupStatus = 'default';
    // this.targetRouter = 'main.mysignup.activity_content';
    this.feedbackService.getFeedbacks().then((ret)=>{
      console.log(ret);
      this.listOfReply = Object.assign([],ret);
    });
    
  }

  loadMore(){

    let oldest_time = this.listOfReply[this.listOfReply.length-1].sayTimestamp;
    this.feedbackService.getFeedbacks({upOrDown:'up',time:oldest_time}).then((ret)=>{
      this.listOfReply = this.listOfReply.concat(ret);
    });

    
  }


}


export default ReplyController;