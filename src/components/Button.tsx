import React from 'react'
import {  Text, TouchableHighlight, View } from 'react-native'
import Style from '../styles/Style'

export default (props:any) => {

    const stylesButton : any = [Style.button]
    if (props.double) stylesButton.push(Style.buttonDouble)
    if (props.triple) stylesButton.push(Style.buttonTriple)
    if (props.operation) stylesButton.push(Style.buttonOperation)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <View style={stylesButton}>
                <Text style={Style.buttonTxt}>{props.label}</Text>
            </View>
        </TouchableHighlight>
    )

}