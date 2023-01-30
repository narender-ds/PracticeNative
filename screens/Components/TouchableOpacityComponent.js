import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const TouchableOpacityComponent = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={props.button}

        >
            <Text style={Styles.btntext}>{props.title}</Text>

        </TouchableOpacity>
    );
};
const Styles = StyleSheet.create({
    btntext: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
    }
})
export default TouchableOpacityComponent;
