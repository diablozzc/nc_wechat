/**
 * Created by zhangzhichao on 16/7/2.
 */
import XScroll  from 'xscroll/build/cmd/xscroll';
import Pulldown from 'xscroll/build/cmd/plugins/pulldown';
import Pullup   from 'xscroll/build/cmd/plugins/pullup';

const Scroller = ($timeout)=>({
  restrict:'A',
  link($scope,$element,$attrs){
    let uuid = Math.random().toString(36).substring(3, 8);
    $element.attr('id', `scroller-${uuid}`);

    let content = null;
    const slotChildren = $element[0].querySelector('.xs-container').childNodes;
    console.log(slotChildren);
    for (let i = 0; i < slotChildren.length; i++) {
      if (slotChildren[i].nodeType === 1) {
        content = slotChildren[i];
        break;
      }
    }

    $timeout(function(){
      let _xscroll = new XScroll({
        renderTo: `#scroller-${uuid}`,
        lockY: false
      });
      _xscroll.render();
    })

  }
});

Scroller.$inject = ['$timeout'];

export default Scroller;