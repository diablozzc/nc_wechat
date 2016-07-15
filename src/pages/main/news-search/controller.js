/**
 * Created by zhangzhichao on 16/7/8.
 */

class NewsSearchController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,$stateParams,NewsService,KeywordsService) {
    this.timeout = $timeout;
    this.scope = $scope;
    this.state = $state;
    this.stateParams = $stateParams;
    this.NewsService = NewsService;
    this.KeywordsService = KeywordsService;
  }
  $onInit() {

    this.theColumnKey = 'column_' + this.stateParams.column;

    this.scrollerHeight = document.documentElement.clientHeight - 44 - 46;

    this.keyword = '';
    this.listOfSearch = [];

    this.listOfKeyword = [];

    this.targetRouter = 'main.news_search.news_content'

    this.KeywordsService.getKeywords(this.theColumnKey).then((ret)=>{
      this.listOfKeyword = Object.assign({},ret);
    })
  }
  

  getResult({keyword}){

    if(keyword==='' || angular.isUndefined(keyword)){
      this.listOfSearch = [];
    }else{
      this.NewsService.getList({columnKey:this.theColumnKey,keyword:keyword}).then((ret)=>{
        this.listOfSearch = Object.assign([],ret);
      });

    }

    this.timeout(()=>{
      this.scope.$broadcast('scroller:reset');
    });

  }
  

  loadMoreSearch(){

    let oldest_time = this.listOfSearch[this.listOfSearch.length-1].time;
    
    this.NewsService.getList({columnKey:this.theColumnKey,keyword:this.keyword,upOrDown:'up',time:oldest_time}).then((ret)=>{

      this.listOfSearch = this.listOfSearch.concat(ret);

    });

  }
  
  searchKeyword({keyword}){
    this.keyword = keyword;
  }

  
}

export default NewsSearchController;