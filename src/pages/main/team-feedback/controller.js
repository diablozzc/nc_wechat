/**
 * Created by zhangzhichao on 16/6/30.
 */

class TeamFeedbackController {
  /*@ngInject*/
  constructor($scope,$state,$stateParams,FeedbackService) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.feedbackService = FeedbackService;


  }
  $onInit() {
    this.scrollerHeight = document.documentElement.clientHeight - 46;
    this.scrollerStyle = {height:this.scrollerHeight+'px',minHeight:this.scrollerHeight+'px',marginTop:'46px'};

    this.theFeedback = {};
    this.showHits = false;
    this.mobileRegex =  /^1(?:3[0-9]|4[0-9]|5[012356789]|8[0123456789]|7[0678])\d{4}\d{4}$/;

    // 回复列表

    this.listOfReply = [];
    // this.pullupStatus = 'default';
    // this.targetRouter = 'main.mysignup.activity_content';
    console.log('hahaha')
    this.feedbackService.getAllFeedbacks({status:1, teamId: this.stateParams.teamId}).then((ret)=>{
      this.listOfReply = Object.assign([],ret);
    });
    this.showLoadMore = true;


  }

  feedback(){

    const data = Object.assign({},this.theFeedback);
    data.teamId = this.stateParams.teamId
    this.reset();

    this.feedbackService.feedback(data).then((ret)=>{
      this.showHits = true;
    });
  }

  reset() {
    this.theFeedback = {};
  }


  loadMore(){

    let oldest_time = this.listOfReply[this.listOfReply.length-1].sayTimestamp;
    this.feedbackService.getAllFeedbacks({upOrDown:'up',time:oldest_time,status:1}).then((ret)=>{
      if(ret.length>0){
        this.listOfReply = this.listOfReply.concat(ret);
      }else{
        this.showLoadMore = false;
      }
    });


  }
  

}

export default TeamFeedbackController;