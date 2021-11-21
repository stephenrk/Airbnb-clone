import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        marginLeft: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    searchButton: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        left: 25,
        right: 25,
        zIndex: 100,
        elevation: 1
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    }
})

export default styles