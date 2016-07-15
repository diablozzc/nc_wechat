/**
 * Created by zhangzhichao on 16/7/15.
 */


const KeyValue = (Config)=>((input,param)=>{
  if(angular.isUndefined(input)){
    return '';
  }
  var the_index = _.findIndex(Config.data.kv[param],['val',input]);
  return Config.data.kv[param][the_index].name;
});

KeyValue.$inject = ['Config'];
export default KeyValue;