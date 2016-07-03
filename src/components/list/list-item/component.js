/**
 * Created by zhangzhichao on 16/7/1.
 */


const ListItemComponent = {
  bindings:{
    itemData:'<',
    tpl:'@'
  },
  template:require('./template.html'),
  replace:true
};

export default ListItemComponent;