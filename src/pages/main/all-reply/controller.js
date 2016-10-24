/**
 * Created by zhangzhichao on 16/6/30.
 */
  
class AllReplyController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,FeedbackService) {
    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;
    this.feedbackService = FeedbackService;
  }
  $onInit() {
    this.scrollerHeight = document.documentElement.clientHeight - 46;
    this.title = '居委回复';
    this.listOfReply = [];
    // this.pullupStatus = 'default';
    // this.targetRouter = 'main.mysignup.activity_content';
    this.feedbackService.getAllFeedbacks({status:1}).then((ret)=>{
      console.log(ret);
      this.listOfReply = Object.assign([],ret);
    });
    this.showLoadMore = true;
  }

  loadMore(){

    let oldest_time = this.listOfReply[this.listOfReply.length-1].sayTimestamp;
    this.feedbackService.getAllFeedbacks({upOrDown:'up',time:oldest_time,status:1}).then((ret)=>{
      console.log(ret);
      if(ret.length>0){
        this.listOfReply = this.listOfReply.concat(ret);
      }else{
        this.showLoadMore = false;
      }
    });

    
  }


}


export default AllReplyController;