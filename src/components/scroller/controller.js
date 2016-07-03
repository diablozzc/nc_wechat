/**
 * Created by zhangzhichao on 16/7/2.
 */

import XScroll  from 'xscroll/build/cmd/xscroll';
import Pulldown from 'xscroll/build/cmd/plugins/pulldown';
import Pullup   from 'xscroll/build/cmd/plugins/pullup';

class ScrollerController {
  constructor() {
    this.uuid = Math.random().toString(36).substring(3, 8);
    this.the_id = `scroller-${this.uuid}`;
    this._xscroll = new XScroll({
      renderTo: '#scroller-abc',
      lockY: false
    });
    this._xscroll.render();
  }
  $onInit() {

  };

}

ScrollerController.$inject = [];

export default ScrollerController;