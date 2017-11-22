import React, { Component } from 'react'
import { Alert, Text, View, TouchableHighlight } from 'react-native'
import gameStyle from '../assets/styles/game-style'

import ProportionalSize from '../helpers/proportional-size'
import Game from '../scripts/game'

const BOARD_DIMENSIONS = ProportionalSize.dimensions(350, 350)
const BOARD_SQUARE_DIMENSIONS = ProportionalSize.dimensions(88, 88)


export default class Board extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      boardSquares: [],
      boardSquareStatus: [],
      squareLabels: [],
      viewSquares: [],
      hits: 0,
    };
  }

  componentWillMount(){
    let boardSquares = Game.boardSquares()
    let squareLabels = Game.squareLabels()
    this.setState({boardSquares:boardSquares, boardSquareStatus: boardSquares, squareLabels:squareLabels})
  }

  componentDidMount(){
    let squareLabels = this.state.squareLabels
    let boardSquares = this.state.boardSquares
    this.prepareRenderSquares(boardSquares, squareLabels)
  }

  positionSquare(rowIndex, colIndex){
    let pos = {
      top: BOARD_SQUARE_DIMENSIONS.height * rowIndex,
      left: BOARD_SQUARE_DIMENSIONS.width * colIndex
    }
    return pos
  }

  neighbours(rowIndex, colIndex){
		let list_neighbours = [];

    // north
    if(this.state.boardSquares[rowIndex - 1] != undefined){
      let north = [(rowIndex - 1), colIndex]
      list_neighbours.push(north)

      console.log("Passei no north")
    }

    // south
    if(this.state.boardSquares[rowIndex + 1] != undefined){
      let south = [(rowIndex + 1), colIndex]
      list_neighbours.push(south)

      console.log("Passei no south")
    }

    // east
    if(this.state.boardSquares[colIndex + 1] != undefined){
      let east = [rowIndex, (colIndex + 1)]
      list_neighbours.push(east)

      console.log("Passei no east")
    }

    // west
    if(this.state.boardSquares[colIndex - 1] != undefined){
      let west = [rowIndex, (colIndex - 1)]
      list_neighbours.push(west)

      console.log("Passei no west")
    }

    return list_neighbours
	}

  moveSquare(rowIndex, colIndex){
    let neighbours = this.neighbours(rowIndex, colIndex)
    let boardSquares = this.state.boardSquares

    for(let i = 0 ; i < neighbours.length ; i++){
      if(boardSquares[neighbours[i][0]][neighbours[i][1]] === undefined){
        boardSquares[neighbours[i][0]][neighbours[i][1]] = boardSquares[rowIndex][colIndex]
        boardSquares[rowIndex][colIndex]  = undefined
      }
    }

    this.prepareRenderSquares(boardSquares)
  }

  buttonColor(boardSquares, rowIndex, colIndex){
    if(boardSquares[rowIndex][colIndex] === 0 || boardSquares[rowIndex][colIndex] == undefined)
      return "#EAEAEA"
    else
      return "#999"
  }

  reset(){
    let boardSquares = Game.boardSquares()
    let squareLabels = Game.squareLabels()
    this.prepareRenderSquares(boardSquares, squareLabels)
  }

  prepareRenderSquares(boardSquares, squareLabels = undefined){
    let viewSquares = []
    this.setState({boardSquares:boardSquares, viewSquares:viewSquares})

    for(let rowIndex = 0 ; rowIndex < boardSquares.length ; rowIndex++){
      let row = boardSquares[rowIndex]
      for(let colIndex = 0 ; colIndex < row.length ; colIndex++){
        let col = row[colIndex]
        let key = `square-${rowIndex}-${colIndex}`

        let label = boardSquares[rowIndex][colIndex]
        if(squareLabels != undefined){
          boardSquares[rowIndex][colIndex] = squareLabels[0]
          label = squareLabels[0]
          squareLabels.shift()
        }

        viewSquares.push(
          {
            key: key,
            boardSquares: boardSquares,
            rowIndex: rowIndex,
            colIndex: colIndex,
            label: label
          }
        )
      }
    }

    this.setState({boardSquares:boardSquares, viewSquares:viewSquares})
    this.checkCorrets(boardSquares)
  }

  renderSquares(){
    if(this.state.viewSquares.length > 0){
      return this.state.viewSquares.map((square) => {
        return (<TouchableHighlight
          key={square.key}
          underlayColor={this.buttonColor(square.boardSquares, square.rowIndex, square.colIndex)}
          style={[gameStyle.boardSquare, this.positionSquare(square.rowIndex, square.colIndex), {backgroundColor: this.buttonColor(square.boardSquares, square.rowIndex, square.colIndex)} ]}
          onPress={()=>{this.moveSquare(square.rowIndex, square.colIndex)}}>
          <View style={gameStyle.boardSquareView}>
            {(this.state.boardSquareStatus[square.rowIndex][square.colIndex] === true) ? <View style={gameStyle.boardSquareFlag} /> : <View />}
            <Text allowFontScaling={false} style={gameStyle.boardSquareText}>{ square.label }</Text>
          </View>
        </TouchableHighlight>)
      });
    }else{
      return <View />
    }
  }

  checkCorrets(boardSquares){
    let boardSquareStatus = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    let hits = 0

    if(boardSquares[0][0] === 1){ hits++;  boardSquareStatus[0][0] = true }
    if(boardSquares[0][1] === 2){ hits++;  boardSquareStatus[0][1] = true }
    if(boardSquares[0][2] === 3){ hits++;  boardSquareStatus[0][2] = true }
    if(boardSquares[0][3] === 4){ hits++;  boardSquareStatus[0][3] = true }

    if(boardSquares[1][0] === 5){ hits++;  boardSquareStatus[1][0] = true }
    if(boardSquares[1][1] === 6){ hits++;  boardSquareStatus[1][1] = true }
    if(boardSquares[1][2] === 7){ hits++;  boardSquareStatus[1][2] = true }
    if(boardSquares[1][3] === 8){ hits++;  boardSquareStatus[1][3] = true }

    if(boardSquares[2][0] === 9){ hits++;  boardSquareStatus[2][0] = true }
    if(boardSquares[2][1] === 10){ hits++;  boardSquareStatus[2][1] = true }
    if(boardSquares[2][2] === 11){ hits++;  boardSquareStatus[2][2] = true }
    if(boardSquares[2][3] === 12){ hits++;  boardSquareStatus[2][3] = true }

    if(boardSquares[3][0] === 13){ hits++;  boardSquareStatus[3][0] = true }
    if(boardSquares[3][1] === 14){ hits++;  boardSquareStatus[3][1] = true }
    if(boardSquares[3][2] === 15){ hits++;  boardSquareStatus[3][2] = true }

    if(hits === 15){
      Alert.alert(
        'Parabéns',
        'Você é o cara ou a mina :)',
        [
          {text: 'Jogar Novamente', onPress: () => {
            this.reset()
          }},
        ],
        { cancelable: false }
      )
    }

    this.setState({boardSquareStatus:boardSquareStatus, hits:hits})
  }

  render() {
    return (
      <View>
        <View style={gameStyle.gameArea}>
          <View style={gameStyle.boardArea}>
            { this.renderSquares()}
          </View>
        </View>
        <View style={gameStyle.footerArea}>
          <TouchableHighlight
            onPress={()=>{this.reset()}}
            style={gameStyle.startFromScratchButton}>
            <Text allowFontScaling={false} style={gameStyle.startFromScratchButtonText}>Começar do zero</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
