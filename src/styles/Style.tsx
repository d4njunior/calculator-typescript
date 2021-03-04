import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    button: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#e9c496',
        borderWidth: 1,
        borderColor: '#433d3c',
        justifyContent: 'center'
    },
    buttonTxt: {
        fontFamily: 'BowlbyOne',
        fontSize: 40,
        textAlign: 'center'
    },
    buttonOperation: {
        color: '#fff',
        backgroundColor: '#944e6c'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    },
    container: {
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    display: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#433d3c',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontFamily: 'BowlbyOne',
        fontSize: 50,
        color: '#fff'
    }
})