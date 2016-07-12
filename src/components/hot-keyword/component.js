/**
 * Created by zhangzhichao on 16/7/11.
 */

import controller from './controller';

const HotKeywordComponent = {
  bindings:{
    keywords:'<',
    onSelect:'&'
  },
  controller,
  controllerAs:'hot',

  template:require('./template.html')
};

export default HotKeywordComponent;