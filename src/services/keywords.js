/**
 * Created by zhangzhichao on 16/7/14.
 */

class KeywordsService {
  /*@ngInject*/
  constructor(Models) {
    this.Models = Models;
  }
  getKeywords(column) {
    let p = {};
    p.columnKey = column;

    return this.Models.init('Keywords').actions('get',{},p).then((response)=>{

      return response;
    });
  }
}


export default KeywordsService;