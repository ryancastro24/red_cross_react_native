
import { View,ScrollView,Text } from 'react-native'
import MyText from '../components/MyText'
import MySubheader from '../components/MySubheader'
import MyImage from '../components/MyImage'
const Module9 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View  style={{gap:8}}>

            <View>
                <MySubheader>Types</MySubheader>
            </View>

            <View style={{gap:8}}>

                <MyText>
                    A <Text style={{fontWeight:"bold"}}>strain</Text> or pulled muscles caused by the overstretching and tearing of muscles or tendons.
                    This usually involves muscles in the neck, back tight or the back of the lower leg.
                </MyText>
                

                <MyText>
                    A <Text style={{fontWeight:"bold"}}>sprain</Text> is the tearing of ligaments at a joint. The joints most easily injured are the ankle, knee, wrist and fingers.
                </MyText>


                
                <MyText>
                    A <Text style={{fontWeight:"bold"}}>fracture</Text> is a complete break, a chip or crack  in a bone. 
                    In general fractures are not life threatening. However, a breakage in the large bones, a severed artery,
                    and difficulties in breathing are dangerous signals to look out for. A fracture is either closed or open.
                    
                </MyText>


                <MyImage  imageSource={require(`../assets/Strain.jpg`)}  />
            </View> 

                         
          <View  style={{width:"100%",borderWidth:1, borderStyle: 'solid',borderColor:"black",borderRadius:5 ,marginTop:20}}>
                    <View style={{width:"100%",backgroundColor:"#7E0303", padding:12}}>
                        <Text style={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}>Signs and Symptoms </Text>
                        </View>
                        
                
                    <View style={{gap:10,padding:10}}>
                        <MyText>- Pain</MyText>
                        <MyText>- Significant bruising and swelling </MyText>
                        <MyText>- Significant deformity </MyText>
                        <MyText>- Inability to use affected body part normally </MyText>
                        <MyText>- Bone fragments sticking out of a wound</MyText>
                        <MyText>- Grating sensation after bearing a bone pop or snap</MyText>
                        <MyText>- Cold numb and tingly sensations on the injured area</MyText>
                        <MyText>- When the cause of injury suggests that it may be severe</MyText>
                       
                    </View>
            </View >



            
            <View style={{marginTop:15,gap:8}}>
                <Text style={{fontSize:22,fontWeight:"bold"}}>First Aid Management </Text>
                
                <View style={{marginTop:10,gap:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- R - Rest</Text>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- I - Immobilize</Text>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- C - Cold</Text>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>- E - Elevate</Text>
                        
                                               
                </View>

          
             </View>



        </View>
    </ScrollView>
  )
}

export default Module9