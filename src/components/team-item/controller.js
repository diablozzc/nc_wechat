/**
 * Created by zhangzhichao on 16/7/6.
 */
class TeamItemController {
  /*@ngInject*/
  constructor($scope, $state, $stateParams, TeamService) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.teamService = TeamService;
  }

  $onInit() {
    this.itemCoverStyle = { 'width': window.innerWidth / 4 - 20 + 'px', 'height': window.innerWidth / 4 - 20 + 'px' };
    this.openConfirm = false
    this.quitConfirm = false
  }
  goTeamNews () {
    this.state.go('main.teamNews', { teamId: this.itemData.id });
  }

  goJoinTeam () {
    console.log('go join team');
    this.state.go('main.joinTeam', { teamId: this.itemData.id });
  }
  goTeamFeedback (item) {
    this.state.go('main.teamFeedback', { teamId: this.itemData.id });
  }

  quitTeam () {
    console.log('quit Team')
    this.teamService.exitTeam(this.itemData.id).then(ret=>{
      this.itemData.joined = false
      this.itemData.joinedStatus = null
    })
  }
  rejoin () {
    // console.log('re join')
    this.openConfirm = true
  }
  isOnList () {
    return this.state.current.name === 'main.team'
  }

}

export default TeamItemController;