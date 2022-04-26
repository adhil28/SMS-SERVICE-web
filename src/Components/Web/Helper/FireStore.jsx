import React from 'react'
import { app } from '../../../Config/Config'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { mobileToken } from '../../../Config/Global';
const db = getFirestore(app);
export const getData = () => {
    return new Promise(async (resolve, reject) => {
        const docSnap = await getDoc(doc(db, "web", mobileToken));
        if (docSnap.exists()) {
            resolve(docSnap.data())
        } else {
            reject("No such document!");
        }
    })
}