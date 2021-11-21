import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

const Post = () => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }} />

            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>Bright room in the heart of the city</Text>

            {/* Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36 </Text>
                <Text style={styles.newPrice}> $30 </Text>
                / night
            </Text>

            {/* Total price */}
            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    )
}

export default Post
