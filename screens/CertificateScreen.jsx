import React from 'react'
import { View,Text ,TouchableOpacity,Button,Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CertificateScreen = () => {

  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Clear user session data
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('isLoggedIn');
      Alert.alert('Logged Out Successfully');
      // Navigate to login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Button onPress={() => handleLogout()} title='Logout'></Button>
    </View>
  )
}

export default CertificateScreen;