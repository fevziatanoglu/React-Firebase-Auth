import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import handleUser from "./utils";
import { toast } from "react-toastify";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

// when auth change
onAuthStateChanged(auth, user => {
    // set user as user by using utils/handleUser 
    handleUser(user || false);
})

export const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then(response => console.log(response)).catch(error => console.log(error))
}

export const login = async (email, password) => {

    await signInWithEmailAndPassword(auth, email, password)
        .then(response => {
            {
                console.log(response);

                toast.success('Login success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    // pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    // theme: "light",
                });
            }
        })

        .catch(error => {
            console.log("login error!!");
            toast.error(`${error.code}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        )
}

export const logout = async () => {
    await signOut(auth).then(response => { console.log(response); console.log("test") }).catch(error => console.log(error));
}