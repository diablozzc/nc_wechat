/**
 * Created by zhangzhichao on 16/7/8.
 */
class UploaderWechatController {
  /*@ngInject*/
  constructor($scope, $element,Models) {
    this.models = Models;
    // this.input = $element[0].querySelector('#search_input');
  }

  $onInit() {
    this.images = {
      localId: [],
      serverId: []
    };
  }

  wechatChoose() {
    wx.chooseImage({
      count: 1,
      success: (res)=>{
        this.images.localId = res.localIds;
        this.wechatUpload(res.localIds[0]);
      }
    });
  };

  wechatUpload(localId) {
      wx.uploadImage({
        localId: localId,
        success: (res) => {
          this.models.init('Oauth2').actions('downloadMedia',{mediaId:res.serverId}).then((ret)=>{
            console.log(ret.image);

            this.result = ret.image;
          },(error)=>{
            console.log(error);
          });
        },
        fail: (res) => {
          console.log(res);
        }
      });
  }



}


export default UploaderWechatController;