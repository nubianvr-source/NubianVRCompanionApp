import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import LoaderComp from '../components/LoaderComponent';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [visible, setVisible] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          setVisible(true);
          auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              setVisible(false);
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === 'auth/wrong-password') {
                setVisible(false);
                alert('Wrong password.');
              } else {
                setVisible(false);
                alert(errorMessage);
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
                });
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode == 'auth/weak-password') {
                setVisible(false);
                alert('The password is too weak.');
              } else {
                setVisible(false);
                alert(errorMessage);
              }
              console.log(error);
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
      <LoaderComp visible={visible} />
    </AuthContext.Provider>
  );
};
