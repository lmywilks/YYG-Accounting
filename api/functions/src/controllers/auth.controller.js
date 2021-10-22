const { db, admin } = require('../config/db');

const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('firebase/auth');

// firebase.initializeApp({
//     apiKey: "AIzaSyBpTfLFYrtrJ7nYh5bOIPpwrmK4Zc0MvWU",
//     authDomain: "yyg-accounting.firebaseapp.com",
//     projectId: "yyg-accounting",
//     storageBucket: "yyg-accounting.appspot.com",
//     messagingSenderId: "19842034040",
//     appId: "1:19842034040:web:9d5b618f3edcc5cf5ac08d"
// });

const Auth = {
    Login: async (req, res) => {
        try {
            const login = { ... req.body };

            if (!login.email || !login.password) 
                return res.status(400).json({ error: 'errors.login.missing' });

            const auth = getAuth();
                                   
            const userCredential = await signInWithEmailAndPassword(auth, login.email, login.password);

            if (!userCredential || !userCredential.user) {
                return res.status(401).json({ error: 'errors.login.wrongcredential' });
            }            

            const token = await userCredential.user.getIdToken();

            return res.json({ token });
        } catch (err) {
            return res.status(401).json({ error: 'errors.login.wrongcredential' });
        }
    },

    Register: async (req, res) => {
        try {
            const user = { ... req.body };

            if (!user.email || !user.password || !user.username) 
                return res.status(400).json({ error: 'errors.signup.missing' });

            const existUser = await db.collection('users').where('email', '==', user.email).get();

            console.log(existUser.docs);

            const data = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);

            user.userId = data.user.uid;
            user.createdAt = new Date().toISOString();
            user.updatedAt = new Date().toISOString();

            await db.collection('users').add(user);

            const token = await data.user.getIdToken();

            user.token = token;

            return res.json({ user });
        } catch (err) {
            return res.status(500).json({ error: 'errors.login.wrongcredential' });
        }
    }
};

module.exports = Auth;