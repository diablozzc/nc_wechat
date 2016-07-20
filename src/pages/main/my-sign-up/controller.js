/**
 * Created by zhangzhichao on 16/6/30.
 */
  
class MySignupController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,ActivityService) {
    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;
    this.activityService = ActivityService;
  }
  $onInit() {
    this.scrollerHeight = document.documentElement.clientHeight - 46;
    this.title = '我的活动';
    this.listOfActivities = [];
    this.pullupStatus = 'default';
    this.targetRouter = 'main.mysignup.activity_content';
    this.activityService.myActivity().then((ret)=>{
      this.listOfActivities = Object.assign([],ret);
    });
    
  }

  loadMore(){

    let oldest_time = this.listOfActivities[this.listOfActivities.length-1].publishTimestamp;
    this.activityService.myActivity({upOrDown:'up',time:oldest_time}).then((ret)=>{
      this.listOfActivities = this.listOfActivities.concat(ret);
    });
    
    
  }
  
  // goSearch() {
  //   this.state.go('main.activity_search');
  // }

}

// MySignupController.$inject = ['$scope','$element','$timeout','$state','ActivityService'];

export default MySignupController;