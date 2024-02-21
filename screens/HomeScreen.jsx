import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Alert,FlatList,Dimensions} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { moduleHeaderData } from '../libs/moduleHeaderData';
const HomeScreen = () => {

    const navigation = useNavigation();

    const sendData = (id,title) => {
      const data = {id:id,title:title}
      navigation.navigate('ModulesContainer', { data });
    };

    const Item = ({title,topics,index,id}) => (
     <TouchableOpacity onPress={() => sendData(id,title)} style={styles.item}>      
    
        <Text style={styles.title}>{index + 1}. {title}</Text>
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

          </View>


        <View style={{flex:1,marginTop:10}}>
          <FlatList
          showsVerticalScrollIndicator={false} 
           data={moduleHeaderData}
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
      borderRadius:6
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
    }
   
  
})
