/**
 * Created by zhangzhichao on 16/6/30.
 */
  
class ActivitiesController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,ActivityService) {
    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;
    this.ActivityService = ActivityService
  }
  $onInit() {
    this.scrollerHeight = document.documentElement.clientHeight - 46;

    this.title = '活动报名';
    
    this.listOfActivities = [];

    this.pullupStatus = 'default';
    
    this.targetRouter = 'main.activities.activity_content';

    this.ActivityService.getList().then((ret)=>{
      this.listOfActivities = Object.assign([],ret);
    });
    
  }

  loadMore(){

    let oldest_time = this.listOfActivities[this.listOfActivities.length-1].publishTimestamp;

    this.ActivityService.getList({upOrDown:'up',time:oldest_time}).then((ret)=>{

      this.listOfActivities = this.listOfActivities.concat(ret);

    });
    
    
  }
  
  goSearch() {
    this.state.go('main.activity_search');
  }

}

export default ActivitiesController;