import React from 'react'
import { View,ScrollView,Text } from 'react-native'
import MyText from '../components/MyText'
import MySubheader from '../components/MySubheader'
const FundamentalPrinciples = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:15}}>


        <View style={{gap:10}}>
            <MySubheader>HUMANITY</MySubheader>
            <Text style={{fontSize:18,fontStyle:"italic"}}>"We serve people but not systems"</Text>
            <MyText>The International Red Cross and Red Cresent Movement, born of a desire to bring assistance without 
                discrimination to the wounded on the battlefield-endeavors in its national and international capacity 
                to prevent and alleviate human suffering whenever it may be found. Its purpose is to protect life and health and to ensure 
                respect for the human being.
            </MyText>
        </View>


        
        <View style={{gap:10}}>
            <MySubheader>IMPARTIALITY</MySubheader>
            <Text style={{fontSize:18,fontStyle:"italic"}}>"We serve for the victims and for the aggressor alike"</Text>
            <MyText>
                In order to continue to enjoy to confidence of all, the Red Cross may not take sides in hotlines or engage at any time in 
                controversies of a political, racial , religous or ideological in nature.
            </MyText>
        </View>



        
        
        <View style={{gap:10}}>
            <MySubheader>NEUTRALITY</MySubheader>
            <Text style={{fontSize:18,fontStyle:"italic"}}>"We take initiative but never sides"</Text>
            <MyText>
                In order to continue to enjoy the confidence of all, Red Cross may not take sides in hostilities to engage at anytime in controversies of a political, racial, religous or ideological 
                in nature.
            </MyText>
        </View>



         
        <View style={{gap:10}}>
            <MySubheader>INDEPENDENCE</MySubheader>
            <Text style={{fontSize:18,fontStyle:"italic"}}>"We bow to needs but not to kings"</Text>
            <MyText>
               The movement is independent. The national societies, while auxiliaries thr humanitarium services for their Government and subject to the laws of their respective
               countries , must always maintain their anatomy so that they may be able at all times to act in accordance with the Principles of the Movement.
            </MyText>
        </View>



        
        <View style={{gap:10}}>
            <MySubheader>VOLUNTARY SERVICE</MySubheader>
            <Text style={{fontSize:18,fontStyle:"italic"}}>"We work around the clock  but never for personal gain"</Text>
            <MyText>
               There can only be one Red Cross Society in one community. It must be open to all. It must carry on the humanitarium work throughout its territory
            </MyText>
        </View>



          
        <View style={{gap:10}}>
            <MySubheader>UNITY</MySubheader>
            <Text style={{fontSize:18,fontStyle:"italic"}}>"We have many talents, but single idea"</Text>
            <MyText>
               There can only be one Red Cross Society in one community. It must be open to all. It must carry on the humanitarium work throughout its territory
            </MyText>
        </View>


            
        <View style={{gap:10}}>
            <MySubheader>UNIVERSALITY</MySubheader>
            <Text style={{fontSize:18,fontStyle:"italic"}}>"We respect nations, but our work knows no bounds"</Text>
            <MyText>
               The International Red Cross and Red Cresent Movement, in which all societies have equal status and share 
               equal responsibilities and duties in helping each other in worldwide organization.
            </MyText>
        </View>















        </View>
    </ScrollView>
  )
}

export default FundamentalPrinciples