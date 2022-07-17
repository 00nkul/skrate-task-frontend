import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInAnonymously, signInWithPopup } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDKvI_J-x3I8DFHDyAmwFpyedGOQ_MqB2A",
    authDomain: "authforskrate.firebaseapp.com",
    projectId: "authforskrate",
    storageBucket: "authforskrate.appspot.com",
    messagingSenderId: "81712033704",
    appId: "1:81712033704:web:520d6fea5f3b09ecda779d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    // signInAnonymously(auth );
    signInWithPopup(auth, provider)
        .then((res) => {
            const name = res.user.displayName;
            const mail = res.user.email;
            const photoUri = res.user.photoURL;
            const uuid = res.user.uid;
            if (name && mail && photoUri && uuid) {
                localStorage.setItem("uuid", uuid);
                localStorage.setItem("name", name);
                localStorage.setItem("mail", mail);
                localStorage.setItem("photoUri", photoUri);
            }
        })
        .catch((err) => {
            console.error(err);
        })
}