/**
 * Created by zhangzhichao on 16/6/30.
 */

class TeamNewsController {
  /*@ngInject*/
  constructor($scope,$state,$stateParams,TeamService,NewsService) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.teamService = TeamService;
    this.newsService = NewsService;
    this.winWidth = window.innerWidth;
    this.showList = true;
    
    $scope.$on('hideList', (e, data)=>{
      this.showList = false;
    });
    

  }
  $onInit() {
    this.scrollerHeight = document.documentElement.clientHeight - 46;

    this.teamService.getTeam(this.stateParams.teamId).then(ret=>{
      ret.id = ret.autoId
      this.theTeam = ret
    })
    this.listOfNews = [];
  //   this.theColumnKey = 'column_' + this.stateParams.column;
  //
    this.newsService.getList({teamId: this.stateParams.teamId}).then((ret)=>{
      this.listOfNews = Object.assign([],ret);
    });
  //
    this.targetRouter = 'main.teamNews.teamNewsContent';

  }
  //
  loadMoreNews () {
    let oldest_time = this.listOfNews[this.listOfNews.length-1].time;
    this.newsService.getList({teamId: this.stateParams.teamId,upOrDown:'up',time:oldest_time}).then((ret)=>{
      this.listOfNews = this.listOfNews.concat(ret);
    });
  }


}


export default TeamNewsController;