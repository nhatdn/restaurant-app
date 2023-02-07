import React from "react";
import { View } from "react-native";
import style from "./styles";

const Center = ({children, ...res}) => {
    return (
        <View style={style.center} {...res}>
            {children}
        </View>
    )
}

export default Center;