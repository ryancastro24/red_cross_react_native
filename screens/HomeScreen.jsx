import React, { useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Alert,FlatList,TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation ,useFocusEffect} from '@react-navigation/native';
import { moduleHeaderData } from '../libs/moduleHeaderData';
import axios from 'axios';
import { MaterialCommunityIcons } from 'react-native-vector-icons';


const HomeScreen = () => {

    const navigation = useNavigation();
    const [userData,setUserData] = useState('')
    const [searchData,setSearchData] = useState('');

    const sendData = (id,title) => {
      const data = {id:id,title:title}
      navigation.navigate('ModulesContainer', { data });
    };



    async function getData() {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      axios
        .post('https://red-cross-api-final.onrender.com/userdata', {token: token})
        .then(res => {
          console.log(res.data);
          setUserData(res.data.data);
        });
    }
    
    
  useFocusEffect(
    React.useCallback(() => {
      getData();
     
    },[]),
  );




    const finalModules = moduleHeaderData.filter(val => val.title.startsWith(searchData));
  



    const Item = ({title,topics,index,id}) => (
     <TouchableOpacity onPress={() => sendData(id,title)} style={styles.item}>      
    
        <Text style={styles.title}>{id === 14 || id === 15 ? "" : index + 1 + "."} {title}</Text>
          {topics.map((topic,i) => (
              <View key={topic.id}>
                  <Text style={styles.topicsStyle}>{i + 1}. {topic.topicTitle}</Text>
              </View>
          ))}
      
      </TouchableOpacity>

    );
 
  return (
    <View style={styles.body}>

          <View style={styles.userDetailsContainer}>


            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>

                    <View style={{flexDirection:"row",alignItems:"center", gap:8}}>
                          <View style={styles.imageProfile}></View>
                          <View>
                            <Text style={{fontSize:25,fontWeight:"bold",color:"white"}}>{userData.name}</Text>
                            <Text style={{fontSize:14,fontWeight:"thin",color:"white"}}>{userData.email}</Text>
                          </View>
                    
                    </View>

                      
                      <View>
                          <TouchableOpacity onPress={() => navigation.navigate('EditProfile',{userData})}>
                            <MaterialCommunityIcons name="account-edit" color={"white"} size={35} />
                          </TouchableOpacity>
                      </View>


              </View>



            <View style={{paddingLeft:8}}>
                <Text style={{fontSize:18,fontWeight:"thin",color:"white"}}><Text style={{fontWeight:"bold"}}>Address:</Text>{userData.address}</Text>
                <Text style={{fontSize:18,fontWeight:"thin",color:"white"}}><Text style={{fontWeight:"bold"}}>Contact #: </Text>{userData.contact}</Text>
              </View>


              <View>
                <TextInput 
                 onChange={e => setSearchData(e.nativeEvent.text)}
                placeholder='Search Module...'
                style={styles.searchInput}/>
              </View>


          </View>


        <View style={{flex:1,marginTop:10}}>
          <FlatList
          showsVerticalScrollIndicator={false} 
           data={finalModules}
            renderItem={({item,index}) => <Item index={index} {...item} />}
            keyExtractor={item => item.id}
           />
     
     </View>
      

    </View>
  )
}

export default HomeScreen;




const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:"center",
      padding:15,
    },
    userDetailsContainer:{
      width: '100%', // Set width to full width of the screen
      height:200,
      backgroundColor:"#DE0505",
      borderRadius:6,
      padding:20,
      justifyContent:"space-between"
    }, 
    item: {
      padding: 10,
      borderWidth:0.5, // Set border width
      borderColor: 'black', // Set border color
      borderStyle: 'solid', // Set border style
      marginVertical: 8,
      borderRadius:3,
      width:"100%",
      
    },
    title: {
      fontSize:20,
      fontWeight:"bold"
    },

    topicsStyle:{
      paddingLeft:20
    },
    imageProfile:{
      width:45,
      height:45,
      borderRadius:100,
      backgroundColor:"#d9d9d9"
    },
    searchInput:{
      width:"100%",
      height:45,
      borderRadius:4,
      backgroundColor:"white",
      paddingHorizontal:10,
      fontSize:18
    }
   
  
})
