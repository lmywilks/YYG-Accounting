const functions = require("firebase-functions");
const APP = require('./src/app');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

APP.listen('3000', () => {
    console.log('run');
});

exports.api = functions.region('us-east4').https.onRequest(APP);