import React from 'react'
import { View,ScrollView,Text } from 'react-native'
import MyText from '../components/MyText'
import MySubheader from '../components/MySubheader'
import MyImage from '../components/MyImage'
const Module10 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{gap:10}}>



            <View style={{gap:8}}>
                <MySubheader>Stroke</MySubheader>

                <MyText>A stroke is a disruption of blood flow to a part of the brain which cause permanent damage to the brain tissue. This is also called a cerebrovascular accident (CVA).</MyText>
              <MyImage  imageSource={require(`../assets/stroke.jpg`)} />

            </View>


            <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6,gap:8}}>
                        <Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>Assesement </Text>

                        <Text style={{fontSize:18,color:"white"}}>For Stroke Assesment , think F.A.S.T, which stands for the following: </Text>

                        <View style={{gap:8}}>
                            <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>F - Face</Text>
                            <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>A - Arm</Text>
                            <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>S - Speech</Text>
                            <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>T - Time</Text>
                        </View>
            </View>


            

            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management </Text>
                <Text style={{fontSize:18}}>Recognize the "signals" and take actions:</Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <Text style={{fontSize:18}}>- Call the local emegency number immediately Minutes count!</Text>
                        <Text style={{fontSize:18}}>- Have the person stop what he or she is doing and have them rest comfortably by sitting or lying down</Text>
                        <Text style={{fontSize:18}}>- Give the  victim supportive  care and reassurance</Text>
                        <Text style={{fontSize:18}}>- Be prepared  to perform CPR if the victim becomes unresponsive</Text>
                        
                                               
                </View>

          
             </View>





            

                    
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <MyText>- Sudden numbness or weakness in the face, arm or leg, especially on one side of body.</MyText>
                        <MyText>- Sudden confusion, trouble speaking or understanding.</MyText>
                        <MyText>- Sudden trouble seeing with one or both eyes.</MyText>
                        <MyText>- Sudden trouble walking, dizzines, loss of balance or coordination.</MyText>
                        <MyText>- Sudden severe headache with no known cause.</MyText>
                       
                    </View>
            </View >









            <View style={{gap:8}}>
                <MySubheader>Diabetic Emegergencies</MySubheader>

                <MyText>Diabitis is the inability of the body to change sugar(glocuse) from food into energy.</MyText>
              <MyImage  imageSource={require(`../assets/diabetes.jpg`)} />

            </View>




            <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6,gap:8}}>
                        <Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>Types & Causes</Text>

                        <View style={{gap:8}}>
                            <Text style={{fontSize:18,color:"white"}}>- Too much sugar in the blood (hyperglycemia). The person may not  have taken enough insulin or may be reacting adversely to a large meal that is high in carbohydrates.</Text>
                            <Text style={{fontSize:18,color:"white"}}>- Too little sugar in the blood (hypoglycemia). The  person may have taken too much insulin.</Text>
                            
                        </View>
            </View>





                     
            <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <MyText>- First check and determine if there are any life-threatening condition.</MyText>
                        <MyText>- A person with diabeties who is experiencing  a diabetic emergency must be instructed to test his or her blood glocose level.</MyText>
                        <MyText>- A victim experiencing  a diabetic emergency due to hypoglycemia must be encougrage to treat himself/herself 
                          with food or drink that contains sugar. The same action is advised if the condition still is to be determined or still remains unknown (Are they hypogycemia or hyperglycemia?).
                        </MyText>
                        <MyText>- If the diabetic person is concious and is able to swallow  and then states that they need sugar.</MyText>
                        <MyText>- If the person in unconscious or is about to lose consciousness call the local emergency number. Maintain  open airway and do not give anything by mouth.</MyText>
                       
                    </View>
            </View >







            <View style={{gap:8}}>
                <MySubheader>Seizures</MySubheader>

                <MyText>Seizure is when the normal functions of the brain are disrupted by injury, disease, fever, poisoning, or infection, and the electrical activity of the brain becomes irregular.</MyText>
            
            </View>



           <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6}}>
                        <Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>Types & Causes</Text>

                        <View style={{gap:8,marginTop:15}}>
                            <Text style={{color:"white",fontSize:18,}}>- Choronic - This condition occurs suddenly and without warning</Text>
                            <Text style={{color:"white",fontSize:18,}}>- Fertile - This condition brings about a rapid increase in body temperature </Text>
                        </View>
          </View>





            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management </Text>
                <Text style={{fontSize:18}}>Recognize the "signals" and take actions:</Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <MyText>- Reassure the victim that you are going to help</MyText>
                        <MyText>- Remove nearby objects that might cause injury</MyText>
                        <MyText>- Protect the victim's head by placing a thinly folded towel or piece of clothing beneath it.</MyText>
                        <MyText>- Do not hold or restrain the patient when a  seizure is in progress</MyText>
                        <MyText>- Do not place anything between the victim's teeth or put anything in the victim's mouth.</MyText>
                        <MyText>- Loosen clothing and fan the victim if the seizure  was caused by a sudden rise in body temperature.</MyText>
                        <MyText>- Ensure that the victim's airway is open and check for breathing and other injuries once the seizure is over.</MyText>
                        <MyText>- Stay and watch over the victim until the victim is fully conscious</MyText>
                        
                                               
                </View>

          
             </View>





           <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <MyText>- Unusual sensations or feelings such as visual hallucination</MyText>
                        <MyText>- Irregular breathing patterns</MyText>
                        <MyText>- Drooling</MyText>
                        <MyText>- Upward rolling of the eyes</MyText>
                        <MyText>- Rigid body</MyText>
                        <MyText>- Sudden , uncontrollable , ryhthmic muscle contractions and convulsions</MyText>
                        <MyText>- Decrease level of responsiveness</MyText>
                        <MyText>- Loss of bladder or bowed control</MyText>
                       
                    </View>
            </View >









        

            <View style={{gap:8,marginTop:20}}>
                <MySubheader>Anaphylaxis</MySubheader>

                <MyText>An allergy i caused by the over-activity of the immune system against specific antigens.</MyText>
              

            </View>



          
           <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6}}>
                        <Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>Causes</Text>

                        <View style={{gap:8,marginTop:15}}>
                            <Text style={{color:"white",fontSize:18,}}>- Bee or insect venom</Text>
                            <Text style={{color:"white",fontSize:18,}}>- Pollen </Text>
                            <Text style={{color:"white",fontSize:18,}}>- Animal dander</Text>
                            <Text style={{color:"white",fontSize:18,}}>- Latex</Text>
                            <Text style={{color:"white",fontSize:18,}}>- Certain antibodies and drugs </Text>
                            <Text style={{color:"white",fontSize:18,}}>- Certain foods like nuts , peanuts shelfish and dairy products </Text>
                        </View>
          </View>




          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <MyText>- Skin becomes swollen and turns red</MyText>
                        <MyText>- Difficulty in breathing , wheezing or shortness of breath </MyText>
                        <MyText>- Tight Feeling in the chest and throat</MyText>
                        <MyText>- Swelling of the face, throat or tongue</MyText>
                        <MyText>- Weakness, dizziness or confusion</MyText>
                        <MyText>- Rashes or hives</MyText>
                        <MyText>- Low blood pressure</MyText>
                        <MyText>- Shock</MyText>
                       
                    </View>
            </View >




        
            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management </Text>
                <Text style={{fontSize:18}}>Recognize the "signals" and take actions:</Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <MyText>- Call the local emergency number</MyText>
                        <MyText>- Calm and reassure the person</MyText>
                        <MyText>- Help the person to rest in the most confortable position breathing</MyText>
                        <MyText>- Monitor the person's breathing. Look for any changes in his or her condition</MyText>
                        <MyText>- Assist the person with the use of a prescribed epinephrine auto-injector, if available</MyText>
                        <MyText>- Give care for life-threatening emergencies</MyText>
                        <MyText>- Document any changes in the person's condition over time</MyText>
                      
                        
                                               
                </View>

          
             </View>





        

             <View style={{gap:8,marginTop:30}}>
                <MySubheader>Fainting</MySubheader>

                <MyText>Fainting is a partial or complete loss of consciousness resulting from a temporary reduction of blood flow to the brain.</MyText>
              

            </View>








        
            <View style={{width:"100%",backgroundColor:"#7E0303", padding:12,borderRadius:6}}>
                        <Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>Causes</Text>

                        <View style={{gap:8,marginTop:15}}>
                            <Text style={{color:"white",fontSize:18,}}>- An emotionaly stressful event</Text>
                            <Text style={{color:"white",fontSize:18,}}>- Pain </Text>
                            <Text style={{color:"white",fontSize:18,}}>- Specific medical conditions such as heart disease</Text>
                            <Text style={{color:"white",fontSize:18,}}>- Standing for long periods of time or overexertion</Text>
                            <Text style={{color:"white",fontSize:18,}}>- Pregnant wowen and the elderly are more likely than others to faint when suddenly changing positions</Text>
                            
                        </View>
          </View>





          
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <MyText>- Light-headedness or dizziness </MyText>
                        <MyText>- Signs of shock, such as pale, cool or moist skin</MyText>
                        <MyText>- Nausea and numbness or tingling in the fingers and toes</MyText>
                       
                    </View>
            </View >





          
            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management </Text>
                <View style={{marginTop:10,gap:10}}>
                        
                        <MyText>- Position the victim on his or her back</MyText>
                        <MyText>- Keep the victim in a lying position</MyText>
                        <MyText>- Loosen any restrictive clothing,such as a tie or a buttone-up collar</MyText>
                        <MyText>- Check for any other life-threatening and non-life-threatening conditions</MyText>
                        <MyText>- Do not give the victim anyhting to eat or drink</MyText>
                        
                      
                        
                                               
                </View>

          
             </View>






        </View>
    </ScrollView>
  )
}

export default Module10