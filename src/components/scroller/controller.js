/**
 * Created by zhangzhichao on 16/7/2.
 */

import XScroll  from 'vux-xscroll/build/cmd/xscroll';
import Pulldown from 'vux-xscroll/build/cmd/plugins/pulldown';
import Pullup   from 'vux-xscroll/build/cmd/plugins/pullup';

class ScrollerController {


  constructor($scope,$el,$timeout) {
    this.uuid = Math.random().toString(36).substring(3, 8);

    let p = $el[0].querySelector('.xs-container').parentNode;
    p.setAttribute('id',`scroller-${this.uuid}`);

    const pullupDefaultConfig = () => ({
      content: 'Pull Up To Refresh',
      pullUpHeight: 60,
      height: 40,
      autoRefresh: false,
      downContent: 'Release To Refresh',
      upContent: 'Pull Up To Refresh',
      loadingContent: 'Loading...',
      clsPrefix: 'xs-plugin-pullup-'
    });



    this._xscroll = new XScroll({
      renderTo: `#scroller-${this.uuid}`,
      lockY: false,
      scrollbarX:false,
      scrollbarY:false
    });

    let pull_container = $el[0].querySelector('section[ng-transclude="pullup"]');
    let pull_up_config = pullupDefaultConfig();

    pull_up_config.container = pull_container;

    this.pullup = new Pullup(pull_up_config);
    this._xscroll.plug(this.pullup);

    this.pullup.on('statuschange',(val)=>{
      this.onPullUp({
        $event: {
          status:val.newVal
        }
      });
      $scope.$apply();
    });

    this.pullup.on('loading', () => {
      this.onPullUpLoading();
      $scope.$apply();
    });
    
    $timeout(()=>{
      this._xscroll.render();
    });

    $scope.$on('pullup:reset',(e)=>{
      this.pullup.complete();
      this.reset();
      this.onPullUp({
        $event: {
          status:'default'
        }
      });
    });

    $scope.$on('scroller:reset',(e)=>{
      this.reset();
      this._xscroll.scrollTop(0,0);
    });

  }


  $onInit() {
    console.log(this.height);
  };

  reset(){
    this._xscroll && this._xscroll.render();
  }


  computeStyle() {
    return {'height':`${this.height}px`};

  };
}

ScrollerController.$inject = ['$scope','$element','$timeout'];

export default ScrollerController;