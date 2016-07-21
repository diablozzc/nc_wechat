/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller';

const LoadingComponent = {
  bindings:{
    show:'=',
    text:'@'
  },
  controller,
  controllerAs:'loading',
  transclude:true,
  
  template:require('./template.html')
};

export default LoadingComponent;
