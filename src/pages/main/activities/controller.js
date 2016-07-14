/**
 * Created by zhangzhichao on 16/6/30.
 */
  
class ActivitiesController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state) {
    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;
  }
  $onInit() {
    this.scrollerHeight = document.documentElement.clientHeight - 46;

    this.title = '活动报名';
    
    this.listOfActivities = [
      {id:14,title:'测试新闻标题1',showType:'activity'},
      {id:15,title:'测试新闻标题2',showType:'activity'},
      {id:16,title:'测试新闻标题3',showType:'activity'},
      {id:17,title:'测试新闻标题4',showType:'activity'},
      {id:18,title:'测试新闻标题5',showType:'activity'},
      {id:19,title:'测试新闻标题6',showType:'activity'},
      {id:21,title:'测试新闻标题7',showType:'activity'},
      {id:31,title:'测试新闻标题8',showType:'activity'},
      {id:41,title:'测试新闻标题9',showType:'activity'},
      {id:51,title:'测试新闻标题10',showType:'activity'},
      {id:61,title:'测试新闻标题11',showType:'activity'},
      {id:71,title:'测试新闻标题12',showType:'activity'},
      {id:81,title:'测试新闻标题13',showType:'activity'},
      {id:91,title:'测试新闻标题5',showType:'activity'}
    ];

    this.pullupStatus = 'default';
    
    this.targetRouter = 'main.activities.activity_content';

  }

  pullUp({status}){
    this.pullupStatus = status;
  }

  loadMore(){
    this.timeout(()=>{
      this.listOfActivities.push({id:100,title:'哇哈哈哇哈哈哇哈哈哇哈哈哇哈哈',showType:'text'});
      this.scope.$broadcast('pullup:reset');
    },500);
    
  }
  
  goSearch() {
    this.state.go('main.activity_search');
  }

}

export default ActivitiesController;