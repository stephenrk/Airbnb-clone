import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/Home'
import SearchResultsScreen from '../screens/SearchResults'

const Stack = createStackNavigator()

const ExploreNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SearchResults" component={SearchResultsScreen} options={{ title: "Search your destination" }} />
        </Stack.Navigator>
    )
}

export default ExploreNavigator
