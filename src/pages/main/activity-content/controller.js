/**
 * Created by zhangzhichao on 16/7/5.
 */
import Moment from 'moment';
class ActivityContentController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,$stateParams,$sce,ActivityService,CommentService) {
    this.prev = $state.current.data.prev;
    this.sce = $sce;
    this.itemId = $stateParams.itemId;
    this.state = $state;

    this.theColumnKey = 'column_activities';
    this.ActivityService = ActivityService;
    this.CommentService = CommentService;
  }
  $onInit() {
    this.theActivity = {};


    this.ActivityService.getActivity(this.itemId).then((ret)=>{
      this.theActivity = Object.assign({},ret);
    });


    this.listOfComment = [];
    this.listOfSignup = [];

    this.CommentService.getComments({columnKey:this.theColumnKey,itemId:this.itemId}).then((ret)=>{
      this.listOfComment = Object.assign([],ret);
    });

    this.ActivityService.signupList({id:this.itemId}).then((ret)=>{
      console.log(ret);
      this.listOfSignup = ret;
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
    this.CommentService.submit(this.theColumnKey,this.itemId,comment_content).then((ret)=>{
      console.log(ret);
    })
  }

  loadMoreComment() {
    console.log('load more comments');

    let oldest_time = this.listOfComment[this.listOfComment.length-1].commentTimestamp;

    this.CommentService.getComments({
      columnKey:this.theColumnKey,
      itemId:this.itemId,
      upOrDown:'up',
      time:oldest_time
    }).then((ret)=>{
      console.log(ret);
      this.listOfComment = this.listOfComment.concat(ret);

    });

  }

  loadMoreSignup() {
    console.log('load more signup');

    let oldest_time = this.listOfSignup[this.listOfSignup.length-1].signupTimestamp;


    this.ActivityService.signupList({
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
}

export default ActivityContentController;