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
    height:'@',
    required:'@',
    show:'<'
  },
  controller,
  template:require('./template.html')
};

export default XTextareaComponent;