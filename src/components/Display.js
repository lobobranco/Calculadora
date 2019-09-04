import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        paddingTop: 130,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,1)',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 75,
        color: '#fff',
    }
})

export default props =>
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>