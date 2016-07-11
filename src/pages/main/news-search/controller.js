/**
 * Created by zhangzhichao on 16/7/8.
 */

class NewsSearchController {
  constructor($scope,$element,$timeout,$state) {
    this.timeout = $timeout;
    this.scope = $scope;
  }
  $onInit() {

    this.scrollerHeight = document.documentElement.clientHeight - 44;

    this.keyword = '';
    this.listOfSearch = [
    ];

    this.pullupStatus = 'default';
  }

  getResult({keyword}){
    this.timeout(()=>{

      if(keyword==='' || angular.isUndefined(keyword)){
        this.listOfSearch = [];
      }else{
        this.listOfSearch = [
          {id:11,title:'测试新闻标题',showType:'singleImage'},
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
        ]
      }
      this.timeout(()=>{
        this.scope.$broadcast('scroller:reset');
      });

    },500);
  }

  pullUp({status}){
    console.log(status);
    this.pullupStatus = status;
  }

  loadMoreSearch(){
    this.timeout(()=>{
      if(this.keyword.length){
        this.listOfSearch.push({id:100,title:'哇哈哈哇哈哈哇哈哈哇哈哈哇哈哈',showType:'text'});
      }
      this.scope.$broadcast('pullup:reset');
    },500);

  }

  
}

NewsSearchController.$inject = ['$scope','$element','$timeout','$state'];
export default NewsSearchController;