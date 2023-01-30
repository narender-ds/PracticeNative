import React from "react";
import {TextInput} from "react-native";

const TextInputComponent = (props) => {
    return (
        <TextInput
            style={props.input}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry ? props.secureTextEntry :null} />
                                                                                               


    );
};

export default TextInputComponent;

