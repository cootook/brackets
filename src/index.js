module.exports = function check(str, bracketsConfig) {
  // your solution
  //str = '|()|(||)||'
  //bracketsConfig = [['(', ')'], ['|', '|']];

  if (str.length % 2 === 1) return false
  let strRemain = str
  let countWhile = 0
  let strAfterCuttingBrackets
  //let result = true
  //let countFor = 0

  //function mainLoopReduceToEmptyBrackets(strBeforeCutting) {
  while (strRemain.length != 0 && str.length % 2 != 1) {
    countWhile++
    console.log('while' + countWhile)
    if (countWhile > 1000) {
      console.log('break while')
      break
    }
    strAfterCuttingBrackets = cutBrackets(strRemain)
    console.log(strRemain)
    console.log(strAfterCuttingBrackets)
    if (strAfterCuttingBrackets === strRemain) return false
    strRemain = strAfterCuttingBrackets
  }
  // }

  //mainLoopReduceToEmptyBrackets(strRemain)
  //if (!result) return false
  if (strRemain.length === 0) return true

  return false

  function cutBrackets(processingStr) {
    let tempStr = processingStr

    for (let itr = 0; itr < bracketsConfig.length; itr++) {

      //countFor ++
      //console.log('itr' + itr)
      if (itr > 1000) {

        break
      }


      const configUnit = bracketsConfig[itr][0] + bracketsConfig[itr][1];

      //let startIndex = 0
      //let endIndex = 1

      //let sliceStartEndNoBrackets
      //let sliceStartEndWithBrackets

      //let findStartEnd = (start, end) => {
      let startIndex = processingStr.indexOf(configUnit)
      //endIndex = processingStr.indexOf(configUnit[1], startIndex + 1)

      //console.log(itr + '  * ' + startIndex + '  >  ' + endIndex)

      //if (startIndex === -1) {
      // console.log('no ' + configUnit)
      // continue
      //}

      //sliceStartEndNoBrackets = processingStr.slice(startIndex + 1, endIndex)
      //if (sliceStartEndNoBrackets != '') 
      //mainLoopReduceToEmptyBrackets(sliceStartEndNoBrackets)
      // sliceStartEndWithBrackets = processingStr.slice(startIndex, endIndex + 1)
      // //console.log(strRemain)
      // tempStr = strRemain.split(sliceStartEndWithBrackets).join("")
      //tempStr = processingStr.slice(0, startIndex) + processingStr.slice(startIndex + configUnit.length) //+ processingStr.slice(endIndex + 1)
      if (startIndex != -1) tempStr = processingStr.split(configUnit).join('')

      //return
      //}
      //findStartEnd(startIndex, endIndex)


    }

    return tempStr
  }

}