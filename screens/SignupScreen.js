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
import TextBox from '../components/TextBox';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const authContext = useContext(AuthContext);
  const [userNameError, setUserNameError] = useState(null);
  const [userNameErrorWarning, setUserNameErrorWarning] = useState(null);

  const checkTextBoxInput = () => {
    if (!displayName.trim()) {
      setUserNameError('Please Enter a username');
      setUserNameErrorWarning('warning');
      return;
    }
    if (!email.trim()) {
      authContext.setEmailError('Please enter an e-mail address');
      authContext.setShowEmailWarning('warning');
      return;
    }
    if (!password.trim()) {
      authContext.setPasswordError('Please enter a password');
      authContext.setShowPasswordWarning('warning');
      return;
    }
    authContext.register(email, password, displayName);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Fun and Games</Text>
        <Text style={styles.headerSubtitle}>
          Please provide your username and password to access your account on
          Nubian Mobile.
        </Text>
      </View>
      <TextBox
        placeholder="Andy"
        textInputHeaderDisplayText="Please enter your username"
        keyboardType="default"
        autoCapitalize="words"
        onChangeText={(userdisplayName) => {
          setDisplayName(userdisplayName);
          setUserNameError(null);
          setUserNameErrorWarning(null);
        }}
        errorDisplayText={userNameError}
        iconType={userNameErrorWarning}
      />

      <TextBox
        placeholder="hello@nubianvr.com"
        textInputHeaderDisplayText="Please enter your e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(userEmail) => {
          setEmail(userEmail);
          authContext.setEmailError(null);
          authContext.setShowEmailWarning(null);
        }}
        errorDisplayText={authContext.emailError}
        iconType={authContext.showEmailWarning}
      />
      <TextBox
        placeholder=""
        textInputHeaderDisplayText="Enter your Password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(userPassword) => {
          setPassword(userPassword);
          authContext.setPasswordError(null);
          authContext.setShowPasswordWarning(null);
        }}
        errorDisplayText={authContext.passwordError}
        iconType={authContext.showPasswordWarning}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => checkTextBoxInput()}>
        <Text style={styles.loginBtnText}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.accountInfoView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            authContext.clearErrors();
          }}>
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
    justifyContent: 'center',
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
