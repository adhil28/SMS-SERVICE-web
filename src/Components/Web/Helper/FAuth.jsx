import { app } from '../../../Config/Config'
import { getAuth, signInAnonymously } from "firebase/auth";

const auth = getAuth(app);
export const signIn = () => {
    return signInAnonymously(auth)
}
