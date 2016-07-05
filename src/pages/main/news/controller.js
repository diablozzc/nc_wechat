/**
 * Created by zhangzhichao on 16/6/30.
 */
  
class NewsController {
  constructor($scope,$element,$timeout) {
    console.log('1.news constructor');
    this.scope = $scope;
    this.timeout = $timeout;
  }
  $onInit() {
    console.log('2.news init');
    this.title = '小区新闻';
    
    this.listOfNews = [
      {title:'测试新闻标题1',showType:'singleImage'},
      {title:'测试新闻标题2如果新闻的标题特别长那个特别的长长啊',showType:'multiImage'},
      {title:'测试新闻标题3如果新闻的标题特别长那个特别的长长啊',showType:'imageText'},
      {title:'测试新闻标题1',showType:'text'},
      {title:'测试新闻标题2',showType:'text'},
      {title:'测试新闻标题3',showType:'text'},
      {title:'测试新闻标题4',showType:'text'},
      {title:'测试新闻标题5',showType:'text'},
      {title:'测试新闻标题6',showType:'text'},
      {title:'测试新闻标题7',showType:'text'},
      {title:'测试新闻标题8',showType:'text'},
      {title:'测试新闻标题9',showType:'text'},
      {title:'测试新闻标题10',showType:'text'},
      {title:'测试新闻标题11',showType:'text'},
      {title:'测试新闻标题12',showType:'text'},
      {title:'测试新闻标题13',showType:'text'},
      // {title:'测试新闻标题5',showType:'video'}
    ];

    this.pullupStatus = 'default';

  }

  pullUp({status}){
    console.log(status);
    this.pullupStatus = status;
  }

  loadMoreNews(){
    this.timeout(()=>{
      this.listOfNews.push({title:'哇哈哈哇哈哈哇哈哈哇哈哈哇哈哈',showType:'text'});
      this.scope.$broadcast('pullup:reset');
    },500);


  }

}

NewsController.$inject = ['$scope','$element','$timeout'];
export default NewsController;