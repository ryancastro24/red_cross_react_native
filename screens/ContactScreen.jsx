import React from 'react'
import { View,Text,StyleSheet,TextInput ,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
const ContactScreen = () => {
  return (
    <View style={{flex:1,padding:20}}>
        <Text style={{fontSize:20}}>Need Assitance? <Text style={{fontWeight:"bold"}}>Reach out to us!</Text></Text>
    
    

      <View style={{gap:20,marginTop:30}}>

          <View style={{gap:5}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>Name</Text>
              <TextInput 
                placeholder='Enter Name'
                style={styles.inputField}
              />
          </View>


          <View style={{gap:5}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>Email</Text>
              <TextInput 
                placeholder='Enter Email'
                style={styles.inputField}
              />
          </View>


          <View style={{gap:5}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>Message</Text>
              <TextInput 
                placeholder='Enter Message'
                style={styles.messageInput}
                multiline={true}
                textAlignVertical="top" 
              />
          </View>


        <TouchableOpacity style={styles.submitBtn}>
          <Text><MaterialCommunityIcons  name="email-fast" color={"white"} size={25} /></Text>   
          <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>  SUBMIT</Text>
        </TouchableOpacity>



      </View>


      <View style={{marginTop:25,gap:10}}>
        <View>
          <Text style={{fontWeight:"bold",fontSize:20,textAlign:"center"}}>Address:</Text>
          <Text style={{fontSize:16,textAlign:"center",paddingHorizontal:10}}>Purok 3-A Aquino Street Corner Butuan City Agusan Del Norte</Text>
        </View>

        <View>
          <Text style={{fontWeight:"bold",fontSize:20,textAlign:"center"}}>Hotline Number</Text>
          <Text style={{fontSize:16,textAlign:"center"}}>812-12312-22</Text>
        </View>
      </View>
    
    
    
    </View>

   
  )
}


export default ContactScreen


const styles = StyleSheet.create({

    inputField:{
      width:"100%",
      height:45,
      backgroundColor:"white",
      borderRadius:3,
      fontSize:18,
      paddingHorizontal:10
    },
    messageInput:{
      width:"100%",
      height:70,
      paddingHorizontal: 10,
       paddingVertical: 8,
      backgroundColor:"white",
      borderRadius:3,
      fontSize:18,
     
    },
    submitBtn:{
      width:"100%",
      height:60,
      backgroundColor:"#FF0000",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:3,
      flexDirection:"row",
      gap:5
    }
})