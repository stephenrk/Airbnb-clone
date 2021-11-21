import React from 'react'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native'
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'

import feed from './assets/data/feed'

const post1 = feed[0]
const post2 = feed[1]

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle={'light-content'} />
      <Post post={post1} />
      <Post post={post2} />
    </SafeAreaView>
  )
}

export default App
