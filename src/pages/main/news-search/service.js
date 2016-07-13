/**
 * Created by zhangzhichao on 16/7/12.
 */
class NewsSearchService {
  /*ngInject*/
  constructor($http) {
    this.$http = $http;
  }
  getList() {
    console.log('get data');
    return this.$http.get('http://testwc/index.php/Home/Api/list_news').then(response => response.data);
  }
}

// NewsSearchService.$inject = ['$http'];

export default NewsSearchService;