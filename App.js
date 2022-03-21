import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>110719025 數位四 <Text style={styles.Text2}>林耕祺</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Text:{
    color:'red',
    fontSize:25,
  },
  Text2:{
    color:'blue',
    fontSize:35,
  },
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
