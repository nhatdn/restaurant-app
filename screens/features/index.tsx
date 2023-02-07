import React, { useState } from "react";
import style from './styles';
import { View } from "react-native";
import Center from "../../components/center";
import Button from "../../components/button";
import { Image } from "react-native";
import { Text } from "react-native-paper";
import Pagination from "../../components/pagination";
const ListImage = [
    require('../../assets/introduction/image1.jpg'),
    require('../../assets/introduction/image2.jpg'),
    require('../../assets/introduction/image3.jpg')
];

const Features = () => {
    const [indexImage, setIndexImage] = useState<number>(0);
    const handleClick = () => {
        if(indexImage == ListImage.length -1) {
            setIndexImage(0);
        } else {
            setIndexImage((indexImage => indexImage + 1));
        }
    }
    return (
        <View style={style.container}>
            <View style={style.wrapper}>
                <Center  style={style.wrapperBtnSkip}>
                    <Button  mode='text' type='text' buttonColor="white" textColor="#FE724C" icon="arrow-right" onPress={handleClick} style={style.buttonNext}>Skip</Button>
                </Center>
                <Center>
                    <Image style={style.introImage} source={ListImage[indexImage]}></Image>
                    <Text style={style.title}>GPS Tracking</Text>
                    <Text style={style.desctiption}>
                        Loved the class! Such beautiful land and collective impact infrastructure social entrepreneur.
                    </Text>
                </Center>
                <Pagination length={ListImage.length} active={indexImage} style={style.pagination}/>
                <View style={style.wrapperBtnContinue}>
                    <Button
                        style={style.buttonContinue}
                        onPress={handleClick}
                        uppercase
                        mode="contained"
                    >
                        Continue
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default Features;