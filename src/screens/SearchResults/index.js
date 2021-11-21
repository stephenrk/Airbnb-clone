import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './styles'
import Post from '../../components/Post'

import feed from '../../../assets/data/feed'

const SearchResultsScreen = () => {
    return (
        <View>
            <FlatList
                data={feed}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Post post={item} />
                )}
            />
        </View>
    )
}

export default SearchResultsScreen
