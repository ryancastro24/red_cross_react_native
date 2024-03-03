import React from 'react'
import { View,Text,ScrollView,StyleSheet  } from 'react-native'
import MyText from '../components/MyText'
import MySubheader from '../components/MySubheader'
import MyImage from '../components/MyImage'
const Module4 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{gap:8}}>
                


        <View>
            <MySubheader>Foreign-body Airway Obstructions</MySubheader>

        </View>


        <MyText>
        Also known as choking, it is a common breathing emergency that occurs when the person's airway is partially or completely blocked by a foreign object, such as a piece of food or a small toy; by swelling in the mouth or throat; or by fluids, such as vomit or blood.
        </MyText>

        
        <View style={{marginTop:15,gap:10}}>
            <Text style={{fontSize:20,fontWeight:"700"}}>Two Types of Obstruction</Text>
            
            <Text style={{fontSize:16,lineHeight:25,textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>1.Anatomical</Text> Obstruction. When tongue drops back and obstructs the throat. Other causes are acute asthma, croup, diphtheria, swelling and whooping cough.</Text>
            <Text style={{fontSize:16,lineHeight:25,textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>2.Mechanical Obstruction.</Text> When foreign objects lodged in the pharynx or airways: solid or liquid accumulate in the back of the throat.</Text>
       
        </View>



        
        <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Classification of Airway Obstruction</Text>
                        </View>
                        
                
                    <View style={{marginTop:15,gap:10,padding:10}}>
                    
                        <Text style={{fontSize:16,lineHeight:25,textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>1.Mild Airway Obstruction</Text> is a type of obstruction in which patient can still talk, cough, make wheezing sounds, and answer the question, "Are you choking?"</Text>
                        <Text style={{fontSize:16,lineHeight:25,textAlign:"justify"}}><Text style={{fontWeight:"bold"}}>2.Severe Airway Obstruction</Text>  is characterized by poor air exchange and increased breathing difficulty, inability to speak, cough and breathe.</Text>
                
                    </View>
            
        </View >




        <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,gap:8,borderRadius:5}}>
                    <Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>Causes:</Text>

                    <Text style={{color:"white",fontSize:16}}>The most common cause of choking in adults is airway obstruction which may be caused by the following:</Text>
        
                    <View style={{gap:7}}>
                                <Text style={{color:"white",fontSize:16}}>- Swallow large pieces of poorly chewed food.</Text>
                                <Text style={{color:"white",fontSize:16}}>- Drinking alcohol</Text>
                                <Text style={{color:"white",fontSize:16}}>- Wearing dentures</Text>
                                <Text style={{color:"white",fontSize:16}}>- Eating while talking excitedly, laughing, or eating too fast</Text>
                                <Text style={{color:"white",fontSize:16}}>- Walking, playing, or running with food or objects in the mouth.</Text>
                                <Text style={{color:"white",fontSize:16}}>- In infants and children, choking occurs while eating or by putting non-food items such as coins or toys inside the mouth while playing.</Text>
                              
                                
                    </View>
        </View>

        
        <View style={{marginTop:15}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Back blows & Abdominal/Chest thrust.</Text>
        </View>



        <MyText>These are first aid procedure performed on a person who is choking. This is done by applying pressure on the upper back and upper abdomen or on the chest at the center of the breastbone from the back to remove the object that is causing the obstruction.</MyText>


        <View style={{marginTop:15,gap:7}}>
            <MyImage imageSource={require(`../assets/30.Back blows & Abdominal.jpg`)} />
            <MyImage imageSource={require(`../assets/31..Back blows & Abdominal.jpg`)} />
            <MyImage imageSource={require(`../assets/32.Back blows & Abdominal.jpg`)} />
            <MyImage  imageSource={require(`../assets/33..Back blows & Abdominal.jpg`)}/>
        </View>



        

        <View style={{marginTop:25,gap:8}}>
            <MySubheader>Respiratory Arrest</MySubheader>

            <MyText>Respiratory Arrest is a type of breathing emergency which occurs when breathing  has stopped.</MyText>
        </View> 


        <View style={{gap:8}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Rescue Breathing</Text>

            <MyImage imageSource={require(`../assets/34. Rescua Breathing.jpg`)} />

            <MyText>
                a technique of breathing air into  a person to supply him  or her with the oxygen needed to survive. Rescue breathing  is given to a victim who are not breathing or with inadequate breathing but still have pulse.
            </MyText>
        </View>






        <View style={{marginTop:25,gap:8}}>
            <MySubheader>Asthma Attack</MySubheader>

            <MyText>Asthma is an illness in which certain substances or conditions called "triggers" cause infamenation and constricition  of the airways, making breathing difficcult</MyText>


            <MyImage imageSource={require(`../assets/35.astma attack.jpg`)}/> 
      
        </View> 


     

                    
        
        <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{marginTop:15,gap:10,padding:10}}>
                        <MyText>- Hoarse whistling sound during exhalation (wheezing)</MyText>
                        <MyText>- Trouble breathing or shortness of breath</MyText>
                        <MyText>- Rapid shallow breathing</MyText>
                        <MyText>- Sweating</MyText>
                        <MyText>- Tightness in the chest</MyText>
                        <MyText>- Inability to talk without stopping for a breath</MyText>
                    </View>


                
        </View >



        <View style={{gap:8,marginTop:15}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>First Aid Management</Text>
                    
                        <View style={{gap:8}}>
                            <MyText>- Remain Calm</MyText>
                            <MyText>- Help the person to sit comfortably</MyText>
                            <MyText>- Loosen any tight clothing around the neck and abdomen</MyText>
                            <MyText>- Assist the person with his or her prescribed quick relief medication under the following conditions</MyText>

                                    <View style={{gap:7,paddingLeft:10}}>
                                        <MyText>1. The Victim states that he or she is having an asthma attack and has medications (e.g a prescribed bronchodilator) or inhaler.</MyText>
                                        <MyText>2. The Victim identifies  the medication and is unable to administer it without assistance</MyText>
                                    </View>
                        
                        </View>
        </View>



        
        <View style={{marginTop:25,gap:8}}>
            <MySubheader>Hyperventilation</MySubheader>

            <MyText>Hyperventilation occurs when a person's breathing is faster and more shallow than normal. When this happen, the body does not take in enough oxygen to meet its  demands</MyText>
       
            <MyImage imageSource={require(`../assets/35.hyperventation.jpg`)} />
        </View>

            




        <View style={{gap:8,marginTop:15}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>First Aid Management</Text>
                    
                        <View style={{gap:8}}>
                            <MyText>- Help the person rest in comfortable position</MyText>
                            <MyText>- If the person is concious, check for other conditions</MyText>
                            <MyText>- Try to reassure the person to reduce their anxiety</MyText>
                            <MyText>- If bystanders are present ask them what they know about the person's condition</MyText>
                            <MyText>- Tell the person to relax and breathe slowly</MyText>
                            <MyText>- Seek medical help immediately</MyText>
                        

                        
                        </View>
        </View>





        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{marginTop:15,gap:10,padding:10}}>
                        <MyText>People who are hyperventilating feel as if they cannot ger enough air. Often they are afraid and anxious or seem confused. They may say that they feel dizzy or that  their fingers and toes feel numb or tingly</MyText>
                    </View>
        </View >







            </View>
    </ScrollView>
  )
}

export default Module4