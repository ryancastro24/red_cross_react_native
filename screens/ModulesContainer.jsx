import React from 'react'
import { View,Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import Module1 from '../moduleScreen/Module1';
import Module2 from '../moduleScreen/Module2';
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
     
    </View>
  )
}

export default ModulesContainer



