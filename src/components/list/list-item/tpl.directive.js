/**
 * Created by zhangzhichao on 16/7/1.
 */
import singleImage from './tpl.singleImage.html';
import multiImage  from './tpl.multiImage.html';
import imageText   from './tpl.imageText.html';
import text        from './tpl.text.html';
import video       from './tpl.video.html';

const ListItemTpl = ($state,$compile)=>({
  restrict:'A',
  link($scope,$element,$attrs){
    
    let tpl = {
      'singleImage':singleImage,
      'multiImage':multiImage,
      'imageText':imageText,
      'text':text,
      'video':video
    };

    
    $element.html(tpl[$attrs.listItemTpl]);
    $compile($element.contents())($scope);

  }
});

ListItemTpl.$inject = ['$state','$compile'];

export default ListItemTpl;