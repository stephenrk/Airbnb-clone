import React from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

import searchResults from '../../../assets/data/search'

const DestinationSearchScreen = () => {
    const [inputText, setInputText] = React.useState()

    return (
        <View style={styles.container}>
            {/* Input component */}
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
                placeholderTextColor="#cdcdcd"
            />

            {/* List of destination */}
            <FlatList
                keyExtractor={item => item.id}
                data={searchResults}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name="location-pin" size={25} color={35} color="#000" />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: 'lightgrey' }} />}
            />
        </View>
    )
}

export default DestinationSearchScreen
