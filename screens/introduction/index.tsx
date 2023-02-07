import React, { useEffect, useRef } from "react";
const Logo = require("../../assets/logo/logo.png");
import { Animated } from "react-native";
import { List } from 'react-native-paper';

import style from './styles';
const Introduction = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    console.log(fadeAnim);
    useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }).start();
      }, [fadeAnim]);

    return (
        <Animated.View style={{...style.container, opacity: fadeAnim}}>
            <List.Image variant="image" source={Logo}/>
        </Animated.View>
    )
}

export default Introduction;