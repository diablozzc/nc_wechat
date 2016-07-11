/**
 * Created by zhangzhichao on 16/6/30.
 */
  
class NewsController {
  constructor($scope,$element,$timeout,$state) {
    console.log('1.news constructor');
    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;
  }
  $onInit() {
    console.log('2.news init');
    this.scrollerHeight = document.documentElement.clientHeight - 46;

    this.title = '小区新闻';
    
    this.listOfNews = [
      {id:1,title:'测试新闻标题',showType:'singleImage'},
      {id:12,title:'测试新闻标题2如果新闻的标题特别长那个特别的长长啊',showType:'multiImage'},
      {id:13,title:'测试新闻标题3如果新闻的标题特别长那个特别的长长啊',showType:'imageText'},
      {id:14,title:'测试新闻标题1',showType:'text'},
      {id:15,title:'测试新闻标题2',showType:'text'},
      {id:16,title:'测试新闻标题3',showType:'text'},
      {id:17,title:'测试新闻标题4',showType:'text'},
      {id:18,title:'测试新闻标题5',showType:'text'},
      {id:19,title:'测试新闻标题6',showType:'text'},
      {id:21,title:'测试新闻标题7',showType:'text'},
      {id:31,title:'测试新闻标题8',showType:'text'},
      {id:41,title:'测试新闻标题9',showType:'text'},
      {id:51,title:'测试新闻标题10',showType:'text'},
      {id:61,title:'测试新闻标题11',showType:'text'},
      {id:71,title:'测试新闻标题12',showType:'text'},
      {id:81,title:'测试新闻标题13',showType:'text'},
      {id:91,title:'测试新闻标题5',showType:'video'}
    ];

    this.pullupStatus = 'default';

  }

  pullUp({status}){
    console.log(status);
    this.pullupStatus = status;
  }

  loadMoreNews(){
    this.timeout(()=>{
      this.listOfNews.push({id:100,title:'哇哈哈哇哈哈哇哈哈哇哈哈哇哈哈',showType:'text'});
      this.scope.$broadcast('pullup:reset');
    },500);
    
  }
  
  goSearch() {
    this.state.go('main.news_search');
  }

}

NewsController.$inject = ['$scope','$element','$timeout','$state'];
export default NewsController;