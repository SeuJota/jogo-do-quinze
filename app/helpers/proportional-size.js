import { Dimensions  } from 'react-native'

const LARGER_VIEW_HEIGHT = 736
const LARGER_VIEW_WIDTH = 414

export default class ProportionalSize{
  static dimensions(width, height, containerWidth = false, containerHeight = false){
    let buttonHeight = ((Dimensions.get('window').height * height) / LARGER_VIEW_HEIGHT)
    let buttonWidth = ((Dimensions.get('window').width * width) / LARGER_VIEW_WIDTH)

    if(containerWidth && containerHeight){
      buttonHeight = ((Dimensions.get('window').height * height) / containerHeight)
      buttonWidth = ((Dimensions.get('window').width * width) / containerWidth)
    }

    return {
      width: buttonWidth,
      height: buttonHeight
    }
  }
}
