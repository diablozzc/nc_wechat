/**
 * Created by zhangzhichao on 16/6/30.
 */

class ContactController {
  /*@ngInject*/
  constructor($scope,$state,$stateParams) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    // this.models = Models;
  }
  $onInit() {
    this.member_list = [
      {title:'李慧芳',desc:'党总支书记',headImg:'http://img.mrshare.cn/female.png',tel:'58399902'},
      {title:'鄢伟元',desc:'居委主任',headImg:'http://img.mrshare.cn/male.png',tel:'58399902',duty:'组织居民开展自治活动、业委会建设、治保调解、司法、社区综治、救助、老龄'},
      {title:'胡剑琳',desc:'社区综合',headImg:'http://img.mrshare.cn/female.png',tel:'58399902',duty:'宣传文教、青保、组织居民开展自治活动、业委会建设'},
      {title:'汪秀峰',desc:'社区平安',headImg:'http://img.mrshare.cn/male.png',tel:'58399902',duty:'治保调解、武装双拥、工会'},
      {title:'马明',desc:'社区环境,社区服务',headImg:'http://img.mrshare.cn/female.png',tel:'58399902',duty:'市政卫生、三违整治、垃圾分类、辖区绿化、红十字、动物防疫'},
      {title:'李怿鲲',desc:'社区平安,社区服务',headImg:'http://img.mrshare.cn/male.png',tel:'58399902',duty:'三个实有、就业援助'},
      {title:'完泽敏',desc:'助残员',headImg:'http://img.mrshare.cn/female.png',tel:'58399902',duty:'关心服务辖区内残疾人'}
    ];
  }
  

}

export default ContactController;