import React, {Component,useEffect,useMemo,useRef,useState} from "react";
import {View,Text,StyleSheet} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { multiply } from "react-native-reanimated";
import TextInputComponent from "./Components/TextInputComponent";
import TouchableOpacityComponent from "./Components/TouchableOpacityComponent";


const Hooks =()=>{
    // const initialState=0
 const[count,setCount]=useState(0)
const[toggle,setToggle]=useState(true)
 useEffect(()=>{
 alert(`name chnged: ${count}`)
 },[])


 const incrementWith5=()=>{
    for(let i=0; i< 5;i++){
        setCount(prevCount=>prevCount+1)
    }
 }
useMemo(()=>{
    alert("use memo used")
},[toggle]);

    return(
        <View>
        <Text>Value={count}</Text>

<TouchableOpacityComponent
            onPress={()=>setCount(0)}
            title={"Reset"}
            button={styles.btn1}
        />
          <TouchableOpacityComponent
            onPress={()=>setCount(count + 1)}
            title={"Increase"}
            button={styles.btn2}
        />
        <TouchableOpacityComponent
            onPress={()=>setCount(count - 1)}
            title={"Decrease"}
            button={styles.btn3}
        />
         <TouchableOpacityComponent
            onPress={()=>setCount(incrementWith5)}
            title={"increwith5"}
            button={styles.btn3}
        />
             <TouchableOpacityComponent
            onPress={()=>setToggle(!toggle)}
            title={toggle ? "you clicked" : "plz clicked"}
            button={styles.btn3}
        />
        </View>
    )
}

const styles= StyleSheet.create({
    btn1:{
        justifyContent:'center',
        textAlign:'center',
        marginTop:20,
        marginLeft:100,
        width:130,
        height:50,
        backgroundColor:"red",
        borderRadius:20
    },
    btn2:{
        justifyContent:'center',
        textAlign:'center',
        marginTop:20,
        marginLeft:100,
        width:130,
        height:50,
        backgroundColor:"blue",
        borderRadius:20
    },
    btn3:{
        justifyContent:'center',
        textAlign:'center',
        marginTop:20,
        marginLeft:100,
        width:130,
        height:50,
        backgroundColor:"aqua",
        borderRadius:20
    }
})
export default Hooks;





// class Practice extends Component{

//     const[name,setName]=useState(name="",age="")

// <TextInputComponent
//     value={name}
//     onTextChange={(name)=>setName({...name, name:value})}
// />

// <TextInputComponent
//     value={name.age}
//     onTextChange={(name)=>setName({...name,age:value})}
// />
// <View><Text>Value={name.name}</Text></View>
// <View><Text>Value={name.age}</Text></View>




// // class life cycle method 
// //(1)=> use to set initial states and props  
//     constructor(h){
//         super(h);
//     //     this.state={color:"red",age:11,
//     //    jhyau: {class:10,payu:{shayu:"meow"}}};
//     //     console.log("this is first method");
//     this.state={
//         count:1
//     }
//     }

//     increaseCount=()=>{
//         this.setState({
//           count:  this.state.count * 2
//     })
//     }
//  //(2) 
// //  getDerivedStateFromProps(props, state){
// //     console.log("this is second method");

// //  }   

//  //(4)=> it checks or fetch API's also it is use to update the states. 
//     componentDidMount(){
//         console.log("this is fourth method");
//         setTimeout(()=>{
//             this.setState({color:"blue"})
//         },2000) 
//     }
//     //(5)=>
//     shouldComponentUpdate(props,states){
//         console.log("fift mehtod");
//         return true;
//     }
//     changeColor = () => {

//         const myArray=['Narender','Shubham','Shakti','Ajay']
//       const falana= myArray.map((item)=>{
        
     
//        return(item + "singh")
        
     
    
      
//     } );
          
//        console.log(falana);  
//         this.setState({color:"green"});

     
//       }
      

//       //(3) render methods works to show DOM 
//     render(){
//         console.log("third method")
//         return (
            
     
//         <View><Text>Welcome to Practice class {this.state.count} </Text>

//        <TouchableOpacityComponent
//         onPress={this.increaseCount}
//           button  ={styles.btn}
//         title={"change"}
     
//        />
//         </View>
//         )   
//     };
// };

// const styles= StyleSheet.create({
//     btn:{
//         justifyContent:'center',
//         textAlign:'center',
//         marginTop:20,
//         marginLeft:100,
//         width:130,
//         height:50,
//         backgroundColor:"red",
//         borderRadius:20
//     }
// })

// export default Practice;
