import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayName, setDisplayName] = useState();

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Fun and Games</Text>
        <Text style={styles.headerSubtitle}>
          Please provide your username and password to access your account on
          Nubian Mobile.
        </Text>
      </View>
      <View style={styles.textInputView}>
        <Text style={styles.textInputHeaderText}>
          Please enter your username
        </Text>
        <TextInput
          placeholder="Andy"
          placeholderTextColor="#ffffff8c"
          keyboardType="default"
          style={[
            styles.textInput,
            {
              color: '#ffffff',
            },
          ]}
          autoCapitalize="words"
          onChangeText={(userdisplayName) => setDisplayName(userdisplayName)}
        />
      </View>
      <View style={styles.textInputView}>
        <Text style={styles.textInputHeaderText}>Please enter your e-mail</Text>
        <TextInput
          placeholder="hello@nubianvr.com"
          placeholderTextColor="#ffffff8c"
          keyboardType="email-address"
          style={[
            styles.textInput,
            {
              color: '#ffffff',
            },
          ]}
          autoCapitalize="none"
          onChangeText={(userEmail) => setEmail(userEmail)}
        />
      </View>
      <View style={styles.textInputView}>
        <Text style={styles.textInputHeaderText}>Enter your Password</Text>
        <TextInput
          placeholder=""
          placeholderTextColor="#ffffff8c"
          style={[
            styles.textInput,
            {
              color: '#ffffff',
            },
          ]}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => register(email, password, displayName)}>
        <Text style={styles.loginBtnText}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.accountInfoView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.accountInfoNormalText}>
            Already have an account?
            <Text style={styles.accountInfoHighlightedText}> Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgView}>
        <Image
          source={require('../assets/nubianLogo.png')}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  logo: {
    height: 45,
    width: 30,
    resizeMode: 'stretch',
  },
  headerTextView: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 25,
  },
  textInputView: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 25,
    marginBottom: 5,
  },
  accountInfoView: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 25,
    marginBottom: 25,
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  accountInfoNormalText: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
  accountInfoHighlightedText: {
    fontSize: 12,
    color: '#41B7E9',
    fontFamily: 'Rubik-Medium',
    textAlign: 'center',
  },
  loginBtn: {
    marginRight: 35,
    marginLeft: 35,
    marginTop: 45,
    height: 44,
    backgroundColor: '#41B7E9',
    borderRadius: 2,
  },
  loginBtnText: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
    textAlign: 'center',
    marginTop: 14,
  },
  headerText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
    textAlign: 'center',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#ffffff8c',
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
  textInputHeaderText: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'Rubik-Regular',
    textAlign: 'left',
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 1 : 5,
    backgroundColor: '#C2C9C91A',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
