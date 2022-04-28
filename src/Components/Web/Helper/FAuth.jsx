import { app } from '../../../Global/Config'
import { getAuth, signInAnonymously } from "firebase/auth";

const auth = getAuth(app);
export const signIn = () => {
    return signInAnonymously(auth)
}
