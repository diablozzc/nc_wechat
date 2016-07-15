/**
 * Created by zhangzhichao on 16/7/2.
 */


import controller from './controller';

const ScrollerComponent = {
  bindings:{
    listData:'<',
    height:'<',
    onPullUpLoading: '&'
  },
  controller,
  controllerAs:'scroller',
  transclude:{
    'body':'scrollerBody'
  },
  template:require('./template.html')
};

export default ScrollerComponent;

