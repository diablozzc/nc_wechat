/**
 * Created by zhangzhichao on 16/6/30.
 */

class JoinTeamController {
  /*@ngInject*/
  constructor($scope,$state,$stateParams,TeamService) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.teamService = TeamService;
    this.winWidth = window.innerWidth;

  }
  $onInit () {
    this.scrollerHeight = document.documentElement.clientHeight - 46
    this.scrollerStyle = {height:this.scrollerHeight+'px',minHeight:this.scrollerHeight+'px',marginTop:'46px'}


    this.teamUser = {}
    this.team = {}
    this.showHits = false
    this.mobileRegex =  /^1(?:3[0-9]|4[0-9]|5[012356789]|8[0123456789]|7[0678])\d{4}\d{4}$/

    this.teamService.getTeam(this.stateParams.teamId).then(ret=>{
      this.team = ret
    })
  }

  join () {
    this.teamUser.teamId = this.stateParams.teamId
    const data = Object.assign({},this.teamUser)
    this.teamService.joinTeam(data).then(ret=>{
      history.back();
    })
    // this.reset();

    // this.feedbackService.feedback(data).then((ret)=>{
    //   this.showHits = true;
    // });
  }

  reset() {
    this.teamUser = {};
  }

}


export default JoinTeamController;