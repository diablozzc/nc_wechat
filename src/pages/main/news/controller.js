/**
 * Created by zhangzhichao on 16/6/30.
 */

class NewsController {
  /*@ngInject*/
  constructor($scope,$state,$stateParams,NewsService) {
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.newsService = NewsService;


  }
  $onInit() {
    this.scrollerHeight = document.documentElement.clientHeight - 46;
    
    this.listOfNews = [];
    this.theColumnKey = 'column_' + this.stateParams.column;
    
    this.newsService.getList({columnKey:this.theColumnKey}).then((ret)=>{
      this.listOfNews = Object.assign([],ret);
    });

    this.targetRouter = 'main.news.news_content';

  }

  loadMoreNews(){
    
    let oldest_time = this.listOfNews[this.listOfNews.length-1].time;
    this.newsService.getList({columnKey:this.theColumnKey,upOrDown:'up',time:oldest_time}).then((ret)=>{
      this.listOfNews = this.listOfNews.concat(ret);
    });
    
  }
  
  goSearch() {
    this.state.go('main.news_search',{column:this.stateParams.column});
  }

}


export default NewsController;