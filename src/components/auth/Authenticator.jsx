
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { firebaseConfig } from "../../config";

import { useAuthState } from 'react-firebase-hooks/auth';

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signInWithGoogle() {
    return () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
}

function signInWithFacebook() {
    return () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider);
    }
}

function SignOut() {
    return () => auth.signOut()
}

function IsUserAuthentified() {
    const authState = useAuthState(auth)
    return authState
}

export { IsUserAuthentified, signInWithFacebook, signInWithGoogle, SignOut }