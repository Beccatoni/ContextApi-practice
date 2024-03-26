import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ContextApi, { AppContext } from './global/contextApi'
import { StackNavigation } from './Navigation/StackNav';


export default function App() {

  

  return (
<ContextApi>
    <NavigationContainer>
        <StackNavigation/>
    </NavigationContainer>
  </ContextApi>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
