import React from 'react'
import { Text, View } from "react-native"
import Style from "../styles/Style"

export default (props:any) => {
    return (
        <View style={Style.display}>
        <Text style={Style.displayValue} numberOfLines={1}>
            {props.value}
        </Text>
    </View>
    )
}