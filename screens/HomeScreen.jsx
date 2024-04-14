import  { useState, useCallback, useEffect} from 'react'
import { View,Image, Text,StyleSheet,TouchableOpacity,Alert,FlatList,TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation ,useFocusEffect} from '@react-navigation/native';
import { moduleHeaderData } from '../libs/moduleHeaderData';
import { Searchbar,ActivityIndicator } from 'react-native-paper';


const HomeScreen = () => {


    const navigation = useNavigation();


    const [userData,setUserData] = useState('')
    const [searchData,setSearchData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [lastModuleAcess,setLastModuleAccess] = useState(null);
    const [click,setClick] = useState(false);//used as flag to trigger the useEffect




    //this will trigger if i click a specific  module 
    const sendData = (id,title) => {
      const data = {id:id,title:title}
      setClick(!click)//this will be used in the useEffect
      const dataToStore = JSON.stringify({ id: id, title: title });

      // Store the data in AsyncStorage
       AsyncStorage.setItem("lastModuleAccess", dataToStore);


      console.log("Data stored successfully");
      navigation.navigate('ModulesContainer', { data });
    };


    const lastModuleAccessModule = (id,title) => {

      const data = {id:id,title:title}
      navigation.navigate('ModulesContainer', { data });

    }



    
    const navigateProfile = () => {
      navigation.navigate('EditProfile', { userData });
    }



    


    async function getData() {
      try {
        const token = await AsyncStorage.getItem('token');
    
        const response = await fetch('https://red-cross-api-final.onrender.com/userdata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token: token })
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();

        console.log(data);
        setUserData(data.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
    



   

    const getLastModuleData = async () => {
        try {
            // Retrieve data from AsyncStorage
            const lastModuleData = await AsyncStorage.getItem("lastModuleAccess");
            
            // Parse the retrieved JSON string
            const finalLastModuleData = JSON.parse(lastModuleData);

           const moduleData = moduleHeaderData.find(val => val.id === finalLastModuleData.id);


            console.log(moduleData);
            // Set the parsed data in your state
            setLastModuleAccess(moduleData);

        } catch (error) {
            // Handle any errors that occur during the retrieval or parsing process
            console.error("Error getting last module data:", error);
        }
    };



   

    useEffect(() => {

        getLastModuleData();
    
     },[click]);





  useFocusEffect(
    useCallback(() => {
      getData();
     
    },[]),
  
  );


  if (loading) {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" animating={true} color="#FF0000" />
      </View>
    );
  }
  
  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

 



  const firstname = userData.name.split(' ');
  const finalModules = moduleHeaderData.filter(val => val.title.startsWith(searchData));
  

//every box or container of the modules
    const Item = ({title,topics,index,id,coverImage}) => (
     <TouchableOpacity onPress={() => sendData(id,title)} style={{...styles.item,...styles.shadowProp, marginLeft: index === 0 ? 0 : 20}}>      
          
      <View>
        <Image style={{width:"100%",height:150,borderRadius:10}} resizeMode='cover' source={ require(`../assets/first aid.jpg`) }/>
      </View>


        <Text style={styles.title}> {title}</Text>
      
      </TouchableOpacity>

    );

    

 
  return (  


    <View style={styles.body}>

          <View style={styles.userDetailsContainer}>


                <View style={{flexDirection:"row", justifyContent:"space-between"}}>

                  <Text  style={{fontSize:35,fontWeight:"700",}}> <Text style={{fontSize:35,fontWeight:"100",fontStyle:"italic"}}>Hello, </Text>{firstname[0]}</Text>
          
                  <TouchableOpacity onPress={() => navigateProfile()} style={styles.imageProfile}></TouchableOpacity>

                </View>


                <View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchData}
                    value={searchData}
                  />
                </View>




          </View> 



      <View style={styles.currentModuleContainer}>
        <Text style={{fontSize:20,fontWeight:"300"}} >Last Module Access</Text>

        <TouchableOpacity onPress={() => lastModuleAccessModule(lastModuleAcess?.id, lastModuleAcess?.title)} style={styles.currentReadModule}>

          <Text style={{fontSize:30,color:'white',fontWeight:"900"}}>{lastModuleAcess?.title}</Text>


              <View>
                    {lastModuleAcess?.topics.map(val => <Text style={{color:"white"}} key={val.id}>- {val.topicTitle}</Text>)}
              </View>
        </TouchableOpacity>
          
      </View>





        <View style={{flex:1,marginTop:10}}>

          <FlatList
           horizontal={true}
          showsVerticalScrollIndicator={false} 
           data={finalModules}
            renderItem={({item,index}) => <Item index={index} {...item} />}
            keyExtractor={item => item.id}
           />
     
     </View>
      

    </View>
  )
}

export default HomeScreen;




const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:"center",
      padding:15,

    },
    userDetailsContainer:{
      width: '100%', // Set width to full width of the screen
      height:200,
      borderRadius:6,
      padding:10,
      justifyContent:"space-evenly"
    }, 
    item: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding:10,
      width: 250,
      marginVertical: 10,
      
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    title: {
      fontSize:20,
      fontWeight:"bold",
      paddingHorizontal:10,
      marginTop:10,
    },

    topicsStyle:{
      paddingLeft:20
    },
    imageProfile:{
      width:45,
      height:45,
      borderRadius:100,
      backgroundColor:"#d9d9d9"
    },
    searchInput:{
      width:"100%",
      height:45,
      borderRadius:100,
      backgroundColor:"white",
      paddingHorizontal:10,
      fontSize:18
    },
    currentModuleContainer:{
      width:"100%",
      height:200,
      gap:10,
    
    },
    currentReadModule:{
      backgroundColor: '#FF2525',
      borderRadius: 8,
      padding:15,
      width:"100%",
      marginVertical: 10,
      height:150,
      gap:10
      
    }
   
  
})
