/**
 * Created by zhangzhichao on 16/7/8.
 */
class PosterController {
  /*@ngInject*/
  constructor($scope, $element, $interval,PosterService) {
    this.scope = $scope;
    this.time = this.time ? this.time : 1000;
    this.countdown = 6;
    this.posterService = PosterService;

    // this.input = $element[0].querySelector('#search_input');
    $scope.$watch('poster.show', (val)=> {
      if (val) {

        let cd = $interval(()=>{
          this.countdown --;
          if(this.countdown === 0){
            $interval.cancel(cd);
            this.close();
          }
        },this.time);
        
        
      }
    })
  }

  $onInit() {
    
    this.the_poster = {};

    this.posterService.getPoster({columnKey:this.columnKey}).then((ret)=> {
      // console.log(ret);
      this.the_poster = Object.assign({},ret);
      if(this.the_poster.isShowPoster){
        this.show = true;
      }
      
    });


  }
  close(){
    this.show = false;
    this.onCallback();
  }

}


export default PosterController;