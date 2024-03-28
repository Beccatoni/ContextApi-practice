// Login.js
import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AppContext } from '../global/contextApi';

const Login = ({ navigation }) => {

  const { SignIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false)

const passShow = () =>{
      setShowPass(!showPass)
}

const ValidEmail = (email) => {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return regEx.test(email);
};

const ValidateForm = () =>{
  let valid = true;


  if (email.trim() === '') {
    setEmailError('Enter your email address please!!!')
    valid = false;
  }else if (!ValidEmail(email)){
    setEmailError('Invalid email address!')
    valid = false;
  }else{
    setEmailError('')
  }


  // Password
  if (password.trim() === '') {
    setPasswordError('Enter your password please!!!')
    valid = false;
  } else{
    setPasswordError('');
    valid = true;
  }

 return valid;
}


  const handlePress = async () => {
    if (ValidateForm()){
    
      try {
    setLoading(true);
    const user = await SignIn(email, password);
    setLoading(false);
        
      } catch (error) {
        console.log(error);
      }
    
  }
}

  return (
    <SafeAreaView style={{ flex:1, justifyContent:'center', alignItems:'center', }}>
      <View style={{ justifyContent: 'center', gap:20, alignItems: 'center',backgroundColor:'#7bc5ae', height:500, width:400, borderRadius:10 }}>
        <Text style={{ textAlign: 'center', padding: 10, fontSize: 20, fontWeight: 'bold' }}>Login Into your account</Text>
        <TextInput  activeOutlineColor={'#028c6a'}  right={<TextInput.Icon icon={'mail'} color={'#028c6a'} />} label={'Email'} mode='outlined' style={{ height: 50, width: 300, borderRadius: 8 }} onChangeText={setEmail} />
        <TextInput secureTextEntry={!showPass} activeOutlineColor={'#028c6a'} label={'Password'} mode='outlined'style={{ height: 50, width: 300, borderRadius: 8 }} onChangeText={setPassword} 
        right={<TextInput.Icon icon={showPass ? 'lock-off': 'lock' } onPress={passShow} color={'#028c6a'}
         />} />
        <TouchableOpacity onPress={handlePress} style={{ backgroundColor: '#028c6a', borderRadius: 10, height: 40, width: 100,  }}>
          <Text style={{ textAlign: 'center', padding: 10, fontSize:16, fontWeight:'bold' }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
