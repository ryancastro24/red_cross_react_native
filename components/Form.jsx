import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,Alert } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Form = () => {

    
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState("");


    function handleSubmit() {
        console.log(email, password);
        const userData = {
          email: email,
          password,
        };
    
        fetch('https://red-cross-api-final.onrender.com/login-user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
            })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              if (data.status === "ok") {
                Alert.alert('Logged In Successfully');
                AsyncStorage.setItem('token', data.data);
                AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
                navigation.navigate('HomeLogin');
              } else if (data.data === "User doesn't exists!!") {
                Alert.alert(`User doesn't exist!!`);
              } else if (data.error === "incorrect password") {
                Alert.alert(`Incorrect password`);
              }
            })
            .catch(error => {
              console.error('Error:', error);
            });

      }


  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{justifyContent:"center", alignItems:"center",marginBottom:30}}>
            <Image style={styles.logo} alt='logo' source={require('../assets/logo.png')}/>
        </View>
        <TextInput  
        onChange={e => setEmail(e.nativeEvent.text)}
        placeholder='Enter Email' 
        require
        style={styles.input} />

        
        <TextInput 
        onChange={e => setPassword(e.nativeEvent.text)}
        keyboardType='default' 
        secureTextEntry={true}  
        placeholder='Enter Password' 
        require
        style={styles.input} />
        

        <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
          <Text style={{ color: 'white',fontSize:18}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      innerContainer:{
        width:300,
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        gap:10
      },
      logo:{
        width:160,
        height:160

      },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
    fontSize:16
  },
  button: {
    height: 60,
    backgroundColor: 'red',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
});
