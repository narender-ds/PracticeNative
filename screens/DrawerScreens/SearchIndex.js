import { useState,useEffect } from "react";
import { SafeAreaView,View,StyleSheet,ScrollView,Text,TextInput } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import React from 'react';

const Screen=()=>{
  const [scrollToIndex, setScrollToIndex]= useState(0);
  const [dataSource,setDataSource]=useState([]);
  const[ref ,setRef]=useState(null);
  const [dataSourceCords,SetDataSourceCords]=useState([]);
 
  useEffect(()=>{
    callAPIPosts();
    return()=>{
      cleanup
    }
  }, [])
  callAPIPosts =()=>{
const URL= 'https://jsonplaceholder.typicode.com/posts';
fetch(URL).then((response)=> response.json())
.then((responseJson)=>{
  setDataSource(responseJson);
}).catch((error)=>{
  console.log('Request API Error:',error);
})
  }
  const ItemView = (item,key) =>{
    return (
      <View
      key={key}
     onLayout={(evnt)=>{
      const layout = evnt.nativeEvent.layout;
dataSourceCords[key]= layout.y;
SetDataSourceCords(dataSourceCords);
console.log(dataSourceCords);
console.log('height: ' ,layout.height);
console.log('width: ' ,layout.width);
console.log('x: ' ,layout.x);
console.log('y: ' ,layout.y);
     }}
      >
<Text style={styles.itemStyle}>
{item.id}.{item.title}
</Text>
<ItemSeparatorView />
      </View>
    )
  }
  const ItemSeparatorView = () =>{
    return (
      <View  style={styles.itemSeparatorStyle}/>
    )
  }
  return(
<SafeAreaView style={{flex:1}}>
<View style={styles.container}>
<View style={styles.Searchcontainer}>
<TextInput
  value={scrollToIndex ? scrollToIndex : 0}
  keyboardType={"numeric"}
placeholder={"Enter To Search"}
style={styles.searchInput}
/>
<TouchableOpacity
style={styles.searchButton}>
  <Text style={styles.searchButtonText}>Search</Text>
</TouchableOpacity>

</View>
<ScrollView 
ref={(ref) =>{
  setRef(ref);
}}
>
  {dataSource.map(ItemView)}
</ScrollView>
</View>
</SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:"black"
  },
  Searchcontainer:{
    flexDirection: "row",
    backgroundColor: "#81e7be",
    padding:5,
  },
  searchButton:{
    backgroundColor:"#f4801e",
    padding:15,
  },
  searchButtonText:{
    color:"#fff"
  },
  searchInput:{
    flex:1,
    backgroundColor:"White",
    // fontWeight:"bold"
  },
  itemStyle:{
    padding:10
  },
  itemSeparatorStyle:{
    height:0.5,
width:'100%',
backgroundColor: 'blue',
  }
});

export default Screen;