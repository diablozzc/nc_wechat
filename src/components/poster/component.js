/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller';

const PosterComponent = {
  bindings:{
    show:'=',
    columnKey:'@',
    onCallback:'&'
  },
  controller,
  controllerAs:'poster',
  // transclude:true,
  
  template:require('./template.html')
};

export default PosterComponent;
