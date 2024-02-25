import React from 'react'
import { View,ScrollView,Text } from 'react-native';
import MyText from '../components/MyText';
import MySubheader from '../components/MySubheader';
import MyImage from '../components/MyImage';
const Module6 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:8}}>

        <View style={{width:"100%",backgroundColor:"#7E0303", padding:10,marginTop:15}}>
                    <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>
                        A wound is any physical injury involving a break in the layers of the skin. Wounds are generally classified as either closed or open.
                    </Text>
        </View>


           
        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Complications</Text>
                        </View>
                        
                    <View style={{gap:10,padding:10}}>
                        <MyText>- Bleeding</MyText>
                        <MyText>- Infection</MyText>
                        <MyText>- Tetanus</MyText>
                        <MyText>- Rabies</MyText>
                       
                    </View>
        </View >





            <View style={{marginTop:20,gap:8}}>
                <MySubheader>Closed Wound</MySubheader>

                <MyText>A closed wound is a wound where the outer layer of the skin is intact and the damage lies below the surface </MyText>
                <MyImage />
            </View>


            <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management</Text>
          
          <View style={{marginTop:10,gap:10}}>
                        <MyText>- Apply the ice pack</MyText>
                        <MyText>- Elevate the injured part</MyText>
                        <MyText>- Dont assume that all closed wounds are minor injuries</MyText>
                        <MyText>- Help the person to rest</MyText>
                        <MyText>- Do not give the person anything to eat or drunk</MyText>
                        <MyText>- Provide comfort and reassure the person</MyText>
                       
                    </View>
        </View>






        
        <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms</Text>
                        </View>
                        
                
                    <View style={{marginTop:15,gap:10,padding:10}}>
                        <MyText>- Tender, swollen, bruised or hard areas of the body</MyText>
                        <MyText>- Rapid,weak pulse</MyText>
                        <MyText>- Skin that feels cool or moist or looks pale or bluish</MyText>
                        <MyText>- Vomiting of blood or coughing up blood</MyText>
                        <MyText>- Excessive thirst</MyText>
                        <MyText>- An injured extremely that is blue or extremely pale</MyText>
                        <MyText>- Altered mental state</MyText>
                       
                    </View>
        </View >






        
        <View style={{marginTop:20,gap:8}}>
                <MySubheader>Open wound</MySubheader>
                <MyText>In an open wound , the outer layer of skin is broken. The break in the skin can be as minor as a scrape of the surface layer or as severe as a deep penetration</MyText>

                <MyImage />
            </View>




        <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management</Text>
          
          <View style={{marginTop:10,gap:10}}>
                        <MyText>General care for open wound includes controlling bleeding, preventing infection and using dressings and bandages correctly</MyText>
                    </View>
        </View>
        


        

        <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:20,fontWeight:"bold"}}>Minor Open Wounds</Text>
          
          <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18}}>- Use a barrier between your hand and the wound</Text>
                        <Text style={{fontSize:18}}>- Apply direct pressure</Text>
                        <Text style={{fontSize:18}}>- Wash abrasions  and other superficial wounds</Text>
                        <Text style={{fontSize:18}}>- Apply a Providone-iodine (PVP-1) antiseptic or if available, a triple antibiotic ointment or cream</Text>
                        <Text style={{fontSize:18}}>- Cover the wound with a sterile dressing</Text>
                        <Text style={{fontSize:18}}>- Wash your hands immediately afer giving care</Text>
                        
                    </View>
        </View>
        

        <View style={{marginTop:25,gap:8}}>
          <Text style={{fontSize:20,fontWeight:"bold"}}>Major Open Wounds</Text>
          
          <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18}}>- Call the emergency number</Text>
                        <Text style={{fontSize:18}}>- Put on PPE(Personal Protective Equipment)</Text>
                        <Text style={{fontSize:18}}>- Control bleeding by applying direct pressure or employing a pressure bandage</Text>
                        <Text style={{fontSize:18}}>- Monitor airway and breathing</Text>
                        <Text style={{fontSize:18}}>- Cover the wound with a sterile dressing</Text>
                        <Text style={{fontSize:18}}>- In cases where the injured party is in shock, keep him or her from experiencing chills or feeling overheated</Text>
                        <Text style={{fontSize:18}}>- Have the person rest comfortably and provide reassurance</Text>
                        <Text style={{fontSize:18}}>- Wash your hands immediately afer giving care</Text>
                    </View>
        </View>
        




          
        <View style={{marginTop:30,gap:8}}>
                <MySubheader>Burns</MySubheader>
                <MyText>Burns are injuries in the skin and to other body tissues that is  caused  by heat, chemicals ,electricity , or radiation</MyText>

                <MyImage />
            </View>





            <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Classification</Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <MyText>- Superficial (first-degree) burns </MyText>
                        <MyText>- Partial-thickness (second-degree) burns</MyText>
                        <MyText>- Full-thickness (third-degree) burns</MyText>
                       
                       
                    </View>
        </View >




    
        <View style={{marginTop:15,gap:8}}>
          <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management</Text>
          
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>Thermal Burns</Text>
                        <Text style={{fontSize:18}}>- Check the scene for safety</Text>
                        <Text style={{fontSize:18}}>- Stop the burning by removing the victim from source of the burns</Text>
                        <Text style={{fontSize:18}}>- Check for life-threatening conditions</Text>
                        <Text style={{fontSize:18}}>- Call the burns with large amounts of cold running water</Text>
                        <Text style={{fontSize:18}}>- Cover the burn loosely with a sterile dressing</Text>
                        <Text style={{fontSize:18}}>- Prevent infection, Do not break blisters</Text>
                        <Text style={{fontSize:18}}>- Apply a triple antibiotic ointment  if the person has no known allergies or sensitivities to the medication</Text>
                        <Text style={{fontSize:18}}>- Take steps to minimize shock</Text>
                        <Text style={{fontSize:18}}>- Comfort and reassure the victim</Text>
                        
                </View>


                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>Chemical Burns</Text>
                        <Text style={{fontSize:18}}>- Remove the chemical from the skin as quickly possible</Text>
                        <Text style={{fontSize:18}}>- Flush the burn with large amounts of cool running water</Text>
                        <Text style={{fontSize:18}}>- If an eye is burned by a chemical, flush the affected eye with water until advanced medical personnel take over</Text>
                        <Text style={{fontSize:18}}>- If possible, have the person remove contaminated clothes to prevent the spread  of infection while you continue to flush area.</Text>
                        
                        
                </View>
        </View>
        






























































        </View>

    </ScrollView>
  )
}

export default Module6