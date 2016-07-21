/**
 * Created by zhangzhichao on 16/7/8.
 */
class UploaderWechatController {
  /*@ngInject*/
  constructor($scope, $element, $timeout,Models) {
    this.scope = $scope;
    this.timeout = $timeout;
    this.models = Models;
    $scope.$watch('uploader.result',(val)=>{
      if(angular.isUndefined(val) || val.length === 0){
        this.reset();
      }
    });
    // this.input = $element[0].querySelector('#search_input');
  }

  $onInit() {
    this.images = {
      localId: [],
      serverId: [],
      url: [],
      total: 9
    };
    this.upload_index = 0;
    this.upload_length = 0;
    this.showLoading = false;
  }

  wechatChoose() {
    wx.chooseImage({
      count: this.images.total - this.images.url.length,
      success: (res)=> {
        this.images.localId = res.localIds;
        this.upload_index = 0;
        this.upload_length = this.images.localId.length;
        this.images.serverId = [];
        this.showLoading = true;
        this.scope.$apply();
        this.wechatUpload();
      }
    });
  };

  wechatUpload() {
    
    wx.uploadImage({
      localId: this.images.localId[this.upload_index],
      isShowProgressTips: 0,
      success: (res) => {
        this.upload_index++;
        this.images.serverId.push(res.serverId);

        if (this.upload_index < this.upload_length) {
          this.wechatUpload();
        } else {

          let mediaIds = this.images.serverId.join(',');
          console.log(mediaIds);

          this.models.init('Oauth2').actions('downloadMedia', {mediaIds: mediaIds}).then((ret)=> {

            this.images.url = this.images.url.concat(ret);
            this.result = this.images.url.join(',');
            this.showLoading = false;

          }, (error)=> {

            console.log(error);

          });
        }
      },
      fail: (res) => {
        console.log(res);
      }
    });
  }
  delImg(index){
    this.images.url.splice(index,1);
    this.result = this.images.url.join(',');
  }
  
  reset(){
    this.images.url = [];
  }


}


export default UploaderWechatController;