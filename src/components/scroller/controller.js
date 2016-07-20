/**
 * Created by zhangzhichao on 16/7/2.
 */

import XScroll  from 'vux-xscroll/build/cmd/xscroll';
import Pulldown from 'vux-xscroll/build/cmd/plugins/pulldown';
import Pullup   from 'vux-xscroll/build/cmd/plugins/pullup';

class ScrollerController {

  constructor($scope,$element,$timeout) {
    this.scope = $scope;

    this.uuid = Math.random().toString(36).substring(3, 8);

    let p = $element[0].querySelector('.xs-container').parentNode;
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

    // 上拉更新
    let pull_container = $element[0].querySelector('section.pullup');
    let pull_up_config = pullupDefaultConfig();

    pull_up_config.container = pull_container;

    this.pullup = new Pullup(pull_up_config);
    this._xscroll.plug(this.pullup);

    this.pullup.on('statuschange',(val)=>{
      // 根据前一次的状态值判断使用不用的变量处理方式(事件来源不同:(Angular || 原生JS))
      // console.log(val);
      if(val.prevVal !== "loading"){
        $scope.$apply(()=>{
          this.pullupStatus = val.newVal;
        });
      }else{
        this.pullupStatus = val.newVal === 'up' ? 'default' : val.newVal;
      }

    });

    this.pullup.on('loading', () => {
      this.onPullUpLoading();
    });
    
    $timeout(()=>{
      this._xscroll.render();
    });


    $scope.$on('scroller:reset',(e)=>{
      this.reset();
      this._xscroll.scrollTop(0,0);
    });
  }

  $onInit() {
    this.pullupStatus = 'default';
  };

  $onChanges(changes){

    this.pullUpReset();
  }

  reset(){

    this._xscroll && this._xscroll.render();
  }
  pullUpReset(){
    this.pullup.complete();
    this.reset();
  }

  computeStyle() {
    return {'height':`${this.height}px`};

  };
}

ScrollerController.$inject = ['$scope','$element','$timeout'];

export default ScrollerController;