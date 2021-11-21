import 'react-native-gesture-handler';

import React from 'react'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native'
import Router from './src/navigation/Router';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <Router />
    </SafeAreaView>
  )
}

export default App
