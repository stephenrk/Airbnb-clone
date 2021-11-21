import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle={'light-content'} />
      <Post />
    </SafeAreaView>
  );
};

export default App;
