/**
 * Created by zhangzhichao on 16/7/8.
 */
class SearchController {
  constructor($scope,$element) {
    this.input = $element[0].querySelector('#search_input');

    $scope.$watch('search.value',(data)=>{
      this.onChange(
        {$event:{
          keyword:data
        }});
    })
  }

  $onInit() {
    this.isCancel = true;
    this.isFocus  = false;
    this.isFixed  = false;

    this.autoFixed = angular.isUndefined(this.autoFixed) ? true : this.autoFixed
  }

  clear() {
    // console.log('clear');
    this.value = '';
    this.isFocus = true;
    this.setFocus();
  }

  cancel() {
    this.value = '';
    this.isCancel = true;
    this.isFixed = false;
  }

  handleResultClick(){

  }

  touch(){
    this.isCancel = false;
    if (this.autoFixed) {
      this.isFixed = true;
    }
    this.setFocus();
  }
  setFocus(){
    this.input.focus();
  }
  search(){
    
  }

}

SearchController.$inject = ['$scope','$element'];

export default SearchController;