import '../../../Global/Config'
import { app } from '../../../Global/Config'
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import Axios from 'axios'
const Legacy_SERVER_KEY = "AAAAJ1kq0HA:APA91bGEZA_Sh1Rrix4sNPVyG7JKv2TLtlHTPa45cuEcedoxABfRUSOoDYr0e5Pytz6d6UtEl_D8pSNUw7QD_Ubn1ire-gnFklpWri-G9cortMWg40NQhIdwcPVSHsHLZbK7xNjKZuFn";

const messaging = getMessaging(app)

export const getFCMToken = async () => {
    return await getToken(messaging, { vapidKey: 'BG_8LclxTNORx6wuGwdB3Vx8KMpRDxjEh9htcCkRxjCVi2Ljw7eswX1aALuAtgj30uQcErKA-E7yO0vpzSr_JTo' })
}

export const onMessageRecived = () => {

    return new Promise((resolve, reject) => {
        onMessage(messaging, (payload) => {
            resolve(payload)
        })
    })

}
export const sendMessage = (data, token) => {
    return new Promise((resolve, reject) => {
        {

            Axios
                .post(
                    "https://fcm.googleapis.com/fcm/send",
                    {
                        to: token,
                        data
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization:
                                "key=" + Legacy_SERVER_KEY
                        }
                    }
                )
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        }
    })
}
