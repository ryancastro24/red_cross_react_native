
import { View ,StyleSheet,Image} from 'react-native'
const MyImage = ({imageSource}) => {
  return (
    <View  style={styles.image}>
      <Image 
      style={styles.imageContent}
      source={imageSource}
      resizeMode='cover'
      />
    
    </View>
  )
}

export default MyImage


const styles = StyleSheet.create({
    
    image:{
       marginTop:8,
       width:"100%",
       height:200,
       borderRadius:5,
       backgroundColor:"#d9d9d9"
      
    },
    imageContent:{
      width:"100%",
      height:200,
      borderRadius:5
     
   }
})