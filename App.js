import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';
import Form from './components/Form';
import { useState , useEffect} from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import CertificateScreen from './screens/CertificateScreen';
import ContactScreen from './screens/ContactScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ModulesContainer from './screens/ModulesContainer';
import EditProfile from './components/EditProfile';


const Tab = createBottomTabNavigator();






const  BottomNav = () => {

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle:{
        backgroundColor:"#DE0505",
        height:70,
      },
    }}>

      <Tab.Screen name="Home" component={MyStack}
        options={{
          headerShown:false,
          title:"Dashboard",
          tabBarLabel: 'Dashboard',
          tabBarActiveTintColor:"white",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 14 ,marginBottom: 10},
          tabBarIconStyle:{marginBottom:-10},
       
        }}  
        
        />
      <Tab.Screen name="Certificate" component={CertificateScreen}
      
      options={{
        tabBarLabel: 'Certificate',
        tabBarActiveTintColor:"white",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="certificate" color={color} size={size} />
        ),
        tabBarLabelStyle: { fontSize: 14 ,marginBottom: 10},
          tabBarIconStyle:{marginBottom:-10}
      }}  

      />
      <Tab.Screen name="Contact" component={ContactScreen}
      
      options={{
        tabBarLabel: 'Contact',
        tabBarActiveTintColor:"white",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="phone" color={color} size={size} />
        ),
        tabBarLabelStyle: { fontSize: 14 ,marginBottom: 10},
        tabBarIconStyle:{marginBottom:-10}
      }}  
      />
    </Tab.Navigator>
  );
}


const MyLoginStack = () => {
  const Stack = createNativeStackNavigator();

  return(
  <Stack.Navigator>
      <Stack.Screen name="Login" options={{headerShown:false}} component={Form} />
      <Stack.Screen name="HomeLogin" options={{headerShown:false}} component={BottomNav} />
  </Stack.Navigator>
  )
}


const  MyStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Dashboard" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="ModulesContainer"  component={ModulesContainer} />
      <Stack.Screen name="EditProfile"  component={EditProfile} />
      <Stack.Screen name="LoginPage" options={{headerShown:false}} component={MyLoginStack} />
      
     
    </Stack.Navigator>
  );
}



export default function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  async function getData() {
    setLoading(true); // Set loading to true when fetching data
  try {
    const data = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(data);
  } catch (error) {
    setError(error); // Set error state if there's an error
  } finally {
    setLoading(false); // Set loading to false after fetching data, whether success or failure
  }
  }

  useEffect(() => {

    getData();

  
  },[]);

  

  if (loading) {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" animating={true} color="#FF0000" />
      </View>
    );
  }



  
  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }


  return (

    <NavigationContainer>
   
    { isLoggedIn ?  (
        <BottomNav />
      ) : (
          <MyLoginStack/>
      )
      }
   
    </NavigationContainer>
  );
    
}







