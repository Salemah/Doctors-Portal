import { useEffect, useState } from 'react';
import handleinitilaizeapp from '../../Pages/Login/Firebase/FirebaseInitialize';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
handleinitilaizeapp();

const Usefirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const RegisterUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message);

            }).finally(() => setIsLoading(false));
    }
    // pass login
    const LoginUser = (email, password,location,history) => {
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
    }

    //end
    // Authcahnge
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});

            }
            setIsLoading(false);
        });
        return () => unsubscribe;

    }, [])
    //end
    const Logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));

    }

    return { user, isLoading,authError, RegisterUser, Logout,LoginUser };

};

export default Usefirebase;