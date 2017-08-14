/**
 * Created by zhangzhichao on 16/6/30.
 */

class TeamController {
  /*@ngInject*/
  constructor($scope,$state,$stateParams,TeamService) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.teamService = TeamService;
    this.winWidth = window.innerWidth;


  }
  $onInit() {
    this.scrollerHeight = document.documentElement.clientHeight - 46;
    this.itemCoverStyle = { 'width': window.innerWidth / 4 - 20 + 'px', 'height': window.innerWidth / 4 - 20 + 'px' };


    this.teamService.getTeamList().then(ret=>{
      this.teams = ret
    })
    // this.theColumnKey = 'column_' + this.stateParams.column;
    //
    // this.newsService.getList({columnKey:this.theColumnKey}).then((ret)=>{
    //   // console.log(ret);
    //   this.listOfNews = Object.assign([],ret);
    // });
    //
    // this.targetRouter = 'main.news.news_content';

  }

  loadMoreTeam(){
    
    // let oldest_time = this.listOfNews[this.listOfNews.length-1].time;
    // this.newsService.getList({columnKey:this.theColumnKey,upOrDown:'up',time:oldest_time}).then((ret)=>{
    //   this.listOfNews = this.listOfNews.concat(ret);
    // });
    this.teamService.getTeamList({publishTime: this.teams[this.teams.length-1].publishTimeStamp}).then(ret=>{
      this.teams = this.teams.concat(ret);
    })
    
  }
  
  // goSearch() {
  //   this.state.go('main.news_search',{column:this.stateParams.column});
  // }

  goTeamNews (item) {
    console.log('go detail')
    this.state.go('main.teamNews', { teamId: item.id });
  }

  goJoinTeam () {
    console.log('go join team')
  }

  quitTeam () {
    console.log('quit Team')
  }

}


export default TeamController;