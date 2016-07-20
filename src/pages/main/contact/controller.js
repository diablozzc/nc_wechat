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
      {title:'李慧芳',desc:'党总支书记',headImg:'http://img.mrshare.cn/female.png'},
      {title:'鄢伟元',desc:'居委主任',headImg:'http://img.mrshare.cn/male.png'},
      {title:'胡剑林',desc:'社区综合',headImg:'http://img.mrshare.cn/female.png'},
      {title:'汪秀峰',desc:'社区平安',headImg:'http://img.mrshare.cn/male.png'},
      {title:'马明',desc:'社区环境,社区服务',headImg:'http://img.mrshare.cn/female.png'},
      {title:'李怿鲲',desc:'社区平安,社区服务',headImg:'http://img.mrshare.cn/male.png'},
      {title:'丁志凤',desc:'专职党务,社区服务',headImg:'http://img.mrshare.cn/female.png'},
      {title:'完泽敏',desc:'助残员',headImg:'http://img.mrshare.cn/female.png'}
    ];
  }
  

}

export default ContactController;