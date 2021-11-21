import React from 'react'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native'
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'
import SearchResultsScreen from './src/screens/SearchResults'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle={'light-content'} />
      <SearchResultsScreen />
    </SafeAreaView>
  )
}

export default App
