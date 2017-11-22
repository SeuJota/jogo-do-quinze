import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import ProportionalSize from '../../helpers/proportional-size'

const BOARD_DIMENSIONS = ProportionalSize.dimensions(350, 350)
const BOARD_SQUARE_DIMENSIONS = ProportionalSize.dimensions(87.5, 87.5)

export default StyleSheet.create({
  /** Layout Itens **/
  headerArea:{
    height: ProportionalSize.dimensions(0, 125).height,
    justifyContent: "flex-end"
  },

  gameArea:{
    height: ProportionalSize.dimensions(0, 505).height,
    justifyContent: "center",
    alignItems: "center"
  },

  footerArea:{
    height: ProportionalSize.dimensions(0, 80).height,
    justifyContent: "center",
    alignItems: "center",
  },

  /** Board Itens **/
  boardArea:{
    backgroundColor: "#EAEAEA",
    height: BOARD_DIMENSIONS.height,
    width: BOARD_DIMENSIONS.width,
  },

  boardSquare:{
    height: BOARD_SQUARE_DIMENSIONS.height,
    width: BOARD_SQUARE_DIMENSIONS.width,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute'
  },

  boardSquareText:{
    fontFamily: 'josefin_slab_bold',
    color: "#EAEAEA",
    fontSize: 20,
  },

  boardSquareView:{
    height: BOARD_SQUARE_DIMENSIONS.height,
    width: BOARD_SQUARE_DIMENSIONS.width,
    justifyContent: "center",
    alignItems: "center",
  },

  boardSquareFlag:{
    height: BOARD_SQUARE_DIMENSIONS.height / 8,
    width: BOARD_SQUARE_DIMENSIONS.width / 8,
    borderRadius: BOARD_SQUARE_DIMENSIONS.width / 8,
    backgroundColor: "#00FF00",
    position: 'absolute',
    top: BOARD_SQUARE_DIMENSIONS.height / 10,
    right: BOARD_SQUARE_DIMENSIONS.height / 10,
  },

  /** Headers itens **/
  headerTitleH1:{
    textAlign: 'center',
    fontFamily: 'josefin_slab_bold',
    fontSize: 30,
  },

  headerTitleH2:{
    textAlign: 'center',
    fontFamily: 'josefin_slab_regular',
    fontSize: 20,
    marginTop: 10
  },

  /** Footer Itens **/
  startFromScratchButton:{
    backgroundColor: "#666",
    width: Dimensions.get('window').width - 20,
    height: ProportionalSize.dimensions(0, 60).height,
    justifyContent: "center",
    alignItems: "center",
  },

  startFromScratchButtonText:{
    color: "#EAEAEA",
    fontFamily: 'josefin_slab_regular',
    fontSize: 20,
  },

})
