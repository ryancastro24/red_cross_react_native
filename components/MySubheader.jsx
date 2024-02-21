
import { Text ,StyleSheet} from 'react-native'
const MySubheader = ({children}) => {
  return (
    <Text style={styles.subheader}>{children}</Text>
  )
}

export default MySubheader


const styles = StyleSheet.create({
    
    subheader:{
        fontSize:25,
        fontWeight:"bold"
      
    }
})