/**
 * Created by zhangzhichao on 16/7/1.
 */
const ListComponent = {
  bindings:{

  },
  transclude:{
    'item':'listItem',
    'pulldown':'?pullDown',
    'pullup':'?pullUp'
  },
  template:require('./template.html')
};

export default ListComponent;
