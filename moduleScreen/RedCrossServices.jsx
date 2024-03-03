import React from 'react'
import { View,ScrollView,Text } from 'react-native';
import MyText from '../components/MyText'
import MySubheader from '../components/MySubheader'

const RedCrossServices = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{gap:10}}>

            <View style={{gap:10}}>
                <MySubheader>BLOOD SERVICES</MySubheader>
                <MyText>The Blood Services is of the only two organizations authorized to collect, screen and issue blood in the country. With the state-of-the-art 
                    technology to ensure safe, adequate and quality blood supply nationwide. It promotes a system of free and voluntary  blood donation program 
                    that aims to save the live of patients in need  of blood and blood products. Advocacy programs are conducted regularly to encourage people to donate blood.
                </MyText>
            </View>


            <View style={{gap:10}}>
                <MySubheader>DISASTER MANAGEMENT SERVICES</MySubheader>
                <MyText>
                    Guided by the principle of "predict plan, prepare, cope ,mitigate, rehabilitate and ressurect", the Disaster 
                    Management Services conducts rescue, relief and rehabilation operations in times of disasters. as well as disaster 
                    preparedness programs and mitigate measures in vulnerable communities before disaster event hits. It has first-class 
                    rescue equipment which allow it to respond to emergencies fast and effeciently. 
                </MyText>
            </View>



            
            <View style={{gap:10}}>
                <MySubheader>SAFETY SERVICES</MySubheader>
                <MyText>
                    The safety services implements a nationwide education campaign to ensure the safety of the Filipino people. It conducts world class 
                    training in the First Aid, Basic Life Support-CPR, Swimming/Water Safety Accident Prevention, renders first aid, life guarding rescue and 
                    ambulance services.
                </MyText>
            </View>



            <View style={{gap:10}}>
                <MySubheader>HEALTH SERVICES</MySubheader>
                <MyText>
                    The volunteer nurses and staff of the Health Services provide health care and prevent illness in the community through projects like the Primary Health Care, Water and Sanitation, Dengue Prevention and Avian Flu Information Campaign.
                     It also provides basic nursing services to victims of disasters.
                </MyText>
            </View>




            <View style={{gap:10}}>
                <MySubheader>SOCIAL SERVICES</MySubheader>
                <MyText>
                    The social services fosters family and community welfare through a wide range of services including stress debriefing, tracing, communication facilitation, health and welfare reports and referrals to hospitals 
                    and welfare agencies. Among its targets population are disadvantaged women, elderly, physically disables persons, disaster victims and overseas migrant workers.
                </MyText>
            </View>
            


            
            <View style={{gap:10}}>
                <MySubheader>RED CROSS YOUTH</MySubheader>
                <MyText>
                   The Red Cross Youth incubates in children and youth the values of community health solodarity and services to humanity through immersion in civic work. It provides opportunities for 
                   charater building and leadership, as well as regular training on general health , first aid , drug abuse and HIV/AIDS prevention, and blood donor recruitment.
                </MyText>
            </View>
            



            <View style={{gap:10}}>
                <MySubheader>INTERNATIONAL HUMANITARIAN LAW (IHL)</MySubheader>
                <MyText>
                   The IHL office is mainly responsible for the promotion of the seven fundamental principles of the international Red Cross and Red Cresent Movement (Humanity,impartiality,neutrality, independence, voluntary service , unity and universality)
                    the basics of IHL, and the advocacy of domestic legislation and measures to implement provisions of the Geneva Convention.
                </MyText>
            </View>
            













            </View>

    </ScrollView>
  )
}

export default RedCrossServices