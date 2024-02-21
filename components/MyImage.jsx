
import { View ,StyleSheet} from 'react-native'
const MyImage = ({children}) => {
  return (
    <View style={styles.image}>{children}</View>
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
      
    }
})