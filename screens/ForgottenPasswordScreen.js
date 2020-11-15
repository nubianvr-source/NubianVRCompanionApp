import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import TextBox from '../components/TextBox';

const ForgottenPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState();

  const authContext = useContext(AuthContext);
  const checkTextBoxInput = () => {
    if (!email.trim()) {
      authContext.setEmailError('Please enter an e-mail address');
      authContext.setShowEmailWarning('warning');
      return;
    }

    authContext.forgotPassword(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Reset Password</Text>
        <Text style={styles.headerSubtitle}>
          Please provide your e-mail address. An email will be sent to you with
          a new password, you can change your password in your user settings
          after logging in.
        </Text>
      </View>
      <TextBox
        placeholder="hello@nubianvr.com"
        textInputHeaderDisplayText="Please enter your e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(userEmail) => {
          setEmail(userEmail);
          authContext.setEmailError('');
          authContext.setShowEmailWarning('');
        }}
        errorDisplayText={authContext.emailError}
        iconType={authContext.showEmailWarning}
      />

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => checkTextBoxInput()}>
        <Text style={styles.loginBtnText}>Reset Password</Text>
      </TouchableOpacity>

      <View style={styles.imgView}>
        <Image
          source={require('../assets/nubianLogo.png')}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

export default ForgottenPasswordScreen;

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

  accountInfoView: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 25,
    marginBottom: 25,
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
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

  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
});
