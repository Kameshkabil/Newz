import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
//import { createErrorHandler } from 'expo/build/errors/ExpoErrorManager';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri:"https://www.newshub.co.uk/wp-content/uploads/2021/02/newz-e1612794934889.jpg"}}
        style={styles.headerImg}/>
      </View>
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:60
  },
  header:{
    width:'90%',
    height:80,
    alignSelf:'center',
  },
 headerImg : {
  alignSelf:'center',
  width:100,
  height:40,
  marginTop:8,
 }
});
