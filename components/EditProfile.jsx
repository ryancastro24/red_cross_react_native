import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation,useRoute } from '@react-navigation/native'
const EditProfile = () => {


  const navigation = useNavigation();

  // const handleLogout = async () => {
  //   try {
  //     // Clear user session data
  //     await AsyncStorage.removeItem('token');
  //     await AsyncStorage.removeItem('isLoggedIn');
  //     Alert.alert('Logged Out Successfully');
  //     // Navigate to login screen
  //     navigation.navigate('LoginPage');
  //   } catch (error) {
  //     console.error('Error logging out:', error);
  //   }
  // };

  const route = useRoute();
  const { userData } = route.params || {};
  return (
    <View style={{flex:1, alignItems:"center",padding:20}}>
          <View style={{width:180,height:180,borderRadius:100,backgroundColor:"#d9d9d9"}}></View>
    
          <View style={{marginTop:20,alignItems:"center"}}>
              <Text style={{fontSize:30,fontWeight:"bold"}}>{userData.name}</Text>
              <View style={{marginTop:15,gap:10}}>
                  <Text style={{textAlign:"center",fontSize:16}}><Text style={{fontWeight:"bold"}}>Email:</Text> {userData.email}</Text>
                  <Text style={{textAlign:"center",fontSize:16}}><Text style={{fontWeight:"bold"}}>Address:</Text> {userData.address}</Text>
                  <Text style={{textAlign:"center",fontSize:16}}><Text style={{fontWeight:"bold"}}>Contact #:</Text> {userData.contact}</Text>
              </View>
          </View>

          <View style={{marginTop:40,gap:10}}>

            <TouchableOpacity style={styles.changePassBtn}>
                <Text style={{fontSize:18}}>change password</Text>
            </TouchableOpacity>


            <TouchableOpacity  style={styles.logoutBtn}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>LOGOUT</Text>
            </TouchableOpacity>

          </View>
    </View>
  )
}

export default EditProfile



const styles = StyleSheet.create({
  changePassBtn:{
      width:300,
      height:45,
      backgroundColor:"#d9d9d9",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:5
    
  },
  logoutBtn:{
    width:300,
    height:45,
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5
  }
})