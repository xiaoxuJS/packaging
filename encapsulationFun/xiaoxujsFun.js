//变量是否为空
export const isEmpty = ( obj ) => {
    if(typeof obj == "nudefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}