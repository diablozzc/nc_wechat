/**
 * Created by zhangzhichao on 16/7/8.
 */
class LoadingController {
  /*@ngInject*/
  constructor($scope, $element, $timeout) {
    // this.scope = $scope;
    // this.width = this.width ? this.width : '7.6em';
    this.text = this.text ? this.text : '加载中...';
    // this.time = this.time ? this.time : 2000;
    
    



    // this.input = $element[0].querySelector('#search_input');
    // $scope.$watch('toast.show', (val)=> {
    //   if (val) {
    //     $timeout.cancel(this.timeout);
    //     this.timeout = $timeout(()=>{
    //       this.show = false
    //     },this.time);
    //   }
    //
    // })
  }

  $onInit() {
    this.loadingLeaf = [];
    for(let i=0;i<12;i++){
      this.loadingLeaf.push(i);
    }
  }




}


export default LoadingController;