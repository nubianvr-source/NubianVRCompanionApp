//import functions from 'firebase-functions';
//import admin from 'firebase-admin';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.firestore
  .document('THREADS/{threadID}/MESSAGES/{messagesID}')
  .onCreate(async (event) => {
    // gets standard JavaScript object from the new write
    const writeData = event.data();
    const testValue = JSON.stringify(writeData.text);
    console.log(testValue);
    // access data necessary for push notification
    const sender = writeData.uid;
    const senderName = writeData.username;
    const recipient = writeData.recipient;
    const message = writeData.text;
    // the payload is what will be delivered to the device(s)
    let payload = {
      notification: {
        title: 'from ' + senderName,
        body: message,
        //sound:
        //badge:
      },
    };
    // either store the recepient tokens in the document write
    const tokens = writeData.tokens;

    // or collect them by accessing your database

    var pushToken = [];
    return admin
      .firestore()
      .collection('USERS')
      .doc('userTokens')
      .get()
      .then((doc) => {
        pushToken = doc.data().tokens;
        // sendToDevice can also accept an array of push tokens
        return admin.messaging().sendToDevice(pushToken, payload);
      });
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
