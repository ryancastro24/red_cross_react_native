import React from 'react'
import { View,Text ,StyleSheet,ScrollView} from 'react-native'
import MyText from '../components/MyText'
import MySubheader from '../components/MySubheader'
import MyImage from '../components/MyImage'
const Module1 = () => {
  return (
   

    <ScrollView showsVerticalScrollIndicator={false}>
         <View style={{gap:7}}>
        <MySubheader style={styles.subheader}>First Aid</MySubheader>
        <MyImage imageSource={require(`../assets/first aid.jpg`)}/>
       
        <MyText style={styles.p}>Is an immediate help provided to a sick or injured person until professional medical help arrives or becomes available.</MyText>
        
      
        
        <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12}}>
            <Text style={{color:"white",fontSize:23,fontWeight:"bold"}}>Scope and Limitation</Text>
            <Text style={{color:"white",fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>First aid does not imply medical treatment and is by no means a replacement for it.</Text>
            
        </View >

            <View style={{marginTop:25,gap:7}}>
                <MySubheader>Basic Life Support</MySubheader>
                <MyText>An emergency procedure that consists of recognizing respiratory or cardiac arrest or both and the proper application of CPR to maintain life until a victim recovers or advanced life support is available.</MyText>
            </View>

            <MyImage imageSource={require(`../assets/Cardiac arrest1.png`)}/>

            <View style={{marginTop:25,gap:7}}>
                <MySubheader>Objectives of First Aid</MySubheader>
                <MyText>- Preserve Life</MyText>
                <MyText>- Prevent further harm and complications</MyText>
                <MyText>- Seek immediate medical help</MyText>
                <MyText>- Provide Reassurance</MyText>
            </View>




            <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>According to Article 12 no.4 of Act No.3815 of the Philippine Revised Penal Code Book One</Text>
                    </View>
                    <View style={{padding:10}}>
                        <MyText>
                        "any person who, while performing a lawful act with due care, causes an injury by mere accident without fault or intention of causing it” is exempt from criminal liability.
                        </MyText>

                    </View>
            
                </View >




            
            <View style={{marginTop:25,gap:7}}>
                <MySubheader>Legal Concerns</MySubheader>
                <MyText>- Consent</MyText>
                <MyText>- Duty to Act</MyText>
                <MyText>- Negligence</MyText>
                <MyText>- Confidentiality</MyText>
                <MyText>- Abandonment</MyText>
            </View>



            

            <View style={{width:"100%",borderWidth:1,marginBottom:20, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>According to Article 275 Nos. 1 & 2 of Act No. 3815 of the Philippine Revised Penal Code Book Two:
"Abandonment of person in danger and abandonment of one's own victim."</Text>
                    </View>
                    <View style={{padding:10, gap:7}}>
                       <MyText>1. Anyone who shall fail to render assistance to any person whom he shall in an uninhabited place wounded or in danger of dying, when he can render such assistance without detriment to himself, unless such omission shall constitute a more serious offense.</MyText>
                        <MyText>
                            2. Anyone who shall fail to help or render assistance to another whom he has accidentally wounded or injured.
                        </MyText>
                    </View>
            
                </View >







                <MySubheader style={styles.subheader}>Health Hazards and Risks</MySubheader>
                <Text style={{fontSize:22}}>Common Transmittable Diseases</Text>


                <MyText>Helping others is not without risks and hazards, most important of which is the risk of contracting an infectious disease. Infectious diseases are those that can spread from one person to another and develop when germs invade the body and cause illness.</MyText>


                   
                <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12}}>
                    <Text style={{color:"white",fontSize:23,fontWeight:"bold"}}>Dieseas Transmission</Text>
                    <Text style={{color:"white",fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>Infectious diseases are those that can spread from one person to another through the following ways: </Text>
                    <View style={{marginTop:10,gap:7}}>
                        <Text style={{color:"white",fontSize:16}}>- Direct contact</Text>
                        <Text style={{color:"white",fontSize:16}}>- Indirect contact</Text>
                        <Text style={{color:"white",fontSize:16}}>- Airborne transmission</Text>
                        <Text style={{color:"white",fontSize:16}}>- Bites</Text>
                       
                    </View>

                </View >



                <View style={{gap:5,alignItems:"center",marginBottom:20}}>
                    <MyImage imageSource={require(`../assets/herpes.jpg`)}/>
                    <MyText>Herpes</MyText>
                </View>

                
                <View style={{gap:5,alignItems:"center",marginBottom:20}}>
                    <MyImage imageSource={require(`../assets/miningitis.jpg`)}/>
                    <MyText>Meningitis</MyText>
                </View>

                <View style={{gap:5,alignItems:"center",marginBottom:20}}>
                    <MyImage imageSource={require(`../assets/tuberculosis.jpg`)} />
                    <MyText>Tuberculosis</MyText>
                </View>

                <View style={{gap:5,alignItems:"center",marginBottom:20}}>
                    <MyImage imageSource={require(`../assets/hepatitis.jpg`)} />
                    <MyText>Hepatitis</MyText>
                </View>

                <View style={{gap:5,alignItems:"center",marginBottom:20}}>
                    <MyImage imageSource={require(`../assets/hiv.jpg`)} />
                    <MyText>Human Immune Deficiency Virus</MyText>
                </View>


            <View style={{gap:7}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>Prevention and Protection</Text>
                <MyText>Universal Precautions are set of strategies developed to prevent transmission of blood borne pathogens. Body Substance Isolation (BSI) are precautions taken to isolate or prevent risk of exposure from body secretions and any other type of body substance such as urine, vomit, faeces, sweat, or sputum. Personal Protective Equipment (PPE) is specialized clothing, equipment and supplies that keep you from directly contacting infected materials.</MyText>
            </View>


        </View>
    </ScrollView>
 
    
  )
}

export default Module1


const styles = StyleSheet.create({
  
    p:{
        fontSize:18,
        lineHeight:25,
        textAlign:"justify"
    }
})

