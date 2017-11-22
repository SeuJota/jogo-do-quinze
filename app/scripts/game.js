let BOARD_SQUARES = []
let SQUARE_LABELS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

export default class Game{
  static init(){
    BOARD_SQUARES = []
    BOARD_SQUARES.push([0, 0, 0, 0])
    BOARD_SQUARES.push([0, 0, 0, 0])
    BOARD_SQUARES.push([0, 0, 0, 0])
    BOARD_SQUARES.push([0, 0, 0, 0])
  }

  static shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  static boardSquares(){
    Game.init()
    return BOARD_SQUARES
  }

  static squareLabels(){
    let squareLabels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    squareLabels = Game.shuffle(squareLabels)
    return squareLabels
  }
}
