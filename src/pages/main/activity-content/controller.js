/**
 * Created by zhangzhichao on 16/7/5.
 */
class ActivityContentController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,$stateParams,$sce,ActivityService,CommentService) {
    this.prev = $state.current.data.prev;
    this.sce = $sce;
    this.itemId = $stateParams.itemId;
    this.state = $state;

    this.theColumnKey = 'column_activities';
    this.activityService = ActivityService;
    this.commentService = CommentService;
  }
  $onInit() {
    this.theActivity = {};
    this.signUpNum = 0;
    this.isSigned = false;


    this.activityService.getActivity(this.itemId).then((ret)=>{
      console.log(ret);
      this.theActivity = Object.assign({},ret);
    });


    this.listOfComment = [];
    this.listOfSignup = [];

    this.commentService.getComments({columnKey:this.theColumnKey,itemId:this.itemId}).then((ret)=>{
      this.listOfComment = Object.assign([],ret);
    });

    this.activityService.signupList({id:this.itemId}).then((ret)=>{
      this.listOfSignup = ret;
    });

    this.activityService.signupNum(this.itemId).then((ret)=>{
      this.signUpNum = ret;
    });

    this.activityService.isSigned(this.itemId).then((ret)=>{
      this.isSigned = ret.data;
    });


    this.showPopup = false;

  }
  
  showCommentForm() {
    this.showPopup = true;
  }

  onCloseComment() {
    this.showPopup = false;

  }
  submitComment({comment_content}){
    this.commentService.submit(this.theColumnKey,this.itemId,comment_content).then((ret)=>{
      console.log(ret);
    })
  }

  loadMoreComment() {
    console.log('load more comments');

    let oldest_time = this.listOfComment[this.listOfComment.length-1].commentTimestamp;

    this.commentService.getComments({
      columnKey:this.theColumnKey,
      itemId:this.itemId,
      upOrDown:'up',
      time:oldest_time
    }).then((ret)=>{
      this.listOfComment = this.listOfComment.concat(ret);

    });

  }

  loadMoreSignup() {
    console.log('load more signup');

    let oldest_time = this.listOfSignup[this.listOfSignup.length-1].signupTimestamp;


    this.activityService.signupList({
      id:this.itemId,
      upOrDown:'up',
      time:oldest_time
    }).then((ret)=>{
      console.log(ret);
      this.listOfSignup = this.listOfSignup.concat(ret);
    });


  }

  goSignupForm() {
    this.state.go('main.signup',{activityId:this.itemId});
  }
  
  signText() {
    return this.isSigned ? '已报名' : '我要报名';
  }
}

export default ActivityContentController;