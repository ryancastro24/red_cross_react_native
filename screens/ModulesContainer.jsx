import React from 'react'
import { View,Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import Module1 from '../moduleScreen/Module1';
import Module2 from '../moduleScreen/Module2';
import Module3 from '../moduleScreen/Module3';
import Module4 from '../moduleScreen/Module4';
import Module5 from '../moduleScreen/Module5';
import Module6 from '../moduleScreen/Module6';
import Module7 from '../moduleScreen/Module7';
import Module8 from '../moduleScreen/Module8';
import Module9 from '../moduleScreen/Module9';
import Module10 from '../moduleScreen/Module10';
import Module11 from '../moduleScreen/Module11';
import Module12 from '../moduleScreen/Module12';
import Module13 from '../moduleScreen/Module13';
import RedCrossServices from '../moduleScreen/RedCrossServices';
import FundamentalPrinciples from '../moduleScreen/FundamentalPrinciples';
const ModulesContainer = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { data } = route.params || {};

    useEffect(() => {
        if (data && data.title) {
          // Use the name from the data as the title
          navigation.setOptions({
            title: data.title,
          });
        }
      }, [data]);
      const id = parseInt(data.id)
  return (
    <View style={{flex:1,padding:20,paddingBottom:10}}>
        {id === 1 && <Module1/>}
        {id === 2 && <Module2/>}
        {id === 3 && <Module3/>}
        {id === 4 && <Module4/>}
        {id === 5 && <Module5/>}
        {id === 6 && <Module6/>}
        {id === 7 && <Module7/>}
        {id === 8 && <Module8/>}
        {id === 9 && <Module9/>}
        {id === 10 && <Module10/>}
        {id === 11 && <Module11/>}
        {id === 12 && <Module12/>}
        {id === 13 && <Module13/>}
        {id === 14 && <RedCrossServices/>}
        {id === 15 && <FundamentalPrinciples/>}
     
    </View>
  )
}

export default ModulesContainer



