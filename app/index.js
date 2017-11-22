import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import gameStyle from './assets/styles/game-style';
import Board from './components/board';

export default class App extends React.Component{
  render() {
    return (
      <View>
        <View style={gameStyle.headerArea}>
          <Text allowFontScaling={false} style={gameStyle.headerTitleH1}>O Jogo do 15</Text>
          <Text allowFontScaling={false} style={gameStyle.headerTitleH2}>Coloque os números na ordem correta</Text>
        </View>
        <Board />
      </View>
    )
  }
}
