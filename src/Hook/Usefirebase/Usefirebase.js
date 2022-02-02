import { useEffect, useState } from 'react';
import handleinitilaizeapp from '../../Pages/Login/Firebase/FirebaseInitialize';
import { getAuth, GoogleAuthProvider, updateProfile, signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
handleinitilaizeapp();

const Usefirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const RegisterUser = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name, 
                  }).then(() => {
                    
                  }).catch((error) => {
                    
                  });
                history.replace('/');

            })
            .catch((error) => {
                setAuthError(error.message);

            }).finally(() => setIsLoading(false));
    }
    // pass login
    const LoginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const locationurl = location.state.from || '/home';
                history.replace(locationurl);

                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    };
    //GoogleLogin
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                const locationurl = location.state.from || '/home';
                history.replace(locationurl);
                setAuthError('');

            }).catch((error) => {

                setAuthError(error.message);
            }).finally(() => setIsLoading(false));

    }

    //end
    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);
    //end
    const Logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));

    }

    return { user, isLoading, authError,signInWithGoogle, RegisterUser, Logout, LoginUser };

};

export default Usefirebase;