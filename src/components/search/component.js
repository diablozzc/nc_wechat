/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller';

const SearchComponent = {
  bindings:{
    placeholder:'@',
    cancelText:'@',
    value:'=',
    results:'<',
    autoFixed:'<',
    onChange:'&'

  },
  controller,
  controllerAs:'search',
  
  template:require('./template.html')
};

export default SearchComponent;
