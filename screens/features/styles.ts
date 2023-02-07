import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    wrapper: {
        padding: 25,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
    },
    wrapperBtnContinue: {
        position: 'absolute',
        width: '100%',
        bottom: 20
    },
    buttonContinue: {
        backgroundColor: '#FE724C',
    },
    title: {
        color: '#171718',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        paddingBottom: 10,
        marginTop: 30
    },
    desctiption: {
        color: '#3A4F66',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400'
    },
    introImage: {
        resizeMode: 'cover',
        borderRadius: 1000
    },
    wrapperBtnSkip: {
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        width: '100%',
        marginRight: -50,
    },
    buttonNext: {
        fontSize: 14,
        fontWeight: '400',
        color: '#FE724C',
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    pagination: {
        marginTop: 10
    }
});

export default style;