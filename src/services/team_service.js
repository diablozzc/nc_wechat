import Moment from 'moment';
import 'moment/locale/zh-cn';

class TeamService {
  /*@ngInject*/
  constructor(Models,$sce) {
    this.Models = Models;
    this.sce = $sce;
    Moment.locale('zh_cn');
  }
  getTeamList (param={}) {
    let p = Object.assign({},param);
    p.count = 10
    return this.Models.init('Teams').actions('list', {}, p).then((response)=>{
      _.forEach(response,(item)=>{
        item.publishTimeStamp = Moment(item.publishTime).valueOf();
      });
      console.log(response)
      return response;
    });
  }
  getTeam (teamId) {
    return this.Models.init('Team').actions('get', {}, {activityId: teamId}).then((response)=>{

      return response;
    });
  }
  getTeamNews (param={}) {

  }
  getTeamNewsArticle () {

  }
  getTeamNewsComment () {

  }
  sendComment () {

  }
  joinTeam (param) {
    return this.Models.init('JoinTeam').actions('join', param).then((response)=>{
      return response;
    });
  }
  exitTeam (teamId) {
    return this.Models.init('JoinTeam').actions('quit', {}, {teamId: teamId}).then((response)=>{
      return response;
    });
  }
}

// NewsService.$inject = ['Models','$sce'];
export default TeamService;