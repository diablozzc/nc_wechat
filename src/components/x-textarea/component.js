/**
 * Created by zhangzhichao on 16/7/7.
 */

import controller from './controller';

const XTextareaComponent = {
  bindings:{
    max:'@',
    value:'=',
    name:'@',
    placeholder:'@',
    rows:'@',
    cols:'@',
    height:'@'
  },
  controller,
  template:require('./template.html')
};

export default XTextareaComponent;