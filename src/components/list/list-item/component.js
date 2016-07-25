/**
 * Created by zhangzhichao on 16/7/1.
 */


const ListItemComponent = {
  bindings:{
    itemData:'<',
    tpl:'@',
    target:'<',
    winWidth:'<'
  },
  template:require('./template.html')
};

export default ListItemComponent;