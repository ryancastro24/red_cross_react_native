import React from 'react'
import { View,ScrollView,Text } from 'react-native'
import MyText from '../components/MyText'
import MySubheader from '../components/MySubheader'
import MyImage from '../components/MyImage'
const Module8 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{gap:8}}>



            <View>
                <MySubheader>Types</MySubheader>
            </View>


            <View style={{gap:8,marginTop:15}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>Head Injury</Text>    
                <MyText>A head injury is potentially dangerous,if not properly treated, injuries that seem minor could become life threatening. Head injuries include scalp wounds , skull fructures and brain injuries.</MyText>
            </View>


            <View style={{gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>Concussion</Text>    
                <MyText>
                    A concussion involves a temporary loss of brain function from a blow received by a victim to the head. 
                    Loss of consciousness may not always occur, but it's after-effects can be easily recognized.
                </MyText>
            </View>


            <MyImage imageSource={require(`../assets/head injury.jpg`)} />

            <View style={{gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>Spinal Injury </Text>    
                <MyText>
                   Spine injuries often fracture the vertebrate and sprain the ligaments
                </MyText>
            </View>



            
                    
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Prevent injuries to the head, neck and back by practicing these safety guidelines: </Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <MyText>- Wear safety belts (lap and shoulders restraints) and place children in car safety seats</MyText>
                        <MyText>- Wear approved helmets, eyewear, faceguards and mouth guards </MyText>
                        <MyText>- Climb steps carefully to prevent slipping or falling  </MyText>
                        <MyText>- Obey rules in sports and recreational activities</MyText>
                        <MyText>- Avoid inappropriate alcohol use</MyText>
                        <MyText>- Inspect work and recreational equipment regularly</MyText>
                        <MyText>- Think and talk about safety.</MyText>
                       
                    </View>
            </View >





          










        </View>

    </ScrollView>
  )
}

export default Module8