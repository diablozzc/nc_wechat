/**
 * Created by zhangzhichao on 16/7/2.
 */


import controller from './controller';

const ScrollerComponent = {
  bindings:{
    height:'<',
    onPullUp: '&',
    onPullUpLoading: '&'
  },
  controller,
  controllerAs:'scroller',
  transclude:{
    'body':'scrollerBody',
    'pulldown':'?pullDown',
    'pullup':'?pullUp'
  },
  template:require('./template.html')
};

export default ScrollerComponent;

