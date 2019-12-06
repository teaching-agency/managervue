/*-----------------------------------------------------通用方法区域----------------------------------*/
const isDataNull = function isDataNull(value) {
    if(value == null || value == "" || value == undefined){
      return true;
    }else {
      return false;
    }
  };
export{
  isDataNull
}
