/**
 * Created by zhangzhichao on 16/7/8.
 */

class ActivitySearchController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,$stateParams,ActivityService,KeywordsService) {
    this.timeout = $timeout;
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.activityService = ActivityService;
    this.keywordsService = KeywordsService;
  }
  $onInit() {

    this.theColumnKey = 'column_activities';

    this.scrollerHeight = document.documentElement.clientHeight - 44 - 46;

    this.keyword = '';
    this.listOfSearch = [];
    this.listOfKeyword = [];

    this.targetRouter = 'main.activities.activity_content';

    this.keywordsService.getKeywords(this.theColumnKey).then((ret)=>{
      this.listOfKeyword = Object.assign({},ret);
    })
  }
  

  getResult({keyword}){

    if(keyword==='' || angular.isUndefined(keyword)){
      this.listOfSearch = [];
    }else{
      this.activityService.getList({keyword:keyword}).then((ret)=>{
        this.listOfSearch = Object.assign([],ret);
      });

    }

    this.timeout(()=>{
      this.scope.$broadcast('scroller:reset');
    });

  }
  

  loadMoreSearch(){

    let oldest_time = this.listOfSearch[this.listOfSearch.length-1].publishTimestamp;
    
    this.activityService.getList({keyword:this.keyword,upOrDown:'up',time:oldest_time}).then((ret)=>{

      this.listOfSearch = this.listOfSearch.concat(ret);

    });

  }
  
  searchKeyword({keyword}){
    this.keyword = keyword;
  }

  
}

export default ActivitySearchController;