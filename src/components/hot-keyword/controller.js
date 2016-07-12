/**
 * Created by zhangzhichao on 16/7/11.
 */
class HotKeywordController {
  /*@ngInject*/
  constructor($scope,$element) {

  }

  $onInit() {

  }
  selectKeyword(keyword) {
    // console.log(keyword);
    this.onSelect({$event:{keyword:keyword}});
  }
  
}


export default HotKeywordController;