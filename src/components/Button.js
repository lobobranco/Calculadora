import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#2c2c2c',
        textAlign: 'center',
        borderWidth: 4,
        borderColor: 'rgba(0,0,0,1)',
        color: '#fff',
        borderRadius: 50
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#5d358c'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
        color: '#fff',
        backgroundColor: '#210549',
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}