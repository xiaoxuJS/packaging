//变量是否为空
export const isEmpty = ( obj ) => {
    if(typeof obj == "nudefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

//防抖
var timeout = null;
export const antiShake = (fn, ms = 500) => {
    clearTimeout(timeout);  // 每次触发时先清除上一次的定时器,然后重新计时
    timeout = setTimeout(()=>{
        fn()
    }, ms); 
}