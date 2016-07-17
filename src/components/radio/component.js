/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller';

const RadioComponent = {
  bindings:{
    title:'@',
    options:'<',
    value:'=',
    onChange:'&'

  },
  controller,
  controllerAs:'radio',
  
  template:require('./template.html')
};

export default RadioComponent;
