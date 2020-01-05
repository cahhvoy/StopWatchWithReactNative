import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class StopWatch extends Component {
    constructor( props ) {
        super( props );
        this.state ={
            timer: null,
            counter: '00',
            miliseconds: '00',
            startDisabled: true,
            stopDisabled: false
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      
    }


})
