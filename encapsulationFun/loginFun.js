// 判断手机号格式
var TEL_REGEXP = /^(13[0-9]|14[0-9]|15[012356789]|16[0-9]|17[0-8]|18[0-9]|19[0-9])[0-9]{8}$/;

export function validateTel (tel){
      if(TEL_REGEXP.test(tel)){
        return true;
      }
      return false;
}

// 判断是否为6-20位数字和字母组合 密码

export function IsCombination(val){
	let combinationText = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/
	if(combinationText.test(val)){
        return true;
      }
      return false;
}