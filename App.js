import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import { useState , useEffect} from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import CertificateScreen from './screens/CertificateScreen';
import ContactScreen from './screens/ContactScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Module1 from './moduleScreen/Module1';
import ModulesContainer from './screens/ModulesContainer';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const  MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="ModulesContainer"  component={ModulesContainer} />
     
    </Stack.Navigator>
  );
}


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


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    console.log(data, 'at app.jsx');
    setIsLoggedIn(data);
  
  }

  useEffect(() => {
    getData();
   
  }, [isLoggedIn]);


  return (
    <NavigationContainer>
   
    {isLoggedIn ?  (
        <BottomNav />
      ) : (
        <Form />
      )
      }
   
    </NavigationContainer>
  );
}







