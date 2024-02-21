
import { Text ,StyleSheet} from 'react-native'
const MyText = ({children}) => {
  return (
    <Text style={styles.p}>{children}</Text>
  )
}

export default MyText


const styles = StyleSheet.create({
    
    p:{
        fontSize:18,
        lineHeight:25,
        textAlign:"justify"
    }
})