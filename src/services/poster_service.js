/**
 * Created by zhangzhichao on 16/7/20.
 */
  
class PosterService {
  /*@ngInject*/
  constructor($q,$state,Models) {
    this.Models = Models;
    this.$q = $q;
    this.$state = $state;
    // Moment.locale('zh_cn');
  }
  getPoster(param={}) {
    let p = Object.assign({},param);

    return this.Models.init('Poster').actions('get',p).then((response)=>{
      return response;
    });
  }

  goPoster(columnKey){
    let deferred = this.$q.defer();
    this.getPoster({columnKey:columnKey}).then((ret)=>{
      let isShown = window.sessionStorage.getItem(`${columnKey}.poster.shown`);

      console.log(isShown);
      if(ret.isShowPoster && !isShown){
        window.sessionStorage.setItem(`${columnKey}.poster.shown`,true);
        //Go to poster state with column key
        this.$state.go('main.poster',{key:columnKey});
        
        deferred.reject({poster:false});
      }else{
        deferred.resolve({poster:true});
      }
    });
    return deferred.promise;
  }
  
}


export default PosterService;