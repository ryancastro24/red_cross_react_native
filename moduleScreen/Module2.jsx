import React from 'react'
import { View,Text,ScrollView,StyleSheet } from 'react-native'
import MyText from '../components/MyText'
import MySubheader from '../components/MySubheader'
import MyImage from '../components/MyImage'
const Module2 = () => {
  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:7}}>

            <MyText>
            An emergency scene can be overwhelming. In order for the first aider to help effectively, it is important that actions have to be prioritized and planned well
            </MyText>


            <View style={{marginTop:15,gap:8}}>
                <MySubheader>
                    Scene Size-up
                </MySubheader>

                <MyImage />
            </View>


            <View style={{gap:8,paddingLeft:10,marginTop:15}}>
                <Text style={{fontSize:18}}>I. Scene Safety</Text>
                <Text style={{fontSize:18}}>II. Knowing What Happened</Text>
                <View style={{paddingLeft:20}}>
                    <MyText>- Cause of Injury</MyText>
                    <MyText>- Nature of Illness</MyText>
                </View>
                <Text style={{fontSize:18}}>III. Role of bystanders</Text>
                <Text style={{fontSize:18}}>IV. Number of casualties</Text>
                <Text style={{fontSize:18}}>V. Asking permission or consent</Text>
            </View>




            
            <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>To obtain consent, do the following:</Text>
                    </View>
                    <View style={{padding:10}}>
                            <View style={{gap:7}}>
                                <MyText>- Identify yourself to the victim.</MyText>
                                <MyText>- State your level of training.</MyText>
                                <MyText>- Ask the victim whether you may help.</MyText>
                                <MyText>- Explain what you observe.</MyText>
                                <MyText>- Explain what you plan to do.</MyText>
                        </View>

                    </View>
            
                </View >




                <View style={{marginTop:15,gap:8}}>
                        <MySubheader>
                            Primary Assessment
                        </MySubheader>

                        <MyImage />
                 </View>

                 <View style={{marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>1.Assessing Responsiveness: </Text>
                    <Text style={{fontSize:16,fontStyle:"italic"}}>A patient's response level can be summarized in the AVPU mnemonic as follows:</Text>
                    
                    <View style={{gap:7}}>
                                <MyText>- <Text style={{fontWeight:"bold"}}>A</Text>- Alert</MyText>
                                <MyText>- <Text style={{fontWeight:"bold"}}>V</Text>- Responsive to Voice</MyText>
                                <MyText>- <Text style={{fontWeight:"bold"}}>P</Text>- Responsive to Pain</MyText>
                                <MyText>- <Text style={{fontWeight:"bold"}}>U</Text>- Unresponsive/Unconscious</MyText>
                             
                        </View>
                        
                 </View>




                    
                <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12,marginTop:15}}>
                    <Text style={{color:"white",fontSize:23,fontWeight:"bold"}}>Primary assessment</Text>
                    <Text style={{color:"white",fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>can be done with the patient in the position in which you find him or her,  and begins with checking the patient's responsiveness.</Text>
                    
                </View >



                
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>2.Activate Medical Help </Text>
                    <Text style={{fontSize:16,fontStyle:"italic"}}>Ask someone to call for local emergency number and get an Automated External Defibrillator (AED).</Text>
    
                 </View>



                      
                <View style={{width:"100%",backgroundColor:"#7E0303",borderRadius:4, padding:12,marginTop:15}}>
                    <Text style={{color:"white",fontSize:23,fontWeight:"bold"}}>Call First or Care First </Text>
                    <Text style={{color:"white",fontSize:16,lineHeight:20 ,marginTop:7 ,textAlign:"justify"}}>If you are ALONE, it is important to know when to call during emergencies. Call First situations are likely to be cardiac emergencies, where time is a critical factor. In Care First situations, the conditions are often are related to breathing emergencies.</Text>
                    
                </View >




            

                <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Information to be remembered in activating medical help:</Text>
                    </View>
                    <View style={{padding:10}}>
                            <View style={{gap:7}}>
                                <MyText>- What happened?</MyText>
                                <MyText>- Location of emergency?</MyText>
                                <MyText>- Number of persons injured or ill?</MyText>
                                <MyText>- Cause and extent of injury and nature of illness and first aid given?</MyText>
                                <MyText>- Telephone number from where call is made?</MyText>
                                <MyText>- Name of person who called medical help (person must identify him/herself and hang up the phone last)</MyText>
                        </View>

                    </View>
            
                </View >



                 
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>3. Airway </Text>
                    <Text style={{fontSize:16,fontStyle:"italic"}}>An open airway allows air to enter the lungs for the person to breathe. If the airway is blocked, the person cannot breathe.</Text>
                    <MyImage/>
                    <MyImage/>
                 </View>


                    
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>4. Breathing </Text>
                    <Text style={{fontSize:16,fontStyle:"italic"}}>While maintaining an open airway, quickly check an unconscious person for breathing by doing the Look, Listen and Feel (LLF) technique for no more than 10 seconds.</Text>
                    <MyImage/>
                 </View>



                 <View style={{marginTop:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>5. Circulation </Text>
                    <View style={{gap:4,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- Pulse</Text>
                        <MyText style={{fontSize:16}}>Check for definitive pulse at carotid area for adult or child, while brachial for infant (Applicable for Professional Rescuers and Healthcare Providers).</MyText>
                    </View>
                    <View style={{gap:4,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- Bleeding</Text>
                        <MyText style={{fontSize:16}}>Quickly look for severe bleeding by looking over the person's body from head to toe for signals such as blood-soaked clothing or blood spurting out of a wound.</MyText>
                    </View>
                    <MyImage/>

                    <View style={{gap:4,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- Shock</Text>
                        <MyText style={{fontSize:16}}>If left untreated, shock can lead to death. Always look for the signals of shock whenever you are giving care.</MyText>
                    </View>
                    
                    <View style={{gap:4,marginTop:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- Skin color, temperature and moisture</Text>
                        <MyText style={{fontSize:16}}>Assessment of skin temperature, color, and condition can tell you more about the patient's circulatory system.</MyText>
                    </View>


                    <MyImage/>
                 </View>


                
            <View style={{marginTop:15,gap:8}}>
                <MySubheader>
                    Secondary Assessment
                </MySubheader>

                <MyText>If you determine that an injured or ill person is not in an immediately life-threatening condition, you can begin to check for other conditions that may need care.</MyText>
            </View>

            
            <View style={{gap:6,marginTop:15}}>
                <MyText><Text style={{fontWeight:"bold"}}>Interviewing</Text> the person and bystanders</MyText>
                <MyImage />
            </View>


            <View style={{gap:6,marginTop:15}}>
                <MyText>Checking the person from <Text style={{fontWeight:"bold"}}>Head to Toe</Text></MyText>
                <MyImage />
            </View>

            <View style={{gap:6,marginTop:15}}>
                <MyText>Checking for <Text style={{fontWeight:"bold"}}>Vital Signs</Text></MyText>
                <MyImage />
            </View>
            


               
            <View style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                    <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>To gain essential information about the patient's medical history, ask the patient questions based on the SAMPLE approach:</Text>
                    </View>
                    <View style={{padding:10}}>
                            <View style={{gap:7}}>
                                <MyText><Text style={{fontWeight:'bold'}}>S</Text> - Signs of symptoms</MyText>
                                <MyText><Text style={{fontWeight:'bold'}}>A</Text> - Allergies</MyText>
                                <MyText><Text style={{fontWeight:'bold'}}>M</Text> - Medications</MyText>
                                <MyText><Text style={{fontWeight:'bold'}}>P</Text> - Pertinent past medical history</MyText>
                                <MyText><Text style={{fontWeight:'bold'}}>L</Text> - Last intake and output</MyText>
                                <MyText><Text style={{fontWeight:'bold'}}>E</Text> - Events leading up to the injury or illness</MyText>
                                
                        </View>

                    </View>
            
                </View >
















        </View>

    </ScrollView>
  )
}

export default Module2