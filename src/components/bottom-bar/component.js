/**
 * Created by zhangzhichao on 16/7/6.
 */

import controller from './controller';

const BottomBarComponent = {
  bindings:{
    onClick:'&'
  },
  controller,
  template:require('./template.html')
};

export default BottomBarComponent;