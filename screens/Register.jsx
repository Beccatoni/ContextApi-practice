// SignUp.js
import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AppContext } from '../global/contextApi';

const SignUp = ({ navigation }) => {
  const { SignUp } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    const user = await SignUp(email, password);
    setLoading(false);
    if (user) {
      navigation.navigate('Login');
    }
  };

  const image = {uri:'../assets/flower.jpeg'}

  return (
    <SafeAreaView style={{ flex:1, justifyContent:'center', alignItems:'center', }}>
      <ImageBackground source={image} resizeMode='cover' style={{ justifyContent: 'center', gap:20, alignItems: 'center',backgroundColor:'#7bc5ae', height:500, width:400, borderRadius:10 }}>
        <Text style={{ textAlign: 'center', padding: 10, fontSize: 20, fontWeight: 'bold' }}>Create an Account</Text>
        <TextInput  activeOutlineColor={'#028c6a'}  right={<TextInput.Icon icon={'mail'} color={'#028c6a'} />} label={'Email'} mode='outlined' style={{ height: 50, width: 300, borderRadius: 8 }} onChangeText={setEmail} />
        <TextInput secureTextEntry activeOutlineColor={'#028c6a'} label={'Password'} mode='outlined'style={{ height: 50, width: 300, borderRadius: 8 }} onChangeText={setPassword} 
        right={<TextInput.Icon icon={'lock'} color={'#028c6a'} />} />

        <TouchableOpacity onPress={handleSignUp} style={{ backgroundColor: '#028c6a', borderRadius: 10, height: 40, width: 100,  }}>
          <Text style={{ textAlign: 'center', padding: 10 }}>Sign Up</Text>
        </TouchableOpacity>
        <Text>Already have an account?  <Text onPress={() => {navigation.navigate('Login')}} style={{color:'#028c6a'}}>Sign In</Text></Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;
