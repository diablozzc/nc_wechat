/**
 * Created by zhangzhichao on 16/7/1.
 */
import singleImage from './tpl.singleImage.html';
import multiImage  from './tpl.multiImage.html';
import imageText   from './tpl.imageText.html';
import text        from './tpl.text.html';
import video       from './tpl.video.html';
import activity    from './tpl.activity.html';

const ListItemTpl = ($state,$compile)=>({
  restrict:'A',
  link($scope,$element,$attrs){
    
    let tpl = {
      'singleImage':singleImage,
      'multiImage':multiImage,
      'imageText':imageText,
      'text':text,
      'video':video,
      'activity':activity
    };

    let singleWidth = $attrs.winWidth - 30;
    let singleHeight = singleWidth / 1.8;

    let multiWidth = ($attrs.winWidth - 30) * 0.33;
    let multiHeight = multiWidth / 1.8;

    switch ($attrs.listItemTpl){
      case 'singleImage':
      case 'video':
      case 'activity':
        $scope.$ctrl.theHeight = {'height':singleHeight+'px'};
        break;
      case 'multiImage':
      case 'imageText':
        $scope.$ctrl.theHeight = {'height':multiHeight+'px'};
        break;
    }
    
    
    $element.html(tpl[$attrs.listItemTpl]);
    $compile($element.contents())($scope);

  }
});

ListItemTpl.$inject = ['$state','$compile'];

export default ListItemTpl;