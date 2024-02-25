import React from 'react'
import { View,ScrollView,Text } from 'react-native'
import MyText from '../components/MyText'
import MySubheader from '../components/MySubheader'
import MyImage from '../components/MyImage'
const Module5 = () => {
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
          <View style={{gap:8}}>


        <View style={{marginTop:15}}>
          <MySubheader>Bleeding</MySubheader>
        </View>

        
        <View style={{gap:8}}>
          <MyText>Bleeding is the loss of blood escaping from the circulatory system</MyText>
          <MyText>Bleeding that is severe enough to critically reduce blood volume is life threathening.This can cause tissues  to die from the lack oxygen. Life threathening bleeding can either external or internal. External  bleeding occurs when a blood vessel is opened from the outside such as through a tear in the skin</MyText>
          <MyImage />
        </View>



        <View style={{marginTop:15}}>
          <Text style={{fontSize:22,fontWeight:"bold"}}>Techniques to Control Bleeding</Text>

          <View style={{gap:6,marginTop:10}}>
              <Text style={{fontSize:16}}>- Direct Pressure</Text>
              <Text style={{fontSize:16}}>- Pressure bandage</Text>
          </View>
       
        </View>




        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Types of Blood</Text>
                        </View>
                        
                
                    <View style={{marginTop:15,gap:10,padding:10}}>
                        <MyText>- Arterial Bleeding</MyText>
                        <MyText>- Venous Bleeding</MyText>
                        <MyText>- Capillary Bleeding</MyText>
                       
                    </View>
        </View >




        <View style={{marginTop:25}}>
          <MySubheader>Shock</MySubheader>
        </View>

      
        <View style={{gap:8 }}>
          <MyText>Shock is a condition in which the circulatory system fails to deliver enough oxygen-rich blood  to the body's tissues  and vital organs</MyText>
          <MyImage />
        </View>




        <View style={{marginTop:15}}>
           <Text style={{fontSize:22,fontWeight:"bold"}}>Causes</Text>

            <View style={{marginTop:15,gap:10}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>1. Loss of blood volume</Text>
                <MyText>Blood or fluid loss from blood vessels  decreases blodd volume, usually  as result of bleeding, and  results in adequate perfusion</MyText>
            </View>


            <View style={{marginTop:15,gap:10}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>2. Pump Failure</Text>
                <MyText>Poor pump function occurs when diseases or injury damages the heart</MyText>
            </View>

            <View style={{marginTop:15,gap:10}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>3. Dilation of peripheral blood vessels</Text>
                <MyText>Even though blood vessels dilate normally, it is inadequate  to fill the system and provide efficient perfusion</MyText>
            </View>
        </View>




        
        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{marginTop:15,gap:10,padding:10}}>
                        <MyText>- Restlessness or irritabilty</MyText>
                        <MyText>- Altered level of consciousness</MyText>
                        <MyText>- Pale, ashen or greyish color, moist skin</MyText>
                        <MyText>- Rapid breathing</MyText>
                        <MyText>- Rapid and weak pulse</MyText>
                        <MyText>- Excessive thirst</MyText>
                       
                    </View>
        </View >



        <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management</Text>
          
          <View style={{marginTop:10,gap:10}}>
                        <MyText>- Make the person lie down</MyText>
                        <MyText>- Control any external bleeding</MyText>
                        <MyText>- Legs may be raised 6 to 12 inches</MyText>
                        <MyText>- Help the person maintain normal body temperature</MyText>
                        <MyText>- Do not give the person anything to eat or drunk</MyText>
                        <MyText>- Reassure the person every so often.</MyText>
                       
                    </View>
        </View>






























          </View>




    </ScrollView>
  )
}

export default Module5