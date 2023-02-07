import React from "react";
import { View } from "react-native";
import style from './styles';
const ChildPagination = ({length, active}) => {
    let childrenPagination: JSX.Element[] = [];
    let chid = active;
    for(let i = 0; i < length; i++) {
        childrenPagination.push(
            chid == i ? (
                <View key={i} style={{...style.pagination, ...style.paginationActive}}></View>
                
            ) : (
                <View key={i} style={style.pagination}></View>
            )
        )
    }
    return childrenPagination;
}
const Pagination = (props) => {
    
    return (
        <View style={{...style.container, ...props.style}}>
            {ChildPagination({...props})}
        </View>
    );
}

export default Pagination;