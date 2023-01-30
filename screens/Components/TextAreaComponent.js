import React from "react";
import {TextArea } from "react-native";
const TextAreaComponent =(props)=>{
    return(
<TextArea
value={props.value}
placeholder={props.placeholder}
onChangeText={props.onChangeText}/>


    );
};

export default TextAreaComponent;