import React, { useEffect } from "react";
import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import TextInputComponent from "../Components/TextInputComponent";
import TouchableOpacityComponent from "../Components/TouchableOpacityComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const List = () => {
    const [name, setName] = useState("");
    const [storedData, setstoredData] = useState([]);
    const submit = (value) => {
        value.preventDefault();
        if (name) {

            name.includes(storedData)
    if(storedData===setName)
    {
        alert("not allowed");
    }else{

            setstoredData((item) => [...item, name]);
            setName("");
        }   
    }
}
    const Delete = (id) => {
              const selectData = storedData.filter((item, key) => {
            return key!== id
        });

        setstoredData(selectData);

    }
    return (
        <View>
            <TextInputComponent
                input={styles.txtstyle}
                placeholder={"Enter Your Name"}
                value={name}
                onChangeText={(name) => setName(name)}

            />
            <TouchableOpacityComponent
                onPress={submit}
                button={styles.button}
                title={'Submit'}


            />
            {storedData.map((val, index) => (
                <View key={index}><Text style={styles.txt}>{val}</Text>
                    <TouchableOpacityComponent
                        onPress={()=>Delete(index)}
                        button={styles.delbtn}
                        title={'Delete'}


                    /></View>
            )

            )}

        </View>
    );
};
const styles = StyleSheet.create({
    txtstyle: {
        width: 200,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: "black",
        marginLeft: 60
    },
    button: {
        width:60,
        height:40,
        backgroundColor:'lightblue',
        justifyContent:"center",
        position:"absolute",
        marginTop:20,
      marginLeft:300

    }, txt: {
        marginLeft: 10,
        fontSize: 30,
        // textAlign: 'center',
        marginTop: 30
    },
    delbtn: {
        width:60,
       backgroundColor:'black',
       justifyContent:"center",
       position:"absolute",
       marginTop:40,
     marginLeft:300
    }
});

export default List;