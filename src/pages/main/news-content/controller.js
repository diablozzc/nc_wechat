/**
 * Created by zhangzhichao on 16/7/5.
 */

class NewsContentController {
  constructor($scope,$element,$timeout,$state,$stateParams) {
    this.prev = $state.current.data.prev;
  }
  $onInit() {


  }

}

NewsContentController.$inject = ['$scope','$element','$timeout','$state','$stateParams'];
export default NewsContentController;