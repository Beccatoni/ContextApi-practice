import { View, Text, Image,  TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../global/contextApi'

const Profile = ({navigation}) => {
  const {logout} = useContext(AppContext)


  const handlePre = () => {
    if(logout()){
      navigation.navigate('Register')
    }

  }
  return (
    <SafeAreaView>
      <View style={{justifyContent:'center', gap:20, alignItems:'center'}}>
     
        <Image source={require('../assets/marga.jpeg')} style={{borderRadius:80, height:100, width:100}}/>
        <Text style={{fontSize:19}}>Becca Toni</Text> 
        <View style={{ justifyContent: 'center', gap:20, alignItems: 'center',backgroundColor:'#7bc5ae', height:300, width:400, borderRadius:10 }}>
          <Text>My Account</Text>
          <Text>Settings</Text>
          <Text>Notifications</Text>
        </View>  
        <TouchableOpacity onPress={handlePre} style={{ backgroundColor: '#028c6a', borderRadius: 10, height: 40, width: 100,  }}>
          <Text style={{ textAlign: 'center', padding: 10, fontSize:16, fontWeight:'bold' }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default Profile