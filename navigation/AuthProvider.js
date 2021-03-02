import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import LoaderComp from '../components/LoaderComponent';
import {CommonActions} from '@react-navigation/native';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [visible, setVisible] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [showEmailWarning, setShowEmailWarning] = useState(null);
  const [showPasswordWarning, setShowPasswordWarning] = useState(null);

  const storeRunningAppFirstTimeData = async (value) => {
    try {
      await AsyncStorage.setItem('@firstTime', value);
      console.log('Value Stored: ', value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        showEmailWarning,
        setShowEmailWarning,
        showPasswordWarning,
        setShowPasswordWarning,
        clearErrors: () => {
          setEmailError(null);
          setPasswordError(null);
          setShowEmailWarning(null);
          setShowPasswordWarning(null);
        },
        login: async (email, password) => {
          setVisible(true);
          auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              //Remember to remove the next line after tests are complete.
              storeRunningAppFirstTimeData('yes');
              setVisible(false);

              //Below is the code for saving the userToken in the firebase realtime database
              /*database()
                .ref('users/' + auth().currentUser.uid + '/userToken')
                .set({
                  userToken: userToken,
                })
                .catch(function (error) {
                  console.log(error);
                  Alert.alert('Something went wrong, Please try again.');
                });*/
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === 'auth/wrong-password') {
                setVisible(false);
                //alert('Wrong password.');
                setPasswordError('Incorrect Password');
                setShowPasswordWarning('warning');
              } else if (errorCode === 'auth/too-many-requests') {
                Alert.alert(
                  'Suspicious Activitiy Detected',
                  'We have blocked all requests from this device due to unusual activity. Try again later. Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.',
                  [
                    {
                      text: 'OK',
                    },
                  ],
                );
              } else {
                setVisible(false);
                //alert(errorMessage);
                setEmailError('Email does not exist');
                setShowEmailWarning('warning');
              }
              console.log(error);
            });
        },
        register: async (email, password, displayName) => {
          setVisible(true);

          auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              setVisible(false);
              //Run the store running App Data for the first time Function which stores preferences for later.
              storeRunningAppFirstTimeData('yes');
            })
            .then(() => {
              auth().currentUser.updateProfile({displayName: displayName});
            })
            .catch()
            .then(() => {
              database()
                .ref('users/' + auth().currentUser.uid + '/userProfile')
                .set({
                  email: email,
                  displayName: displayName,
                })

                .catch(function (error) {
                  console.log(error);
                  Alert.alert('Something went wrong, Please try again.');
                });
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode == 'auth/weak-password') {
                setVisible(false);
                //alert('The password is too weak.');
                setPasswordError('The password is too weak');
                setShowPasswordWarning('warning');
              } else {
                setVisible(false);
                //alert(errorMessage);
                setEmailError('Please enter a valid email');
                setShowEmailWarning('warning');
              }
              console.log(error);
            });
        },
        forgotPassword: async (email) => {
          setVisible(true);
          auth()
            .sendPasswordResetEmail(email)
            .then(() => {
              setVisible(false);
              //navigation.goBack();
              Alert.alert(
                'Succes',
                'A password reset link has been sent to your e-mail',
                [
                  {
                    text: 'OK',
                  },
                ],
              );
            })
            .catch(function (error) {
              // Handle Errors here.
              setVisible(false);
              setEmailError('E-mail does not exist');
              setShowEmailWarning('warning');
              console.log(error);
              /**/
            });
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
      <LoaderComp visible={visible} overlayColor="rgba(0,0,0,0.75)" />
    </AuthContext.Provider>
  );
};
