module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) return false
  let strRemain = str
  let strAfterCuttingBrackets
  while (strRemain.length != 0 && str.length % 2 != 1) {
    strAfterCuttingBrackets = cutBrackets(strRemain)
    if (strAfterCuttingBrackets === strRemain) return false
    strRemain = strAfterCuttingBrackets
  }
  if (strRemain.length === 0) return true
  return false

  function cutBrackets(processingStr) {
    let tempStr = processingStr
    for (let itr = 0; itr < bracketsConfig.length; itr++) {
      const configUnit = bracketsConfig[itr][0] + bracketsConfig[itr][1];
      let startIndex = processingStr.indexOf(configUnit)
      if (startIndex != -1) tempStr = processingStr.split(configUnit).join('')
    }
    return tempStr
  }

}