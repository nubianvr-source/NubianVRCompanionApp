import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
              } else {
                alert(errorMessage);
              }
              console.log(error);
            });
        },
        register: async (email, password, displayName) => {
          auth()
            .createUserWithEmailAndPassword(email, password)
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
                alert('The password is too weak.');
              } else {
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
    </AuthContext.Provider>
  );
};
