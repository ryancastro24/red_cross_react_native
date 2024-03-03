import React from 'react'
import { View,ScrollView,Text } from 'react-native'
import MyText from '../components/MyText'
import MySubheader from '../components/MySubheader'
import MyImage from '../components/MyImage'
const Module12 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:10}}>



        <View style={{gap:10}}>
            <MySubheader>Emegency Preparedness</MySubheader>
            <Text style={{fontSize:22,marginTop:15}}>Emergency Evacuation Drill</Text>
            <MyText>A physical or mental exercise aimed at perfecting facility or skill especially by regular practice.</MyText>
        </View>


        <View style={{gap:8}}>
            <Text style={{fontSize:22}}>Three types of Drill</Text>
            <View style={{gap:8,paddingLeft:8}}>

                <MyText>1.Scheduled Drill</MyText>
                <MyText>2.Unannounced Drill</MyText>
                <MyText>3.In-Services Drills</MyText>
                
            </View>
        </View>



        <View style={{gap:10,marginTop:20}}>
            <MySubheader>Emergency Childbirth</MySubheader>
           
            <MyText>Emergency Childbirth occurs when delivery is unexpectedly and you cannot get medical help in time.</MyText>
        </View>



        <View style={{gap:8}}>
            <Text style={{fontSize:22}}>Causes of Emergency Childbirth</Text>
            <View style={{gap:8}}>

                <MyText>- Rapture tubal pregnancy with concealed haemorrhage into the abdominal cavity.</MyText>
                <MyText>- Unsual bleeding  from the vagina at any stage.</MyText>
                <MyText>- Convusions associated with pregnancy.</MyText>
                <MyText>- Miscalculations in the anticipated delivery.</MyText>
                <MyText>- Premature onset of labor after an accident.</MyText>
                <MyText>- Delay in transportation.</MyText>
                <MyText>- Other factors which may abbreviate delivery.</MyText>
                
            </View>
        </View>




        <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6}}>
                        <Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>Signs and Symptoms</Text>

                        <View style={{gap:8,marginTop:15}}>
                            <Text style={{fontSize:18,color:"white"}}>- If labor contractions are approximately 2 minutes apart</Text>
                            <Text style={{fontSize:18,color:"white"}}>- If the woman is straining or pushing down with contractions</Text>
                            <Text style={{fontSize:18,color:"white"}}>- If the woman is crying out constantly</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Warning from the woman that the baby is coming</Text>
                          
                            
                        </View>
        </View>
                        
                        




        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Materials and supplies needed:</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:22,fontWeight:"bold"}}>At home en route to the hospital</Text>
                        <MyText>- Assemble clean cloth, plastic bags or other materials  to protect bed clothes or car uphoistery</MyText>
                        <MyText>- Clean towels, one or two folded sheets</MyText>
                        <MyText>- Set of sterile cord ties or sterilized shoelaces.</MyText>
                        <MyText>- New razor blade in protective paper.</MyText>
                        <MyText>- Diaper</MyText>
                        <MyText>- Alcohol</MyText>
                        <MyText>- Sanitary napkins</MyText>
                        <MyText>- Recieving blanket for the baby</MyText>
                        <MyText>- Safety pins</MyText>
                        
                    </View>


                    <View style={{gap:10,padding:10}}>
                        <Text style={{fontSize:22,fontWeight:"bold"}}>For a long automobile ride:</Text>
                        <MyText>- The mother should wear a nightgown or slip a robe (no other underclothing) and place a sanitary napkin or clean folded towel between her tights if the bag of water has broken or if the blood and mucuos are draining from the birth canal.</MyText>
                        <MyText>- Take along flashlight , if the trip will be at night.</MyText>
                        <MyText>- Blanket and pillow</MyText>
                        <MyText>- Container of some sort for the after birth.</MyText>
                       
                        
                    </View>
            </View >






            <View style={{gap:10,marginTop:20}}>
            <MySubheader>Aquatic Emergencies</MySubheader>
           
            <MyText>An emegency can happen to anyone in, on or aroudn water. Regardless of how good a person is at swimming, anyone can ge into trouble because of a sudden illness or injury.</MyText>
        </View>





        <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6}}>
                        <Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>Causes of Drowning</Text>

                        <View style={{gap:8,marginTop:15}}>
                            <Text style={{fontSize:18,color:"white"}}>- Panic</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Exhaustion in the water</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Losing control and getting swept into water that is too deep</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Losing support (as in a sinking boat)</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Getting trapped or entangled in the water</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Using drugs or alcohol before getting into the water</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Suffering from a medical emergency while in the water</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Using poor judgement while in the water</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Hypothermia</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Trauma</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Having a diving accident</Text>
                          
                            
                        </View>
        </View>
                        
                   


        <View style={{gap:10}}>
                <Text style={{fontSize:22,}}>Emergency Actions</Text>
                <Text style={{fontSize:20,fontWeight:"bold"}}>Near-Drowning</Text>

                <View style={{paddingLeft:8,gap:8}}>
                    <Text style={{fontSize:18,}}>- Make sure that the scene is safe</Text>
                    <Text style={{fontSize:18,}}>- Always check first to see whether a lifeguard or other trained professional is present before helping someone who may be having trouble in the water. </Text>
                    <Text style={{fontSize:18,}}>- DO NOT swim out to a victim unless you have the proper training, skills and equipment.</Text>
                    <Text style={{fontSize:18,}}>- If the appropriate safety equipment is not available and there is a chance that you cannot safely help a person in trouble, call for help immediately.</Text>
                    <Text style={{fontSize:18,}}>- If you must assist someone who is having trouble in the water, tou must have the appropriate equipment both for your own safety and the victim's</Text>
                    <Text style={{fontSize:18,}}>- Send someone else to call the local emergency number while you start the rescue.</Text>
                </View>

                <View style={{gap:8,marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Submerged Victim</Text>
                    <MyText>If a victim is not near the bottom of the pool in deep water, call for trained help immediately.</MyText>

                        <View style={{gap:8,}}>

                        <Text style={{fontSize:18,}}>- If the victim is in shallow water that is less than chest deep, carefully wade into the water with some kind of flotation equipment. </Text>
                        <Text style={{fontSize:18,}}>- Reach down and grasp the victim</Text>
                        <Text style={{fontSize:18,}}>- Pull the victim to the surface</Text>
                        <Text style={{fontSize:18,}}>- Turn the victim face-up and bring him on her to safety.</Text>
                        <Text style={{fontSize:18,}}>- Remove the victim from the water.</Text>
                        <Text style={{fontSize:18,}}>- Provide emergency care.</Text>
                            
                        </View>
                </View>
        </View>




   
















        </View>
    </ScrollView>
  )
}

export default Module12