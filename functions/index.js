//import functions from 'firebase-functions';
//import admin from 'firebase-admin';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.firestore
  .document('THREADS/{threadID}/MESSAGES/{messagesID}')
  .onCreate(async (event) => {
    // gets standard JavaScript object from the new write
    const writeData = event.data;
    // access data necessary for push notification
    const sender = writeData.uid;
    const senderName = writeData.name;
    const recipient = writeData.recipient;
    const message = writeData;
    // the payload is what will be delivered to the device(s)
    let payload = {
      notification: {
        title: 'from' + senderName,
        //body:
        //sound:
        //badge:
      },
    };
    // either store the recepient tokens in the document write
    const tokens = writeData.tokens;

    // or collect them by accessing your database

    var pushToken = [];
    var userProfile = [];

    admin
      .database()
      .ref('users/')
      .once('value', (snapshot) => {
        let userProfileData = snapshot.val();
        let userProfileItems = Object.keys(userProfileData).map((key) => {
          return userProfileData[key];
        });
        userProfileItems.map((user) => {
          return userProfile.push(user.id);
        });
      });

    let promises = [];
    for (let i = 0; i < userProfile.length; i++) {
      let userId = userProfile[i];
      let promise = admin
        .database()
        .ref(`users/${userId}/userToken/userToken/token`)
        .once('value', (tokenSnapshot) => {
          let userData = tokenSnapshot.val();
          let userItem = Object.keys(userData).map((key) => {
            return userData[key];
          });
          userItem.map((item) => pushToken.push(item));
          return true;
        });
      promise.push(promise);
    }
    await Promise.all(promises);
    return await admin.messaging().sendToDevice(pushToken, payload);

    /*
    return admin
      .database()
      .ref('users')
      .get()
      .then((doc) => {
        pushToken = doc.val().token;
      });
      */
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
