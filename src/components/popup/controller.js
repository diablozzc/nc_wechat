/**
 * Created by zhangzhichao on 16/7/7.
 */

import Popup from './popup';

class PopupController {
  /*@ngInject*/
  constructor($scope,$element) {

    this.$el = $element[0].querySelector('.vux-popup');
    const _this = this;
    this.popup = new Popup({
      container: _this.$el,
      innerHTML: '',
      onOpen:(dialog)=>{
        _this.fixSafariOverflowScrolling('auto');
      },
      onClose:(dialog)=>{
        _this.fixSafariOverflowScrolling('touch');
        _this.closePopup();
        $scope.$apply();
      }
    });
    this.$overflowScrollingList = document.querySelectorAll('.vux-fix-safari-overflow-scrolling');


  }
  $onInit() {
  }

  $onChanges(change) {
    if(change.show.currentValue){
      this.popup.show();
    }else{
      this.popup.hide();
    }

  }

  fixSafariOverflowScrolling (type) {
    if (!this.$overflowScrollingList.length) return;
    for (let i = 0; i < this.$overflowScrollingList.length; i++) {
      this.$overflowScrollingList[i].style.webkitOverflowScrolling = type;
    }
  }
  closePopup() {
    this.onClosePopup();
  }


}

// PopupController.$inject = ['$scope','$element'];

export default PopupController;