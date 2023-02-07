import React from "react";
import { Button as _Button } from "react-native-paper";

const Button = ({children, style, onPress, ...res}) => {
    return (
        <_Button {...res} contentStyle={style} onPress={onPress}>
            {children}
        </_Button>
    )
}
export default Button