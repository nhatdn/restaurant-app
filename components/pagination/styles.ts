import { StyleSheet } from "react-native";

const style  = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    pagination : {
        marginRight: 5,
        marginLeft: 5,
        width: 14,
        height: 10,
        borderRadius: 400,
        backgroundColor: '#D8D8D8'
    },
    paginationActive: {
        width: 33,
        backgroundColor: '#FE724C'
    }
});

export default style;